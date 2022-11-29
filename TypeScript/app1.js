var firstName = 'Shkanda';
var lastName = 'Vikash';
var age = 29;
var ismale = true;
var babyArry = ['sashhmita', 'jojo', , 1, true, 0.4];
var babyArr = ['lally', 'Bharathi'];
var arr1 = [true, 'Value'];
var Role;
(function (Role) {
    Role[Role["SOFTWARE"] = 1] = "SOFTWARE";
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["ITINFRA"] = 20] = "ITINFRA";
    Role[Role["TESTING"] = 30] = "TESTING";
})(Role || (Role = {}));
;
var person = {
    valueage: 30,
    personName: 'vinoth'
};
var employee;
function enrichValues(array1) {
    arr1[0] = false;
    for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
        var i = array1_1[_i];
        console.log(i);
    }
}
function printName(name, age) {
    console.log(name);
}
function printObject(person) {
    console.log(person.personName);
}
function printEnum(Role) {
    console.log(Role.ITINFRA);
}
enrichValues(arr1);
printName('Vikash', age);
printObject(person);
printEnum(Role);
