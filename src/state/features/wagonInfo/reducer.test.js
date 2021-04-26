// import { followUser } from "./actionCreators";
// import usersReducers from "./reducer";

// /* Тест при нажатии на кнопку Add Friend в usersPage в стейте меняется followed при совпалении переданного id и id в обеъкте юзера который в редюсере в редюсере usersReducers на true */
// let initialState = {
//     items: [
//         {
//             name: null,
//             id: 1,
//             uniqueUrlName: null,
//             photos: {
//                 small: null,
//                 large: null
//             },
//             status: null,
//             followed: false
//         },
//         {
//             name: null,
//             id: 2,
//             uniqueUrlName: null,
//             photos: {
//                 small: null,
//                 large: null
//             },
//             status: null,
//             followed: false
//         },
//         {
//             name: null,
//             id: 3,
//             uniqueUrlName: null,
//             photos: {
//                 small: null,
//                 large: null
//             },
//             status: null,
//             followed: false
//         }
//     ],

//     isPreloaderActive: false,
//     currentPage: 1,
//     totalCount: 0,
//     error: null
// };

// it("Тест при нажатии на кнопку Add Friend в usersPage в стейте меняется followed при совпалении переданного id и id в обеъкте юзера который в редюсере в редюсере usersReducers на true", () => {
//     // 1. test data
//     let action = followUser(2, true);

//     // 2. action
//     let newState = usersReducers(initialState, action);

//     // 3. expectation
//     expect(newState.items[1].followed).toBe(true);
// });

// /* / Тест при нажатии на кнопку Add Friend в usersPage в стейте меняется followed при совпалении переданного id и id в обеъкте юзера который в редюсере в редюсере usersReducers на true */
