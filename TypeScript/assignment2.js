var numbStr = prompt('Please enter a number');
function checkOddorEven(tempnumb) {
    tempnumb % 2 === 0 ? console.log('number is Even') : console.log('number is Odd');
}
function checkValidNumber(numberToCheck) {
    if (!isNaN(Number(numberToCheck))) {
        var tempnumb = parseInt(numbStr);
        checkOddorEven(tempnumb);
    }
    else
        console.log("string is NOT a number");
}
checkValidNumber(numbStr);
