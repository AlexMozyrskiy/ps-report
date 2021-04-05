import { createSelector } from "reselect";
import { getUniquePch } from "../../../helpers/common/getUniquePch/getUniquePch";
import { sheetOtstConst, sheetOcKmConst } from "../../../CONSTS/sheetsHeaderConsts";
import { createThirdAndFourthDegreesAoA } from "../../../helpers/UI/aoaCreators/thirdAndFourthDegreesAoaCreator/createThirdAndFourthDegreesAoA";
import { calculateMagnitudeN } from "../../../helpers/common/calculateMagnitudeN/calculateMagnitudeN";
import { createEKASUIReportAoA } from "../../../helpers/UI/aoaCreators/EKASUIReportAoaCreator/createEKASUIReportAoA";

export const selectWorkBookOtstSheetData = (state) => {
    return state.workBookData.otstSheetData;
}

export const selectWorkBookOcKmSheetData = (state) => {
    return state.workBookData.ocKmSheetData;
}

export const selectIsWorkBookDataLoaded = (state) => {
    return state.workBookData.isWorkBookDataLoaded;
}

export const selectIsWorkBookDataLoading = (state) => {
    return state.workBookData.isWorkBookDataLoading;
}

export const selectReportForDay = (state) => {
    return state.workBookData.reportForDay;
}

export const selectMakeCalculation = (state) => {
    return state.workBookData.makeCalculation;
}



// ------------------------ расчитаем общие данные для многих таблиц, чтобы не пересчитывать их на каждой странице сайта при роутинге ------------------------
export const selectCalculatedCommonData = createSelector(
    [selectWorkBookOtstSheetData, selectWorkBookOcKmSheetData, selectReportForDay],
    (otstData, ocKmData, reportForDay) => {

        // Возвращаемый объект расчитанных данных
        let returnedDataObject = {};

        // вторые степени - Массив Объектов такой же по типу как и входной массив объектов
        let secondDegrees = [];

        // третьи степени - Массив Объектов такой же по типу как и входной массив объектов
        let thirdDegrees = [];

        // четвертые степени - Массив Объектов такой же по типу как и входной массив объектов
        let fourthDegrees = [];

        // Всего сужений за день - Массив Объектов такой же по типу как и входной массив объектов
        let narrowingsData = [];

        // Всего уширений за день - Массив Объектов такой же по типу как и входной массив объектов
        let wideningsData = [];

        // Всего уровней за день - Массив Объектов такой же по типу как и входной массив объектов
        let levelsData = [];

        // Всего перекосов за день - Массив Объектов такой же по типу как и входной массив объектов
        let reconsidersData = [];

        // Всего просадок за день - Массив Объектов такой же по типу как и входной массив объектов
        let drawdownsData = [];

        // Всего рихтовок за день - Массив Объектов такой же по типу как и входной массив объектов
        let planAnglesData = [];

        // для таблицы "Отчет в бальность ЕКАСУИ.xlsx" - Массив Объектов такой же по типу как и входной массив объектов
        let commonData = [];


        otstData.forEach(item => {                                          // для каждого объекта (строчки в excel)

            // ---------------- Общие условия для всех свойств для начала расчета -------------------
            if (item[sheetOtstConst.DAY] === +reportForDay && item[sheetOtstConst.EXCLUDE] === 0 && item[sheetOtstConst.ARROW] === 0 && +item[sheetOtstConst.DIRECTION_CODE] <= 99999 && item[sheetOtstConst.DEGREE] > 1) {
                // ------------------------- Вторые степени. Создадим обеъкт с нужными нам свойствами -------------------------
                if (item[sheetOtstConst.DEGREE] === 2 && item[sheetOtstConst.RETREAT_TITLE] !== "Кривая" && item[sheetOtstConst.RETREAT_TITLE] !== "ПрУ") {
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

                // ------------------------- Третьи степени. Создадим обеъкт с нужными нам свойствами -------------------------
                if (item[sheetOtstConst.DEGREE] === 3 && item[sheetOtstConst.RETREAT_TITLE] !== "Кривая" && item[sheetOtstConst.RETREAT_TITLE] !== "ПрУ") {
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
                if (item[sheetOtstConst.DEGREE] === 4 && item[sheetOtstConst.RETREAT_TITLE] !== "Кривая" && item[sheetOtstConst.RETREAT_TITLE] !== "ПрУ" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.л" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.п") {
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

                // ------------------------- Всего сужений за день. Создадим обеъкт с нужными нам свойствами -------------------------
                if (item[sheetOtstConst.RETREAT_TITLE] === "Суж") {
                    narrowingsData.push({
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
                // ------------------------- / Всего сужений за день. Создадим обеъкт с нужными нам свойствами -----------------------

                // ------------------------- Всего уширений за день. Создадим обеъкт с нужными нам свойствами -------------------------
                if (item[sheetOtstConst.RETREAT_TITLE] === "Уш") {
                    wideningsData.push({
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
                // ------------------------- / Всего уширений за день. Создадим обеъкт с нужными нам свойствами -----------------------

                // ------------------------- Всего уровней за день. Создадим обеъкт с нужными нам свойствами -------------------------
                if (item[sheetOtstConst.RETREAT_TITLE] === "У") {
                    levelsData.push({
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
                // ------------------------- / Всего уровней за день. Создадим обеъкт с нужными нам свойствами -----------------------

                // ------------------------- Всего перекосов за день. Создадим обеъкт с нужными нам свойствами -------------------------
                if (item[sheetOtstConst.RETREAT_TITLE] === "П") {
                    reconsidersData.push({
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
                // ------------------------- / Всего перекосов за день. Создадим обеъкт с нужными нам свойствами -----------------------

                // ------------------------- Всего просадок за день. Создадим обеъкт с нужными нам свойствами -------------------------
                if (item[sheetOtstConst.RETREAT_TITLE] === "Пр.Л" || item[sheetOtstConst.RETREAT_TITLE] === "Пр.П") {
                    drawdownsData.push({
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
                // ------------------------- / Всего просадок за день. Создадим обеъкт с нужными нам свойствами -----------------------

                // ------------------------- Всего рихтовок за день. Создадим обеъкт с нужными нам свойствами -------------------------
                if (item[sheetOtstConst.RETREAT_TITLE] === "Рст" || item[sheetOtstConst.RETREAT_TITLE] === "Р" || (item[sheetOtstConst.RETREAT_TITLE] === "Р.нр" && item[sheetOtstConst.DEGREE] === 4)) {
                    planAnglesData.push({
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
                // ------------------------- / Всего рихтовок за день. Создадим обеъкт с нужными нам свойствами -----------------------
            }
        });




        // -------------------- Подготовим данные для пребразования их в AoA ---------------------------------------------------
        const uniquePchArr = getUniquePch(ocKmData, reportForDay);              // массив с уникальными номерами ПЧ

        let otlKm = 0, xorKm = 0, UdKm = 0, neUdKm = 0, secondDegreesCount = 0, thirdDegreesCount = 0, fourthDegreesCount = 0;
        let narrowingTotalCount = 0, wideningTotalCount = 0, levelTotalCount = 0, reconsiderTotalCount = 0, drawdownTotalCount = 0, planAngleTotalCount = 0;
        let magnitudeN = 0;                                                   // величина Nуч


        uniquePchArr.forEach(distanceNumber => {                                     // для каждого уникального ПЧ

            // ----------------- Вычислим километры по видам (отл, хор ...) --------------------------------
            ocKmData.forEach(el => {                                            // для каждого объекта в листе оц км (строчки excel)
                if (distanceNumber === el[sheetOcKmConst.RAILWAY_DISTANCE]) {            // для каждого ПЧ посчитаем отл, хор ... километры
                    if (el[sheetOcKmConst.GRADE] === 5 && el[sheetOcKmConst.DAY] === +reportForDay) otlKm = +(otlKm + el[sheetOcKmConst.CHECKED_KILOMETERS]).toFixed(3);
                    if (el[sheetOcKmConst.GRADE] === 4 && el[sheetOcKmConst.DAY] === +reportForDay) xorKm = +(xorKm + el[sheetOcKmConst.CHECKED_KILOMETERS]).toFixed(3);
                    if (el[sheetOcKmConst.GRADE] === 3 && el[sheetOcKmConst.DAY] === +reportForDay) UdKm = +(UdKm + el[sheetOcKmConst.CHECKED_KILOMETERS]).toFixed(3);
                    if (el[sheetOcKmConst.GRADE] === 2 && el[sheetOcKmConst.DAY] === +reportForDay) neUdKm = +(neUdKm + el[sheetOcKmConst.CHECKED_KILOMETERS]).toFixed(3);
                }
            });
            // ----------------- / Вычислим километры по видам (отл, хор ...) ------------------------------

            // ---------------------------------------- Получим количество вторых степеней ... , сужений ... ------------------------------------------
            secondDegreesCount = secondDegrees.filter(item => item[sheetOtstConst.RAILWAY_DISTANCE] === distanceNumber).length; // количество вторых степеней текущей дистанции
            thirdDegreesCount = thirdDegrees.filter(item => item[sheetOtstConst.RAILWAY_DISTANCE] === distanceNumber).length;   // количество третьих степеней текущей дистанции
            fourthDegreesCount = fourthDegrees.filter(item => item[sheetOtstConst.RAILWAY_DISTANCE] === distanceNumber).length; // количество четвертых степеней текущей дистанции
            narrowingTotalCount = narrowingsData.filter(item => item[sheetOtstConst.RAILWAY_DISTANCE] === distanceNumber).length;  // количество сужений за день текущей дистанции
            wideningTotalCount = wideningsData.filter(item => item[sheetOtstConst.RAILWAY_DISTANCE] === distanceNumber).length;  // количество уширений за день текущей дистанции
            levelTotalCount = levelsData.filter(item => item[sheetOtstConst.RAILWAY_DISTANCE] === distanceNumber).length;  // количество уровней за день текущей дистанции
            reconsiderTotalCount = reconsidersData.filter(item => item[sheetOtstConst.RAILWAY_DISTANCE] === distanceNumber).length;  // количество перекосов за день текущей дистанции
            drawdownTotalCount = drawdownsData.filter(item => item[sheetOtstConst.RAILWAY_DISTANCE] === distanceNumber).length;  // количество просадок за день текущей дистанции
            planAngleTotalCount = planAnglesData.filter(item => item[sheetOtstConst.RAILWAY_DISTANCE] === distanceNumber).length;  // количество рихтовок за день текущей дистанции
            // ---------------------------------------- / Получим количество вторых степеней ... , сужений ... ----------------------------------------

            // -------------------- Вычислим величину Nуч ----------------------------------
            magnitudeN = calculateMagnitudeN(otlKm, xorKm, UdKm, neUdKm);       // Величина Nуч
            // -------------------- / Вычислим величину Nуч --------------------------------


            commonData.push({         // запишем результат вычислений в массив
                pch: distanceNumber, otlKm, xorKm, UdKm, neUdKm, secondDegreesCount, thirdDegreesCount, fourthDegreesCount, magnitudeN,
                narrowingTotalCount, wideningTotalCount, levelTotalCount, reconsiderTotalCount, drawdownTotalCount, planAngleTotalCount
            });
            otlKm = xorKm = UdKm = neUdKm = secondDegreesCount = thirdDegreesCount = fourthDegreesCount = 0;
        });
        // -------------------- / Подготовим данные для пребразования их в AoA -------------------------------------------------
        
        
        // -------------------------- заполним возвращаемый объект вычисленными данными ----------------------------
        returnedDataObject = commonData;
        // -------------------------- / заполним возвращаемый объект вычисленными данными --------------------------

        return returnedDataObject;
    }
);
// ------------------------ / расчитаем общие данные для многих таблиц, чтобы не пересчитывать их на каждой странице сайта при роутинге ----------------------








// ---------------------------------------------- расчитаем данные для отчета "1. 3 и 4 степени.xlsx" ----------------------------------------------
export const selectCalculatedDataThirdAndFourthDegrees = createSelector(
    [selectWorkBookOtstSheetData, selectReportForDay],
    (otstData, reportForDay) => {

        // Возвращаемый объект расчитанных данных
        let returnedDataObject = {};

        // третьи и четвертые степени для таблицы 3 и 4 степеней - Массив Объектов такой же по типу как и входной массив объектов
        let thirdAndFourthDegrees = [];

        // Массив массивов с 3 и 4 степенями - для формаирования книги "1. 3 и 4 степени.xlsx"
        let thirdAndFourthDegreesAoA = [];

        otstData.forEach(item => {                                          // для каждого объекта (строчки в excel)

            // ---------------- Общие условия для всех свойств для начала расчета -------------------
            if (item[sheetOtstConst.DAY] === +reportForDay && item[sheetOtstConst.EXCLUDE] === 0 && item[sheetOtstConst.ARROW] === 0 && +item[sheetOtstConst.DIRECTION_CODE] <= 99999 && item[sheetOtstConst.DEGREE] > 1) {
                // ------------------------- Третьи и четвертые степени степени. Создадим обеъкт (тип как в стейте) с нужными нам свойствами -------------------------
                if ((item[sheetOtstConst.DEGREE] === 4 || item[sheetOtstConst.DEGREE] === 3) && item[sheetOtstConst.RETREAT_TITLE] !== "Кривая" && item[sheetOtstConst.RETREAT_TITLE] !== "ПрУ" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.л" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.п") {
                    thirdAndFourthDegrees.push({
                        "EXCLUDE": item[sheetOtstConst.EXCLUDE],
                        "KM": item[sheetOtstConst.KILOMETER],
                        "PR_PREDUPR": item[sheetOtstConst.PR_PREDUPR],
                        "АМПЛИТУДА": Number.isNaN(item[sheetOtstConst.AMPLITUDE]) ? "-" : item[sheetOtstConst.AMPLITUDE],   // если будет неисправность с амплитудой не числом, не запишем ничего, в противном случае запишем числовую амплитуду
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
                // ------------------------- / Третьи и четвертые степени степени. Создадим обеъкт (тип как в стейте) с нужными нам свойствами -----------------------
            }
        });

        // ---------------- массив массивов для формаирования и аплоада отчетной книги по "1. 3 и 4 степени.xlsx" ------------------------
        thirdAndFourthDegreesAoA = createThirdAndFourthDegreesAoA(thirdAndFourthDegrees);
        // ---------------- / массив массивов для формаирования и аплоада отчетной книги по "1. 3 и 4 степени.xlsx" ----------------------

        // -------------------------- заполним возвращаемый объект вычисленными данными ----------------------------
        returnedDataObject.thirdAndFourthDegrees = thirdAndFourthDegrees;
        returnedDataObject.thirdAndFourthDegreesAoA = thirdAndFourthDegreesAoA;
        // -------------------------- / заполним возвращаемый объект вычисленными данными --------------------------

        return returnedDataObject;
    }
);
// ---------------------------------------------- / расчитаем данные для отчета "1. 3 и 4 степени.xlsx" --------------------------------------------





// ---------------------------------------------- расчитаем данные для отчета "Отчет в бальность ЕКАСУИ.xlsx" ----------------------------------------------
export const selectCalculatedDataEKASUIReport = createSelector(
    selectCalculatedCommonData,
    (commonData) => {

        // Возвращаемый объект расчитанных данных
        let returnedDataObject = {};

        let EKASUIReportAoA = [];
        
        // ---------------- массив массивов для формаирования и аплоада отчетной книги по "Отчет в бальность ЕКАСУИ.xlsx" ------------------------
        EKASUIReportAoA = createEKASUIReportAoA(commonData);
        // ---------------- / массив массивов для формаирования и аплоада отчетной книги по "Отчет в бальность ЕКАСУИ.xlsx" ----------------------
        
        
        // -------------------------- заполним возвращаемый объект вычисленными данными ----------------------------
        returnedDataObject.EKASUIReport = commonData;
        returnedDataObject.EKASUIReportAoA = EKASUIReportAoA;
        // -------------------------- / заполним возвращаемый объект вычисленными данными --------------------------

        return returnedDataObject;
    }
);
// ---------------------------------------------- / расчитаем данные для отчета "Отчет в бальность ЕКАСУИ.xlsx" --------------------------------------------