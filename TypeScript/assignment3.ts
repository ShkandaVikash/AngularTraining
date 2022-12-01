////////Assignment 3 on Looping Statment///////////

const numbS : string = prompt('Please enter a number')!;

function checkOddorEven(tempnumb:number){
    let tempvar:number=1;
    while(tempnumb>tempvar){
        if(tempvar%5===0){
            ++tempvar;
            continue;
        }
        console.log(tempvar);       
        ++tempvar;
    }
}

function checkValidNumber(numberToCheck:string){
    if(!isNaN(Number(numberToCheck))) {
        let tempnumb : number = parseInt(numbS);
        checkOddorEven(tempnumb);
    }
    else 
        console.log("string is NOT a number")
    }

checkValidNumber(numbS);
