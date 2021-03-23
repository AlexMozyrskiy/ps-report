import {
    IS_BUTTON_CLICKED
} from "./actionTypes";

const initialState = {
    isButtonClicked: false
};

const usersReducers = (state = initialState, action) => {
    switch (action.type) {

        case IS_BUTTON_CLICKED: {
            const superState = {
                ...state,
                isButtonClicked: action.isButtonClicked
            };
            return superState;
        }

        default: return state;
    }
};

export default usersReducers;