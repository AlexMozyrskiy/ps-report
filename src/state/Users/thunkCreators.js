// import { usersAPI } from "../../DAL/users/api";
import {
    isButtonClickedActionCreator
} from "./actionCreators";


// export const getUsersThunkCreator = (currentPage = 1, usersPerPage = 10, turnOnTheButtonPreloader = false) => async (dispatch) => {

//     if(turnOnTheButtonPreloader) {                     // если мы делаем первый запрос: только перешли на страницу юзеров покажем общий прелоадер, если мы уже заходили и нажали кнопку внизу страницы загрузить еще юзеров покажем вместо кнопки лоадер кнопки, а не общий лоадер
//         dispatch(isButtonLoadMoreUsersClicked(true));
//     } else {
//         dispatch(setIsPreloaderActive(true));
//     }

//     const data = await usersAPI.getUsers(currentPage, usersPerPage);

//     if(data.totalCount) {
//         dispatch(setUsersArray(data.items, data.totalCount, data.error, turnOnTheButtonPreloader));
//         dispatch(setCurrentPage(currentPage));
//     }

//     dispatch(toogleRunUseEffect(false));

//     if(turnOnTheButtonPreloader) {
//         dispatch(isButtonLoadMoreUsersClicked(false));
//     } else {
//         dispatch(setIsPreloaderActive(false));
//     }
// }