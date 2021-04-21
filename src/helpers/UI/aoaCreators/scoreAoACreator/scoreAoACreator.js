/* функция принимает массив объектов
  возвращает массив массивов для формирования книги бальности в таблице единых форм
*/

export function scoreAoACreator(data) {
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
    "Дистанция пути", "План, Км", "Проверено, Км", " +/-", "В том числе проверено с видеоконтролем",
    "отл", "хор", "уд", "неуд", "Величина Nуч.", "Всего",
    "2 ст.", "3 ст.", "4 ст. без учета Рст", "Рст 4 ст.", "Другие",
    "Зазоры", "Износ", "Кривые", "Видеоконтроль с ограничением скорости",
    "Закрытие движения, шт.", "V-15 км/ч, шт.", "V-25 км/ч, шт.",
    "V-40 км/ч, шт.", "V-60 (грузовым), км/ч, шт.", "V-60 км/ч, шт.", "V- более 60 км/ч, шт."
  ]);
  forBrowserPageRenderObj.header.push(
    "Дистанция пути", "Проверено, Км", "отл", "хор", "уд", "неуд", "Величина Nуч.",
    "2 ст.", "3 ст.", "4 ст. без учета Рст", "Рст 4 ст.", "Другие",
    "Зазоры", "Износ", "Кривые", "Видеоконтроль с ограничением скорости",
    "Закрытие движения, шт.", "V-15 км/ч, шт.", "V-25 км/ч, шт.",
    "V-40 км/ч, шт.", "V-60 (грузовым), км/ч, шт.", "V-60 км/ч, шт.", "V- более 60 км/ч, шт."
  );

  data.forEach((item) => {
    const kilometersTotalCount = +(item.otlKm + item.xorKm + item.UdKm + item.neUdKm).toFixed(3);



    // этот массив используется для пуша в него всех данных по одной неисправности,
    // чтобы потом получить массив массивов всех неисправности для формирования книги excel с помощью библиотеки XLSX;
    const forXLSXArr = [];

    forXLSXArr.push(
      item.distanceFullName, kilometersTotalCount, kilometersTotalCount, "", kilometersTotalCount, item.otlKm,
      item.xorKm, item.UdKm, item.neUdKm, item.magnitudeN, "", item.secondDegreesCount, item.thirdDegreesCount, 
      item.fourthDegreesWithOutRstCount, item.fourthDegreesWithRstCount, "", "", "", "", "",
      item.speedRestrictionCount0, item.speedRestrictionCount15, item.speedRestrictionCount25,
      item.speedRestrictionCount40, item.speedRestrictionFreightCount60,
      item.speedRestrictionCount60, item.speedRestrictionMoreThenCount60
    );   // массив одна неисправность

    // запушим массив с одной неисправностью в массив со всеми неисправностями для формирования книги excel с помощью библиотеки XLSX; Будем пошить каждую неисправность
    forXLSXAoA.push(forXLSXArr);




    // этот массив используется для пуша в него всех данных по одной неисправности,
    // чтобы потом получить массив массивов всех неисправности для отрисовки таблицы на странице в браузере
    const forPageBrowserArr = [];

    forPageBrowserArr.push(
      item.distanceFullName, kilometersTotalCount, item.otlKm,
      item.xorKm, item.UdKm, item.neUdKm, item.magnitudeN, item.secondDegreesCount, item.thirdDegreesCount, 
      item.fourthDegreesWithOutRstCount, item.fourthDegreesWithRstCount, "", "", "", "", "",
      item.speedRestrictionCount0, item.speedRestrictionCount15, item.speedRestrictionCount25,
      item.speedRestrictionCount40, item.speedRestrictionFreightCount60,
      item.speedRestrictionCount60, item.speedRestrictionMoreThenCount60
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