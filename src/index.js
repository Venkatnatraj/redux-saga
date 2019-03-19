import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import rootReducer from './components/reducers/Reducer';
import WatcherSaga from './components/sagas/Saga'

import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger'

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger({
    collapsed : true
})

const store = createStore(rootReducer , applyMiddleware(sagaMiddleware , logger));

sagaMiddleware.run(WatcherSaga);

store.dispatch({type : 'Add'})
store.dispatch({type : 'Add'})

store.dispatch({type : 'Add'})


ReactDOM.render(<Provider store = {store} ><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
