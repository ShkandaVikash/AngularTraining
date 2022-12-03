console.log(sum(10));

function sum(sumNumber){
    let result =0;
    //let arrSum = [];
     for(let i=0;i<=sumNumber;i++){
         if(i%3===0 || i%5===0){
           /// result = result+i
            result+=i

         }
     }
    // if(arrSum){
    //     return arrSum.reduce((currentresult,currentValue) =>{
    //         return currentresult+currentValue;
    //     })
    // }
    // else
    //     return 'No Value'
    return result
}