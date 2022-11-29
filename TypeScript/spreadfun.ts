let work=['Developer','tester','IT'];
let otherWork = ['Manager','CEO',...work];

//work.forEach(element => {
//    console.log(element);
//});

//otherWork.push(...work);

otherWork.forEach(element => {
    console.log(element);
});

let employeeinfo ={
    employeeID:21780,
    employeeName:'Vikash'
};

let tempEmployeeDetails = {...employeeinfo}

console.log(tempEmployeeDetails);

let currEmployeeDetails ,{ employeeID:tempEmpID , employeeName:tempEmpName } = employeeinfo;

console.log(tempEmpID);
console.log(tempEmpName);