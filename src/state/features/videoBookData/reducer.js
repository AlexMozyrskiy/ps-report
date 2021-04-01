import {
    VIDEO_BOOK_DATA, IS_VIDEO_BOOK_DATA_LOADED,
    IS_VIDEO_BOOK_DATA_LOADING
} from "./actionTypes";

const initialState = {
    videoSheetData: [{
        "№": 0,
        "Объект": "",
        "П-Н": "",
        "Км": 0,
        "М": 0,
        "Сторона": "",
        "Параметр": "",
        "Тип": "",
        "Дефект": "",
        "Огр.скорости (км/ч)": "",
    }],
    isVideoBookDataLoaded: false,           // загрузились ли данные в стейт
    isVideoBookDataLoading: false           // загружаются ли данные в стейт по моменту
};

const videoBookDataReducer = (state = initialState, action) => {
    switch (action.type) {

        case VIDEO_BOOK_DATA: {
            const superState = {
                ...state,

                videoSheetData: action.videoBookDataObject.videoData.map(item => {
                    return {
                        "№": +item["№"],
                        "Объект": item["Объект"],
                        "П-Н": item["П-Н"],
                        "Км": +item["Км"],
                        "М": +item["М"],
                        "Сторона": item["Сторона"],
                        "Параметр": item["Параметр"],
                        "Тип": item["Тип"],
                        "Дефект": item["Дефект"],
                        "Огр.скорости": item["Огр.скорости (км/ч)"],
                    }
                }),
            };
            return superState;
        }

        case IS_VIDEO_BOOK_DATA_LOADED: {
            const superState = {
                ...state,
                isVideoBookDataLoaded: action.isVideoBookDataLoaded
            };
            return superState;
        }

        case IS_VIDEO_BOOK_DATA_LOADING: {
            const superState = {
                ...state,
                isVideoBookDataLoading: action.isVideoBookDataLoading
            };
            return superState;
        }

        default: return state;
    }
};

export default videoBookDataReducer;