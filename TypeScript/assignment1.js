////////Assignment 1 on Type script///////////
var numb = 20;
var piValue = Math.PI;
var message = 'Success is the best Revenge';
var daysofWeek;
(function (daysofWeek) {
    daysofWeek[daysofWeek["MONDAY"] = 0] = "MONDAY";
    daysofWeek[daysofWeek["TUESDAY"] = 1] = "TUESDAY";
    daysofWeek[daysofWeek["WEDNESDAY"] = 2] = "WEDNESDAY";
    daysofWeek[daysofWeek["THURSDAY"] = 3] = "THURSDAY";
    daysofWeek[daysofWeek["FRIDAY"] = 4] = "FRIDAY";
    daysofWeek[daysofWeek["SATURDAY"] = 5] = "SATURDAY";
    daysofWeek[daysofWeek["SUNDAY"] = 6] = "SUNDAY";
})(daysofWeek || (daysofWeek = {}));
function pintInfo() {
    var value = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        value[_i] = arguments[_i];
    }
    console.log(value);
}
pintInfo(numb);
pintInfo(piValue);
pintInfo(message);
pintInfo(daysofWeek);
