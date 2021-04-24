import {
    WORK_BOOK_DATA, IS_WORK_BOOK_DATA_LOADED,
    IS_WORK_BOOK_DATA_LOADING, REPORT_FOR_DATE,
    MAKE_CALCULATION
} from "./actionTypes";
import { sheetOtstConst } from "../../../CONSTS/sheetsHeaderConsts";

const initialState = {
    otstSheetData: [{
        "EXCLUDE": 0,
        "KM": 0,
        "PR_PREDUPR": 0,
        "UPDATTR": 0,
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
        "HOPMA": 0,
        "+": 0,
        "-": 0,
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
        "СТРЕЛКА": 0,
        "УСЛРАСЧЕТА": 0
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
    reportForMonth: "",                   // пользователь вводит за какой месяц надо сделать отчет, нужен для фильтри при расчетах
    reportForYear: "",                   // пользователь вводит за какой год надо сделать отчет, нужен для фильтри при расчетах
    makeCalculation: false              // производить ли расчет в селекторе, будет переключаться на true в момент нажатия пользователем кнопки загрузить какой-либо отчет, и обратно на false  вмомент окончания загрузки отчета
};

const workBookDataReducers = (state = initialState, action) => {
    switch (action.type) {

        case WORK_BOOK_DATA: {
            const superState = {
                ...state,

                otstSheetData: action.workBookDataObject.otstSheetData.map(item => {
                    return {
                        "EXCLUDE": +item[sheetOtstConst.EXCLUDE],
                        "KM": +item[sheetOtstConst.KILOMETER],
                        "PR_PREDUPR": +item[sheetOtstConst.PR_PREDUPR],
                        "UPDATTR": +item[sheetOtstConst.UPDATTR],
                        "АМПЛИТУДА": isNaN(item[sheetOtstConst.AMPLITUDE]) ? "" : +item[sheetOtstConst.AMPLITUDE],
                        "БАЛЛ": +item[sheetOtstConst.SCORE],
                        "ВИД": item[sheetOtstConst.TYPE_OF_CHECK],
                        "ГОД": +item[sheetOtstConst.YEAR],
                        "ДЕНЬ": +item[sheetOtstConst.DAY],
                        "ДЗ": item[sheetOtstConst.DZ],
                        "ДЛИНА": +item[sheetOtstConst.LENGTH_OF_RETREAT],
                        "ИС": +item[sheetOtstConst.INSULATING_JOINT],
                        "КЛАСС": item[sheetOtstConst.CLASS],
                        "КОД": +item[sheetOtstConst.RAILWAY_CODE],
                        "КОДНАПРВ": +item[sheetOtstConst.DIRECTION_CODE],
                        "КОДОТСТУП": +item[sheetOtstConst.RETREAT_CODE],
                        "КОЛИЧЕСТВО": +item[sheetOtstConst.COUNT],
                        "ЛИНИЯ": item[sheetOtstConst.LINE],
                        "М": +item[sheetOtstConst.METER],
                        "МЕСЯЦ": +item[sheetOtstConst.MONTH],
                        "МОСТ": +item[sheetOtstConst.BRIDGE],
                        "HOPMA": +item[sheetOtstConst.NORMAL],
                        "+": +item[sheetOtstConst.PLUS],
                        "-": +item[sheetOtstConst.MINUS],
                        "ОБК": item[sheetOtstConst.RUNNING_IN],
                        "ОТСТУПЛЕНИЕ": item[sheetOtstConst.RETREAT_TITLE],
                        "ПС": +item[sheetOtstConst.WAGON_NUMBER],
                        "ПУТЬ": item[sheetOtstConst.TRACK],
                        "ПЧ": +item[sheetOtstConst.RAILWAY_DISTANCE],
                        "СК_ОГР_ГРУЗ": item[sheetOtstConst.FREIGHT_SPEED_RESTRICTION],           // "-" | number
                        "СК_ОГР_ПАСС": item[sheetOtstConst.PASSENGER_SPEED_RESTRICTION],           // "-" | number
                        "СК_УСТ_ГРУЗ": item[sheetOtstConst.FREIGHT_SPEED_ADVANCED],           // "-" | number
                        "СК_УСТ_ПАСС": item[sheetOtstConst.PASSENGER_SPEED_ADVANCED],           // "-" | number
                        "СТЕПЕНЬ": +item[sheetOtstConst.DEGREE],
                        "СТРЕЛКА": +item[sheetOtstConst.ARROW],
                        "УСЛРАСЧЕТА": +item[sheetOtstConst.CONDITIONS_FOR_CALCULATING]
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

        case REPORT_FOR_DATE: {
            const superState = {
                ...state,
                reportForDay: action.reportForDay,
                reportForMonth: action.reportForMonth,
                reportForYear: action.reportForYear
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