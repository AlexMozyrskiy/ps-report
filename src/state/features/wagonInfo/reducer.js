import {
    WAGON_FULL_NAME, INSPECTION_AREA
} from "./actionTypes";

const initialState = {
    wagonFullName: "",          // Полное имя вагона, например "ПС-025"
    inspectionArea: ""          // Пользователь указывает участок проверки от станции к станции ля использования в телеграмме
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

        case INSPECTION_AREA: {
            const superState = {
                ...state,
                inspectionArea: action.inspectionArea
            };
            return superState;
        }

        default: return state;
    }
};

export default wagonInfoReducer;