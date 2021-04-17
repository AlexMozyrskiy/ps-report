/* Функция вернет сокращенное название дирекции инфраструктуры (например СКАВ) по переданному ей номеру Дирекции (тип number) */
/* DB - база данных в которой ищем */

export function getDirectorateOfInfrastructureShortNameBydirectorateOfInfrastructureNumber(DB, directorateNumber) {

    if (!Number.isFinite(directorateNumber)) {                     // если передано не число
        directorateNumber = +directorateNumber;                         // приведем его к числу
    }

    if (Number.isNaN(directorateNumber)) {                         // если передано (или после первого приведения к числу) NaN
        console.error("в функцию определяющую сокращенное название дирекции инфраструктуры (например СКАВ) по переданному ей номеру Дирекции передано не число");   // сообщение об ошибке
        return "";
    }

    const directorateObjFromDB = DB.directoratesOfInfrastructure.find(item =>{
        return directorateNumber === item.directorateNumber;
    });

    if (typeof directorateObjFromDB === "undefined") {               // если не нашел переданного направления
        console.error(`Внимание!!!!! Сокращенное название дирекции инфраструктуры (например СКАВ) в функции не найден, перепроверьте функцию getDirectorateOfInfrastructureNameBydirectorateOfInfrastructureNumber!!!!! Переданный номер дирекции: ${directorateNumber}`);
        return "";
    } else {                                    // если нашел
        return directorateObjFromDB.directorateShortName;
    }
}