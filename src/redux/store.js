import {createStore, applyMiddleware} from 'redux';
// import reducer from './reducer';
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk];

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
