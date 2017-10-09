import logger from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {combineReducers} from './utils/redux.util';
import planningReducer from './reducer/planning.reducer'
import addShippingReducer from './reducer/addshipping.reducer';




const reducers = {
    planning: planningReducer,
    addShipping: addShippingReducer
};


export default createStore(combineReducers(reducers), undefined, applyMiddleware(logger));
