import {
    WORK_BOOK_DATA, IS_WORK_BOOK_DATA_LOADED,
    IS_WORK_BOOK_DATA_LOADING, REPORT_FOR_DAY,
    MAKE_CALCULATION
} from "./actionTypes";

const initialState = {
    otstSheetData: [{
        "EXCLUDE": 0,
        "KM": 0,
        "PR_PREDUPR": 0,
        "АМПЛИТУДА": 0,
        "БАЛЛ": 0,
        "ВИД": 0,
        "ГОД": 0,
        "ДЕНЬ": 0,
        "ДЗ": 0,
        "ДЛИНА": 0,
        "ИС": 0,
        "КЛАСС": "",
        "КОД": 0,
        "КОДНАПРВ": 0,
        "КОДОТСТУП": 0,
        "КОЛИЧЕСТВО": 0,
        "ЛИНИЯ": "",
        "М": 0,
        "МЕСЯЦ": 0,
        "МОСТ": 0,
        "ОБК": 0,
        "ОТСТУПЛЕНИЕ": "",
        "ПС": 0,
        "ПУТЬ": 0,
        "ПЧ": 0,
        "СК_ОГР_ГРУЗ": 0,           // "-" | number
        "СК_ОГР_ПАСС": 0,           // "-" | number
        "СК_УСТ_ГРУЗ": 0,           // "-" | number
        "СК_УСТ_ПАСС": 0,           // "-" | number
        "СТЕПЕНЬ": 0,
        "СТРЕЛКА": 0
    }],
    ocKmSheetData: [{
        "KM": 0,
        "KOD_PREDUPR": 0,
        "M": 0,
        "БАЛЛ": 0,
        "ВИД": 0,
        "ГОД": 0,
        "ДЕНЬ": 0,
        "ДЛКИЛОМЕТРА": 0,
        "КАТЕГОРИЯ": 0,
        "КЛАСС": "",
        "КОДДОР": 0,
        "КОДНАПР": 0,
        "ЛИНИЯ": "",
        "МЕСЯЦ": 0,
        "НАПРАВЛЕНИЕ": "",
        "ОЦЕНКА": 0,
        "ПРОВЕРЕНО": 0,
        "ПС": 0,
        "ПУТЬ": 0,
        "ПЧ": 0,
        "СК_ОГР_C": 0,              // "-" | number
        "СК_ОГР_ГРУЗ": 0,           // "-" | number
        "СК_ОГР_ПАСС": 0,           // "-" | number
        "СК_ОГР_ПРЖ": 0,            // "-" | number
        "СК_ОГР_СПН": 0,            // "-" | number
        "СК_УСТ_C": 0,
        "СК_УСТ_ГРУЗ": 0,
        "СК_УСТ_ПАСС": 0,
        "СК_УСТ_СПН": 0
    }],
    isWorkBookDataLoaded: false,        // загрузились ли данные в стейт
    isWorkBookDataLoading: false,       // загружаются ли данные в стейт по моменту
    reportForDay: "",                   // пользователь вводит за какой день надо сделать отчет, нужен для фильтри при расчетах
    makeCalculation: false              // производить ли расчет в селекторе, будет переключаться на true в момент нажатия пользователем кнопки загрузить какой-либо отчет, и обратно на false  вмомент окончания загрузки отчета
};

const workBookDataReducers = (state = initialState, action) => {
    switch (action.type) {

        case WORK_BOOK_DATA: {
            const superState = {
                ...state,

                otstSheetData: action.workBookDataObject.otstSheetData.map(item => {
                    return {
                        "EXCLUDE": +item["EXCLUDE"],
                        "KM": +item["KM"],
                        "PR_PREDUPR": +item["PR_PREDUPR"],
                        "АМПЛИТУДА": +item["АМПЛИТУДА"],
                        "БАЛЛ": +item["БАЛЛ"],
                        "ВИД": item["ВИД"],
                        "ГОД": +item["ГОД"],
                        "ДЕНЬ": +item["ДЕНЬ"],
                        "ДЗ": item["ДЗ"],
                        "ДЛИНА": +item["ДЛИНА"],
                        "ИС": +item["ИС"],
                        "КЛАСС": item["КЛАСС"],
                        "КОД": +item["КОД"],
                        "КОДНАПРВ": +item["КОДНАПРВ"],
                        "КОДОТСТУП": +item["КОДОТСТУП"],
                        "КОЛИЧЕСТВО": +item["КОЛИЧЕСТВО"],
                        "ЛИНИЯ": item["ЛИНИЯ"],
                        "М": +item["М"],
                        "МЕСЯЦ": +item["МЕСЯЦ"],
                        "МОСТ": +item["МОСТ"],
                        "ОБК": item["ОБК"],
                        "ОТСТУПЛЕНИЕ": item["ОТСТУПЛЕНИЕ"],
                        "ПС": +item["ПС"],
                        "ПУТЬ": item["ПУТЬ"],
                        "ПЧ": +item["ПЧ"],
                        "СК_ОГР_ГРУЗ": item["СК_ОГР_ГРУЗ"],           // "-" | number
                        "СК_ОГР_ПАСС": item["СК_ОГР_ПАСС"],           // "-" | number
                        "СК_УСТ_ГРУЗ": item["СК_УСТ_ГРУЗ"],           // "-" | number
                        "СК_УСТ_ПАСС": item["СК_УСТ_ПАСС"],           // "-" | number
                        "СТЕПЕНЬ": +item["СТЕПЕНЬ"],
                        "СТРЕЛКА": +item["СТРЕЛКА"]
                    }

                }),

                ocKmSheetData: action.workBookDataObject.ocKmSheetData.map(item => {
                    return {
                        "KM": +item["KM"],
                        "KOD_PREDUPR": +item["KOD_PREDUPR"],
                        "M": +item["M"],
                        "БАЛЛ": +item["БАЛЛ"],
                        "ВИД": item["ВИД"],
                        "ГОД": +item["ГОД"],
                        "ДЕНЬ": +item["ДЕНЬ"],
                        "ДЛКИЛОМЕТРА": item["ДЛКИЛОМЕТРА"],
                        "КАТЕГОРИЯ": item["КАТЕГОРИЯ"],
                        "КЛАСС": item["КЛАСС"],
                        "КОДДОР": +item["КОДДОР"],
                        "КОДНАПР": +item["КОДНАПР"],
                        "ЛИНИЯ": item["ЛИНИЯ"],
                        "МЕСЯЦ": +item["МЕСЯЦ"],
                        "НАПРАВЛЕНИЕ": item["НАПРАВЛЕНИЕ"],
                        "ОЦЕНКА": +item["ОЦЕНКА"],
                        "ПРОВЕРЕНО": +item["ПРОВЕРЕНО"],
                        "ПС": +item["ПС"],
                        "ПУТЬ": item["ПУТЬ"],
                        "ПЧ": +item["ПЧ"],
                        "СК_ОГР_C": item["СК_ОГР_C"],              // "-" | number
                        "СК_ОГР_ГРУЗ": item["СК_ОГР_ГРУЗ"],           // "-" | number
                        "СК_ОГР_ПАСС": item["СК_ОГР_ПАСС"],           // "-" | number
                        "СК_ОГР_ПРЖ": item["СК_ОГР_ПРЖ"],            // "-" | number
                        "СК_ОГР_СПН": item["СК_ОГР_СПН"],            // "-" | number
                        "СК_УСТ_C": item["СК_УСТ_C"],
                        "СК_УСТ_ГРУЗ": item["СК_УСТ_ГРУЗ"],
                        "СК_УСТ_ПАСС": item["СК_УСТ_ПАСС"],
                        "СК_УСТ_СПН": item["СК_УСТ_СПН"]
                    }
                })
            };
            return superState;
        }

        case IS_WORK_BOOK_DATA_LOADED: {
            const superState = {
                ...state,
                isWorkBookDataLoaded: action.isWorkBookDataLoaded
            };
            return superState;
        }

        case IS_WORK_BOOK_DATA_LOADING: {
            const superState = {
                ...state,
                isWorkBookDataLoading: action.isWorkBookDataLoading
            };
            return superState;
        }

        case REPORT_FOR_DAY: {
            const superState = {
                ...state,
                reportForDay: action.reportForDay
            };
            return superState;
        }

        case MAKE_CALCULATION: {
            const superState = {
                ...state,
                makeCalculation: action.makeCalculation
            };
            return superState;
        }

        default: return state;
    }
};

export default workBookDataReducers;