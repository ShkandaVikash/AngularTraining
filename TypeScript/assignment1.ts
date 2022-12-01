////////Assignment 1 on Type script///////////

let numb:number=20;
let piValue=Math.PI;
let message:string='Success is the best Revenge';
enum daysofWeek {
    MONDAY,TUESDAY,WEDNESDAY,THURSDAY,FRIDAY,SATURDAY,SUNDAY
}

function pintInfo(...value){
    console.log(value);
}

pintInfo(numb);
pintInfo(piValue);
pintInfo(message);
pintInfo(daysofWeek);

