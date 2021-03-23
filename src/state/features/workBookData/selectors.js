import { createSelector } from "reselect";

export const getWorkBookOtstSheetDataSelector =  (state) => {
    return state.workBookData.otstSheetData;
}

export const getWorkBookOcKmSheetDataSelector =  (state) => {
    return state.workBookData.ocKmSheetData;
}