/* функция принимает массив объектоов (commonData) из селектора
    возвраащет массив массивов для фораирования книги excel "Основная Телеграмма"
*/
import { calculateMagnitudeN } from "../../../common/calculateMagnitudeN/calculateMagnitudeN";

export function createMainTelegramAoA(data) {
  let dataToWrite = [];                                   //массив массивов для конвертации его в xslx и записи в выходную книгу

  

  dataToWrite.push([
    "Дистанция пути", "План, Км", "Проверено, Км", " +/-", "В том числе проверено с видеоконтролем",
    "отл", "хор", "уд", "неуд", "Величина Nуч.", "Всего", "уклон", "ускорение", "отвод по", "К-100",
    "К-60", "Ш-10", "сочетание", "ПРЖ", "Видеоконтроль с ограничением скорости", "отв. ур.(пси)",
    "2 ст.", "3 ст.", "4 ст.", "Проверка по степеням", "Суж", "Уш", "Уров", "П", "Пр", "Р",
    "более 6 (3) III ст. по У, П, Пр", "Закрытие движения, шт.", "V-15 км/ч, шт.", "V-25 км/ч, шт.",
    "V-40 км/ч, шт.", "V -/-/60 (прж), км/ч, шт.", "V-60 км/ч, шт.", "V- более 60 км/ч, шт."
  ]);

  data.forEach((item) => {
    const arr = [];                   // этот массив используется для пуша в него всех данных по одной неисправности, чтобы потом получить массив массивов всех неисправности и преобразовать его в лист excel

    const kilometersTotalCount = item.otlKm + item.xorKm + item.UdKm + item.neUdKm;
    const magnitudeN = calculateMagnitudeN(item.otlKm, item.xorKm, item.UdKm, item.neUdKm);

    arr.push(
      `ПЧ-${item.pch}`, kilometersTotalCount, kilometersTotalCount, "", kilometersTotalCount, item.otlKm,
      item.xorKm, item.UdKm, item.neUdKm, magnitudeN, "", "", "", "", "", "",
      "", "", "", "", "", item.secondDegreesCount, item.thirdDegreesCount, 
      item.fourthDegreesCount, "", item.narrowingTotalCount, item.wideningTotalCount,
      item.levelTotalCount, item.reconsiderTotalCount, item.drawdownTotalCount, item.planAngleTotalCount
    );   // массив одна неисправность

    dataToWrite.push(arr);        // запушим массив с одной неисправностью в массив со всеми неисправностями. Будем пошить каждую неисправность
  });

  return dataToWrite;
}