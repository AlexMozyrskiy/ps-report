/* Функция вернет номер ПЧ по переданному ей коду направления (тип number) и колометру (тип 123.123) */
import DB from "../../../DB/DB";

export function getPchNumberByCodeAndKm(code, doubleKm) {

    if (!Number.isFinite(code)) {                     // если передано не число
        code = +code;                         // приведем его к числу
    }

    if (Number.isNaN(code)) {                         // если передано (или после первого приведения к числу) NaN
        console.error("в функцию определяющую номер ПЧ по коду направления и километру код направления передан не число");   // сообщение об ошибке
        return "";
    }

    if (!Number.isFinite(doubleKm)) {                     // если передано не число
        doubleKm = +doubleKm;                         // приведем его к числу
    }

    if (Number.isNaN(doubleKm)) {                         // если передано (или после первого приведения к числу) NaN
        console.error("в функцию определяющую номер ПЧ по коду направления и километру километр передан не число");   // сообщение об ошибке
        return "";
    }


    const targetPch = DB.stationBoundaries.find(item =>{
        const parseDirectionCode = item.direction.match(/\d\d\d\d\d/);         // распарсим из свойства direction в DB код направления для сравнения его с текущим кодом в item
        return +parseDirectionCode === code && doubleKm > item.startCoordinate && doubleKm <= item.endCoordinate;
    });
    
    if (typeof targetPch === "undefined") {               // если не нашел переданного направления
        console.error("Внимание!!!!! Номер ПЧ в функции не найден, перепроверьте функцию getPchNumberByCodeAndKm!!!!! Переданный код направления: " + code + ", переданный километр = " + doubleKm);
        return "";
    } else {                                    // если нашел
        return targetPch.pch;
    }
}