import {
    WAGON_FULL_NAME, IS_SUBMIT_BUTTON_WAGON_NAME_CLICKED
} from "./actionTypes";

const initialState = {
    wagonFullName: "",           // Полное имя вагона, например "ПС-025"
    isSubmitButtonClicked: false
};

const wagonInfoReducer = (state = initialState, action) => {
    switch (action.type) {

        case WAGON_FULL_NAME: {
            const superState = {
                ...state,
                wagonFullName: action.wagonFullName
            };
            return superState;
        }

        case IS_SUBMIT_BUTTON_WAGON_NAME_CLICKED: {
            const superState = {
                ...state,
                isSubmitButtonClicked: action.isSubmitButtonClicked
            };
            return superState;
        }

        default: return state;
    }
};

export default wagonInfoReducer;