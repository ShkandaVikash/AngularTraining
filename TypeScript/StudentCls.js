var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(section, marks) {
        this.section = section;
        this.marks = marks;
        this.studentName = "Shkanda";
        this.students = [];
        this.subjects = [];
        //this.section=section;
    }
    Student.prototype.addStuDentsArray = function (student) {
        this.students.push(student);
    };
    Student.prototype.addSubjectArray = function (subject) {
        this.subjects.push(subject);
    };
    Student.prototype.printStudentInfo = function () {
        this.students.forEach(function (element) {
            console.log(element);
        });
    };
    Student.prototype.printSubjectInfo = function () {
        this.subjects.forEach(function (element) {
            console.log(element);
        });
    };
    return Student;
}());
var nameofStudent = new Student('C', 450);
//console.log(nameofStudent);
//nameofStudent.marks = '500';
nameofStudent.addStuDentsArray('Shkanda');
nameofStudent.addStuDentsArray('Vikash');
nameofStudent.addStuDentsArray('Jojo');
nameofStudent.printStudentInfo();
var CollegeStudent = /** @class */ (function (_super) {
    __extends(CollegeStudent, _super);
    function CollegeStudent(section, marks, collegeName) {
        var _this = _super.call(this, section, marks) || this;
        _this.section = section;
        _this.marks = marks;
        _this.collegeName = collegeName;
        _this.collegeName = collegeName;
        return _this;
    }
    CollegeStudent.prototype.addSubjectArray = function (subject) {
        console.log('Inside Child Class');
        this.subjects.push(subject);
    };
    CollegeStudent.prototype.printSubjectInfo = function () {
        this.subjects.forEach(function (element) {
            console.log('Inside Child class' + element);
        });
    };
    return CollegeStudent;
}(Student));
var collegeDetails = new CollegeStudent('A', 840, 'Sona');
collegeDetails.addStuDentsArray('Value1');
collegeDetails.addSubjectArray('Science');
collegeDetails.addSubjectArray('Social');
collegeDetails.addSubjectArray('English');
collegeDetails.printSubjectInfo();
var schoolStudent = /** @class */ (function (_super) {
    __extends(schoolStudent, _super);
    function schoolStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(schoolStudent.prototype, "getSchoolName", {
        get: function () {
            console.log('Inside Getter method');
            return this.schoolName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(schoolStudent.prototype, "setSchoolName", {
        set: function (schoolName) {
            this.schoolName = schoolName;
            console.log('Inside Setter Method' + this.schoolName);
        },
        enumerable: false,
        configurable: true
    });
    schoolStudent.getSchoolFee = function (baseFee) {
        return baseFee * 40000;
    };
    return schoolStudent;
}(Student));
var schoolDetails = new schoolStudent('C', 450);
schoolDetails.setSchoolName = 'Sri Vidya mandri';
schoolDetails.getSchoolName;
console.log(schoolStudent.getSchoolFee(19000));
