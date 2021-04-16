import {
    WORK_BOOK_2_DATA, IS_WORK_BOOK_2_DATA_LOADED,
    IS_WORK_BOOK_2_DATA_LOADING
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
    isWorkBook2DataLoaded: false,        // загрузились ли данные в стейт
    isWorkBook2DataLoading: false,       // загружаются ли данные в стейт по моменту
};

const workBook2DataReducer = (state = initialState, action) => {
    switch (action.type) {

        case WORK_BOOK_2_DATA: {
            const superState = {
                ...state,

                otstSheetData: action.workBook2DataObject.otstSheetData.map(item => {
                    return {
                        "EXCLUDE": +item[sheetOtstConst.EXCLUDE],
                        "KM": +item[sheetOtstConst.KILOMETER],
                        "PR_PREDUPR": +item[sheetOtstConst.PR_PREDUPR],
                        "UPDATTR": +item[sheetOtstConst.UPDATTR],
                        "АМПЛИТУДА": +item[sheetOtstConst.AMPLITUDE],
                        "БАЛЛ": +item[sheetOtstConst.SCORE],
                        "ВИД": item[sheetOtstConst.TYPE_OF_RETREAT],
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
                        "СТРЕЛКА": +item[sheetOtstConst.ARROW]
                    }

                }),

                ocKmSheetData: action.workBook2DataObject.ocKmSheetData.map(item => {
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

        case IS_WORK_BOOK_2_DATA_LOADED: {
            const superState = {
                ...state,
                isWorkBook2DataLoaded: action.isWorkBook2DataLoaded
            };
            return superState;
        }

        case IS_WORK_BOOK_2_DATA_LOADING: {
            const superState = {
                ...state,
                isWorkBook2DataLoading: action.isWorkBook2DataLoading
            };
            return superState;
        }

        default: return state;
    }
};

export default workBook2DataReducer;