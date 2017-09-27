import timeService from '../time.service';

describe('timeService', ()=>{
   describe('getNbCellBetween', ()=>{
       it('should be a function', ()=>{
           expect(typeof timeService.getNbCellBetween).toBe('function');
       });

       it('should return the number of cell between 2 times', ()=>{
           expect(timeService.getNbCellBetween({hour: 8, minutes: 0}, {hour: 10, minutes: 0})).toBe(4);
           expect(timeService.getNbCellBetween({hour: 8, minutes: 30}, {hour: 10, minutes: 0})).toBe(3);
           expect(timeService.getNbCellBetween({hour: 8, minutes: 30}, {hour: 10, minutes: 30})).toBe(4);
           expect(timeService.getNbCellBetween({hour: 8, minutes: 0}, {hour: 18, minutes: 0})).toBe(20);
       });
   });
});




