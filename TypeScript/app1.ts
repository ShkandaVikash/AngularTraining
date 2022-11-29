let firstName: String ='Shkanda';
let lastName ='Vikash';
let age: number=29;
let ismale: boolean = true;
let babyArry = ['sashhmita','jojo',,1,true,0.4];
let babyArr: String[] = ['lally','Bharathi'];
let arr1: [combineable,String] = [true,'Value'];
type combineable = boolean|number;
type strComabianle = 'Shkanda'|'Vikash';
enum Role {

    SOFTWARE =1,
    ADMIN=10,
    ITINFRA=20,
    TESTING=30
};

let person:{
    valueage:number;
    personName:String
}={
    valueage:30,
    personName:'vinoth'
}

type person1={
    valueage:30,
    personName:'vinoth'
}

let employee:{
    employeedId:21780,
    designatio:'Software Engg'
}

function enrichValues(array1:[boolean|number,String]){
    arr1[0] = false;
    for(let i of array1){
        console.log(i)
    }
}

function printName(name: strComabianle,age){
    console.log(name)
}

function printObject(person){
    console.log(person.personName);
}

function printEnum(Role){
    console.log(Role.ITINFRA)
}

enrichValues(arr1);
printName('Vikash',age);
printObject(person);
printEnum(Role);