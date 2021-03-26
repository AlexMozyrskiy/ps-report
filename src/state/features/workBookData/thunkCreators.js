import {
    setWorkBookDataActionCreator, setIsWorkBookDataLoadingActionCreator,
    setIsWorkBookDataLoadedActionCreator
} from "./actionCreators";


export const setWorkBookDataThunkCreator = (worBookData) => async (dispatch) => {
    dispatch(setIsWorkBookDataLoadingActionCreator(true));                              // запишем в стейт, что мы загружаем данные в стейт, чтобы покахывать лоадер

    dispatch(setWorkBookDataActionCreator(worBookData));                                // загрузим данные в стейт

    dispatch(setIsWorkBookDataLoadingActionCreator(false));                             // запишем в стейт, что мы уже загрузили данные в стейт, чтобы убрать лоадер

    dispatch(setIsWorkBookDataLoadedActionCreator(true));                               // данные загружены в стейт
}