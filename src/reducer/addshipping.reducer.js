import {set} from 'dot-prop-immutable';
import {SHIPPING_FORM_ACTION} from '../action/shippingform.action'

function addShippingReducer(state = {}, action) {
    switch (action.type) {
        case SHIPPING_FORM_ACTION.SHIPPING_CHANGE :
            let nextState = set(state, 'shippingForm', action.payload);
            nextState = set(nextState, 'shippingForm.isValid', _isShippingValid(action.payload));
            return nextState;
        default:
            return state;
    }
}

export default addShippingReducer;


function _isShippingValid(shipping){
    return _isStringValueFilled(shipping.client.name) && _isStringValueFilled(shipping.client.city);
}

function _isStringValueFilled(stringValue){
    return !!stringValue && stringValue.trim().length > 0;
}