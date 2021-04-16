import {
    setWorkBook3DataActionCreator, setIsWorkBook3DataLoadingActionCreator,
    setIsWorkBook3DataLoadedActionCreator
} from "./actionCreators";


export const setWorkBook3DataThunkCreator = (worBookData) => async (dispatch) => {
    dispatch(setIsWorkBook3DataLoadingActionCreator(true));                              // запишем в стейт, что мы загружаем данные в стейт, чтобы покахывать лоадер

    dispatch(setWorkBook3DataActionCreator(worBookData));                                // загрузим данные в стейт

    dispatch(setIsWorkBook3DataLoadingActionCreator(false));                             // запишем в стейт, что мы уже загрузили данные в стейт, чтобы убрать лоадер

    dispatch(setIsWorkBook3DataLoadedActionCreator(true));                               // данные загружены в стейт
}