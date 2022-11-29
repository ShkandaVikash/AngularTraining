function convertToString(num1, isTrue) {
    if (typeof isTrue == "number") {
        console.log('The number is' + num1);
    }
    else if (typeof isTrue == "boolean") {
        console.log('The number is' + num1);
    }
    else {
        console.log('The number is' + num1);
    }
}
function convertToNumber(str, convertToString) {
    var result = +str * +str;
    convertToString(result, true);
}
//let functionRef: ()=>;
var functionRef = convertToNumber;
console.log(functionRef('9', convertToString));
//console.log(convertToString(4,'Student')) ;
