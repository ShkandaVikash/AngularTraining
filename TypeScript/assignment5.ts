////////Assignment 5 on Array and Array Destructing///////////


type vaccineObj ={
    vaccineName:string,
    vaccineType:string
}

let vaccineArray :vaccineObj[];

vaccineArray = [
    {
        vaccineName:'J&J',
        vaccineType:'V103H'
    },
    {
        vaccineName:'Pfizer',
        vaccineType:'K673H'
    },
    {
        vaccineName:'Sputkin',
        vaccineType:'46556x'
    }
];

vaccineArray.push({vaccineName:'Covaxin', vaccineType:'(886bdb)'})


for (const iterator of vaccineArray) {
    console.log(iterator)
}

let [arr1,arr2,...arrRest] = vaccineArray;

console.log('New Array');
for (const iterator of arrRest) {
    console.log(iterator)
}
