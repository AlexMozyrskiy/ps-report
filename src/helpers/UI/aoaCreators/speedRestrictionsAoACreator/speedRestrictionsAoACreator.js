/* функция принимает массив объектов
  возвращает массив массивов для формирования книги Справка по ограничениям в таблице единых форм
*/

export function speedRestrictionsAoACreator(data) {
  let dataToWrite = [];                                   //массив массивов для конвертации его в xslx и записи в выходную книгу

  // Шапка таблицы
  dataToWrite.push([
    " №     п/п", "ДИ", "№ ПС, ДКИ, СВД", "Направление", "Перегон",
    "Рег.", "ПЧ", "Путь", "км", "пк, м", "Вид отступления, амплитуда/ протяженность ",
    "", "Устан. скорость", "Огран. скор. км/час", "Радиус кривой", "Тип шпал",
    "Наличие повтора", "Вид проверки", "Примечание (время выдачи, время отмены)",
    "Длительность устранения", "Сопровождение", "УСТРАНЕНИЕ", "УСТРАНЕНИЕ ПРОВЕРИЛ",
    "Величина при предыдущем проходе (в случае повтора)", "Дата предудущего прохода (в случае повтора)",
    "Номер предупреждения и время выдачи на ограничение скорости", "Тип пути                        (зв./ бп)"
  ]);

  data.forEach((item) => {
    const arr = [];                   // этот массив используется для пуша в него всех данных по одной неисправности, чтобы потом получить массив массивов всех неисправности и преобразовать его в лист excel

    arr.push(
      item.sequentialNumber, item.directorateOfInfrastructureShortName, item.vagonNumber,
      item.directionName, item.station, item.region,
      item.distanceNumber, item.trackNumber, item.kilometer, `${item.picket}/${item.meter}`,
      item.retreatTitle, `${item.retreatAmplitude}/${item.retreatLength}`, 
      item.advancedSpeed, item.restrictionSpeed, "", "", "", item.typeOfCheck,
      "", "", "", "", "", "", "", "", ""
    );   // массив одна неисправность

    dataToWrite.push(arr);        // запушим массив с одной неисправностью в массив со всеми неисправностями. Будем пошить каждую неисправность
  });

  return dataToWrite;
}