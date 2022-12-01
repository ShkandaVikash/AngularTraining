////////Assignment 1 on Type script///////////
var numbS = prompt('Please enter a number');
function checkOddorEven(tempnumb) {
    var tempvar = 1;
    while (tempnumb > tempvar) {
        if (tempvar % 5 === 0) {
            ++tempvar;
            continue;
        }
        console.log(tempvar);
        ++tempvar;
    }
}
function checkValidNumber(numberToCheck) {
    if (!isNaN(Number(numberToCheck))) {
        var tempnumb = parseInt(numbS);
        checkOddorEven(tempnumb);
    }
    else
        console.log("string is NOT a number");
}
checkValidNumber(numbS);
