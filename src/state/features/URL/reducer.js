import {
    IS_WE_ARE_ON_THE_WORK_TAB
} from "./actionTypes";

const initialState = {
    isWeAreOnTheWorkTab: false,           // находимся ли мы сейчас на закладке "Работа"
};

const URLReducer = (state = initialState, action) => {
    switch (action.type) {

        case IS_WE_ARE_ON_THE_WORK_TAB: {
            const superState = {
                ...state,
                isWeAreOnTheWorkTab: action.isWeAreOnTheWorkTab
            };
            return superState;
        }

        default: return state;
    }
};

export default URLReducer;