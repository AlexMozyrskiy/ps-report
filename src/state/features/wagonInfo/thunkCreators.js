// import {
//     setVideoBookDataActionCreator, setIsVideoBookDataLoadingActionCreator,
//     setIsVideoBookDataLoadedActionCreator
// } from "./actionCreators";


// export const setVideoBookDataThunkCreator = (worBookData) => async (dispatch) => {
//     dispatch(setIsVideoBookDataLoadingActionCreator(true));                              // запишем в стейт, что мы загружаем данные в стейт, чтобы покахывать лоадер

//     dispatch(setVideoBookDataActionCreator(worBookData));                                // загрузим данные в стейт

//     dispatch(setIsVideoBookDataLoadingActionCreator(false));                             // запишем в стейт, что мы уже загрузили данные в стейт, чтобы убрать лоадер

//     dispatch(setIsVideoBookDataLoadedActionCreator(true));                               // данные загружены в стейт
// }