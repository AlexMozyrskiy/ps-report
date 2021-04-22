/* функция принимает массив объектов
  возвращает массив массивов для формирования книги Анализ повторяемости в таблице единых форм
*/

export function repeatabilityAnalysisAoACreator(data) {
  // возвращаемый объект, тут будет 1 массив и 1 объект:
  // 1 массив - массов массвов для формирования книги excel с помощью библиотеки XLSX;
  // 2 объект - объект для отрисовки таблицы на странице в браузере, состоит из 2 свойств:
      // 1 свойство - массив из элемнтов для создания header`а тбалица,
      // 2 свойство массив массивов с данными для создания тела таблицы.
  let returnedObj = {};

  // массов массвов для формирования книги excel с помощью библиотеки XLSX;
  let forXLSXAoA = [];

  // объект для отрисовки таблицы на странице в браузере, состоит из 2 свойств:
  let forBrowserPageRenderObj = {
    header: [],         // 1 свойство - массив из элемнтов для создания header`а тбалица,
    body: []            // 2 свойство массив массивов с данными для создания тела таблицы.
  };

  // Шапка таблицы
  forXLSXAoA.push([
    "Дата", "ПС", "ПЧ", "участок пути", "путь", "км", "м",
    "наименование неисправности", "степень отступления/ ограничение",
    "величина неисправности, мм", "протяженность неисправности, м",
    "степень отступления/ ограничение",
    "величина неисправности, мм", "протяженность неисправности, м",
    "степень отступления/ ограничение",
    "величина неисправности, мм", "протяженность неисправности, м"
  ]);
  forBrowserPageRenderObj.header.push(
    "Дата", "ПС", "ПЧ", "участок пути", "путь", "км", "м",
    "наименование неисправности", "степень отступления",
    "величина, мм", "протяженность, м",
    "степень отступления",
    "величина, мм", "протяженность, м",
    "степень отступления",
    "величина, мм", "протяженность, м"
  );

  data.forEach((item) => {

    // этот массив используется для пуша в него всех данных по одной неисправности,
    // чтобы потом получить массив массивов всех неисправности для формирования книги excel с помощью библиотеки XLSX;
    const forXLSXArr = [];

    forXLSXArr.push(
      item.fullDate, item.vagonNumber, item.distanceNumber, item.station, item.trackNumber,
      item.kilometer, item.picketSlashMeter, item.retreatTitle,
      item.prevPrevPeriodRetreatDegree,
      item.prevPrevPeriodRetreatAmplitude,
      item.prevPrevPeriodRetreatLength,
      item.prevPeriodRetreatDegree,
      item.prevPeriodRetreatAmplitude,
      item.prevPeriodRetreatLength,
      item.currentPeriodDegree,
      item.currentPeriodRetreatAmplitude,
      item.currentPeriodRetreatLength
    );   // массив одна неисправность

    // запушим массив с одной неисправностью в массив со всеми неисправностями для формирования книги excel с помощью библиотеки XLSX; Будем пошить каждую неисправность
    forXLSXAoA.push(forXLSXArr);




    // этот массив используется для пуша в него всех данных по одной неисправности,
    // чтобы потом получить массив массивов всех неисправности для отрисовки таблицы на странице в браузере
    const forPageBrowserArr = [];

    forPageBrowserArr.push(
      item.fullDate, item.vagonNumber, item.distanceNumber, item.station, item.trackNumber,
      item.kilometer, item.picketSlashMeter, item.retreatTitle,
      item.prevPrevPeriodRetreatDegree,
      item.prevPrevPeriodRetreatAmplitude,
      item.prevPrevPeriodRetreatLength,
      item.prevPeriodRetreatDegree,
      item.prevPeriodRetreatAmplitude,
      item.prevPeriodRetreatLength,
      item.currentPeriodDegree,
      item.currentPeriodRetreatAmplitude,
      item.currentPeriodRetreatLength
    );   // массив одна неисправность

    // запушим массив с одной неисправностью в массив со всеми неисправностями для отрисовки таблицы на странице в браузере
    forBrowserPageRenderObj.body.push(forPageBrowserArr);
  });

  returnedObj = {
    forXLSXAoA,
    forBrowserPageRenderObj
  };

  return returnedObj;
}