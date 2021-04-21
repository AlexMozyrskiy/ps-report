/* функция принимает массив объектов
  возвращает массив массивов для формирования книги Справка по ограничениям в таблице единых форм
*/

export function speedRestrictionsAoACreator(data) {
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
    " №     п/п", "ДИ", "№ ПС, ДКИ, СВД", "Направление", "Перегон",
    "Рег.", "ПЧ", "Путь", "км", "пк, м", "Вид отступления, амплитуда/ протяженность ",
    "", "Устан. скорость", "Огран. скор. км/час", "Радиус кривой", "Тип шпал",
    "Наличие повтора", "Вид проверки", "Примечание (время выдачи, время отмены)",
    "Длительность устранения", "Сопровождение", "УСТРАНЕНИЕ", "УСТРАНЕНИЕ ПРОВЕРИЛ",
    "Величина при предыдущем проходе (в случае повтора)", "Дата предудущего прохода (в случае повтора)",
    "Номер предупреждения и время выдачи на ограничение скорости", "Тип пути                        (зв./ бп)"
  ]);
  forBrowserPageRenderObj.header.push(
    " №     п/п", "ДИ", "№ ПС, ДКИ, СВД", "Направление", "Перегон",
    "Рег.", "ПЧ", "Путь", "км", "пк, м", "Вид отступления, амплитуда/ протяженность ",
    "", "Устан. скорость", "Огран. скор. км/час", "Вид проверки"
  );

  data.forEach((item) => {
    // этот массив используется для пуша в него всех данных по одной неисправности,
    // чтобы потом получить массив массивов всех неисправности для формирования книги excel с помощью библиотеки XLSX;
    const forXLSXArr = [];

    forXLSXArr.push(
      item.sequentialNumber, item.directorateOfInfrastructureShortName, item.vagonNumber,
      item.directionName, item.station, item.region,
      item.distanceNumber, item.trackNumber, item.kilometer, `${item.picket}/${item.meter}`,
      item.retreatTitle, `${item.retreatAmplitude}/${item.retreatLength}`,
      item.advancedSpeed, item.restrictionSpeed, "", "", "", item.typeOfCheck,
      "", "", "", "", "", "", "", "", ""
    );   // массив одна неисправность

    // запушим массив с одной неисправностью в массив со всеми неисправностями для формирования книги excel с помощью библиотеки XLSX; Будем пошить каждую неисправность
    forXLSXAoA.push(forXLSXArr);

    

    // этот массив используется для пуша в него всех данных по одной неисправности,
    // чтобы потом получить массив массивов всех неисправности для отрисовки таблицы на странице в браузере
    const forPageBrowserArr = [];

    forPageBrowserArr.push(
      item.sequentialNumber, item.directorateOfInfrastructureShortName, item.vagonNumber,
      item.directionName, item.station, item.region,
      item.distanceNumber, item.trackNumber, item.kilometer, `${item.picket}/${item.meter}`,
      item.retreatTitle, `${item.retreatAmplitude}/${item.retreatLength}`,
      item.advancedSpeed, item.restrictionSpeed, item.typeOfCheck
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