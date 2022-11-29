var addResult = function () {
    var argum = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        argum[_i] = arguments[_i];
    }
    return argum.reduce(function (curResult, currValue) {
        return curResult * currValue;
    }, 1);
};
console.log(addResult(2, 5, 8));
console.log(addResult(3, 6, 9, 2, 5));
