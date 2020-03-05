describe('HomeWork ArrayList', () => {
    describe('ArrayList.prototype.init', () =>{

        it('should be defined', () => {
            assert.isDefined(ArrayList.prototype.init, 'function has been defined')
        });

        it('should warn the user to [ ] (undefined)', () => {
            const arg = undefined;
            const expArr = 'Please input an array';
            const expSize = 'Please input an array';

            const actual = ArrayList.prototype.init(arg);

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual, expSize);
        });

        it('should warn the user to [ ] (null)', () => {
            const arg = null;
            const expArr = 'Please input an array';
            const expSize = 'Please input an array';

            const actual = ArrayList.prototype.init(arg);

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual, expSize);
        });

        it('should return [6, 2, 3, 4], size = 4, ([6, 2, 3, 4])', () => {
            const array = [6, 2, 3, 4];
            const expArr = [6, 2, 3, 4];
            const expSize = 4;

            const actual = ArrayList.prototype.init(array);

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [6, 2], size = 2, ([6, 2])', () => {
            const array = [6, 2];
            const expArr = [6, 2];
            const expSize = 2;

            const actual = ArrayList.prototype.init(array);

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [4], size = 1, ([4])', () => {
            const array = [4];
            const expArr = [4];
            const expSize = 1;

            const actual = ArrayList.prototype.init(array);

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [], size = 0, ([])', () => {
            const array = [];
            const expArr = [];
            const expSize = 0;

            const actual = ArrayList.prototype.init(array);

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });
    });

    describe('ArrayList.prototype.deleteFromEnd', () => {
        it('should be defined', () => {
            assert.isDefined(ArrayList.prototype.deleteFromEnd, 'function has been defined')
        });

        it('should return [6, 2, 3], size = 3, ([6, 2, 3, 4])', () => {
            const array = [6, 2, 3, 4];
            const expArr = [6, 2, 3];
            const expSize = 3;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.deleteFromEnd();

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [3], size = 1, ([3, 4])', () => {
            const array = [3, 4];
            const expArr = [3];
            const expSize = 1;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.deleteFromEnd();

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [], size = 0, ([4])', () => {
            const array = [4];
            const expArr = [];
            const expSize = 0;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.deleteFromEnd();

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });
    });

    describe('ArrayList.prototype.addAtEnd', () => {    

        it('should be defined', () => {
            assert.isDefined(ArrayList.prototype.addAtEnd, 'function has been defined')
        });

        it('should warn the user to [ ] (undefined)', () => {
            const arg = undefined;
            const expArr = 'Please input a number';

            const actual = ArrayList.prototype.addAtEnd(arg);

            assert.deepEqual(actual, expArr);
        });

        it('should warn the user to [ ] (null)', () => {
            const arg = null;
            const expArr = 'Please input a number';

            const actual = ArrayList.prototype.addAtEnd(arg);

            assert.deepEqual(actual, expArr);
        });

        it('should return [2, 3, 4, 6, 12, 13, 13, 0, 3], element = 3, size = 9, ([2, 3, 4, 6, 12, 13, 13, 0])', () => {
            const array = [2, 3, 4, 6, 12, 13, 13, 0];
            const arg = 3;
            const expArr = [2, 3, 4, 6, 12, 13, 13, 0, 3];
            const expSize = 9;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.addAtEnd(arg);

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [2, 3, 4, 6], element = 6, size = 4, ([2, 3, 4])', () => {
            const array = [2, 3, 4];
            const arg = 6;
            const expArr = [2, 3, 4, 6];
            const expSize = 4;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.addAtEnd(arg);

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [2, 3, 4], element = 4, size = 3, ([2, 3])', () => {
            const array = [2, 3];
            const arg = 4;
            const expArr = [2, 3, 4];
            const expSize = 3;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.addAtEnd(arg);

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [2, 3], element = 3, size = 2, ([2])', () => {
            const array = [2];
            const arg = 3;
            const expArr = [2, 3];
            const expSize = 2;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.addAtEnd(arg);

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [3], element = 3, size = 1, ([])', () => {
            const array = [];
            const arg = 3;
            const expArr = [3];
            const expSize = 1;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.addAtEnd(arg);

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });
    });

    describe('ArrayList.prototype.deleteFirst', () => {
        it('should be defined', () => {
            assert.isDefined(ArrayList.prototype.deleteFirst, 'function has been defined')
        });

        it('should return [3, 4, 6, 12, 13, 13, 0], size = 7, ([2, 3, 4, 6, 12, 13, 13, 0])', () => {
            const array = [2, 3, 4, 6, 12, 13, 13, 0];
            const element = 2;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.deleteFirst();

            assert.deepEqual(actual, element);
        });

        it('should return [2, 3, 4], size = 3, ([6, 2, 3, 4])', () => {
            const array = [6, 2, 3, 4];
            const element = 6;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.deleteFirst();

            assert.deepEqual(actual, element);
        });

        it('should return [4], size = 1, ([3, 4])', () => {
            const array = [3, 4];
            const element = 3;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.deleteFirst();

            assert.deepEqual(actual, element);
        });

        it('should return [], size = 1, ([4])', () => {
            const array = [4];
            const element = 4;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.deleteFirst();

            assert.deepEqual(actual, element);
        });
    });

    describe('ArrayList.prototype.addFirst', () => {
        it('should be defined', () => {
            assert.isDefined(ArrayList.prototype.addFirst, 'function has been defined')
        });

        it('should return [6, 2, 3, 4, 6, 12, 13, 13, 0], size = 9, ([2, 3, 4, 6, 12, 13, 13, 0])', () => {
            const array = [2, 3, 4, 6, 12, 13, 13, 0];
            const element = 6;
            const expArr = [6, 2, 3, 4, 6, 12, 13, 13, 0];
            const expSize = 9;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.addFirst(element);

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [6, 2, 3, 4], size = 4, ([2, 3, 4])', () => {
            const array = [2, 3, 4];
            const element = 6;
            const expArr = [6, 2, 3, 4];
            const expSize = 4;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.addFirst(element);

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [6, 3, 4], size = 1, ([3, 4])', () => {
            const array = [3, 4];
            const element = 6;
            const expArr = [6, 3, 4];
            const expSize = 3;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.addFirst(element);

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [3, 4], size = 2, ([4])', () => {
            const array = [4];
            const element = 3;
            const expArr = [3, 4];
            const expSize = 2;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.addFirst(element);

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [4], size = 1, ([])', () => {
            const array = [];
            const element = 4;
            const expArr = [4];
            const expSize = 1;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.addFirst(element);

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });
    });

    describe('ArrayList.prototype.changeToString', () => {
        it('should be defined', () => {
            assert.isDefined(ArrayList.prototype.changeToString, 'function has been defined')
        });

        it('should return \'[6,2,3,4]\', size = 4, ([6, 2, 3, 4])', () => {
            const array = [6, 2, 3, 4];
            const expArr = '[6,2,3,4]';
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.changeToString();

            assert.deepEqual(actual, expArr);
        });

        it('should return \'[2, 3, 4, 6, 12, 13, 13, 0]\', size = 8, ([2, 3, 4, 6, 12, 13, 13, 0])', () => {
            const array = [2, 3, 4, 6, 12, 13, 13, 0];
            const expArr = '[2,3,4,6,12,13,13,0]';
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.changeToString();

            assert.deepEqual(actual, expArr);
        });

        it('should return \'[]\', size = 4, ([])', () => {
            const array = [];
            const expArr = '[]';
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.changeToString();

            assert.deepEqual(actual, expArr);
        });
    });

    describe('ArrayList.prototype.resetArray', () => {    

        it('should be defined', () => {
            assert.isDefined(ArrayList.prototype.resetArray, 'function has been defined')
        });

        it('should return [], size = 0, ([2, 3, 4, 6, 12, 13, 13, 0])', () => {
            const array = [2, 3, 4, 6, 12, 13, 13, 0];
            const expArr = [];
            const expSize = 0;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.resetArray();

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [], size = 0, ([6, 2, 3, 4])', () => {
            const array = [6, 2, 3, 4];
            const expArr = [];
            const expSize = 0;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.resetArray();

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [], size = 0, ([6, 2])', () => {
            const array = [6, 2];
            const expArr = [];
            const expSize = 0;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.resetArray();

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [], size = 0, ([6])', () => {
            const array = [6];
            const expArr = [];
            const expSize = 0;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.resetArray();

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [], size = 0, ([])', () => {
            const array = [];
            const expArr = [];
            const expSize = 0;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.resetArray();

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });
    });

    describe('ArrayList.doSlice', () => {
        it('should be defined', () => {
            assert.isDefined(ArrayList.prototype.doSlice, 'function has been defined')
        });

        it('should warn the user to input a number (undefined, undefined)', () => {
            const array = [];
            const element1 = undefined;
            const element2 = undefined;
            const expArr = 'Please input a number';
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.doSlice(element1, element2);

            assert.deepEqual(actual, expArr);
        });

        it('should warn the user to input a number (null, null)', () => {
            const array = [];
            const element1 = null;
            const element2 = null;
            const expArr = 'Please input a number';
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.doSlice(element1, element2);
            
            assert.deepEqual(actual, expArr);
        });

        it('should return array [2, 3, 4, 5, 6, 7, 4, 5, 6, 7] (2, 8)', () => {
            const array = [2, 3, 4, 5, 6, 7, 4, 5, 6, 7];
            const element1 = 2;
            const element2 = 8;
            const expArr = [4, 5, 6, 7, 4, 5];
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.doSlice(element1, element2);
            
            assert.deepEqual(actual, expArr);
        });

        it('should return array [2, 3, 4] (1, 4)', () => {
            const array = [1, 2, 3, 4, 5, 6, 7];
            const element1 = 1;
            const element2 = 4;
            const expArr = [2, 3, 4];
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.doSlice(element1, element2);
            
            assert.deepEqual(actual, expArr);
        });

        it('should return array [2] (1, 2)', () => {
            const array = [1, 2, 3];
            const element1 = 1;
            const element2 = 2;
            const expArr = [2];
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.doSlice(element1, element2);
            
            assert.deepEqual(actual, expArr);
        });
    });

    describe('ArrayList.prototype.reverseAnArray', () => {
        it('should be defined', () => {
            assert.isDefined(ArrayList.prototype.reverseAnArray, 'function has been defined')
        });

        it('should return [0, 13, 13, 12, 6, 4, 3, 2], size = 8, ([2, 3, 4, 6, 12, 13, 13, 0])', () => {
            const array = [2, 3, 4, 6, 12, 13, 13, 0];
            const expArr = [0, 13, 13, 12, 6, 4, 3, 2];
            const expSize = 8;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.reverseAnArray();

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [4, 3, 2, 6, 5], size = 5, ([5, 6, 2, 3, 4])', () => {
            const array = [5, 6, 2, 3, 4];
            const expArr = [4, 3, 2, 6, 5];
            const expSize = 5;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.reverseAnArray();

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [3, 2, 6], size = 3, ([6, 2, 3])', () => {
            const array = [6, 2, 3];
            const expArr = [3, 2, 6];
            const expSize = 3;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.reverseAnArray();

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [4, 3], size = 2, ([3, 4])', () => {
            const array = [3, 4];
            const expArr = [4, 3];
            const expSize = 2;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.reverseAnArray();

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [4], size = 1, ([4])', () => {
            const array = [4];
            const expArr = [4];
            const expSize = 1;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.reverseAnArray();

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });
    });

    describe('ArrayList.prototype.checkForIndex', () => {
        it('should be defined', () => {
            assert.isDefined(ArrayList.prototype.checkForIndex, 'function has been defined')
        });

        it('should return 0, size = 4, ([6, 2, 3, 4])', () => {
            const array = [6, 2, 3, 4];
            const element = 6;
            const expArr = 0;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.checkForIndex(element);

            assert.deepEqual(actual, expArr);
        });

        it('should warn the user to [ ] (undefined)', () => {
            const arg = undefined;
            const expArr = 'Please input an array';

            const actual = ArrayList.prototype.checkForIndex(arg);

            assert.deepEqual(actual, expArr);
        });

        it('should warn the user to [ ] (null)', () => {
            const arg = null;
            const expArr = 'Please input an array';

            const actual = ArrayList.prototype.checkForIndex(arg);

            assert.deepEqual(actual, expArr);
        });

        it('should return 1, size = 2, ([3, 4])', () => {
            const array = [3, 4];
            const element = 4;
            const expArr = 1;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.checkForIndex(element);

            assert.deepEqual(actual, expArr);
        });

        it('should return 0, size = 1, ([4])', () => {
            const array = [4];
            const element = 4;
            const expArr = 0;
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.checkForIndex(element);

            assert.deepEqual(actual, expArr);
        });

        it('should return -1, size = 5, ([2, 4, 5, 6, 7])', () => {
            const array = [2, 4, 5, 6, 7];
            const element = 10;
            const expArr = '-1';
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.checkForIndex(element);

            assert.deepEqual(actual, expArr);
        });
    });

    describe('ArrayList.prototype.checkForIncludes', () => {
        it('should be defined', () => {
            assert.isDefined(ArrayList.prototype.checkForIncludes, 'function has been defined')
        });

        it('should return true, size = 4, ([6, 2, 3, 4])', () => {
            const array = [6, 2, 3, 4];
            const element = 6;
            const expArr = 'true';
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.checkForIncludes(element);

            assert.deepEqual(actual, expArr);
        });

        it('should warn the user to enter an element (undefined)', () => {
            const arg = undefined;
            const expArr = 'Please input an element';

            const actual = ArrayList.prototype.checkForIncludes(arg);

            assert.deepEqual(actual, expArr);
        });

        it('should warn the user to enter an element (null)', () => {
            const arg = null;
            const expArr = 'Please input an element';

            const actual = ArrayList.prototype.checkForIncludes(arg);

            assert.deepEqual(actual, expArr);
        });

        it('should return true, size = 2, ([3, 4])', () => {
            const array = [3, 4];
            const element = 4;
            const expArr = 'true';
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.checkForIncludes(element);

            assert.deepEqual(actual, expArr);
        });

        it('should return false, size = 1, ([4])', () => {
            const array = [4];
            const element = 6;
            const expArr = 'false';
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.checkForIncludes(element);

            assert.deepEqual(actual, expArr);
        });

        it('should return false, size = 5, ([2, 4, 5, 6, 7])', () => {
            const array = [2, 4, 5, 6, 7];
            const element = 10;
            const expArr = 'false';
            ArrayList.prototype.init(array);

            const actual = ArrayList.prototype.checkForIncludes(element);

            assert.deepEqual(actual, expArr);
        });
    });
});  