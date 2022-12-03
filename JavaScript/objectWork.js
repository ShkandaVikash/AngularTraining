function createCricle(radius,diameter,innerCircle){
    return {
        radius,
        diameter,
        obj2 : {
            colour:innerCircle.colour,
            tangent:innerCircle.tangent
        },
        draw(){
            console.log(this.radius);
            console.log(this.obj2.colour);
        }
        
    }
}

const innerCircle = {
    colour: 'rose',
    tangent: 90
};

const tempCircle = createCricle(10,20,innerCircle);

//tempCircle.draw();

let x = {
    value:20
}

let y=x
x.value=30
y = {}
console.log(x.value)