import {
    WORK_BOOK_2_DATA, IS_WORK_BOOK_2_DATA_LOADED,
    IS_WORK_BOOK_2_DATA_LOADING,
} from "./actionTypes";

/* в workBook2DataObject лежат данные из листов Отступления и Оценка КМ в двух соответствующих объектах,
структура внутри каждого из этих объектов: массив объектов(один объект === одна строка в ексель) */
export const setWorkBook2DataActionCreator = ( workBook2DataObject ) => {
    return {
        type: WORK_BOOK_2_DATA,
        workBook2DataObject
    }
};

export const setIsWorkBook2DataLoadedActionCreator = ( boolVar ) => {                // загрузились ли данные в стейт
    return {
        type: IS_WORK_BOOK_2_DATA_LOADED,
        isWorkBook2DataLoaded: boolVar
    }
};

export const setIsWorkBook2DataLoadingActionCreator = ( boolVar ) => {                // загружаются ли данные в стейт по моменту
    return {
        type: IS_WORK_BOOK_2_DATA_LOADING,
        isWorkBook2DataLoading: boolVar
    }
};