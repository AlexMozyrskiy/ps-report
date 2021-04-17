/* Функция вернет полное имя ПЧ (например ПЧ-15 Гудермес) по переданному ей номеру ПЧ (тип number) */
/* DB - база данных в которой ищем */

export function getPchFullNameByPchNumber(DB, distanceNumber) {

    if (!Number.isFinite(distanceNumber)) {                     // если передано не число
        distanceNumber = +distanceNumber;                         // приведем его к числу
    }

    if (Number.isNaN(distanceNumber)) {                         // если передано (или после первого приведения к числу) NaN
        console.error("в функцию определяющую полное имя ПЧ (например ПЧ-15 Гудермес) по номеру ПЧ передано не число");   // сообщение об ошибке
        return "";
    }

    const pchObjFromDB = DB.distances.find(item =>{
        return distanceNumber === item.distanceNumber;
    });

    if (typeof pchObjFromDB === "undefined") {               // если не нашел переданного направления
        console.error(`Внимание!!!!! Полное имя ПЧ (например ПЧ-15 Гудермес) в функции не найден, перепроверьте функцию getPchFullNameByPchNumber!!!!! Переданный номер ПЧ: ${distanceNumber}`);
        return "";
    } else {                                    // если нашел
        return pchObjFromDB.distanceFullName;
    }
}