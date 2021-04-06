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
  // ----------------------------------------- / Первая строка телеграммы -----------------------------------------------


  // ----------------------------------------- Вторая строка телеграммы -------------------------------------------------
  let tracksForSecondRow = [];              // пути для телеграммы
  if (data.uniqueTracks.length === 1) {      // если проверили только 1 путь
    if (data.uniqueTracks[0] === 1) tracksForSecondRow = ["Нечетный путь"];
    if (data.uniqueTracks[0] === 2) tracksForSecondRow = ["Четный путь"];
  } else {                                  // если проверили несколько путей
    tracksForSecondRow = ["Четный, нечетный пути"];
  }

  let pchForSecondRow = data.uniquePch.map(pch => {                                       // массив со строками вида: ["ПЧ-1 Шахтинская дистанция пути", "ПЧ-1 Шахтинская дистанция пути"]
    const pchObj = DB.distances.find(distanceObj => distanceObj.distanceNumber === pch);  // найдем в базе данных объект с информацией об интересубщем нас ПЧ
    const pchName = pchObj ? pchObj.distanceNameForTelegram : null;                        // Если нашли достанем из него название ПЧ для телеграммы
    return pchName;
  }).join(", ");      // преобразуем массив в строку для корректного отображения в телеграмме

  const dateForTelegram = data.date;
  const secondRow = `1. ${tracksForSecondRow}, ${pchForSecondRow}, ${dateForTelegram}.`;
  // ----------------------------------------- Вторая строка телеграммы -------------------------------------------------


  // ----------------------------------------- третья строка телеграммы -------------------------------------------------
  const dataForThirdRow = data.uniquePch.map(distance => {            // данные для третьей строки телеграммы массив объектов
    let distanceName;               // имя ПЧ например: "ПЧ-15"

    if (distance !== 0) {                                                                             // если данные уже загружены
      const distanceDataFromDB = DB.distances.find(item => item.distanceNumber === distance);         // найдем элемент с данными по ПЧ в Базе данных, чтобы вытянуть оттуда название ПЧ
      const splitedDistanseName = distanceDataFromDB.distanceNameForTelegram.split(" ");              // сплитнем полное название ПЧ чтобы вытащить из него первый элемент, например: "ПЧ-15"
      distanceName = splitedDistanseName[0];                                                    // имя ПЧ например: "ПЧ-15"
    }


    const distanceDataFromSelector = data.generalStatistics.find(item => item.pch === distance);    // найдем элемент с данными с посчитанной статистикой по ПЧ
    const sumKm = (distanceDataFromSelector.otlKm + distanceDataFromSelector.xorKm + distanceDataFromSelector.UdKm + distanceDataFromSelector.neUdKm).toFixed(3);

    return {distanceNumber: distance, distanceName, sumKm};             // вернем объект с данными для формирования массива объектов с данными по каждому ПЧ
  });

  const dataForThirdRowArr = dataForThirdRow.map(distance => `${distance.distanceName} - ${distance.sumKm} км`);                    //  данные для третьей строки телеграммы - простой массив, чтобы джйонуть его в строку
  const dataForThirdRowStr = dataForThirdRowArr.join("; ")
  const thirdRow = `2. ${data.typeOfCheck}: ${dataForThirdRowStr};`
  // ----------------------------------------- третья строка телеграммы -------------------------------------------------


  // ----------------------------------------- четвертая строка телеграммы -------------------------------------------------
  
  // ----------------------------------------- четвертая строка телеграммы -------------------------------------------------





  dataToWrite.push([secondRow], [firstRow], [thirdRow]);      // формируем телеграмму

  debugger

  return dataToWrite;
}