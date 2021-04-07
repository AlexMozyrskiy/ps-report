/* Функция вернет номер Региона по переданному ей номеру ПЧ (тип number) */
/* DB - база данных в которой ищем */

export function getRegionNumberByPchNumber(DB, distanceNumber) {

    if (!Number.isFinite(distanceNumber)) {                     // если передано не число
        distanceNumber = +distanceNumber;                         // приведем его к числу
    }

    if (Number.isNaN(distanceNumber)) {                         // если передано (или после первого приведения к числу) NaN
        console.error("в функцию определяющую номер Региона по номеру ПЧ передано не число");   // сообщение об ошибке
        return "";
    }

    const targetRegionNumber = DB.distances.find(item =>{
        return distanceNumber === item.distanceNumber;
    });
    
    if (typeof targetRegionNumber === "undefined") {               // если не нашел переданного направления
        console.error(`Внимание!!!!! Номер Региона в функции не найден, перепроверьте функцию getRegionNumberByPchNumber!!!!! Переданный номер ПЧ: ${distanceNumber}`);
        return "";
    } else {                                    // если нашел
        return targetRegionNumber.regionNumber;
    }
}