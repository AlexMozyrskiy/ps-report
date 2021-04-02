/* функция принимает массив объектов 3 и 4 степеней (тип как в стейте)
    возвращает массив массивов для формирования книги 3 и 4 степеней
*/
import { definePicketByMeter } from "../../../common/definePicketByMeter/definePicketByMeter";
import DB from "../../../../DB/DB";
import { sheetOtstConst } from "../../../../CONSTS/sheetsHeaderConsts";
import { getStationNameByKmAndDirection } from "../../../common/getStationNameByKmAndDirection/getStationNameByKmAndDirection";

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

    const stationName = getStationNameByKmAndDirection(DB, item[sheetOtstConst.DIRECTION_CODE], doubleKm);    // Станция или перегон определим из DB
    
    // --------------------- ЭТО ВРЕМЕННЫЙ КОСТЫЛЬ ДЛЯ ФИЛЬТРАЦИИ НЕИСПРАВНОСТЕЙ ТРЕБУЮЩИХ КОРРЕКТИРОВОВК --------------------------------------
    let isCorrectionNeed = "";
    if(item[sheetOtstConst.RETREAT_TITLE] === "П" && item[sheetOtstConst.AMPLITUDE] <= 15) isCorrectionNeed = "Требует корректировки согласно распоряжнию № 614"
    // --------------------- / ЭТО ВРЕМЕННЫЙ КОСТЫЛЬ ДЛЯ ФИЛЬТРАЦИИ НЕИСПРАВНОСТЕЙ ТРЕБУЮЩИХ КОРРЕКТИРОВОВК ------------------------------------


    arr.push(item[sheetOtstConst.WAGON_NUMBER], ++i, item[sheetOtstConst.RAILWAY_DISTANCE], stationName, item[sheetOtstConst.TRACK], item[sheetOtstConst.KILOMETER], pkMetr, setSpeed, limitingSpeed, "", item[sheetOtstConst.DEGREE], faultDecoding, isCorrectionNeed);   // массив одна неисправность
    dataToWrite.push(arr);        // запушим массив с одной неисправностью в массив со всеми неисправностями. Будем пошить каждую неисправность
  });

  return dataToWrite;
}