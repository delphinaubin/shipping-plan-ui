import planningReducer from '../planning.reducer';
import {anInitialState} from './test.utils'
import {selectCell} from '../../action/cell.action';

const DEFAULT_NUMBER_OF_CELL_PER_COLUMN = 20;

describe('counter reducer', () => {
    it('should be a function', () => {
        expect(typeof planningReducer).toBe('function');
    });

    it('should return a default state if given state is undefined', () => {
        const defaultState = planningReducer(undefined);
        expect(defaultState).toBeDefined();
        expect(defaultState.mode).toBeDefined();
        expect(defaultState.columns).toBeDefined();
        expect(defaultState.columns.length).toBe(2);
        defaultState.columns.forEach((column, colmunIndex) => {
            expect(column.cells).toBeDefined();
            expect(column.cells.length).toBe(DEFAULT_NUMBER_OF_CELL_PER_COLUMN);
            column.cells.forEach((cell, cellIndex) => {
                expect(typeof cell).toBe('object');
                expect(cell.selected).toBe(false);
                expect(cell.index).toBe(cellIndex);
                expect(cell.columnIndex).toBe(colmunIndex);
            });
        });

    });

    describe('CLICK_CELL action', () => {
        it('should set the the given cell "selected" props to true in the state if it was false', () => {

            const A_COL_INDEX = 0,
                A_CELL_INDEX = 1;

            let action = {
                type: 'CLICK_CELL',
                payload: {
                    index: A_CELL_INDEX,
                    columnIndex: A_COL_INDEX,
                    selected: false,
                    client: undefined
                }
            };
            const reducedState = planningReducer(anInitialState(), action);

            expect(reducedState.columns[A_COL_INDEX].cells[A_CELL_INDEX].selected).toBe(true);
        });

        it('should set the the given cell "selected" props to false in the state if it was true', () => {

            const initialState = anInitialState(),
                A_COL_INDEX = 1,
                A_CELL_INDEX = 3;
            initialState.columns[A_COL_INDEX].cells[A_CELL_INDEX].selected = true;
            let action = {
                type: 'CLICK_CELL',
                payload: {
                    index: A_CELL_INDEX,
                    columnIndex: A_COL_INDEX,
                    selected: false,
                    client: undefined
                }
            };
            const reducedState = planningReducer(initialState, action);
            expect(reducedState.columns[A_COL_INDEX].cells[A_CELL_INDEX].selected).toBe(false);
        });

        it('should not alter the initial state', () => {
            const initialState = anInitialState(),
                A_COL_INDEX = 1,
                A_CELL_INDEX = 2,
                stringOfIntialState = JSON.stringify(initialState);

            let action = {
                type: 'CLICK_CELL',
                payload: {
                    index: A_CELL_INDEX,
                    columnIndex: A_COL_INDEX,
                    selected: false,
                    client: undefined
                }
            };
            const reducedState = planningReducer(initialState, action);
            expect(JSON.stringify(initialState)).toBe(stringOfIntialState);

        });


        it('should active the add mode one is selected', () => {
            const initalState = anInitialState(),
                A_COLUMN_INDEX = 0,
                A_CELL_INDEX = 3,
                A_CELL = {
                    index: A_CELL_INDEX,
                    columnIndex: A_COLUMN_INDEX,
                    selected: false
                };
            initalState.columns[A_COLUMN_INDEX].cells[A_CELL_INDEX].selected = false;

            const reducedState = planningReducer(initalState, selectCell(A_CELL));
            expect(reducedState.mode.creation).toBe(true);

        });

        it('should toggle the add mode if no cell is selected', () => {
            const initalState = anInitialState(),
                A_COLUMN_INDEX = 0,
                A_CELL_INDEX = 3,
                A_CELL = {
                    index: A_CELL_INDEX,
                    columnIndex: A_COLUMN_INDEX,
                    selected: true
                };
            initalState.columns[A_COLUMN_INDEX].cells[A_CELL_INDEX].selected = true;

            const reducedState = planningReducer(initalState, selectCell(A_CELL));
            expect(reducedState.mode.creation).toBe(false);

        });

        it('should not toggle the add mode if some cell are still selected', () => {
            const initalState = anInitialState(),
                A_COLUMN_INDEX = 0,
                A_CELL_INDEX = 3,
                ANOTHER_COLUMN_INDEX = 1,
                ANOTHER_CELL_INDEX = 2,
                A_CELL = {
                    index: A_CELL_INDEX,
                    columnIndex: A_COLUMN_INDEX,
                    selected: true
                };

            initalState.columns[A_COLUMN_INDEX].cells[A_CELL_INDEX].selected = true;
            initalState.columns[ANOTHER_COLUMN_INDEX].cells[ANOTHER_CELL_INDEX].selected = true;

            const reducedState = planningReducer(initalState, selectCell(A_CELL));
            expect(reducedState.mode.creation).toBe(true);

        });

    });


});
