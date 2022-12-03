////////Speed limit///////////
let startingPoint =14;
let speed = 130;
checkSpeead(speed);

function checkSpeead(speed){
    if(speed<75){
        console.log('Okay')
    }else if(speed>=130){
        console.log('Suspended')
    }else{
        let points = (Math.floor(speed/5))-startingPoint
        console.log('Ponits '+points)
    }
}