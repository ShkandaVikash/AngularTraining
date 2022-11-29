let addResult = (...argum) =>{

   return argum.reduce((curResult,currValue)=>{
        return curResult*currValue;
    },1);
};

console.log(addResult(2,5,8));

console.log(addResult(3,6,9,2,5));