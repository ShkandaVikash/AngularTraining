////////Assignment 5 on Interface///////////
var FlipkartProduct = /** @class */ (function () {
    function FlipkartProduct(productName, productCode) {
        this.productName = '';
        this.productCode = 0;
        this.productCode = productCode;
        this.productName = productName;
    }
    FlipkartProduct.prototype.dateofDisPatch = function () {
        if (this.productCode === 120933) {
            console.log('In 5 day');
        }
        else
            console.log('One week');
    };
    return FlipkartProduct;
}());
var amazonProduct = {
    productName: 'iphone',
    productCode: 18992,
    dateofDisPatch: function () {
        if (this.productCode === 120933) {
            console.log('In 5 day Amazon Product will be delievered');
        }
        else
            console.log('One week Amazon Product will be delievered');
    }
};
var a;
a = function (tempStr) {
    return +tempStr;
};
console.log('Function Interface...' + a('1'));
var dispatchInfo = new FlipkartProduct('Ear Phone', 120933);
dispatchInfo.dateofDisPatch();
console.log(amazonProduct.productName);
