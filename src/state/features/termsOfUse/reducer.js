import {
    IS_TERMS_OF_USE_BUTTON_CLICKED, IS_USER_AGREES_WITH_TERMS_OF_USE
} from "./actionTypes";

const initialState = {
    isTermsOfUseButtonClicked: false,           // была ли нажата одна из кнопок (согласие или не согласие) на странице "Пользовательское соглашение"
    isUserAgreesWithTermsOfUse: false,          // согласился ли юзер с "Пользовательским соглашением"
    targetTimeStamp: 1620491898564
};

const termsOfUseReducer = (state = initialState, action) => {
    switch (action.type) {

        case IS_TERMS_OF_USE_BUTTON_CLICKED: {
            const superState = {
                ...state,
                isTermsOfUseButtonClicked: action.isTermsOfUseButtonClicked
            };
            return superState;
        }

        case IS_USER_AGREES_WITH_TERMS_OF_USE: {
            const superState = {
                ...state,
                isUserAgreesWithTermsOfUse: action.isUserAgreesWithTermsOfUse
            };
            return superState;
        }

        default: return state;
    }
};

export default termsOfUseReducer;