/* функция принимает массив объектов
  возвращает массив массивов для формирования книги бальности в таблице единых форм
*/

export function scoreAoACreator(data) {
  let dataToWrite = [];                                   //массив массивов для конвертации его в xslx и записи в выходную книгу

  // Шапка таблицы
  dataToWrite.push([
    "Дистанция пути", "План, Км", "Проверено, Км", " +/-", "В том числе проверено с видеоконтролем",
    "отл", "хор", "уд", "неуд", "Величина Nуч.", "Всего",
    "2 ст.", "3 ст.", "4 ст. без учета Рст", "Рст 4 ст.", "Другие",
    "Зазоры", "Износ", "Кривые", "Видеоконтроль с ограничением скорости",
    "Закрытие движения, шт.", "V-15 км/ч, шт.", "V-25 км/ч, шт.",
    "V-40 км/ч, шт.", "V-60 (грузовым), км/ч, шт.", "V-60 км/ч, шт.", "V- более 60 км/ч, шт."
  ]);

  data.forEach((item) => {
    const arr = [];                   // этот массив используется для пуша в него всех данных по одной неисправности, чтобы потом получить массив массивов всех неисправности и преобразовать его в лист excel

    const kilometersTotalCount = +(item.otlKm + item.xorKm + item.UdKm + item.neUdKm).toFixed(3);

    arr.push(
      item.distanceFullName, kilometersTotalCount, kilometersTotalCount, "", kilometersTotalCount, item.otlKm,
      item.xorKm, item.UdKm, item.neUdKm, item.magnitudeN, "", item.secondDegreesCount, item.thirdDegreesCount, 
      item.fourthDegreesWithOutRstCount, item.fourthDegreesWithRstCount, "", "", "", "", "",
      item.speedRestrictionCount0, item.speedRestrictionCount15, item.speedRestrictionCount25,
      item.speedRestrictionCount40, item.speedRestrictionFreightCount60,
      item.speedRestrictionCount60, item.speedRestrictionMoreThenCount60
    );   // массив одна неисправность

    dataToWrite.push(arr);        // запушим массив с одной неисправностью в массив со всеми неисправностями. Будем пошить каждую неисправность
  });

  return dataToWrite;
}