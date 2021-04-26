import {
    VIDEO_BOOK_DATA, IS_VIDEO_BOOK_DATA_LOADED
} from "./actionTypes";
import { sheetVideoConst } from "../../../CONSTS/sheetsHeaderConsts";
import { replaceCommasWithPeriodsInANumber } from "../../../helpers/common/replaceCommasWithPeriodsInANumber/replaceCommasWithPeriodsInANumber";

const initialState = {
    videoSheetData: [{
        "Номер записи": 0,
        "Дата проезда": "",
        "КОД Направления (цифрами)": 0,
        "Путь": 0,
        "КМ": 0,
        "М": 0,
        "Нить": "",
        "КОД Замчания (цифрами)": 0,
        "Накладка в стыке": "",
        "Уст Скорость": "",
        "Огр. скорости": "",
        "Величина (только цифра, без мм)": 0,
        "Радиус кривой": "",
        "Подрельсовое основание дерево/бетон": "",
        "Тип пути (зв./ бп)": ""
    }],
    isVideoBookDataLoaded: false,           // загрузились ли данные в стейт
};

const videoBookDataReducer = (state = initialState, action) => {
    switch (action.type) {

        case VIDEO_BOOK_DATA: {
            const superState = {
                ...state,

                videoSheetData: action.videoBookDataObject.videoData.map(item => {
                    return {
                        "Номер записи": +item[sheetVideoConst.SEQUENTIAL_NUMBER],
                        "Дата проезда": item[sheetVideoConst.DATE],
                        "КОД Направления (цифрами)": +item[sheetVideoConst.DIRECTION_CODE],
                        "Путь": item[sheetVideoConst.TRACK],
                        "КМ": +item[sheetVideoConst.KILOMETER],
                        "М": +item[sheetVideoConst.METER],
                        "Нить": item[sheetVideoConst.RAIL_THREAD],
                        "КОД Замчания (цифрами)": +item[sheetVideoConst.RETREAT_CODE],
                        "Накладка в стыке": item[sheetVideoConst.NUMBER_OF_HOLES_IN_LINING],
                        "Уст Скорость": item[sheetVideoConst.ADVENCED_SPEED],
                        "Огр. скорости": item[sheetVideoConst.RESTRICTION_SPEED],
                        "Величина (только цифра, без мм)": +replaceCommasWithPeriodsInANumber(item[sheetVideoConst.RETREAT_AMOUNT]),
                        "Радиус кривой": item[sheetVideoConst.CURVE_RADIUS],
                        "Подрельсовое основание дерево/бетон": item[sheetVideoConst.UNDER_RAIL_BASE],
                        "Тип пути (зв./ бп)": item[sheetVideoConst.TRACK_TYPE]
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

        default: return state;
    }
};

export default videoBookDataReducer;