const ArrayList = {
    array: [],
    size: 0,
    init: function(arrArg) {
        if ((!arrArg)) return 'Please input an array';
        ArrayList.array = arrArg;
        ArrayList.size = arrArg.length;
    }, 
    addAtEnd: function(arrElm) {
        if (!arrElm) return 'Please input an array';
        const arr = ArrayList.array;                
        arr[arr.length] = arrElm;
        ArrayList.size = arr.length;

        return arr;
    },
    resetArray: function() {
        ArrayList.array = [];
        ArrayList.size = 0;

        return ArrayList.array;
    },
    clearFromEnd: function() {
        const arr = ArrayList.array;
        arr.length = [arr.length - 1];
        ArrayList.size = arr.length;
        
        return arr;
    },
    clearFirst: function() {
        const arr = ArrayList.array;
        const newArray = [];
        
        for (let i = 1; i < arr.length; i++) {
            newArray[i - 1] = arr[i];
        }; 
        ArrayList.array = newArray;
        ArrayList.size -= 1;

        return arr[0];
    },
    addAtFirst: function(argument) {
        const arr = ArrayList.array;
        const newArray = [argument];

        for (let i = 0; i < arr.length; i++) {
            newArray[i + 1] = arr[i];
        };
        ArrayList.array = newArray;
        ArrayList.size += 1

        return ArrayList.array;
    }, 
    revArr: function() {
        if (ArrayList.array.isArray || !ArrayList.array) return 'Please input an array';

        const arr = ArrayList.array;
        const newArray = [];

        for (let i = arr.length - 1; i >= 0; i--) {
            newArray[newArray.length] = arr[i];
        };
        ArrayList.array = newArray;
        ArrayList.size = newArray.length;
        
        return newArray;
    },
    checkForIncludes: function(argument) {
        if(!argument) return 'Please input an array';
        const arr = ArrayList.array;
        
        for (let i = 0; i < arr.length; i++) {
            if (argument === arr[i]) return 'true';
        };

        return 'false';
    },
    changeToString: function() {

        return `${ArrayList.array}`;
    },
    checkForIndex: function(argument) {
        if (!argument) return 'Please input an array';
        const arr = ArrayList.array;
        
        for (let i = 0; i < arr.length; i++) {
            if (argument === arr[i]) return i;
        };

        return '-1';
    },
    doSlice: function(start, end) {
        if ((typeof start) !== 'number' || (typeof end) !== 'number') {
            return 'Please input a number';
        }
        const arr = ArrayList.array;
        let newArray = [];
        let counter = 0;
        if (end) {
            for (let i = start; i < end; i++) {
                newArray[counter++] = arr[i];
            }
        } else {
            for (let i = start; i < arr.length; i++) {
                newArray[counter++] = arr[i];
            }
        } 
        ArrayList.array = newArray;
        ArrayList.size = newArray.length;
        return ArrayList.array;
    }, 
};