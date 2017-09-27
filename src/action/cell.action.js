export function selectCell(cell){
    return {
        type: 'CLICK_CELL',
        payload: cell
    }
}