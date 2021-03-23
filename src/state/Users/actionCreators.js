import {
    IS_BUTTON_CLICKED
} from "./actionTypes";

export const isButtonClickedActionCreator = (booleanVar) => ({type: IS_BUTTON_CLICKED, isButtonClicked: booleanVar});