import { createSelector } from "reselect";
import { getUniquePch } from "../../../helpers/common/getUniquePch/getUniquePch";

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
        const km = +item["ПРОВЕРЕНО"];                          // приведем к числу
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

        // Массив объектов каждый объект это информация отл хор уд неуд км по каждому уникальному ПЧ
        let otlXorUdNeudKmForEachUniquePchArr = [];

        ocKmData.forEach(item => {                                          // для каждого объекта (строчки в excel)

            // ------------------------------ Всего километров проверено -----------------------------------------------
            totalCheckedKilometers += Number(item["ПРОВЕРЕНО"]);            // расчиатем сумму текущую плюс предыдущую
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
            if (item["ДЕНЬ"] === +reportForDay && item["EXCLUDE"] === 0 && item["СТРЕЛКА"] === 0 && item["СТЕПЕНЬ"] === 2 && item["ОТСТУПЛЕНИЕ"] !== "Кривая" && item["ОТСТУПЛЕНИЕ"] !== "ПрУ") {
                secondDegrees.push({
                    "EXCLUDE": item["EXCLUDE"],
                    "KM": item["KM"],
                    "PR_PREDUPR": item["PR_PREDUPR"],
                    "АМПЛИТУДА": item["АМПЛИТУДА"],
                    "БАЛЛ": item["БАЛЛ"],
                    "ВИД": item["ВИД"],
                    "ГОД": item["ГОД"],
                    "ДЕНЬ": item["ДЕНЬ"],
                    "ДЗ": item["ДЗ"],
                    "ДЛИНА": item["ДЛИНА"],
                    "ИС": item["ИС"],
                    "КЛАСС": item["КЛАСС"],
                    "КОД": item["КОД"],
                    "КОДНАПРВ": item["КОДНАПРВ"],
                    "КОДОТСТУП": item["КОДОТСТУП"],
                    "КОЛИЧЕСТВО": item["КОЛИЧЕСТВО"],
                    "ЛИНИЯ": item["ЛИНИЯ"],
                    "М": item["М"],
                    "МЕСЯЦ": item["МЕСЯЦ"],
                    "МОСТ": item["МОСТ"],
                    "ОБК": item["ОБК"],
                    "ОТСТУПЛЕНИЕ": item["ОТСТУПЛЕНИЕ"],
                    "ПС": item["ПС"],
                    "ПУТЬ": item["ПУТЬ"],
                    "ПЧ": item["ПЧ"],
                    "СК_ОГР_ГРУЗ": item["СК_ОГР_ГРУЗ"],           // "-" | number
                    "СК_ОГР_ПАСС": item["СК_ОГР_ПАСС"],           // "-" | number
                    "СК_УСТ_ГРУЗ": item["СК_УСТ_ГРУЗ"],           // "-" | number
                    "СК_УСТ_ПАСС": item["СК_УСТ_ПАСС"],           // "-" | number
                    "СТЕПЕНЬ": item["СТЕПЕНЬ"],
                    "СТРЕЛКА": item["СТРЕЛКА"]
                });
            }
            // ------------------------- / Вторые степени. Создадим обеъкт с нужными нам свойствами -----------------------


            // ------------------------- Вторые близкие к тертьим степени. Создадим обеъкт с нужными нам свойствами -------------------------
            if (item["ДЕНЬ"] === +reportForDay && item["EXCLUDE"] === 0 && item["СТРЕЛКА"] === 0 && item["СТЕПЕНЬ"] === 2 && item["PR_PREDUPR"] === 1 && item["ОТСТУПЛЕНИЕ"] !== "Кривая" && item["ОТСТУПЛЕНИЕ"] !== "ПрУ") {
                secondCloseToThirdDegrees.push({
                    "EXCLUDE": item["EXCLUDE"],
                    "KM": item["KM"],
                    "PR_PREDUPR": item["PR_PREDUPR"],
                    "АМПЛИТУДА": item["АМПЛИТУДА"],
                    "БАЛЛ": item["БАЛЛ"],
                    "ВИД": item["ВИД"],
                    "ГОД": item["ГОД"],
                    "ДЕНЬ": item["ДЕНЬ"],
                    "ДЗ": item["ДЗ"],
                    "ДЛИНА": item["ДЛИНА"],
                    "ИС": item["ИС"],
                    "КЛАСС": item["КЛАСС"],
                    "КОД": item["КОД"],
                    "КОДНАПРВ": item["КОДНАПРВ"],
                    "КОДОТСТУП": item["КОДОТСТУП"],
                    "КОЛИЧЕСТВО": item["КОЛИЧЕСТВО"],
                    "ЛИНИЯ": item["ЛИНИЯ"],
                    "М": item["М"],
                    "МЕСЯЦ": item["МЕСЯЦ"],
                    "МОСТ": item["МОСТ"],
                    "ОБК": item["ОБК"],
                    "ОТСТУПЛЕНИЕ": item["ОТСТУПЛЕНИЕ"],
                    "ПС": item["ПС"],
                    "ПУТЬ": item["ПУТЬ"],
                    "ПЧ": item["ПЧ"],
                    "СК_ОГР_ГРУЗ": item["СК_ОГР_ГРУЗ"],           // "-" | number
                    "СК_ОГР_ПАСС": item["СК_ОГР_ПАСС"],           // "-" | number
                    "СК_УСТ_ГРУЗ": item["СК_УСТ_ГРУЗ"],           // "-" | number
                    "СК_УСТ_ПАСС": item["СК_УСТ_ПАСС"],           // "-" | number
                    "СТЕПЕНЬ": item["СТЕПЕНЬ"],
                    "СТРЕЛКА": item["СТРЕЛКА"]
                });
            }
            // ------------------------- / Вторые близкие к тертьим степени. Создадим обеъкт с нужными нам свойствами -----------------------


            // ------------------------- Третьи степени. Создадим обеъкт с нужными нам свойствами -------------------------
            if (item["ДЕНЬ"] === +reportForDay && item["EXCLUDE"] === 0 && item["СТРЕЛКА"] === 0 && item["СТЕПЕНЬ"] === 3 && item["ОТСТУПЛЕНИЕ"] !== "Кривая" && item["ОТСТУПЛЕНИЕ"] !== "ПрУ") {
                thirdDegrees.push({
                    "EXCLUDE": item["EXCLUDE"],
                    "KM": item["KM"],
                    "PR_PREDUPR": item["PR_PREDUPR"],
                    "АМПЛИТУДА": item["АМПЛИТУДА"],
                    "БАЛЛ": item["БАЛЛ"],
                    "ВИД": item["ВИД"],
                    "ГОД": item["ГОД"],
                    "ДЕНЬ": item["ДЕНЬ"],
                    "ДЗ": item["ДЗ"],
                    "ДЛИНА": item["ДЛИНА"],
                    "ИС": item["ИС"],
                    "КЛАСС": item["КЛАСС"],
                    "КОД": item["КОД"],
                    "КОДНАПРВ": item["КОДНАПРВ"],
                    "КОДОТСТУП": item["КОДОТСТУП"],
                    "КОЛИЧЕСТВО": item["КОЛИЧЕСТВО"],
                    "ЛИНИЯ": item["ЛИНИЯ"],
                    "М": item["М"],
                    "МЕСЯЦ": item["МЕСЯЦ"],
                    "МОСТ": item["МОСТ"],
                    "ОБК": item["ОБК"],
                    "ОТСТУПЛЕНИЕ": item["ОТСТУПЛЕНИЕ"],
                    "ПС": item["ПС"],
                    "ПУТЬ": item["ПУТЬ"],
                    "ПЧ": item["ПЧ"],
                    "СК_ОГР_ГРУЗ": item["СК_ОГР_ГРУЗ"],           // "-" | number
                    "СК_ОГР_ПАСС": item["СК_ОГР_ПАСС"],           // "-" | number
                    "СК_УСТ_ГРУЗ": item["СК_УСТ_ГРУЗ"],           // "-" | number
                    "СК_УСТ_ПАСС": item["СК_УСТ_ПАСС"],           // "-" | number
                    "СТЕПЕНЬ": item["СТЕПЕНЬ"],
                    "СТРЕЛКА": item["СТРЕЛКА"]
                });
            }
            // ------------------------- / Третьи степени. Создадим обеъкт с нужными нам свойствами -----------------------


            // ------------------------- Четвертые степени. Создадим обеъкт с нужными нам свойствами -------------------------
            if (item["ДЕНЬ"] === +reportForDay && item["EXCLUDE"] === 0 && item["СТРЕЛКА"] === 0 && item["СТЕПЕНЬ"] === 4 && item["ОТСТУПЛЕНИЕ"] !== "Кривая" && item["ОТСТУПЛЕНИЕ"] !== "ПрУ" && item["ОТСТУПЛЕНИЕ"] !== "Заз.л" && item["ОТСТУПЛЕНИЕ"] !== "Заз.п") {
                fourthDegrees.push({
                    "EXCLUDE": item["EXCLUDE"],
                    "KM": item["KM"],
                    "PR_PREDUPR": item["PR_PREDUPR"],
                    "АМПЛИТУДА": item["АМПЛИТУДА"],
                    "БАЛЛ": item["БАЛЛ"],
                    "ВИД": item["ВИД"],
                    "ГОД": item["ГОД"],
                    "ДЕНЬ": item["ДЕНЬ"],
                    "ДЗ": item["ДЗ"],
                    "ДЛИНА": item["ДЛИНА"],
                    "ИС": item["ИС"],
                    "КЛАСС": item["КЛАСС"],
                    "КОД": item["КОД"],
                    "КОДНАПРВ": item["КОДНАПРВ"],
                    "КОДОТСТУП": item["КОДОТСТУП"],
                    "КОЛИЧЕСТВО": item["КОЛИЧЕСТВО"],
                    "ЛИНИЯ": item["ЛИНИЯ"],
                    "М": item["М"],
                    "МЕСЯЦ": item["МЕСЯЦ"],
                    "МОСТ": item["МОСТ"],
                    "ОБК": item["ОБК"],
                    "ОТСТУПЛЕНИЕ": item["ОТСТУПЛЕНИЕ"],
                    "ПС": item["ПС"],
                    "ПУТЬ": item["ПУТЬ"],
                    "ПЧ": item["ПЧ"],
                    "СК_ОГР_ГРУЗ": item["СК_ОГР_ГРУЗ"],           // "-" | number
                    "СК_ОГР_ПАСС": item["СК_ОГР_ПАСС"],           // "-" | number
                    "СК_УСТ_ГРУЗ": item["СК_УСТ_ГРУЗ"],           // "-" | number
                    "СК_УСТ_ПАСС": item["СК_УСТ_ПАСС"],           // "-" | number
                    "СТЕПЕНЬ": item["СТЕПЕНЬ"],
                    "СТРЕЛКА": item["СТРЕЛКА"]
                });
            }
            // ------------------------- / Четвертые степени. Создадим обеъкт с нужными нам свойствами -----------------------

            
            // ------------------------- Третьи и четвертые степени. Создадим обеъкт с нужными нам свойствами -------------------------
            if (item["ДЕНЬ"] === +reportForDay && item["EXCLUDE"] === 0 && item["СТРЕЛКА"] === 0 && (item["СТЕПЕНЬ"] === 4 || item["СТЕПЕНЬ"] === 3) && item["ОТСТУПЛЕНИЕ"] !== "Кривая" && item["ОТСТУПЛЕНИЕ"] !== "ПрУ" && item["ОТСТУПЛЕНИЕ"] !== "Заз.л" && item["ОТСТУПЛЕНИЕ"] !== "Заз.п") {
                thirdAndFourthDegrees.push({
                    "EXCLUDE": item["EXCLUDE"],
                    "KM": item["KM"],
                    "PR_PREDUPR": item["PR_PREDUPR"],
                    "АМПЛИТУДА": item["АМПЛИТУДА"],
                    "БАЛЛ": item["БАЛЛ"],
                    "ВИД": item["ВИД"],
                    "ГОД": item["ГОД"],
                    "ДЕНЬ": item["ДЕНЬ"],
                    "ДЗ": item["ДЗ"],
                    "ДЛИНА": item["ДЛИНА"],
                    "ИС": item["ИС"],
                    "КЛАСС": item["КЛАСС"],
                    "КОД": item["КОД"],
                    "КОДНАПРВ": item["КОДНАПРВ"],
                    "КОДОТСТУП": item["КОДОТСТУП"],
                    "КОЛИЧЕСТВО": item["КОЛИЧЕСТВО"],
                    "ЛИНИЯ": item["ЛИНИЯ"],
                    "М": item["М"],
                    "МЕСЯЦ": item["МЕСЯЦ"],
                    "МОСТ": item["МОСТ"],
                    "ОБК": item["ОБК"],
                    "ОТСТУПЛЕНИЕ": item["ОТСТУПЛЕНИЕ"],
                    "ПС": item["ПС"],
                    "ПУТЬ": item["ПУТЬ"],
                    "ПЧ": item["ПЧ"],
                    "СК_ОГР_ГРУЗ": item["СК_ОГР_ГРУЗ"],           // "-" | number
                    "СК_ОГР_ПАСС": item["СК_ОГР_ПАСС"],           // "-" | number
                    "СК_УСТ_ГРУЗ": item["СК_УСТ_ГРУЗ"],           // "-" | number
                    "СК_УСТ_ПАСС": item["СК_УСТ_ПАСС"],           // "-" | number
                    "СТЕПЕНЬ": item["СТЕПЕНЬ"],
                    "СТРЕЛКА": item["СТРЕЛКА"]
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
        // -------------------------- / заполним возвращаемый объект вычисленными данными --------------------------



        return returnedDataObject;

    }   // otstData => { }
);
// ------------------------- / расчитаем все данные для отчета которые нам нужны из листа "Отступления" ---------------------