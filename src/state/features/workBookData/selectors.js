import { createSelector } from "reselect";
// import { getUniquePch } from "../../../helpers/common/getUniquePch/getUniquePch";
import { sheetOtstConst, sheetOcKmConst } from "../../../CONSTS/sheetsHeaderConsts";

export const getWorkBookOtstSheetDataSelector = (state) => {
    return state.workBookData.otstSheetData;
}

export const getWorkBookOcKmSheetDataSelector = (state) => {
    return state.workBookData.ocKmSheetData;
}

export const getIsWorkBookDataLoadedSelector = (state) => {
    return state.workBookData.isWorkBookDataLoaded;
}

export const getIsWorkBookDataLoadingSelector = (state) => {
    return state.workBookData.isWorkBookDataLoading;
}

export const getReportForDaySelector = (state) => {
    return state.workBookData.reportForDay;
}

export const getMakeCalculationSelector = (state) => {
    return state.workBookData.makeCalculation;
}







export const selectKmChecked = createSelector(                   // сколько провреено км
    getWorkBookOcKmSheetDataSelector,
    ocKmData => ocKmData.reduce((prevVaL, item) => {
        const km = +item[sheetOcKmConst.CHECKED_KILOMETERS];                          // приведем к числу
        const sum = km + Number(prevVaL);                       // приведем к числу
        return sum.toFixed(3);                                  // вернем исправленную сумму
    }, 0)
);


// ------------------------- расчитаем все данные для отчета которые нам нужны из листа "Оценка КМ" -----------------------
export const calculateAllDataForTheReportOcKmSheetSmartSelector = createSelector(
    [getWorkBookOcKmSheetDataSelector, getReportForDaySelector],
    (ocKmData, reportForDay) => {
        // Возвращаемый объект расчитанных данных
        let returnedDataObject = {};

        // Всего километров проверено
        let totalCheckedKilometers = 0;

        ocKmData.forEach(item => {                                          // для каждого объекта (строчки в excel)

            // ------------------------------ Всего километров проверено -----------------------------------------------
            totalCheckedKilometers += Number(item[sheetOcKmConst.CHECKED_KILOMETERS]);            // расчиатем сумму текущую плюс предыдущую
            totalCheckedKilometers = totalCheckedKilometers.toFixed(3);     // пофиксим полученное число, т.к. JS дробь считает неправильно
            totalCheckedKilometers = +totalCheckedKilometers;               // приведем пофикшенную строку к числу
            // ------------------------------ / Всего километров проверено ---------------------------------------------


        }); // / ocKmData.forEach

        // -------------------------- заполним возвращаемый объект вычисленными данными ----------------------------
        returnedDataObject.totalCheckedKilometers = totalCheckedKilometers;
        // -------------------------- / заполним возвращаемый объект вычисленными данными --------------------------

        return returnedDataObject;
    }
);
// ------------------------- / расчитаем все данные для отчета которые нам нужны из листа "Оценка КМ" ---------------------


// ------------------------- расчитаем все данные для отчета которые нам нужны из листа "Отступления" -----------------------
export const calculateAllDataForTheReportOtstSheetSmartSelector = createSelector(
    [getWorkBookOtstSheetDataSelector, getReportForDaySelector],
    (otstData, reportForDay) => {

        // Возвращаемый объект расчитанных данных
        let returnedDataObject = {};

        // reportForDay = +reportForDay;

        // вторые близкие к третьим степени - Массив Объектов такой же по типу как и входной массив объектов
        let secondDegrees = [];

        // вторые близкие к третьим степени - Массив Объектов такой же по типу как и входной массив объектов
        let secondCloseToThirdDegrees = [];

        // третьи степени - Массив Объектов такой же по типу как и входной массив объектов
        let thirdDegrees = [];

        // четвертые степени - Массив Объектов такой же по типу как и входной массив объектов
        let fourthDegrees = [];

        // третьи и четвертые степени для таблицы 3 и 4 степеней - Массив Объектов такой же по типу как и входной массив объектов
        let thirdAndFourthDegrees = [];


        otstData.forEach(item => {                                          // для каждого объекта (строчки в excel)

            // ------------------------- Вторые степени. Создадим обеъкт с нужными нам свойствами -------------------------
            if (item[sheetOtstConst.DAY] === +reportForDay && item[sheetOtstConst.EXCLUDE] === 0 && item[sheetOtstConst.ARROW] === 0 && +item[sheetOtstConst.DIRECTION_CODE] <= 99999 && item[sheetOtstConst.DEGREE] === 2 && item[sheetOtstConst.RETREAT_TITLE] !== "Кривая" && item[sheetOtstConst.RETREAT_TITLE] !== "ПрУ") {
                secondDegrees.push({
                    "EXCLUDE": item[sheetOtstConst.EXCLUDE],
                    "KM": item[sheetOtstConst.KILOMETER],
                    "PR_PREDUPR": item[sheetOtstConst.PR_PREDUPR],
                    "АМПЛИТУДА": item[sheetOtstConst.AMPLITUDE],
                    "БАЛЛ": item[sheetOtstConst.SCORE],
                    "ВИД": item[sheetOtstConst.TYPE_OF_RETREAT],
                    "ГОД": item[sheetOtstConst.YEAR],
                    "ДЕНЬ": item[sheetOtstConst.DAY],
                    "ДЗ": item[sheetOtstConst.DZ],
                    "ДЛИНА": item[sheetOtstConst.LENGTH_OF_RETREAT],
                    "ИС": item[sheetOtstConst.INSULATING_JOINT],
                    "КЛАСС": item[sheetOtstConst.CLASS],
                    "КОД": item[sheetOtstConst.RAILWAY_CODE],
                    "КОДНАПРВ": item[sheetOtstConst.DIRECTION_CODE],
                    "КОДОТСТУП": item[sheetOtstConst.RETREAT_CODE],
                    "КОЛИЧЕСТВО": item[sheetOtstConst.COUNT],
                    "ЛИНИЯ": item[sheetOtstConst.LINE],
                    "М": item[sheetOtstConst.METER],
                    "МЕСЯЦ": item[sheetOtstConst.MONTH],
                    "МОСТ": item[sheetOtstConst.BRIDGE],
                    "ОБК": item[sheetOtstConst.RUNNING_IN],
                    "ОТСТУПЛЕНИЕ": item[sheetOtstConst.RETREAT_TITLE],
                    "ПС": item[sheetOtstConst.WAGON_NUMBER],
                    "ПУТЬ": item[sheetOtstConst.TRACK],
                    "ПЧ": item[sheetOtstConst.RAILWAY_DISTANCE],
                    "СК_ОГР_ГРУЗ": item[sheetOtstConst.FREIGHT_SPEED_RESTRICTION],           // "-" | number
                    "СК_ОГР_ПАСС": item[sheetOtstConst.PASSENGER_SPEED_RESTRICTION],           // "-" | number
                    "СК_УСТ_ГРУЗ": item[sheetOtstConst.FREIGHT_SPEED_ADVANCED],           // "-" | number
                    "СК_УСТ_ПАСС": item[sheetOtstConst.PASSENGER_SPEED_ADVANCED],           // "-" | number
                    "СТЕПЕНЬ": item[sheetOtstConst.DEGREE],
                    "СТРЕЛКА": item[sheetOtstConst.ARROW]
                });
            }
            // ------------------------- / Вторые степени. Создадим обеъкт с нужными нам свойствами -----------------------


            // ------------------------- Вторые близкие к тертьим степени. Создадим обеъкт с нужными нам свойствами -------------------------
            if (item[sheetOtstConst.DAY] === +reportForDay && item[sheetOtstConst.EXCLUDE] === 0 && item[sheetOtstConst.ARROW] === 0 && +item[sheetOtstConst.DIRECTION_CODE] <= 99999 && item[sheetOtstConst.DEGREE] === 2 && item[sheetOtstConst.PR_PREDUPR] === 1 && item[sheetOtstConst.RETREAT_TITLE] !== "Кривая" && item[sheetOtstConst.RETREAT_TITLE] !== "ПрУ") {
                secondCloseToThirdDegrees.push({
                    "EXCLUDE": item[sheetOtstConst.EXCLUDE],
                    "KM": item[sheetOtstConst.KILOMETER],
                    "PR_PREDUPR": item[sheetOtstConst.PR_PREDUPR],
                    "АМПЛИТУДА": item[sheetOtstConst.AMPLITUDE],
                    "БАЛЛ": item[sheetOtstConst.SCORE],
                    "ВИД": item[sheetOtstConst.TYPE_OF_RETREAT],
                    "ГОД": item[sheetOtstConst.YEAR],
                    "ДЕНЬ": item[sheetOtstConst.DAY],
                    "ДЗ": item[sheetOtstConst.DZ],
                    "ДЛИНА": item[sheetOtstConst.LENGTH_OF_RETREAT],
                    "ИС": item[sheetOtstConst.INSULATING_JOINT],
                    "КЛАСС": item[sheetOtstConst.CLASS],
                    "КОД": item[sheetOtstConst.RAILWAY_CODE],
                    "КОДНАПРВ": item[sheetOtstConst.DIRECTION_CODE],
                    "КОДОТСТУП": item[sheetOtstConst.RETREAT_CODE],
                    "КОЛИЧЕСТВО": item[sheetOtstConst.COUNT],
                    "ЛИНИЯ": item[sheetOtstConst.LINE],
                    "М": item[sheetOtstConst.METER],
                    "МЕСЯЦ": item[sheetOtstConst.MONTH],
                    "МОСТ": item[sheetOtstConst.BRIDGE],
                    "ОБК": item[sheetOtstConst.RUNNING_IN],
                    "ОТСТУПЛЕНИЕ": item[sheetOtstConst.RETREAT_TITLE],
                    "ПС": item[sheetOtstConst.WAGON_NUMBER],
                    "ПУТЬ": item[sheetOtstConst.TRACK],
                    "ПЧ": item[sheetOtstConst.RAILWAY_DISTANCE],
                    "СК_ОГР_ГРУЗ": item[sheetOtstConst.FREIGHT_SPEED_RESTRICTION],           // "-" | number
                    "СК_ОГР_ПАСС": item[sheetOtstConst.PASSENGER_SPEED_RESTRICTION],           // "-" | number
                    "СК_УСТ_ГРУЗ": item[sheetOtstConst.FREIGHT_SPEED_ADVANCED],           // "-" | number
                    "СК_УСТ_ПАСС": item[sheetOtstConst.PASSENGER_SPEED_ADVANCED],           // "-" | number
                    "СТЕПЕНЬ": item[sheetOtstConst.DEGREE],
                    "СТРЕЛКА": item[sheetOtstConst.ARROW]
                });
            }
            // ------------------------- / Вторые близкие к тертьим степени. Создадим обеъкт с нужными нам свойствами -----------------------


            // ------------------------- Третьи степени. Создадим обеъкт с нужными нам свойствами -------------------------
            if (item[sheetOtstConst.DAY] === +reportForDay && item[sheetOtstConst.EXCLUDE] === 0 && item[sheetOtstConst.ARROW] === 0 && +item[sheetOtstConst.DIRECTION_CODE] <= 99999 && item[sheetOtstConst.DEGREE] === 3 && item[sheetOtstConst.RETREAT_TITLE] !== "Кривая" && item[sheetOtstConst.RETREAT_TITLE] !== "ПрУ") {
                thirdDegrees.push({
                    "EXCLUDE": item[sheetOtstConst.EXCLUDE],
                    "KM": item[sheetOtstConst.KILOMETER],
                    "PR_PREDUPR": item[sheetOtstConst.PR_PREDUPR],
                    "АМПЛИТУДА": item[sheetOtstConst.AMPLITUDE],
                    "БАЛЛ": item[sheetOtstConst.SCORE],
                    "ВИД": item[sheetOtstConst.TYPE_OF_RETREAT],
                    "ГОД": item[sheetOtstConst.YEAR],
                    "ДЕНЬ": item[sheetOtstConst.DAY],
                    "ДЗ": item[sheetOtstConst.DZ],
                    "ДЛИНА": item[sheetOtstConst.LENGTH_OF_RETREAT],
                    "ИС": item[sheetOtstConst.INSULATING_JOINT],
                    "КЛАСС": item[sheetOtstConst.CLASS],
                    "КОД": item[sheetOtstConst.RAILWAY_CODE],
                    "КОДНАПРВ": item[sheetOtstConst.DIRECTION_CODE],
                    "КОДОТСТУП": item[sheetOtstConst.RETREAT_CODE],
                    "КОЛИЧЕСТВО": item[sheetOtstConst.COUNT],
                    "ЛИНИЯ": item[sheetOtstConst.LINE],
                    "М": item[sheetOtstConst.METER],
                    "МЕСЯЦ": item[sheetOtstConst.MONTH],
                    "МОСТ": item[sheetOtstConst.BRIDGE],
                    "ОБК": item[sheetOtstConst.RUNNING_IN],
                    "ОТСТУПЛЕНИЕ": item[sheetOtstConst.RETREAT_TITLE],
                    "ПС": item[sheetOtstConst.WAGON_NUMBER],
                    "ПУТЬ": item[sheetOtstConst.TRACK],
                    "ПЧ": item[sheetOtstConst.RAILWAY_DISTANCE],
                    "СК_ОГР_ГРУЗ": item[sheetOtstConst.FREIGHT_SPEED_RESTRICTION],           // "-" | number
                    "СК_ОГР_ПАСС": item[sheetOtstConst.PASSENGER_SPEED_RESTRICTION],           // "-" | number
                    "СК_УСТ_ГРУЗ": item[sheetOtstConst.FREIGHT_SPEED_ADVANCED],           // "-" | number
                    "СК_УСТ_ПАСС": item[sheetOtstConst.PASSENGER_SPEED_ADVANCED],           // "-" | number
                    "СТЕПЕНЬ": item[sheetOtstConst.DEGREE],
                    "СТРЕЛКА": item[sheetOtstConst.ARROW]
                });
            }
            // ------------------------- / Третьи степени. Создадим обеъкт с нужными нам свойствами -----------------------


            // ------------------------- Четвертые степени. Создадим обеъкт с нужными нам свойствами -------------------------
            if (item[sheetOtstConst.DAY] === +reportForDay && item[sheetOtstConst.EXCLUDE] === 0 && item[sheetOtstConst.ARROW] === 0 && +item[sheetOtstConst.DIRECTION_CODE] <= 99999 && item[sheetOtstConst.DEGREE] === 4 && item[sheetOtstConst.RETREAT_TITLE] !== "Кривая" && item[sheetOtstConst.RETREAT_TITLE] !== "ПрУ" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.л" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.п") {
                fourthDegrees.push({
                    "EXCLUDE": item[sheetOtstConst.EXCLUDE],
                    "KM": item[sheetOtstConst.KILOMETER],
                    "PR_PREDUPR": item[sheetOtstConst.PR_PREDUPR],
                    "АМПЛИТУДА": item[sheetOtstConst.AMPLITUDE],
                    "БАЛЛ": item[sheetOtstConst.SCORE],
                    "ВИД": item[sheetOtstConst.TYPE_OF_RETREAT],
                    "ГОД": item[sheetOtstConst.YEAR],
                    "ДЕНЬ": item[sheetOtstConst.DAY],
                    "ДЗ": item[sheetOtstConst.DZ],
                    "ДЛИНА": item[sheetOtstConst.LENGTH_OF_RETREAT],
                    "ИС": item[sheetOtstConst.INSULATING_JOINT],
                    "КЛАСС": item[sheetOtstConst.CLASS],
                    "КОД": item[sheetOtstConst.RAILWAY_CODE],
                    "КОДНАПРВ": item[sheetOtstConst.DIRECTION_CODE],
                    "КОДОТСТУП": item[sheetOtstConst.RETREAT_CODE],
                    "КОЛИЧЕСТВО": item[sheetOtstConst.COUNT],
                    "ЛИНИЯ": item[sheetOtstConst.LINE],
                    "М": item[sheetOtstConst.METER],
                    "МЕСЯЦ": item[sheetOtstConst.MONTH],
                    "МОСТ": item[sheetOtstConst.BRIDGE],
                    "ОБК": item[sheetOtstConst.RUNNING_IN],
                    "ОТСТУПЛЕНИЕ": item[sheetOtstConst.RETREAT_TITLE],
                    "ПС": item[sheetOtstConst.WAGON_NUMBER],
                    "ПУТЬ": item[sheetOtstConst.TRACK],
                    "ПЧ": item[sheetOtstConst.RAILWAY_DISTANCE],
                    "СК_ОГР_ГРУЗ": item[sheetOtstConst.FREIGHT_SPEED_RESTRICTION],           // "-" | number
                    "СК_ОГР_ПАСС": item[sheetOtstConst.PASSENGER_SPEED_RESTRICTION],           // "-" | number
                    "СК_УСТ_ГРУЗ": item[sheetOtstConst.FREIGHT_SPEED_ADVANCED],           // "-" | number
                    "СК_УСТ_ПАСС": item[sheetOtstConst.PASSENGER_SPEED_ADVANCED],           // "-" | number
                    "СТЕПЕНЬ": item[sheetOtstConst.DEGREE],
                    "СТРЕЛКА": item[sheetOtstConst.ARROW]
                });
            }
            // ------------------------- / Четвертые степени. Создадим обеъкт с нужными нам свойствами -----------------------

            
            // ------------------------- Третьи и четвертые степени. Создадим обеъкт с нужными нам свойствами -------------------------
            if (item[sheetOtstConst.DAY] === +reportForDay && item[sheetOtstConst.EXCLUDE] === 0 && item[sheetOtstConst.ARROW] === 0 && +item[sheetOtstConst.DIRECTION_CODE] <= 99999 && (item[sheetOtstConst.DEGREE] === 4 || item[sheetOtstConst.DEGREE] === 3) && item[sheetOtstConst.RETREAT_TITLE] !== "Кривая" && item[sheetOtstConst.RETREAT_TITLE] !== "ПрУ" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.л" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.п") {
                thirdAndFourthDegrees.push({
                    "EXCLUDE": item[sheetOtstConst.EXCLUDE],
                    "KM": item[sheetOtstConst.KILOMETER],
                    "PR_PREDUPR": item[sheetOtstConst.PR_PREDUPR],
                    "АМПЛИТУДА": item[sheetOtstConst.AMPLITUDE],
                    "БАЛЛ": item[sheetOtstConst.SCORE],
                    "ВИД": item[sheetOtstConst.TYPE_OF_RETREAT],
                    "ГОД": item[sheetOtstConst.YEAR],
                    "ДЕНЬ": item[sheetOtstConst.DAY],
                    "ДЗ": item[sheetOtstConst.DZ],
                    "ДЛИНА": item[sheetOtstConst.LENGTH_OF_RETREAT],
                    "ИС": item[sheetOtstConst.INSULATING_JOINT],
                    "КЛАСС": item[sheetOtstConst.CLASS],
                    "КОД": item[sheetOtstConst.RAILWAY_CODE],
                    "КОДНАПРВ": item[sheetOtstConst.DIRECTION_CODE],
                    "КОДОТСТУП": item[sheetOtstConst.RETREAT_CODE],
                    "КОЛИЧЕСТВО": item[sheetOtstConst.COUNT],
                    "ЛИНИЯ": item[sheetOtstConst.LINE],
                    "М": item[sheetOtstConst.METER],
                    "МЕСЯЦ": item[sheetOtstConst.MONTH],
                    "МОСТ": item[sheetOtstConst.BRIDGE],
                    "ОБК": item[sheetOtstConst.RUNNING_IN],
                    "ОТСТУПЛЕНИЕ": item[sheetOtstConst.RETREAT_TITLE],
                    "ПС": item[sheetOtstConst.WAGON_NUMBER],
                    "ПУТЬ": item[sheetOtstConst.TRACK],
                    "ПЧ": item[sheetOtstConst.RAILWAY_DISTANCE],
                    "СК_ОГР_ГРУЗ": item[sheetOtstConst.FREIGHT_SPEED_RESTRICTION],           // "-" | number
                    "СК_ОГР_ПАСС": item[sheetOtstConst.PASSENGER_SPEED_RESTRICTION],           // "-" | number
                    "СК_УСТ_ГРУЗ": item[sheetOtstConst.FREIGHT_SPEED_ADVANCED],           // "-" | number
                    "СК_УСТ_ПАСС": item[sheetOtstConst.PASSENGER_SPEED_ADVANCED],           // "-" | number
                    "СТЕПЕНЬ": item[sheetOtstConst.DEGREE],
                    "СТРЕЛКА": item[sheetOtstConst.ARROW]
                });
            }
            // ------------------------- / Третьи и четвертые степени. Создадим обеъкт с нужными нам свойствами -----------------------



        }); // / otstData.forEach


        // -------------------------- заполним возвращаемый объект вычисленными данными ----------------------------
        returnedDataObject.secondDegrees = secondDegrees;
        returnedDataObject.secondCloseToThirdDegrees = secondCloseToThirdDegrees;
        returnedDataObject.thirdDegrees = thirdDegrees;
        returnedDataObject.fourthDegrees = fourthDegrees;
        returnedDataObject.thirdAndFourthDegrees = thirdAndFourthDegrees;
        console.log(thirdDegrees)
        // -------------------------- / заполним возвращаемый объект вычисленными данными --------------------------



        return returnedDataObject;

    }   // otstData => { }
);
// ------------------------- / расчитаем все данные для отчета которые нам нужны из листа "Отступления" ---------------------