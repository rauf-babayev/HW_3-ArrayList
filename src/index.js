function ArrayList() {
    this.array = [];
    this.size = 0;
};

ArrayList.prototype.init = function (arrArg) {
    if ((!arrArg)) return 'Please input an array';
    this.array = arrArg;
    this.size = arrArg.length;
    return arrArg;
};

ArrayList.prototype.deleteFromEnd = function () {
    const arr = this.array;

    arr.length = [arr.length - 1];
    this.size = arr.length;

    return arr;
};

ArrayList.prototype.addAtEnd = function (arrElm) {
    if ((typeof arrElm) !== 'number') {
        return 'Please input a number';
    };
    const arr = this.array;

    arr[arr.length] = arrElm;
    this.size = arr.length;

    return arr;
};

ArrayList.prototype.deleteFirst = function () {
    const arr = this.array;
    const newArray = [];
    
    for (let i = 1; i < arr.length; i++) {
        newArray[i - 1] = arr[i];
    }; 
    this.array = newArray;
    this.size -= 1;

    return arr[0];
};

ArrayList.prototype.addFirst = function (arrElm) {
    if ((typeof arrElm) !== 'number') {
        return 'Please input a number';
    };
    const arr = this.array;
    const newArray = [arrElm];

    for (let i = 0; i < arr.length; i++) {
        newArray[i + 1] = arr[i];
    };
    this.array = newArray;
    this.size += 1;

    return this.array;
};

ArrayList.prototype.changeToString = function () {
    
    return `[${this.array}]`;
};

ArrayList.prototype.resetArray = function () {
    this.array = [];
    this.size = 0;

    return this.array;
};

ArrayList.prototype.doSlice = function (start, end) {
    if ((typeof start) !== 'number' || (typeof end) !== 'number') {
    return 'Please input a number';
    }
    const arr = this.array;
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
    this.array = newArray;
    this.size = newArray.length;

    return this.array;
};

ArrayList.prototype.reverseAnArray = function () {
    if (this.array.isArray || !this.array) return 'Please initialize an array';

    const arr = this.array;
    const newArray = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        newArray[newArray.length] = arr[i];
    };
    this.array = newArray;
    this.size = newArray.length;
    
    return newArray;
};

ArrayList.prototype.checkForIndex = function (argument) {
    if (!argument) return 'Please input an array';
    const arr = this.array;
    
    for (let i = 0; i < arr.length; i++) {
        if (argument === arr[i]) return i;
    };
    for (let i = 0; i < arr.length; i++) {
        if (argument === arr[i]) return i;
    };

    return '-1';
};

ArrayList.prototype.checkForIncludes = function (argument) {
    if(!argument) return 'Please input an element';
    const arr = this.array;

    for (let i = 0; i < arr.length; i++) {
        if (argument === arr[i]) return 'true';
    };

    return 'false';
};