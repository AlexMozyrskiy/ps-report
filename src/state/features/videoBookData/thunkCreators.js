import {
    setVideoBookDataActionCreator,
    setIsVideoBookDataLoadedActionCreator
} from "./actionCreators";


export const setVideoBookDataThunkCreator = (worBookData) => async (dispatch) => {

    dispatch(setVideoBookDataActionCreator(worBookData));                                // загрузим данные в стейт


    dispatch(setIsVideoBookDataLoadedActionCreator(true));                               // данные загружены в стейт
}