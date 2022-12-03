////////////Swapping of variables////////////

var anumb = 1;
var bnumb = 7;

function swapValues(anumb,bnumb){
    console.log('Value before swaping ');
    console.log('Value of anumb ',anumb);
    console.log('Value of bnumb ',bnumb);
    var tempVar = anumb;
    anumb =  bnumb;
    bnumb =  tempVar;
    console.log('Value after swaping ');
    console.log('Value of anumb ',anumb);
    console.log('Value of b ',bnumb);
}

swapValues(anumb,bnumb);
