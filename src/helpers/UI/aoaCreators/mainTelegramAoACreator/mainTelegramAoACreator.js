/* функция принимает массив объектоов (commonData) из селектора
    возвраащет массив массивов для фораирования книги excel "Основная Телеграмма"
*/

import DB from "../../../../DB/DB";

export function createMainTelegramAoA(data) {
  let dataToWrite = [];                                   //массив массивов для конвертации его в xslx и записи в выходную книгу

  // ----------------------------------------- Первая строка телеграммы -------------------------------------------------
  const uniqueRegionsForTelegram = data.uniqueRegions.join(", ");                  // преобразуем массив в строку для корректного отображения в телеграмме
  const uniquePchForTelegram = data.uniquePch.join(", ");                  // преобразуем массив в строку для корректного отображения в телеграмме
  const firstRow = `ДИ, НЗ-РБ; ДИЗТЕР-ДИТЕР-${uniqueRegionsForTelegram}; П; РЦДМ; ДИЦУСИ; ПЧ-${uniquePchForTelegram}.`;
  dataToWrite.push([
    firstRow
  ]);
  // ----------------------------------------- / Первая строка телеграммы -----------------------------------------------


  // ----------------------------------------- Вторая строка телеграммы -------------------------------------------------
  let tracksForSecondRow = [];              // пути для телеграммы
  if(data.uniqueTracks.length === 1) {      // если проверили только 1 путь
    if(data.uniqueTracks[0] === 1) tracksForSecondRow = ["Нечетный путь"];
    if(data.uniqueTracks[0] === 2) tracksForSecondRow = ["Четный путь"];
  } else {                                  // если проверили несколько путей
    tracksForSecondRow = ["Четный, нечетный пути"];
  }
  
  let pchForSecondRow = data.uniquePch.map(pch => {                                       // массив со строками вида: ["ПЧ-1 Шахтинская дистанция пути", "ПЧ-1 Шахтинская дистанция пути"]
    const pchObj = DB.distances.find(distanceObj => distanceObj.distanceNumber === pch);  // найдем в базе данных объект с информацией о интересубщим нас ПЧ
    const pchName = pchObj ? pchObj.distanceNameForTelegram: null;                        // Если нашли достанем из него название ПЧ для телеграммы
    return pchName;
  }).join(", ");      // преобразуем массив в строку для корректного отображения в телеграмме

  const dateForTelegram = data.date;
  const secondRow = `1. ${tracksForSecondRow}, ${pchForSecondRow}, ${dateForTelegram}.`;
  dataToWrite.push([
    secondRow
  ]);
  // ----------------------------------------- Вторая строка телеграммы -------------------------------------------------

  debugger
  

  // data.forEach((item) => {
  //   const arr = [];                   // этот массив используется для пуша в него всех данных по одной неисправности, чтобы потом получить массив массивов всех неисправности и преобразовать его в лист excel

  //   const kilometersTotalCount = item.otlKm + item.xorKm + item.UdKm + item.neUdKm;
  //   const magnitudeN = calculateMagnitudeN(item.otlKm, item.xorKm, item.UdKm, item.neUdKm);

  //   arr.push(
  //     `ПЧ-${item.pch}`, kilometersTotalCount, kilometersTotalCount, "", kilometersTotalCount, item.otlKm,
  //     item.xorKm, item.UdKm, item.neUdKm, magnitudeN, "", "", "", "", "", "",
  //     "", "", "", "", "", item.secondDegreesCount, item.thirdDegreesCount, 
  //     item.fourthDegreesCount, "", item.narrowingTotalCount, item.wideningTotalCount,
  //     item.levelTotalCount, item.reconsiderTotalCount, item.drawdownTotalCount, item.planAngleTotalCount
  //   );   // массив одна неисправность

  //   dataToWrite.push(arr);        // запушим массив с одной неисправностью в массив со всеми неисправностями. Будем пошить каждую неисправность
  // });

  return dataToWrite;
}