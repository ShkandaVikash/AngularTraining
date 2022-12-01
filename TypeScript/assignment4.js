////////Assignment 4 on Object and Object Destructing///////////
var employee = {
    id: 811292,
    emplname: 'Shkanda',
    salary: 10023
};
for (var key in employee) {
    console.log(key);
    console.log(employee[key]);
}
var newId = employee.id, newemplname = employee.emplname, newSalary = employee.salary;
console.log('New Value' + newId);
console.log('New Value', newemplname);
console.log('New Value', newSalary);
