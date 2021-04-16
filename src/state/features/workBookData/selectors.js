import { createSelector } from "reselect";
import DB from "../../../DB/DB";
import { getRegionNumberByPchNumber } from "../../../helpers/common/getRegionNumberByPchNumber/getRegionNumberByPchNumber";
import { getUniqueNumbersFromArr } from "../../../helpers/common/getUniqueNumbersFromArr/getUniqueNumbersFromArr";
import { getUniquePch } from "../../../helpers/common/getUniquePch/getUniquePch";
import { sheetOtstConst, sheetOcKmConst } from "../../../CONSTS/sheetsHeaderConsts";
import { createThirdAndFourthDegreesAoA } from "../../../helpers/UI/aoaCreators/thirdAndFourthDegreesAoaCreator/createThirdAndFourthDegreesAoA";
import { calculateMagnitudeN } from "../../../helpers/common/calculateMagnitudeN/calculateMagnitudeN";
import { createEKASUIReportAoA } from "../../../helpers/UI/aoaCreators/EKASUIReportAoaCreator/createEKASUIReportAoA";
import { createMainTelegramAoA } from "../../../helpers/UI/aoaCreators/mainTelegramAoACreator/mainTelegramAoACreator";

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

export const selectReportForMonth = (state) => {
    return state.workBookData.reportForMonth;
}

export const selectReportForYear = (state) => {
    return state.workBookData.reportForYear;
}

export const selectMakeCalculation = (state) => {
    return state.workBookData.makeCalculation;
}



// ------------------------ расчитаем общие данные для многих таблиц, чтобы не пересчитывать их на каждой странице сайта при роутинге и не пересчитавыть в каждом селекторе ------------------------
export const selectCalculatedCommonData = createSelector(
    [selectWorkBookOtstSheetData, selectWorkBookOcKmSheetData, selectReportForDay],
    (otstData, ocKmData, reportForDay) => {

        // Возвращаемый объект расчитанных данных
        let returnedDataObject = {};

        // вторые степени - Массив Объектов такой же по типу как и входной массив объектов
        let secondDegrees = [];

        // вторые близкие к третьим степени - Массив Объектов такой же по типу как и входной массив объектов
        let secondCloseThirdDegrees = [];

        // вторые близкие к третьим степени в зоне искусственных сооружений - Массив Объектов такой же по типу как и входной массив объектов
        let artificialStructuresSecondCloseThirdDegrees = [];

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

        // Ограничения по геометрии за день - Массив Объектов такой же по типу как и входной массив объектов
        let speedLimits = [];

        // для всех таблиц, общая статистика (просто цифры), без конкретных отступлений (координата, станция и т.д.)
        // - Массив Объектов
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

                // ------------------------- Вторые близкие к третьим степени. Создадим обеъкт с нужными нам свойствами -------------------------
                if (item[sheetOtstConst.DEGREE] === 2 && item[sheetOtstConst.PR_PREDUPR] === 1 && item[sheetOtstConst.RETREAT_TITLE] !== "Кривая" && item[sheetOtstConst.RETREAT_TITLE] !== "ПрУ") {
                    secondCloseThirdDegrees.push({
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
                // ------------------------- / Вторые близкие к третьим степени. Создадим обеъкт с нужными нам свойствами -----------------------

                // ------------------------- Вторые близкие к третьим степени в зоне искусственных сооружений. Создадим обеъкт с нужными нам свойствами -------------------------
                if (item[sheetOtstConst.DEGREE] === 2 && item[sheetOtstConst.PR_PREDUPR] === 1 && item[sheetOtstConst.BRIDGE] === 1 && item[sheetOtstConst.RETREAT_TITLE] !== "Кривая" && item[sheetOtstConst.RETREAT_TITLE] !== "ПрУ") {
                    artificialStructuresSecondCloseThirdDegrees.push({
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
                // ------------------------- / Вторые близкие к третьим степени. Создадим обеъкт с нужными нам свойствами -----------------------

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

                // ------------------------- Ограничений скорости по геометрии за день. Создадим обеъкт с нужными нам свойствами -------------------------
                if ((item[sheetOtstConst.PASSENGER_SPEED_RESTRICTION] !== "-" || item[sheetOtstConst.FREIGHT_SPEED_RESTRICTION] !== "-") && (item[sheetOtstConst.RETREAT_TITLE] !== "Заз.л" || item[sheetOtstConst.RETREAT_TITLE] !== "Заз.п")) {
                    speedLimits.push({
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
                // ------------------------- / Ограничений скорости по геометрии за день. Создадим обеъкт с нужными нам свойствами -----------------------
            }
        });




        // -------------------- Подготовим данные для пребразования их в AoA ---------------------------------------------------
        const uniquePchArr = getUniquePch(ocKmData, reportForDay);              // массив с уникальными номерами ПЧ

        let otlKm = 0, xorKm = 0, UdKm = 0, neUdKm = 0, secondDegreesCount = 0, secondCloseThirdDegreesCount = 0,
            thirdDegreesCount = 0, artificialStructuresSecondCloseThirdDegreesCount = 0, fourthDegreesCount = 0;
        let narrowingTotalCount = 0, wideningTotalCount = 0, levelTotalCount = 0, reconsiderTotalCount = 0, drawdownTotalCount = 0, planAngleTotalCount = 0;
        let magnitudeN = 0;                                                   // величина Nуч
        let tracks = [];                                                      // миссив из уникальных проверенных путей


        uniquePchArr.forEach(distanceNumber => {                                     // для каждого уникального ПЧ

            // ----------------- Вычислим километры по видам (отл, хор ...) --------------------------------
            ocKmData.forEach(el => {                                            // для каждого объекта в листе оц км (строчки excel)
                if (distanceNumber === el[sheetOcKmConst.RAILWAY_DISTANCE]) {            // для каждого ПЧ посчитаем отл, хор ... километры
                    if (el[sheetOcKmConst.GRADE] === 5 && el[sheetOcKmConst.DAY] === +reportForDay) otlKm = +(otlKm + el[sheetOcKmConst.CHECKED_KILOMETERS]).toFixed(3);
                    if (el[sheetOcKmConst.GRADE] === 4 && el[sheetOcKmConst.DAY] === +reportForDay) xorKm = +(xorKm + el[sheetOcKmConst.CHECKED_KILOMETERS]).toFixed(3);
                    if (el[sheetOcKmConst.GRADE] === 3 && el[sheetOcKmConst.DAY] === +reportForDay) UdKm = +(UdKm + el[sheetOcKmConst.CHECKED_KILOMETERS]).toFixed(3);
                    if (el[sheetOcKmConst.GRADE] === 2 && el[sheetOcKmConst.DAY] === +reportForDay) neUdKm = +(neUdKm + el[sheetOcKmConst.CHECKED_KILOMETERS]).toFixed(3);
                }
                // --------- массив уникальных путей по которым ехали ------------------
                if(!tracks.includes(el[sheetOcKmConst.TRACK]) && el[sheetOcKmConst.DAY] === +reportForDay) tracks.push(el[sheetOcKmConst.TRACK]);           // если в массиве уникальных путей нет текущего пути запушим его туда
                // --------- / массив уникальных путей по которым ехали ----------------
            });
            // ----------------- / Вычислим километры по видам (отл, хор ...) ------------------------------

            // ---------------------------------------- Получим количество вторых степеней ... , сужений ... ------------------------------------------
            secondDegreesCount = secondDegrees.filter(item => item[sheetOtstConst.RAILWAY_DISTANCE] === distanceNumber).length; // количество вторых степеней текущей дистанции
            secondCloseThirdDegreesCount = secondCloseThirdDegrees.filter(item => item[sheetOtstConst.RAILWAY_DISTANCE] === distanceNumber).length; // количество вторых близких к третьим степеней текущей дистанции
            artificialStructuresSecondCloseThirdDegreesCount = artificialStructuresSecondCloseThirdDegrees.filter(item => item[sheetOtstConst.RAILWAY_DISTANCE] === distanceNumber).length; // количество вторых близких к третьим степеней в зоне ИССО текущей дистанции
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
                pch: distanceNumber, regionNumber: getRegionNumberByPchNumber(DB, distanceNumber), otlKm, xorKm, UdKm, neUdKm, secondDegreesCount,
                secondCloseThirdDegreesCount, artificialStructuresSecondCloseThirdDegreesCount,
                thirdDegreesCount, fourthDegreesCount, magnitudeN, narrowingTotalCount, wideningTotalCount, levelTotalCount, reconsiderTotalCount,
                drawdownTotalCount, planAngleTotalCount, speedLimits
            });
            otlKm = xorKm = UdKm = neUdKm = secondDegreesCount = thirdDegreesCount = fourthDegreesCount =
                artificialStructuresSecondCloseThirdDegreesCount = secondCloseThirdDegreesCount = 0;
        });
        // -------------------- / Подготовим данные для пребразования их в AoA -------------------------------------------------

        // ------------------------- Даты ----------------------------
        const day = ocKmData[0][sheetOcKmConst.DAY] < 10 ? `0${ocKmData[0][sheetOcKmConst.DAY]}` : ocKmData[0][sheetOcKmConst.DAY];         // текущий день, если меньше 10 добавим 0 в начало
        const month = ocKmData[0][sheetOcKmConst.MONTH] < 10 ? `0${ocKmData[0][sheetOcKmConst.MONTH]}` : ocKmData[0][sheetOcKmConst.MONTH]; // текущий месяц, если меньше 10 добавим 0 в начало
        const year = ocKmData[0][sheetOcKmConst.YEAR];                                                                                      // текущий год
        // ------------------------- / Даты --------------------------


        // ---------------------------------------- Тип проверки, рабочая, контрольная ... ------------------------------
        let typeOfCheck;
        if(ocKmData[0][sheetOcKmConst.TYPE_OF_CHECK] === 0) {
            typeOfCheck = "Рабочая";
        } else if(ocKmData[0][sheetOcKmConst.TYPE_OF_CHECK] === 1) {
            typeOfCheck = "Контрольная";
        } else if(ocKmData[0][sheetOcKmConst.TYPE_OF_CHECK] === 2) {
            typeOfCheck = "Дополнительная";
        }
        // ---------------------------------------- / Тип проверки, рабочая, контрольная ... ----------------------------



        // -------------------------- заполним возвращаемый объект вычисленными данными ----------------------------
        returnedDataObject.generalStatistics = commonData;                  // общая статистика (просто цифры), без конкретных отстеплений (координата, станция и т.д.)
        returnedDataObject.uniquePch = uniquePchArr;                        // уникальные ПЧ
        returnedDataObject.uniqueRegions = getUniqueNumbersFromArr(commonData.map(item => item.regionNumber));  // уникальные регионы
        returnedDataObject.uniqueTracks = tracks;                                                               // массив с уникальными путями
        returnedDataObject.date = `${day}.${month}.${year}`;                // текущая дата
        returnedDataObject.typeOfCheck = typeOfCheck;
        // -------------------------- / заполним возвращаемый объект вычисленными данными --------------------------

        return returnedDataObject;
    }
);
// ------------------------ / расчитаем общие данные для многих таблиц, чтобы не пересчитывать их на каждой странице сайта при роутинге и не пересчитавыть в каждом селекторе ----------------------








// ---------------------------------------------- расчитаем данные для отчета "1. 3 и 4 степени.xlsx" ----------------------------------------------
export const selectCalculatedDataThirdAndFourthDegrees = createSelector(
    [selectWorkBookOtstSheetData, selectReportForDay],
    (otstData, reportForDay) => {

        // Возвращаемый объект расчитанных данных
        let returnedDataObject = {};

        // третьи и четвертые степени для таблицы 3 и 4 степеней - Массив Объектов такой же по типу как и массив объектов в стейте
        let thirdAndFourthDegreesLikeInStateAoO = [];

        // Массив массивов с 3 и 4 степенями - для формаирования книги "1. 3 и 4 степени.xlsx"
        let thirdAndFourthDegreesAoA = [];

        otstData.forEach(item => {                                          // для каждого объекта (строчки в excel)

            // ---------------- Общие условия для всех свойств для начала расчета -------------------
            if (item[sheetOtstConst.DAY] === +reportForDay && item[sheetOtstConst.EXCLUDE] === 0 && item[sheetOtstConst.ARROW] === 0 && +item[sheetOtstConst.DIRECTION_CODE] <= 99999 && item[sheetOtstConst.DEGREE] > 1) {
                // ------------------------- Третьи и четвертые степени степени. Создадим обеъкт (тип как в стейте) с нужными нам свойствами -------------------------
                if ((item[sheetOtstConst.DEGREE] === 4 || item[sheetOtstConst.DEGREE] === 3) && item[sheetOtstConst.RETREAT_TITLE] !== "Кривая" && item[sheetOtstConst.RETREAT_TITLE] !== "ПрУ" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.л" && item[sheetOtstConst.RETREAT_TITLE] !== "Заз.п") {
                    thirdAndFourthDegreesLikeInStateAoO.push({
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
        thirdAndFourthDegreesAoA = createThirdAndFourthDegreesAoA(thirdAndFourthDegreesLikeInStateAoO);
        // ---------------- / массив массивов для формаирования и аплоада отчетной книги по "1. 3 и 4 степени.xlsx" ----------------------

        // -------------------------- заполним возвращаемый объект вычисленными данными ----------------------------
        returnedDataObject.thirdAndFourthDegreesLikeInStateAoO = thirdAndFourthDegreesLikeInStateAoO;
        returnedDataObject.thirdAndFourthDegreesAoA = thirdAndFourthDegreesAoA;
        debugger
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
        EKASUIReportAoA = createEKASUIReportAoA(commonData.generalStatistics);
        // ---------------- / массив массивов для формаирования и аплоада отчетной книги по "Отчет в бальность ЕКАСУИ.xlsx" ----------------------


        // -------------------------- заполним возвращаемый объект вычисленными данными ----------------------------
        returnedDataObject.EKASUIReport = commonData.generalStatistics;
        returnedDataObject.EKASUIReportAoA = EKASUIReportAoA;
        // -------------------------- / заполним возвращаемый объект вычисленными данными --------------------------

        return returnedDataObject;
    }
);
// ---------------------------------------------- / расчитаем данные для отчета "Отчет в бальность ЕКАСУИ.xlsx" --------------------------------------------



// ---------------------------------------------- расчитаем данные для отчета ежедневной телеграммы ----------------------------------------------
export const selectCalculatedDataMainTelegram = createSelector(
    selectCalculatedCommonData,
    (commonData) => {
        // Возвращаемый объект расчитанных данных
        let returnedDataObject = {};

        // Массив массивов с информацией для преобразования ее в xlsx и аплоада юзером - для формаирования книги "Основная Телеграмма.xlsx"
        let mainTelegramAoA = [];

        // ---------------- массив массивов для формаирования и аплоада отчетной книги по "Основная Телеграмма.xlsx" ------------------------
        mainTelegramAoA = createMainTelegramAoA(commonData);
        // ---------------- / массив массивов для формаирования и аплоада отчетной книги по "Основная Телеграмма.xlsx" ----------------------


        // -------------------------- заполним возвращаемый объект вычисленными данными ----------------------------
        returnedDataObject.mainTelegram = commonData;
        returnedDataObject.mainTelegramAoA = mainTelegramAoA;
        // -------------------------- / заполним возвращаемый объект вычисленными данными --------------------------

        return returnedDataObject;
    }
);
// ---------------------------------------------- / расчитаем данные для отчета ежедневной телеграммы --------------------------------------------
