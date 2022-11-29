abstract class Education {
    abstract getCGPC(arr: number[])
}

class Student extends Education{

    studentName : String = "Shkanda";
    studentRollNum : Number;
    private students: String[] = [];
    protected subjects: String[] =[];
    public markArry: number[] = [];

    constructor(public section:String,readonly marks:number){
       super();
    }

    getCGPC(markArry:number[]){
       return markArry.reduce((currres,currvalue){
            return currres+currvalue;
        },0);
    }

   
    addStuDentsArray(student: String){
        this.students.push(student);
    }

    addSubjectArray(subject: String){
        this.subjects.push(subject);
    }
    
    printStudentInfo(){
        this.students.forEach(element => {
            console.log(element);
        });
    }

    printSubjectInfo(){
        this.subjects.forEach(element => {
            console.log(element);
        });
    }

   // constructor(studentName:String,StudId:Number){
   //     this.studentName=studentName;
   //     this.studentRollNum=StudId;
   // }

}
    
    let nameofStudent = new Student('C',450);
    //console.log(nameofStudent);
    //nameofStudent.marks = '500';
    nameofStudent.addStuDentsArray('Shkanda');
    nameofStudent.addStuDentsArray('Vikash');
    nameofStudent.addStuDentsArray('Jojo');
    nameofStudent.printStudentInfo();

    class CollegeStudent extends Student {

        constructor(public section:String,readonly marks:number,private collegeName: String){
            super(section,marks);
            this.collegeName=collegeName;
        }

        addSubjectArray(subject: String){
            console.log('Inside Child Class');
            this.subjects.push(subject);
        }
        
        printSubjectInfo(){
            this.subjects.forEach(element => {
                console.log('Inside Child class'+element);
            });
        }

    }

    let collegeDetails = new CollegeStudent('A',840,'Sona');
    collegeDetails.addStuDentsArray('Value1');
    collegeDetails.addSubjectArray('Science');
    collegeDetails.addSubjectArray('Social');
    collegeDetails.addSubjectArray('English');
    collegeDetails.printSubjectInfo();

    class schoolStudent extends Student {

        private schoolName:String;
        private schoolFee:number;

        get getSchoolName(){
            console.log('Inside Getter method');
            return this.schoolName;
        }
 
        set setSchoolName(schoolName:String){ 
            this.schoolName=schoolName;
            console.log('Inside Setter Method'+this.schoolName);
        }

        static getSchoolFee(baseFee:number){
            return baseFee*40000;
        }

    }

    let schoolDetails = new schoolStudent('C',450);

    schoolDetails.setSchoolName = 'Sri Vidya mandri';
    schoolDetails.getSchoolName;
    console.log(schoolStudent.getSchoolFee(19000))