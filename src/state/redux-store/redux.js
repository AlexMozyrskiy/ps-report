import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleWare from "redux-thunk";
import { compose } from "redux";
import workBookDataReducers from "../features/workBookData/reducer";
import videoBookDataReducer from "../features/videoBookData/reducer";


let reducers = combineReducers({
  workBookData: workBookDataReducers,
  videoBookData: videoBookDataReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunkMiddleWare)
));                                       // это для использования extension'а redux dev tools в Google Chrome

export default store;