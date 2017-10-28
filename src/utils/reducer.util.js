/**
 * Return the composition of reducers
 * @param {function} reducers we want to compose
 * @returns {function} composition of given reducers
 * @example composeReducers(r1, r2) --> (state, action) => r2(r1(state, action), action);
 */
export function composeReducers(...reducers){
    return (state, action) => reducers.reverse().reduce((prev, cur) => {
        return (state, action) => prev(cur(state, action), action);
    })(state, action);
}
