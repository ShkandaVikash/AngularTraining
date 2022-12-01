////////Assignment 4 on Object and Object Destructing///////////

let employee: {
    id:number,
    emplname:string,
    salary:number
}={
    id:811292,
    emplname:'Shkanda',
    salary:10023,
}

for (const key in employee) {
    console.log(key);
    console.log(employee[key]);
}

let {id:newId,emplname:newemplname,salary:newSalary} =employee;

console.log('New Value'+newId);
console.log('New Value',newemplname);
console.log('New Value',newSalary);