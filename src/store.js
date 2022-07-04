import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import sagaWatcher from './saga/index.js';
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];
const store = createStore(reducer, {}, applyMiddleware(...middleWares));
sagaMiddleware.run(sagaWatcher);
export default store;