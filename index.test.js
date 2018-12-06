var calcObj = require('./index');

describe('calculate power', function() {
    var x, n;

    describe('calculatePow should return > 1', function() {
       
        test('should return 8 when x = 2, n = 3', function() {
            x = 2;
            n = 3;
            expect(calcObj.calculatePow(x, n)).toEqual(8);
        });
        
        test('should return 0 when x = 0, n = 3', function() {
            x = 0;
            n = 3;
            expect(calcObj.calculatePow(x, n)).toEqual(0);
        });
        
        test('should return 2 when x = 2, n = 1', function() {
            x = 2;
            n = 1;
            expect(calcObj.calculatePow(x, n)).toEqual(2);
        });

        describe('calculatePow should return = 1', function() {
            
         test('should return 1 when x = 1, n = -4', function() {
                x = 1;
                n = -4;
                expect(calcObj.calculatePow(x, n)).toEqual(1);
            });
            test('should return 1 when x = 0, n = 0', function() {
                x = 0;
                n = 0;
                expect(calcObj.calculatePow(x, n)).toEqual(1);
            });
            test('should return 1 when x = 2, n = 0', function() {
                x = 2;
                n = 0;
                expect(calcObj.calculatePow(x, n)).toEqual(1);
            });
            test('should return 1 when x = 1, n = 8', function() {
                x = 1;
                n = 8;
                expect(calcObj.calculatePow(x, n)).toEqual(1);
            });
        });

        describe('calculatePow should return < 1, return > 0', function() {

            test('should return 0.0625 when x = 2, n = -4', function() {
                x = 2;
                n = -4;
                expect(calcObj.calculatePow(x, n)).toEqual(0.0625);
            });
            test('should return 0.5 when x = 2, n = -1', function() {
                x = 2;
                n = -1;
                expect(calcObj.calculatePow(x, n)).toEqual(0.5);
            });
        });

        describe('calculatePow should return < 0', function() {
            test('should return -27 when x = -3, n = 3', function() {
                x = -3;
                n = 3;
                expect(calcObj.calculatePow(x, n)).toEqual(-27);
            });

        });
    });
}); 