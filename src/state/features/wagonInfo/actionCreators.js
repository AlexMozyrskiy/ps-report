import {
    WAGON_FULL_NAME, INSPECTION_AREA
} from "./actionTypes";

/* при вводе во вкладке настройки номера вагона заносим информацию в стейт */
export const setWagonFullNameActionCreator = ( wagonFullName ) => {
    return {
        type: WAGON_FULL_NAME,
        wagonFullName
    }
};

/* Пользователь указывает участок проверки от станции к станции */
export const setInspectionAreaActionCreator = ( inspectionArea ) => {
    return {
        type: INSPECTION_AREA,
        inspectionArea
    }
};