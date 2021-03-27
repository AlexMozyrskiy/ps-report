export function getUniquePch(arrOfObjects, reportForDay) {           // принимает массив объектов, возвращает массив уникальных ПЧ
    let result = [];

    arrOfObjects.forEach(element => {                               // для каждого элемента массива
        if(+element["ДЕНЬ"] === +reportForDay) {                    // если день который ввел пользователь равен дню в элементе
            if(!result.includes(element["ПЧ"])) {                   // и в массиве уникальных значений еще нет такого ПЧ
                result.push(element["ПЧ"]);                         // запушим его туда
            }
        }
    });

    return result;
}