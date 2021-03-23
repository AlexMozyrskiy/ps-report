import { createSelector } from "reselect";

export const getWorkBookOtstSheetDataSelector =  (state) => {
    return state.workBookData.otstSheetData;
}

export const getWorkBookOcKmSheetDataSelector =  (state) => {
    return state.workBookData.ocKmSheetData;
}

export const selectKmChecked = createSelector(                   // сколько провреено км
    getWorkBookOcKmSheetDataSelector,
    OcKmData => OcKmData.reduce((prevVaL, item) => {
        const km = +item["ПРОВЕРЕНО"];                          // приведем к числу
        const sum = km + Number(prevVaL);                       // приведем к числу
        return sum.toFixed(3);                                  // вернем исправленную сумму
    }, 0)
);