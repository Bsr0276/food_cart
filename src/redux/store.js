import { createStore, combineReducers, applyMiddleware } from "redux";
import restaurantReducer  from "./reducers/restaurantReducer";
import basketReducer from "./reducers/basketReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({ restaurantReducer, basketReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
