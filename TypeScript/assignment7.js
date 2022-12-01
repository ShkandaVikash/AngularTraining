var ranNumber = 5;
function checkForPrime(ranNumber) {
    var divdingNumber = 2;
    while ((isPrime(ranNumber, divdingNumber)) && (divdingNumber < (ranNumber - 1))) {
        divdingNumber++;
    }
}
var isPrime = function (anumber, divdingNumber) {
    if (anumber % divdingNumber === 0) {
        console.log('The number is not prime');
        return false;
    }
    else {
        if ((anumber - 1) === divdingNumber) {
            console.log('The number is Prime');
        }
        return true;
    }
};
checkForPrime(ranNumber);
