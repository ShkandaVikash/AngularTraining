////////Assignment 5 on Array and Array Destructing///////////
var vaccineArray;
vaccineArray = [
    {
        vaccineName: 'J&J',
        vaccineType: 'V103H'
    },
    {
        vaccineName: 'Pfizer',
        vaccineType: 'K673H'
    },
    {
        vaccineName: 'Sputkin',
        vaccineType: '46556x'
    }
];
vaccineArray.push({ vaccineName: 'Covaxin', vaccineType: '(886bdb)' });
for (var _i = 0, vaccineArray_1 = vaccineArray; _i < vaccineArray_1.length; _i++) {
    var iterator = vaccineArray_1[_i];
    console.log(iterator);
}
var arr1 = vaccineArray[0], arr2 = vaccineArray[1], arrRest = vaccineArray.slice(2);
console.log('New Array');
for (var _a = 0, arrRest_1 = arrRest; _a < arrRest_1.length; _a++) {
    var iterator = arrRest_1[_a];
    console.log(iterator);
}
