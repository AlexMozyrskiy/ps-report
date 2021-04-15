import {
    IS_TERMS_OF_USE_BUTTON_CLICKED, IS_USER_AGREES_WITH_TERMS_OF_USE,
} from "./actionTypes";

/* была ли нажата одна из кнопок (согласие или не согласие) на странице "Пользовательское соглашение" */
export const setIsTermsOfUseButtonClickedActionCreator = ( booleanVar ) => {
    return {
        type: IS_TERMS_OF_USE_BUTTON_CLICKED,
        isTermsOfUseButtonClicked: booleanVar
    }
};

/* согласился ли юзер с "Пользовательским соглашением" */
export const setIsUserAgreesWithTermsOfUseActionCreator = ( booleanVar ) => {
    return {
        type: IS_USER_AGREES_WITH_TERMS_OF_USE,
        isUserAgreesWithTermsOfUse: booleanVar
    }
};