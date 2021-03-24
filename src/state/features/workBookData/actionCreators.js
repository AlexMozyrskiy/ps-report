import {
    WORK_BOOK_DATA, IS_WORK_BOOK_DATA_LOADED,
    IS_WORK_BOOK_DATA_LOADING
} from "./actionTypes";

/* в workBookDataObject лежат данные из листов Отступления и Оценка КМ в двух соответствующих объектах,
структура внутри каждого из этих объектов: массив объектов(один объект === одна строка в ексель) */
export const setWorkBookDataActionCreator = ( workBookDataObject ) => {
    return {
        type: WORK_BOOK_DATA,
        workBookDataObject
    }
};

export const setIsWorkBookDataLoadedActionCreator = ( boolVar ) => {                // загрузились ли данные в стейт
    return {
        type: IS_WORK_BOOK_DATA_LOADED,
        isWorkBookDataLoaded: boolVar
    }
};

export const setIsWorkBookDataLoadingActionCreator = ( boolVar ) => {                // загружаются ли данные в стейт по моменту
    return {
        type: IS_WORK_BOOK_DATA_LOADING,
        isWorkBookDataLoading: boolVar
    }
};