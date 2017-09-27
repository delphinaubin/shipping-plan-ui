import {set, get} from 'dot-prop-immutable';
import cellService from '../service/cell.service';

const DEFAULT_STATE = {
    mode: {
        creation: false
    },
    globalParameters: {
        timeStart: {hour: 8, minutes:0},
        timeEnd: {hour: 18, minutes:0}
    },
    columns:[
        {
            name: 'Delphin',
            cells: initEmptyCells(0, {hour: 8, minutes:0},{hour: 18, minutes:0})
        },
        {
            name: 'Virginie',
            cells: initEmptyCells(1, {hour: 8, minutes:0},{hour: 18, minutes:0})
        }
    ]


};

function initEmptyCells(columnIndex, timeStart, timeEnd){
    let tabOfEmptyCells = [];

    let nbCell = (timeEnd.hour - timeStart.hour) *2;
    if(timeEnd.minutes > 0){
        nbCell ++;
    }
    if(timeStart.minutes > 0){
        nbCell --;
    }
    for(let i = 0; i< nbCell; i++){
        tabOfEmptyCells.push({
            index: i,
            columnIndex: columnIndex,
            selected: false,
            client: undefined
        });
    }
    return tabOfEmptyCells;
}

const reducer = (state = DEFAULT_STATE  , action) =>{
    if(!action){
        return state;
    }
    switch (action.type){
        case 'CLICK_CELL':
            const selectedCell = action.payload;
            const cellToUpdatePropPath = `columns.${selectedCell.columnIndex}.cells.${selectedCell.index}.selected`;
            let nextState = set(state, cellToUpdatePropPath, !get(state, cellToUpdatePropPath));
            nextState = set(nextState, 'mode.creation', cellService.getNumberOfSelectedCells(nextState.columns) > 0);
            return nextState;
        default:
            return state;
    }
};

export default reducer;