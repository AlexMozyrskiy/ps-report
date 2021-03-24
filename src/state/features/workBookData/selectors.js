import { createSelector } from "reselect";

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
    getWorkBookOcKmSheetDataSelector,
    ocKmData => {
        // Возвращаемый объект расчитанных данных
        let returnedDataObject = {};

        // Всего километров проверено
        let totalCheckedKilometers = 0;


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
    getWorkBookOtstSheetDataSelector,
    otstData => {
        // Возвращаемый объект расчитанных данных
        let returnedDataObject = {};

        // вторые близкие к третьим степени - Массив Объектов такой же по типу как и входной массив объектов
        let secondCloseToThirdDegrees = [];

        // третьи степени - Массив Объектов такой же по типу как и входной массив объектов
        let thirdDegrees = [];

        // четвертые степени - Массив Объектов такой же по типу как и входной массив объектов
        let fourthDegrees = [];


        otstData.forEach(item => {                                          // для каждого объекта (строчки в excel)
            if (item["EXCLUDE"] === 0 && item["СТРЕЛКА"] === 0 && item["СТЕПЕНЬ"] === 3 && item["PR_PREDUPR"] === 0) {
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
                    "КЛАСС": "КЛАСС",
                    "КОД": item["КОД"],
                    "КОДНАПРВ": item["КОДНАПРВ"],
                    "КОДОТСТУП": item["КОДОТСТУП"],
                    "КОЛИЧЕСТВО": item["КОЛИЧЕСТВО"],
                    "ЛИНИЯ": item["ЛИНИЯ"],
                    "М": item["М"],
                    "МЕСЯЦ": item["МЕСЯЦ"],
                    "МОСТ": item["МОСТ"],
                    "ОБК": item["ОБК"],
                    "ОТСТУПЛЕНИЕ": "ОТСТУПЛЕНИЕ",
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
        }); // / otstData.forEach

        // -------------------------- заполним возвращаемый объект вычисленными данными ----------------------------
        returnedDataObject.thirdDegrees = thirdDegrees;
        // -------------------------- / заполним возвращаемый объект вычисленными данными --------------------------
        return returnedDataObject;
    }
);
// ------------------------- / расчитаем все данные для отчета которые нам нужны из листа "Отступления" ---------------------