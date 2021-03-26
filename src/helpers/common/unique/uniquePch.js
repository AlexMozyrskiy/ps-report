export function uniquePch(arrOfObjects) {           // принимает массив объектов, возвращает массив уникальных ПЧ
    let result = [];

    arrOfObjects.forEach(element => {
        if(!result.includes(element["ПЧ"])) {
            result.push(element["ПЧ"]);
        }
    });

    return result;
}