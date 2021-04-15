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
    const pchName = pchObj ? pchObj.distanceFullName : "";                        // Если нашли достанем из него название ПЧ для телеграммы
    return pchName;
  }).join(", ");      // преобразуем массив в строку для корректного отображения в телеграмме

  const dateForTelegram = data.date;
  const secondRow = `1. ${tracksForSecondRow}, ${pchForSecondRow}, ${dateForTelegram}.`;
  // ----------------------------------------- Вторая строка телеграммы -------------------------------------------------



  // ----------------------------------------- третья строка телеграммы -------------------------------------------------
  const dataForThirdRow = data.uniquePch.map(distance => {                    // данные для третьей строки телеграммы массив объектов
    const distancePartAndNumber = getDistancePartAndNumber(distance, DB);       // имя ПЧ например: "ПЧ-15"

    const currentDistanceData = data.generalStatistics.find(item => item.pch === distance);    // найдем элемент с данными с посчитанной статистикой по ПЧ
    const sumKm = (currentDistanceData.otlKm + currentDistanceData.xorKm + currentDistanceData.UdKm + currentDistanceData.neUdKm).toFixed(3);

    return { distanceNumber: distance, distancePartAndNumber, sumKm };        // вернем объект с данными для формирования массива объектов с данными по каждому ПЧ
  });

  const dataForThirdRowArr = dataForThirdRow.map(distance => `${distance.distancePartAndNumber} - ${distance.sumKm} км`);                    //  данные для третьей строки телеграммы - простой массив, чтобы джйонуть его в строку
  const dataForThirdRowStr = dataForThirdRowArr.join("; ")
  const thirdRow = `2. ${data.typeOfCheck}: ${dataForThirdRowStr};`
  // ----------------------------------------- третья строка телеграммы -------------------------------------------------


  // ----------------------------------------- четвертая строка телеграммы -------------------------------------------------
  const fourthRow = "3. Сопровождение: согласно №ЦДИ-245/р от 25.03.2020 ЦДМ;";
  // ----------------------------------------- четвертая строка телеграммы -------------------------------------------------



  // ----------------------------------------- пятая строка телеграммы -------------------------------------------------
  const dataForFifthRow = data.uniquePch.map(distance => {
    const distancePartAndNumber = getDistancePartAndNumber(distance, DB);       // имя ПЧ например: "ПЧ-15"

    const currentDistanceData = data.generalStatistics.find(item => item.pch === distance);   // найдем информацию по текущему ПЧ в расчитанных селектором данных с информацией по текущему ПЧ
    let magnitudeN;
    if (currentDistanceData) {
      magnitudeN = currentDistanceData.magnitudeN;                                            // достанем из него Величину Nуч. по текущему ПЧ
    }

    return { distancePartAndNumber, magnitudeN }
  });

  const dataForFifthRowArr = dataForFifthRow.map(distance => `${distance.distancePartAndNumber} - ${distance.magnitudeN} ед.`);                    //  данные для пятой строки телеграммы - простой массив, чтобы джйонуть его в строку
  const dataForFifthRowStr = dataForFifthRowArr.join("; ")
  const fifthRow = `4. Величина Nуч: ${dataForFifthRowStr}`;
  // ----------------------------------------- / пятая строка телеграммы -----------------------------------------------



  // ----------------------------------------- шестая строка телеграммы -------------------------------------------------
  const dataForSixthRow = data.uniquePch.map(distance => {
    const distancePartAndNumber = getDistancePartAndNumber(distance, DB);       // имя ПЧ например: "ПЧ-15"

    const currentDistanceData = data.generalStatistics.find(item => item.pch === distance);   // найдем информацию по текущему ПЧ в расчитанных селектором данных с информацией по текущему ПЧ
    let neUdKm;

    if (currentDistanceData) {
      neUdKm = currentDistanceData.neUdKm;                                            // достанем из него количество неуд км по текущему ПЧ
    }

    return { distancePartAndNumber, neUdKm }
  });

  const dataForSixthRowArr = dataForSixthRow.map(distance => `${distance.distancePartAndNumber} - ${distance.neUdKm} км.`);                    //  данные для шестой строки телеграммы - простой массив, чтобы джйонуть его в строку
  const dataForSixthRowStr = dataForSixthRowArr.join("; ")
  const sixthRow = `5. Неудовлетворительные километры: ${dataForSixthRowStr}`;
  // ----------------------------------------- / шестая строка телеграммы -----------------------------------------------



  // ----------------------------------------- седьмая строка телеграммы -------------------------------------------------
  const seventhRow = "6. Ограничений скорости: 0 шт., из них:"
  // ----------------------------------------- / седьмая строка телеграммы -----------------------------------------------



  // ----------------------------------------- восьмая строка телеграммы -------------------------------------------------
  const dataFoEighthRow = data.uniquePch.map(distance => {
    const distancePartAndNumber = getDistancePartAndNumber(distance, DB);       // имя ПЧ например: "ПЧ-15"

    const currentDistanceData = data.generalStatistics.find(item => item.pch === distance);   // найдем информацию по текущему ПЧ в расчитанных селектором данных с информацией по текущему ПЧ
    let speedLimits = [];

    if (currentDistanceData) {
      speedLimits = currentDistanceData.speedLimits;                                            // достанем из него массив с ограничениями по текущему ПЧ, тип как в стейте
    }

    // ДАЛЬШЕ НЕ ДУМАЛ И НЕ ДЕЛАЛ
    // return { distancePartAndNumber, speedLimits }
  });

  // const dataFoEighthRowArr = dataFoEighthRow.map(distance => `${distance.distancePartAndNumber} - ${distance.neUdKm} км.`);                    //  данные для шестой строки телеграммы - простой массив, чтобы джйонуть его в строку
  // const dataFoEighthRowStr = dataFoEighthRowArr.join("; ")
  const eighthRow = "6.1. По 436/р - ограничений не выявлено."
  // ----------------------------------------- / восьмая строка телеграммы -----------------------------------------------








  dataToWrite.push([secondRow], [firstRow], [thirdRow], [fourthRow], [fifthRow], [sixthRow]);      // формируем телеграмму

  debugger

  return dataToWrite;
}




function getDistancePartAndNumber(distanceNumber, DB) {
  const distanceObj = DB.distances.find(item => item.distanceNumber === distanceNumber);        // объект из ДБ с информацие о ПЧ
  if (distanceObj) {
    return distanceObj.distancePartAndNumber;                                     // имя ПЧ например: "ПЧ-15"
  } else {
    return "";
  }
}