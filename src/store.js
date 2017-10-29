import logger from 'redux-logger';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import planningReducer from './reducer/planning.reducer'
import addShippingReducer from './reducer/addshipping.reducer';
import {composeReducers} from './utils/reducer.util';


const reducers = {
    planning: composeReducers(planningReducer,addShippingReducer)
};


export default createStore(combineReducers(reducers), undefined, applyMiddleware(logger));
