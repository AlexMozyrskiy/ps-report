/* функция принимает массив объектов 3 и 4 степеней (тип как в стейте)
    возвращает массив массивов для формирования книги 3 и 4 степеней
*/
import { definePicketByMeter } from "../../../common/definePicketByMeter/definePicketByMeter";
import DB from "../../../../DB/DB";
import { sheetOtstConst } from "../../../../CONSTS/sheetsHeaderConsts";

export function createThirdAndFourthDegreesAoA(data) {
  let dataToWrite = [];                                   //массив массивов для конвертации его в xslx и записи в выходную книгу

  // Шапка таблицы
  dataToWrite.push(["ПС", "№", "ПЧ", "Перегон", "ПУТЬ", "KM", "ПК/м", "СКОРОСТЬ установленная", "СКОРОСТЬ* ограничения пасс/груз.", "Время выдачи ограничения", "Степень отст.", "ПРИЧИНА", "Наличие повтора", "УСТРАНЕНИЕ", "УСТРАНЕНИЕ ПРОВЕРИЛ"]);

  data.forEach((item, i) => {
    const arr = [];                   // этот массив используется для пуша в него всех данных по одной неисправности, чтобы потом получить массив массивов всех неисправности и преобразовать его в лист excel

    const pkMetr = definePicketByMeter(item[sheetOtstConst.METER]) + "/" + item[sheetOtstConst.METER];      // пикет и метр в формате "5/214"
    const setSpeed = item[sheetOtstConst.PASSENGER_SPEED_ADVANCED] + "/" + item[sheetOtstConst.FREIGHT_SPEED_ADVANCED];     // установленная скорость в формате "80/80"

    // ------- скорость ограничения ------
    let limitingSpeed;
    if (item[sheetOtstConst.PASSENGER_SPEED_RESTRICTION] === "-") {
      if (item[sheetOtstConst.FREIGHT_SPEED_RESTRICTION] === "-") {
        limitingSpeed = "";
      } else {
        limitingSpeed = item[sheetOtstConst.PASSENGER_SPEED_RESTRICTION] + "/" + item[sheetOtstConst.FREIGHT_SPEED_RESTRICTION]
      }
    } else {
      limitingSpeed = item[sheetOtstConst.PASSENGER_SPEED_RESTRICTION] + "/" + item[sheetOtstConst.FREIGHT_SPEED_RESTRICTION]
    }
    // ------- / скорость ограничения ----

    const faultDecoding = item[sheetOtstConst.RETREAT_TITLE] + " " + item[sheetOtstConst.AMPLITUDE] + "/" + item[sheetOtstConst.LENGTH_OF_RETREAT];  // причина неисправности в формате "П 16/12"


    const doubleKm = Number(item[sheetOtstConst.KILOMETER] + "." + item[sheetOtstConst.METER]);     // километр и метр приведем к виду 132.456

    // найдем в DB объект с информацией о станции или перегоне где мы находимся
    const stationObject = DB.stationBoundaries.find(el => {
      const parseDirectionCode = el.direction.match(/\d\d\d\d\d/);         // распарсим из свойства direction в DB код направления для сравнения его с текущим кодом в item

      return +doubleKm > +el.startCoordinate && +doubleKm <= +el.endCoordinate && +item[sheetOtstConst.DIRECTION_CODE] === +parseDirectionCode[0];
    });
    let station = typeof stationObject === 'undefined' ? "" : stationObject.station;  // название станции или перегона, если не нашли в базе совпадений, не нашли нужную станцию будут "", если нашли будет станция из базы

    arr.push(item[sheetOtstConst.WAGON_NUMBER], ++i, item[sheetOtstConst.RAILWAY_DISTANCE], station, item[sheetOtstConst.TRACK], item[sheetOtstConst.KILOMETER], pkMetr, setSpeed, limitingSpeed, "", item[sheetOtstConst.DEGREE], faultDecoding);   // массив одна неисправность
    dataToWrite.push(arr);        // запушим массив с одной неисправностью в массив со всеми неисправностями. Будем пошить каждую неисправность
  });

  return dataToWrite;
}