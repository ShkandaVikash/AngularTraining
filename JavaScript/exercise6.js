////////////Show Number////////////

showNumber(10)
function showNumber(numb){
    let tempvalue = 0;
     while(numb>=tempvalue){
        console.log(tempvalue,tempvalue%2===0?"EVEN":"ODD")
        ++tempvalue
     }
}

