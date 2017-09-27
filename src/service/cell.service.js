const cellService = {
    getNumberOfSelectedCells
};

function getNumberOfSelectedCells(columnArray){
    return columnArray.reduce((prevNbCol, col)=>{
        return prevNbCol + col.cells.reduce((prevNbCell, cell)=>{
            return prevNbCell + (cell.selected?1:0);
        }, 0);
    }, 0);
}

export default cellService;


