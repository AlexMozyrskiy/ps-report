import {
    setWorkBook2DataActionCreator, setIsWorkBook2DataLoadingActionCreator,
    setIsWorkBook2DataLoadedActionCreator
} from "./actionCreators";


export const setWorkBook2DataThunkCreator = (worBookData) => async (dispatch) => {
    dispatch(setIsWorkBook2DataLoadingActionCreator(true));                              // запишем в стейт, что мы загружаем данные в стейт, чтобы покахывать лоадер

    dispatch(setWorkBook2DataActionCreator(worBookData));                                // загрузим данные в стейт

    dispatch(setIsWorkBook2DataLoadingActionCreator(false));                             // запишем в стейт, что мы уже загрузили данные в стейт, чтобы убрать лоадер

    dispatch(setIsWorkBook2DataLoadedActionCreator(true));                               // данные загружены в стейт
}