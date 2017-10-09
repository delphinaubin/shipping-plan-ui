export const CELL_ACTION = {
  CLICK_CELL: 'CLICK_CELL'
}

export function selectCell(cell){
    return {
        type: CELL_ACTION.CLICK_CELL,
        payload: cell
    }
}
