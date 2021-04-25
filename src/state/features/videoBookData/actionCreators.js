import {
    VIDEO_BOOK_DATA, IS_VIDEO_BOOK_DATA_LOADED
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