////////////Truthy and Falsy////////////

///// Falsy values
//Undefined
//''
//null
//Nan
//false
//0

let arr = [0,null,undefined,false,2,3,4,NaN]
countTruthy(arr);

function countTruthy(arr){
    let truthy = 0;
    let falsy = 0 ;
    for (const tempValue of arr) {
        //if(tempValue===0 || tempValue===false || tempValue==='' || tempValue === undefined || tempValue===NaN || tempValue === null){
        //    ++falsy
        //}else
        //    ++truthy
        if(tempValue){
            ++truthy
        }else
            ++falsy

    }
    console.log('Truthy Value is '+truthy);
    console.log('Fasly Value is '+falsy);
}