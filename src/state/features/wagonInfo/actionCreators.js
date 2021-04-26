import {
    WAGON_FULL_NAME, IS_SUBMIT_BUTTON_WAGON_NAME_CLICKED
} from "./actionTypes";

/* при вводе во вкладке настройки номера вагона заносим информацию в стейт */
export const setWagonFullNameActionCreator = ( wagonFullName ) => {
    return {
        type: WAGON_FULL_NAME,
        wagonFullName
    }
};

/* Нажал ли пользователь кнопку подтверждения после ввода полного имени вагона во вкладке настройки */
export const setIsSubmitButtonWagonNameClickedActionCreator = ( boolVar ) => {
    return {
        type: IS_SUBMIT_BUTTON_WAGON_NAME_CLICKED,
        isSubmitButtonClicked: boolVar
    }
};