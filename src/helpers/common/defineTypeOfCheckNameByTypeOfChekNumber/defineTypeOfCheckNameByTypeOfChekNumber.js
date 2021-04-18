/* Функция принимает тип проверки цифрой и возвращает буквами например "Рабочая" */

export function defineTypeOfCheckNameByTypeOfChekNumber(typeOfCheckNumber) {
    let typeOfCheckString = "";                                     // Вид проверки буквами

    if (!Number.isFinite(typeOfCheckNumber)) {                     // если передано не число
        typeOfCheckNumber = +typeOfCheckNumber;                         // приведем его к числу
    }

    if (Number.isNaN(typeOfCheckNumber)) {                         // если передано (или после первого приведения к числу) NaN
        alert("в функцию определяющую тип проверки буквами по типу проверками цифрой передано не число");   // сообщение об ошибке
    }

    if(typeOfCheckNumber === 0) {
        typeOfCheckString = "Рабочая";
    } else if(typeOfCheckNumber === 1) {
        typeOfCheckString = "Контрольная";
    } else if(typeOfCheckNumber === 2) {
        typeOfCheckString = "Дополнительная";
    } else {
        console.error(`В Функцию defineTypeOfCheckNameByTypeOfChekNumber передан номер вида проверки ${typeOfCheckNumber}`);
        typeOfCheckString = "";
    }

    return typeOfCheckString;
}