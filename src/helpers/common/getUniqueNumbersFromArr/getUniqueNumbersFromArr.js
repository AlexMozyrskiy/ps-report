export function getUniqueNumbersFromArr(arr) {           // принимает массив, возвращает массив уникальных значений
    let result = [];

    arr.forEach(element => {                               // для каждого элемента массива
        if (!result.includes(element)) {                   // и в массиве уникальных значений еще нет такого значения
            result.push(element);                         // запушим его туда
        }
    });

    return result;
}