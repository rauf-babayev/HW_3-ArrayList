describe('HomeWork ArrayList', () => {
    describe('ArrayList.init', () =>{

        it('should be defined', () => {
            assert.isDefined(ArrayList.init, 'function has been defined')
        });

        it('should warn the user to [ ] (undefined)', () => {
            const arg = undefined;
            const expArr = 'Please input an array';
            const expSize = 'Please input an array';

            const actual = ArrayList.init(arg);

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual, expSize);
        });

        it('should warn the user to [ ] (null)', () => {
            const arg = null;
            const expArr = 'Please input an array';
            const expSize = 'Please input an array';

            const actual = ArrayList.init(arg);

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual, expSize);
        });
    });

    describe('ArrayList.addAtEnd', () => {    

        it('should be defined', () => {
            assert.isDefined(ArrayList.addAtEnd, 'function has been defined')
        });

        it('should warn the user to [ ] (undefined)', () => {
            const arg = undefined;
            const expArr = 'Please input an array';
            const expSize = 'Please input an array';

            const actual = ArrayList.addAtEnd(arg);

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual, expSize);
        });

        it('should warn the user to [ ] (null)', () => {
            const arg = null;
            const expArr = 'Please input an array';
            const expSize = 'Please input an array';

            const actual = ArrayList.addAtEnd(arg);

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual, expSize);
        });

        it('should return [2, 3, 4, 6], element = 6, size = 4, ([2, 3, 4])', () => {
            const array = [2, 3, 4];
            const arg = 6;
            const expArr = [2, 3, 4, 6];
            const expSize = 4;
            ArrayList.init(array);

            const actual = ArrayList.addAtEnd(arg);

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });
    });

    describe('ArrayList.resetArray', () => {    

        it('should be defined', () => {
            assert.isDefined(ArrayList.resetArray, 'function has been defined')
        });

        it('should return [], size = 0, ([6, 2, 3, 4])', () => {
            const array = [6, 2, 3, 4];
            const expArr = [];
            const expSize = 0;
            ArrayList.init(array);

            const actual = ArrayList.resetArray();

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });
    });

    describe('ArrayList.clearFromEnd', () => {
        it('should be defined', () => {
            assert.isDefined(ArrayList.clearFromEnd, 'function has been defined')
        });

        it('should return [6, 2, 3], size = 3, ([6, 2, 3, 4])', () => {
            const array = [6, 2, 3, 4];
            const expArr = [6, 2, 3];
            const expSize = 3;
            ArrayList.init(array);

            const actual = ArrayList.clearFromEnd();

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [3], size = 1, ([3, 4])', () => {
            const array = [3, 4];
            const expArr = [3];
            const expSize = 1;
            ArrayList.init(array);

            const actual = ArrayList.clearFromEnd();

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [], size = 1, ([4])', () => {
            const array = [4];
            const expArr = [];
            const expSize = 0;
            ArrayList.init(array);

            const actual = ArrayList.clearFromEnd();

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });
    });

    describe('ArrayList.clearFirst', () => {
        it('should be defined', () => {
            assert.isDefined(ArrayList.clearFirst, 'function has been defined')
        });

        it('should return [2, 3, 4], size = 3, ([6, 2, 3, 4])', () => {
            const array = [6, 2, 3, 4];
            const element = 6;
            const expSize = 3;
            ArrayList.init(array);

            const actual = ArrayList.clearFirst();

            assert.deepEqual(actual, element);
            assert.deepEqual(ArrayList.array.length, expSize);
        });

        it('should return [4], size = 1, ([3, 4])', () => {
            const array = [3, 4];
            const element = 3;
            const expSize = 1;
            ArrayList.init(array);

            const actual = ArrayList.clearFirst();

            assert.deepEqual(actual, element);
            assert.deepEqual(ArrayList.array.length, expSize);
        });

        it('should return [], size = 1, ([4])', () => {
            const array = [4];
            const element = 4;
            const expSize = 0;
            ArrayList.init(array);

            const actual = ArrayList.clearFirst();

            assert.deepEqual(actual, element);
            assert.deepEqual(ArrayList.array.length, expSize);
        });
    });

    describe('ArrayList.addAtFirst', () => {
        it('should be defined', () => {
            assert.isDefined(ArrayList.addAtFirst, 'function has been defined')
        });

        it('should return [6, 2, 3, 4], size = 4, ([2, 3, 4])', () => {
            const array = [2, 3, 4];
            const element = 6;
            const expArr = [6, 2, 3, 4];
            const expSize = 4;
            ArrayList.init(array);

            const actual = ArrayList.addAtFirst(element);

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [6, 3, 4], size = 1, ([3, 4])', () => {
            const array = [3, 4];
            const element = 6;
            const expArr = [6, 3, 4];
            const expSize = 3;
            ArrayList.init(array);

            const actual = ArrayList.addAtFirst(element);

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [3, 4], size = 2, ([4])', () => {
            const array = [4];
            const element = 3;
            const expArr = [3, 4];
            const expSize = 2;
            ArrayList.init(array);

            const actual = ArrayList.addAtFirst(element);

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [4], size = 1, ([])', () => {
            const array = [];
            const element = 4;
            const expArr = [4];
            const expSize = 1;
            ArrayList.init(array);

            const actual = ArrayList.addAtFirst(element);

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });
    });

    describe('ArrayList.revArr', () => {
        it('should be defined', () => {
            assert.isDefined(ArrayList.revArr, 'function has been defined')
        });

        it('should return [4, 3, 2, 6], size = 4, ([6, 2, 3, 4])', () => {
            const array = [6, 2, 3, 4];
            const expArr = [4, 3, 2, 6];
            const expSize = 4;
            ArrayList.init(array);

            const actual = ArrayList.revArr();

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [4, 3, 2, 6, 5], size = 5, ([5, 6, 2, 3, 4])', () => {
            const array = [5, 6, 2, 3, 4];
            const expArr = [4, 3, 2, 6, 5];
            const expSize = 5;
            ArrayList.init(array);

            const actual = ArrayList.revArr();

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [4, 3], size = 2, ([3, 4])', () => {
            const array = [3, 4];
            const expArr = [4, 3];
            const expSize = 2;
            ArrayList.init(array);

            const actual = ArrayList.revArr();

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });

        it('should return [4], size = 1, ([4])', () => {
            const array = [4];
            const expArr = [4];
            const expSize = 1;
            ArrayList.init(array);

            const actual = ArrayList.revArr();

            assert.deepEqual(actual, expArr);
            assert.deepEqual(actual.length, expSize);
        });
    });

    describe('ArrayList.checkForIncludes', () => {
        it('should be defined', () => {
            assert.isDefined(ArrayList.checkForIncludes, 'function has been defined')
        });

        it('should return true, size = 4, ([6, 2, 3, 4])', () => {
            const array = [6, 2, 3, 4];
            const element = 6;
            const expArr = 'true';
            ArrayList.init(array);

            const actual = ArrayList.checkForIncludes(element);

            assert.deepEqual(actual, expArr);
        });

        it('should warn the user to [ ] (undefined)', () => {
            const arg = undefined;
            const expArr = 'Please input an array';

            const actual = ArrayList.checkForIncludes(arg);

            assert.deepEqual(actual, expArr);
        });

        it('should warn the user to [ ] (null)', () => {
            const arg = null;
            const expArr = 'Please input an array';

            const actual = ArrayList.checkForIncludes(arg);

            assert.deepEqual(actual, expArr);
        });

        it('should return true, size = 2, ([3, 4])', () => {
            const array = [3, 4];
            const element = 4;
            const expArr = 'true';
            ArrayList.init(array);

            const actual = ArrayList.checkForIncludes(element);

            assert.deepEqual(actual, expArr);
        });

        it('should return false, size = 1, ([4])', () => {
            const array = [4];
            const element = 6;
            const expArr = 'false';
            ArrayList.init(array);

            const actual = ArrayList.checkForIncludes(element);

            assert.deepEqual(actual, expArr);
        });

        it('should return false, size = 5, ([2, 4, 5, 6, 7])', () => {
            const array = [2, 4, 5, 6, 7];
            const element = 10;
            const expArr = 'false';
            ArrayList.init(array);

            const actual = ArrayList.checkForIncludes(element);

            assert.deepEqual(actual, expArr);
        });
    });

    describe('ArrayList.changeToString', () => {
        it('should be defined', () => {
            assert.isDefined(ArrayList.changeToString, 'function has been defined')
        });

        it('should return \'6,2,3,4\', size = 4, ([6, 2, 3, 4])', () => {
            const array = [6, 2, 3, 4];
            const expArr = '6,2,3,4';
            ArrayList.init(array);

            const actual = ArrayList.changeToString();

            assert.deepEqual(actual, expArr);
        });
    });

    describe('ArrayList.checkForIndex', () => {
        it('should be defined', () => {
            assert.isDefined(ArrayList.checkForIndex, 'function has been defined')
        });

        it('should return 0, size = 4, ([6, 2, 3, 4])', () => {
            const array = [6, 2, 3, 4];
            const element = 6;
            const expArr = 0;
            ArrayList.init(array);

            const actual = ArrayList.checkForIndex(element);

            assert.deepEqual(actual, expArr);
        });

        it('should warn the user to [ ] (undefined)', () => {
            const arg = undefined;
            const expArr = 'Please input an array';

            const actual = ArrayList.checkForIndex(arg);

            assert.deepEqual(actual, expArr);
        });

        it('should warn the user to [ ] (null)', () => {
            const arg = null;
            const expArr = 'Please input an array';

            const actual = ArrayList.checkForIndex(arg);

            assert.deepEqual(actual, expArr);
        });

        it('should return 1, size = 2, ([3, 4])', () => {
            const array = [3, 4];
            const element = 4;
            const expArr = 1;
            ArrayList.init(array);

            const actual = ArrayList.checkForIndex(element);

            assert.deepEqual(actual, expArr);
        });

        it('should return 0, size = 1, ([4])', () => {
            const array = [4];
            const element = 4;
            const expArr = 0;
            ArrayList.init(array);

            const actual = ArrayList.checkForIndex(element);

            assert.deepEqual(actual, expArr);
        });

        it('should return -1, size = 5, ([2, 4, 5, 6, 7])', () => {
            const array = [2, 4, 5, 6, 7];
            const element = 10;
            const expArr = '-1';
            ArrayList.init(array);

            const actual = ArrayList.checkForIndex(element);

            assert.deepEqual(actual, expArr);
        });
    });
    describe('ArrayList.doSlice', () => {
        it('should be defined', () => {
            assert.isDefined(ArrayList.doSlice, 'function has been defined')
        });

        it('should warn the user to input a number (undefined, undefined)', () => {
            const array = [];
            const element1 = undefined;
            const element2 = undefined;
            const expArr = 'Please input a number';
            ArrayList.init(array);

            const actual = ArrayList.doSlice(element1, element2);

            assert.deepEqual(actual, expArr);
        });

        it('should warn the user to input a number (null, null)', () => {
            const array = [];
            const element1 = null;
            const element2 = null;
            const expArr = 'Please input a number';
            ArrayList.init(array);

            const actual = ArrayList.doSlice(element1, element2);
            
            assert.deepEqual(actual, expArr);
        });

        it('should return array [2, 3, 4] (1, 4)', () => {
            const array = [1, 2, 3, 4, 5, 6, 7];
            const element1 = 1;
            const element2 = 4;
            const expArr = [2, 3, 4];
            ArrayList.init(array);

            const actual = ArrayList.doSlice(element1, element2);
            
            assert.deepEqual(actual, expArr);
        });
    });
});