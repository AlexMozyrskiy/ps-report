/* функция принимает массив объектов 3 и 4 степеней (тип как в стейте)
    возвращает массив массивов для формирования книги 3 и 4 степеней
*/
import { definePicketByMeter } from "../../common/definePicketByMeter/definePicketByMeter";
import DB from "../../../DB/DB";

export function getThirdAndFourthDegreesArr(data) {
  let dataToWrite = [];                                   //массив массивов для конвертации его в xslx и записи в выходную книгу

  // Шапка таблицы
  dataToWrite.push(["ПС", "№", "ПЧ", "Перегон", "ПУТЬ", "KM", "ПК/м", "СКОРОСТЬ установленная", "СКОРОСТЬ* ограничения пасс/груз.", "Время выдачи ограничения", "Степень отст.", "ПРИЧИНА", "Наличие повтора", "УСТРАНЕНИЕ", "УСТРАНЕНИЕ ПРОВЕРИЛ"]);

  data.forEach((item, i) => {
    const arr = [];                   // этот массив используется для пуша в него всех данных по одной неисправности, чтобы потом получить массив массивов всех неисправности и преобразовать его в лист excel

    const pkMetr = definePicketByMeter(item["М"]) + "/" + item["М"];      // пикет и метр в формате "5/214"
    const setSpeed = item["СК_УСТ_ПАСС"] + "/" + item["СК_УСТ_ГРУЗ"];     // установленная скорость в формате "80/80"

    // ------- скорость ограничения ------
    let limitingSpeed;
    if (item["СК_ОГР_ПАСС"] === "-") {
      if (item["СК_ОГР_ГРУЗ"] === "-") {
        limitingSpeed = "";
      } else {
        limitingSpeed = item["СК_ОГР_ПАСС"] + "/" + item["СК_ОГР_ГРУЗ"]
      }
    } else {
      limitingSpeed = item["СК_ОГР_ПАСС"] + "/" + item["СК_ОГР_ГРУЗ"]
    }
    // ------- / скорость ограничения ----

    const faultDecoding = item["ОТСТУПЛЕНИЕ"] + " " + item["АМПЛИТУДА"] + "/" + item["ДЛИНА"];  // причина неисправности в формате "П 16/12"


    const doubleKm = Number(item["KM"] + "." + item["М"]);     // километр и метр приведем к виду 132.456

    // найдем в DB объект с информацией о станции или перегоне где мы находимся
    const stationObject = DB.stationBoundaries.find(el => {
      const parseDirectionCode = el.direction.match(/\d\d\d\d\d/);         // распарсим из свойства direction в DB код направления для сравнения его с текущим кодом в item

      return +doubleKm > +el.startCoordinate && +doubleKm <= +el.endCoordinate && +item["КОДНАПРВ"] === +parseDirectionCode[0];
    });
    let station = typeof stationObject === 'undefined' ? "" : stationObject.station;  // название станции или перегона, если не нашли в базе совпадений, не нашли нужную станцию будут "", если нашли будет станция из базы

    arr.push(item["ПС"], ++i, item["ПЧ"], station, item["ПУТЬ"], item["KM"], pkMetr, setSpeed, limitingSpeed, "", item["СТЕПЕНЬ"], faultDecoding);   // массив одна неисправность
    dataToWrite.push(arr);        // запушим массив с одной неисправностью в массив со всеми неисправностями. Будем пошить каждую неисправность
  });

  return dataToWrite;
}