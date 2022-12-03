/////////FizzBuzz/////////

var result = fizzBuzz(29);
//console.log(result);

function fizzBuzz(randamValue){

    if( typeof randamValue !== 'number'){                       // when using isNan for boolen we are getting invalid result
        console.log('Not a Number') // console.log(NaN)
    }else{
        if(randamValue%3===0 && randamValue%5===0){
            console.log('FizzBuzz')
        }else if(randamValue%3===0 ){
            console.log('Fizz')
        }else if(randamValue%5===0){
            console.log('Buzz')
        }else
        console.log(randamValue)
    }
        
}

