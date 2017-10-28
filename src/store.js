import logger from 'redux-logger';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import planningReducer from './reducer/planning.reducer'
import addShippingReducer from './reducer/addshipping.reducer';


const reducers = {
    planning: planningReducer,
    addShipping: addShippingReducer
};


export default createStore(combineReducers(reducers), undefined, applyMiddleware(logger));
