import {
    WORK_BOOK_DATA
} from "./actionTypes";

/* в workBookDataObject лежат данные из листов Отступления и Оценка КМ в двух соответствующих объектах,
структура внутри каждого из этих объектов: массив объектов(один объект === одна строка в ексель) */
export const setWorkBookDataActionCreator = ( workBookDataObject ) => {
    return {
        type: WORK_BOOK_DATA,
        workBookDataObject
    }
};