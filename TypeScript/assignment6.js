var studentDetails = {
    mathsMark: 70,
    physiscMark: 90,
    chemistryMark: 66
};
var avgMark = function () { return (studentDetails.mathsMark + studentDetails.physiscMark + studentDetails.chemistryMark) / 3; };
function gradeDetails(avgMark) {
    if (avgMark <= 70) {
        console.log('Your grade is C');
    }
    else if (avgMark >= 70 && avgMark <= 90) {
        console.log('Your grade is B');
    }
    else
        console.log('Your grade is A');
}
gradeDetails(avgMark());
