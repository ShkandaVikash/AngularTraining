var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var work = ['Developer', 'tester', 'IT'];
var otherWork = __spreadArray(['Manager', 'CEO'], work, true);
//work.forEach(element => {
//    console.log(element);
//});
//otherWork.push(...work);
otherWork.forEach(function (element) {
    console.log(element);
});
var employeeinfo = {
    employeeID: 21780,
    employeeName: 'Vikash'
};
var tempEmployeeDetails = __assign({}, employeeinfo);
console.log(tempEmployeeDetails);
var currEmployeeDetails, tempEmpID = employeeinfo.employeeID, tempEmpName = employeeinfo.employeeName;
console.log(tempEmpID);
console.log(tempEmpName);
