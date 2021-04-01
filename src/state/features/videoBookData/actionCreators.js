import {
    VIDEO_BOOK_DATA, IS_VIDEO_BOOK_DATA_LOADED,
    IS_VIDEO_BOOK_DATA_LOADING, REPORT_FOR_DAY,
    MAKE_CALCULATION
} from "./actionTypes";

/* в videoBookDataObject лежат данные из книги выгруженной из программы АРМ-Видеоконтроль с помощью "ctrl+e",
структура внутри каждого из этих объектов: массив объектов(один объект === одна строка в ексель) */
export const setVideoBookDataActionCreator = ( videoBookDataObject ) => {
    return {
        type: VIDEO_BOOK_DATA,
        videoBookDataObject
    }
};

export const setIsVideoBookDataLoadedActionCreator = ( boolVar ) => {                // загрузились ли данные в стейт
    return {
        type: IS_VIDEO_BOOK_DATA_LOADED,
        isVideoBookDataLoaded: boolVar
    }
};

export const setIsVideoBookDataLoadingActionCreator = ( boolVar ) => {                // загружаются ли данные в стейт по моменту
    return {
        type: IS_VIDEO_BOOK_DATA_LOADING,
        isWorkBookDataLoading: boolVar
    }
};

export const setReportForDayActionCreator = ( day ) => {                // пользователь вводит за какой день надо сделать отчет, нужен для фильтри при расчетах
    return {
        type: REPORT_FOR_DAY,
        reportForDay: day
    }
};


// производить ли расчет в селекторе, будет переключаться на true 
// в момент нажатия пользователем кнопки загрузить какой-либо отчет, 
// и обратно на false  вмомент окончания загрузки отчета
export const setMakeCalculationActionCreator = ( boolVar ) => {
    return {
        type: MAKE_CALCULATION,
        makeCalculation: boolVar
    }
};