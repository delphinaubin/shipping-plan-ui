const timeService = {
    getNbCellBetween
};


/**
 * Compute the number of cells to print between 2 times
 * @param {object} timeStart
 *                      an object representing a time ({hour: number, minutes: number})
 * @param {object} timeEnd
 *                      an object representing a time ({hour: number, minutes: number})
 * @returns {number}
 */
function getNbCellBetween(timeStart, timeEnd){

    let numberOfCell = (timeEnd.hour - timeStart.hour)*2;

    const shouldRemoveTheFirstCell = timeStart.minutes > 0;
    const shouldAddACellAtTheEnd = timeEnd.minutes > 0;

    if(shouldRemoveTheFirstCell){
        numberOfCell--;
    }
    if(shouldAddACellAtTheEnd){
        numberOfCell++;
    }
    return numberOfCell;
}



export default timeService;