/* функция принимает массив объектов с информацией из стейта по книге которая выгружена из АРМ Видео
    возвращает массив массивов для формирования книги для Шаблона Видео
*/
import DB from "../../../../DB/DB";
import { getDirectionByCode } from "../../../common/getDirectionByCode/getDirectionByCode";
import { getStationNameByKmAndDirection } from "../../../common/getStationNameByKmAndDirection/getStationNameByKmAndDirection";
import { definePicketByMeter } from "../../../common/definePicketByMeter/definePicketByMeter";
import { getPchNumberByCodeAndKm } from "../../../common/getPchNumberByCodeAndKm/getPchNumberByCodeAndKm";
import { getRegionNumberByPchNumber } from "../../../common/getRegionNumberByPchNumber/getRegionNumberByPchNumber";



export function createTemplateVideoAoA(data) {
  let dataToWrite = [];                                   //массив массивов для конвертации его в xslx и записи в выходную книгу

  // Шапка таблицы
  dataToWrite.push([
    "Номер записи", "Дата проезда", "Дата расшифровки", "Направление", "Станция",
    "ПЧ", "Путь", "КМ", "ПК", "М", "Нить", "Замечание", "Накладка в стыке", "Уст", "Огр. скорости",
    "Величина (только цифра, без мм)", "Рег", "Класс пути", "Радиус кривой", "Подрельсовое основание дерево/бетон", "Наличие повтора ( количество раз поторилось)",
    "Величина при предыдущем проходе (в случае повтора)", "Дата предудущего прохода (в случае повтора)",
    "Код замечания", "перегон предыдущего повтора подвижки", "Тип пути (зв./ бп)"
  ]);

  data.forEach((item, i) => {
    const arr = [];                   // этот массив используется для пуша в него всех данных по одной неисправности, чтобы потом получить массив массивов всех неисправности и преобразовать его в лист excel

    // --------------- Направление ---------------------
    const directionCode = item["П-Н"].split(" - ")[1];      // разделим чтобы вычленить [1] элемент массива, это как раз код направление
    const direction = getDirectionByCode(+directionCode);
    // --------------- / Направление -------------------

    // --------------- Станция ---------------------
    const doubleKm = `${item["Км"]}.${item["М"]}`;                        // километр типа 132.123
    const stationName = getStationNameByKmAndDirection(DB, +directionCode, +doubleKm);
    // --------------- / Станция -------------------

    // --------------- Номер ПЧ ---------------------
    const pchNumber = getPchNumberByCodeAndKm(+directionCode, +doubleKm);
    // --------------- / Номер ПЧ -------------------

    // --------------- Путь ---------------------
    const trackNumber = item["П-Н"].split(" - ")[0];      // разделим чтобы вычленить [1] элемент массива, это как раз код направление
    // --------------- / Путь -------------------

    // --------------- Путь ---------------------
    let side;
    if (item["Сторона"]) {
      if(item["Сторона"].split(" ")[0] === "Левая" || item["Сторона"].split(" ")[0] === "Правая") {
        side = (item["Сторона"].split(" ")[0]);      // разделим чтобы вычленить [1] элемент массива, это как раз код направление
      } else {
        side = "Невозможно определить правая или левая нить, обратитесь к разработчику"
        console.error("Невозможно определить правая или левая нить в функции createTemplateVideoAoA")
      }
      
    } else {
      side = "обе";
    }
    // --------------- / Путь -------------------

    // ------------ Название неисправности ---------------
    let retreatTitle;
    if(item["Объект"] === "Стык. зазор") {      // если это стык
      if(side === "Правая") {
        retreatTitle = "зазор правый";        // назовем как хочет диспетчер
      } else if(side === "Левая") {
        retreatTitle = "зазор левый";
      } 
    } else {
      retreatTitle = item["Объект"];          // если не стык назовем как и в стейте
    }
    // ------------ / Название неисправности -------------

    // ---------------- Номер региона -------------------------
    const regionNumber = getRegionNumberByPchNumber(DB, pchNumber);
    // ---------------- / Номер региона -----------------------



    arr.push(
      ++i, "", "", direction, stationName, pchNumber, +trackNumber, item["Км"], definePicketByMeter(item["М"]), item["М"],
      side, retreatTitle, null, null, item["Огр.скорости (км/ч)"], item["Параметр"], regionNumber
    );   // массив одна неисправность

    dataToWrite.push(arr);        // запушим массив с одной неисправностью в массив со всеми неисправностями. Будем пошить каждую неисправность
  });

  return dataToWrite;
}