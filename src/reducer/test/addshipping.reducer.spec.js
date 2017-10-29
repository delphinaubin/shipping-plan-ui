import addShippingReducer from '../addshipping.reducer';
import {anInitialState} from "./test.utils";
import {formShippingChange} from '../../action/shippingform.action'

describe('addShipping reduccer', () => {
    it('should be a function', () => {
        expect(typeof addShippingReducer).toBe('function');
    });


    describe('SHIPPING_FORM.SHIPPING_CHANGE action', () => {

        const AN_HOUR = 'an hour',
            A_NAME = 'a name',
            A_CITY = 'a city',
            A_SHIPPING = {
                hour: AN_HOUR,
                client: {
                    name: A_NAME,
                    city: A_CITY
                }
            };

        it('should not alter the given state', () => {
            const state = {
                shippingForm: A_SHIPPING
            }, OTHER_SHIPPING = {
                hour: 'other hour',
                client: {
                    name: 'other name',
                    city: 'other city'
                }
            };
            const action = formShippingChange(OTHER_SHIPPING);
            addShippingReducer(state, action);
            expect(state.shippingForm.hour).toBe(A_SHIPPING.hour);
            expect(state.shippingForm.client.name).toBe(A_SHIPPING.client.name);
            expect(state.shippingForm.client.city).toBe(A_SHIPPING.client.city);
        });

        it('should change the shippingToAdd in the state', () => {
            const action = formShippingChange(A_SHIPPING);
            const reducedState = addShippingReducer(anInitialState(), action);
            expect(reducedState.shippingForm.hour).toBe(AN_HOUR);
            expect(reducedState.shippingForm.client.name).toBe(A_NAME);
            expect(reducedState.shippingForm.client.city).toBe(A_CITY);
        });

        it('should set isValid to true if name and city are not empty',()=>{
            const action = formShippingChange(A_SHIPPING);
            const reducedState = addShippingReducer(anInitialState(), action);
            expect(reducedState.shippingForm.isValid).toBe(true);

        });

        it('should set isValid to false if name or city are empty',()=>{


            const SHIPPING_WITHOUT_CITY = {
                client: {
                    name: 'A NAME',
                    city: ' '
                }
            };

            const SHIPPING_WITHOUT_NAME = {
                client: {
                    name: '',
                    city: 'A CITY'
                }
            };

            let reducedState = addShippingReducer(anInitialState(), formShippingChange(SHIPPING_WITHOUT_CITY));
            expect(reducedState.shippingForm.isValid).toBe(false);

            reducedState = addShippingReducer(anInitialState(), formShippingChange(SHIPPING_WITHOUT_NAME));
            expect(reducedState.shippingForm.isValid).toBe(false);

        });

    });

});



