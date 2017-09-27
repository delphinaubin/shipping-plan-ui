import cellService from '../cell.service';

const aColumnArray = function () {
    return [
        {
            cells: [
                {
                    index: 0,
                    columnIndex: 0,
                    selected: true
                },
                {
                    index: 1,
                    columnIndex: 0,
                    selected: false
                },
                {
                    index: 2,
                    columnIndex: 0,
                    selected: true
                },
                {
                    index: 3,
                    columnIndex: 0,
                    selected: true
                }
            ]
        }, {
            cells: [
                {
                    index: 0,
                    columnIndex: 1,
                    selected: false
                },
                {
                    index: 1,
                    columnIndex: 1,
                    selected: false
                },
                {
                    index: 2,
                    columnIndex: 1,
                    selected: true
                },
                {
                    index: 3,
                    columnIndex: 1,
                    selected: false
                }
            ]
        }
    ];
};
describe('cell service', () => {
    describe('getNumberOfSelectedCells', () => {
        it('should be a function', ()=>{
            expect(typeof cellService.getNumberOfSelectedCells).toBe('function');
        });

        it('should return the selected cells', ()=>{
            const aColumnArrayWith4SelectedCells = aColumnArray();
            expect(cellService.getNumberOfSelectedCells(aColumnArrayWith4SelectedCells)).toBe(4);
        });
    });
});
