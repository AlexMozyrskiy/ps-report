import {
    WORK_BOOK_DATA
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
        "ЛИНИЯ": "Тест",
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
    }]
};

const workBookDataReducers = (state = initialState, action) => {
    switch (action.type) {

        case WORK_BOOK_DATA: {
            const superState = {
                ...state,
                otstSheetData: action.workBookDataObject.otstSheetData,
                ocKmSheetData: action.workBookDataObject.ocKmSheetData
            };
            return superState;
        }

        default: return state;
    }
};

export default workBookDataReducers;