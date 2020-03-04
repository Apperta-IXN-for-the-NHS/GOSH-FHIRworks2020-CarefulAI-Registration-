import {createStore} from "redux";
import reducer from "./reducers";

export const makeStore = (initialState) => {
    return createStore(reducer, initialState);
};
