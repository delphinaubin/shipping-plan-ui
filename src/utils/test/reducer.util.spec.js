import {composeReducers} from '../reducer.util';


describe('reducer.util', ()=>{
    describe('composeReducers', () => {

        it('should be a function', () => {
            expect(typeof composeReducers).toBe("function");
        });

        it('should return a function', () => {
            expect(typeof composeReducers()).toBe("function");
        });

        it('should not alter the given function if we do not pass other function in parameter', () => {
            const A_RESULT = "A RESULT",
                  A_FUNCTION = () => A_RESULT,
                  IDENTITY = (x) => x;
            expect(composeReducers(A_FUNCTION)()).toBe(A_RESULT);
            expect(composeReducers(IDENTITY)(A_RESULT)).toBe(IDENTITY(A_RESULT));
        });

        it('should return a function which execute all reducers passing the result of prev to current as state', () => {

            const   DOUBLE_REDUCER = (state) => {return state *2},
                    ADD1_REDUCER = (state) => {return state +1};
            expect(composeReducers(DOUBLE_REDUCER, ADD1_REDUCER)(1)).toBe(ADD1_REDUCER(DOUBLE_REDUCER(1)));
            expect(composeReducers(DOUBLE_REDUCER, ADD1_REDUCER, DOUBLE_REDUCER, DOUBLE_REDUCER)(4))
                .toBe(DOUBLE_REDUCER(DOUBLE_REDUCER(ADD1_REDUCER(DOUBLE_REDUCER(4)))));
        });

        it('should pass the action to all reducers', () => {

            const   AN_ACTION = "AN_ACTION",
                    checkActionReduccer = (state, action) => {
                        expect(action).toBe(AN_ACTION);
                        return state;
                    };

            composeReducers(checkActionReduccer)({}, AN_ACTION);
            composeReducers(checkActionReduccer, checkActionReduccer)({}, AN_ACTION);
            composeReducers(checkActionReduccer, checkActionReduccer, checkActionReduccer)({}, AN_ACTION);

        });


    });
});

