/* функция принимает массив объектов
  возвращает массив массивов для формирования книги Просадок в ИС
*/

export function insulatingJointDrowdownsAoACreator(data) {
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
    " №     п/п", "№ ПС", "Перегон, станция", "Рег.", "ПЧ",
    "Путь", "КМ", "ПК,м", "Вид отступления, амплитуда/протяженность", "амплитуда", "протяженность",
    "степень", "Устан. Скорость", "Наличие повтора", "Вид проверки", "Дата проезда"
  ]);
  forBrowserPageRenderObj.header.push(
    " №     п/п", "№ ПС", "Перегон, станция", "Рег.", "ПЧ",
    "Путь", "КМ", "ПК,м", "Вид отступления, амплитуда/протяженность", "амплитуда", "протяженность",
    "степень", "Устан. Скорость", "Наличие повтора", "Вид проверки", "Дата проезда"
  );

  data.forEach((item) => {
    // этот массив используется для пуша в него всех данных по одной неисправности,
    // чтобы потом получить массив массивов всех неисправности для формирования книги excel с помощью библиотеки XLSX;
    const forXLSXArr = [];

    forXLSXArr.push(
      item.sequentialNumber, item.vagonNumber, item.station, item.region, item.distanceNumber,
      item.trackNumber, item.kilometer, item.picketSlashMeter,
      item.retreatTitle, item.retreatAmplitude, item.retreatLength,
      item.degree, item.advancedSpeed, item.presenceOfRepeat, item.typeOfCheck, item.fullDate
    );   // массив одна неисправность

    // запушим массив с одной неисправностью в массив со всеми неисправностями для формирования книги excel с помощью библиотеки XLSX; Будем пошить каждую неисправность
    forXLSXAoA.push(forXLSXArr);




    // этот массив используется для пуша в него всех данных по одной неисправности,
    // чтобы потом получить массив массивов всех неисправности для отрисовки таблицы на странице в браузере
    const forPageBrowserArr = [];

    forPageBrowserArr.push(
      item.sequentialNumber, item.vagonNumber, item.station, item.region, item.distanceNumber,
      item.trackNumber, item.kilometer, item.picketSlashMeter,
      item.retreatTitle, item.retreatAmplitude, item.retreatLength,
      item.degree, item.advancedSpeed, item.presenceOfRepeat, item.typeOfCheck, item.fullDate
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