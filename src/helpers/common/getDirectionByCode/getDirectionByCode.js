/* Функция вернет название направления (тип string) по переданному ей коду направления (тип number) */

export function getDirectionByCode(DB, code) {

    if (!Number.isFinite(code)) {                     // если передано не число
        code = +code;                         // приведем его к числу
    }

    if (Number.isNaN(code)) {                         // если передано (или после первого приведения к числу) NaN
        console.error("в функцию определяющую направление по коду направления передано не число");   // сообщение об ошибке
        return "";
    }

    const targetDirection = DB.directions.find(item => item.code === code);
    
    if (typeof targetDirection === "undefined") {               // если не нашел переданного направления
        console.error("Внимание!!!!! Код направления в функции не найден, перепроверьте функцию getDirectionByCode!!!!! Переданный код направления: " + code);
        return "";
    } else {                                    // если нашел
        return targetDirection.name;
    }
}