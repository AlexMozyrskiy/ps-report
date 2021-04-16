import {
    WORK_BOOK_3_DATA, IS_WORK_BOOK_3_DATA_LOADED,
    IS_WORK_BOOK_3_DATA_LOADING,
} from "./actionTypes";

/* в workBook3DataObject лежат данные из листов Отступления и Оценка КМ в двух соответствующих объектах,
структура внутри каждого из этих объектов: массив объектов(один объект === одна строка в ексель) */
export const setWorkBook3DataActionCreator = ( workBook3DataObject ) => {
    return {
        type: WORK_BOOK_3_DATA,
        workBook3DataObject
    }
};

export const setIsWorkBook3DataLoadedActionCreator = ( boolVar ) => {                // загрузились ли данные в стейт
    return {
        type: IS_WORK_BOOK_3_DATA_LOADED,
        isWorkBook3DataLoaded: boolVar
    }
};

export const setIsWorkBook3DataLoadingActionCreator = ( boolVar ) => {                // загружаются ли данные в стейт по моменту
    return {
        type: IS_WORK_BOOK_3_DATA_LOADING,
        isWorkBook3DataLoading: boolVar
    }
};