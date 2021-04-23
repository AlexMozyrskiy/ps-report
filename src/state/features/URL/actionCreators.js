import {
    IS_WE_ARE_ON_THE_WORK_TAB
} from "./actionTypes";

/* при нажатии на вкладку "Работа" запишем сюда true, в противном случае false */
export const setIsWeAreOnTheWorkTabActionCreator = ( booleanVar ) => {
    return {
        type: IS_WE_ARE_ON_THE_WORK_TAB,
        isWeAreOnTheWorkTab: booleanVar
    }
};