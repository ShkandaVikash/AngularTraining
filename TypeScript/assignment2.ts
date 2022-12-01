////////Assignment 3 on Conditional Statments///////////

const numbStr : string = prompt('Please enter a number')!;

function checkOddorEven(tempnumb:number){
    tempnumb%2===0?console.log('number is Even'):console.log('number is Odd')
}

function checkValidNumber(numberToCheck:string){
    if(!isNaN(Number(numberToCheck))) {
        let tempnumb : number = parseInt(numbStr);
        checkOddorEven(tempnumb);
    }
    else 
        console.log("string is NOT a number")
    }

checkValidNumber(numbStr);
