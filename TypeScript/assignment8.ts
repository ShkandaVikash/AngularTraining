////////Assignment 8 and 9 on Interface and Class///////////

interface Product {
    productName:String,
    productCode:number,
    manufatuingDate?:String

    dateofDisPatch(productName:String,productCode:number);
}

class FlipkartProduct implements Product{

    productName='';
    productCode=0;
    constructor(productName:string,productCode:number){
        this.productCode=productCode;
        this.productName=productName;
    }
    dateofDisPatch(){
        if(this.productCode===120933){
            console.log('In 5 day')
        }else
            console.log('One week')
    }
}

let amazonProduct:Product={
    productName:'iphone',
    productCode:18992

    ,dateofDisPatch(){
        if(this.productCode===120933){
            console.log('In 5 day Amazon Product will be delievered')
        }else
            console.log('One week Amazon Product will be delievered')
    }
}

interface Services{
    (tempvalue:String):number
}

let a : Services;

a = function(tempStr:String){
    return +tempStr;
}

console.log('Function Interface...'+ a('1'))


let dispatchInfo = new FlipkartProduct('Ear Phone',120933);
dispatchInfo.dateofDisPatch();

console.log(amazonProduct.productName)