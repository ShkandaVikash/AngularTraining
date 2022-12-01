////////Assignment 5 on Prime number///////////

let ranNumber = 5;

function checkForPrime(ranNumber:number){
    let divdingNumber = 2;
    while((isPrime(ranNumber,divdingNumber)) && (divdingNumber<(ranNumber-1))){
        divdingNumber++;
    }
}


const isPrime = (anumber:number,divdingNumber:number) =>{
    if(anumber%divdingNumber===0){
        console.log('The number is not prime');
        return false
    }else{
        if((anumber-1)===divdingNumber){
            console.log('The number is Prime');
        }
        return true;
    }
        
};

checkForPrime(ranNumber);

