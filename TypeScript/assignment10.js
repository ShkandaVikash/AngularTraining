var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TouchScreenLaptop = /** @class */ (function () {
    function TouchScreenLaptop(ram, hd, processor) {
        this.ram = ram;
        this.hd = hd;
        this.processor = processor;
    }
    TouchScreenLaptop.prototype.scroll = function () {
        console.log('Scrolling');
    };
    TouchScreenLaptop.prototype.click = function () {
        console.log('Clicked');
    };
    return TouchScreenLaptop;
}());
var HPLaptop = /** @class */ (function (_super) {
    __extends(HPLaptop, _super);
    function HPLaptop(selfRecovery, ram, hd, processor) {
        var _this = _super.call(this, ram, hd, processor) || this;
        _this.selfRecovery = selfRecovery;
        return _this;
    }
    HPLaptop.prototype.scroll = function () {
        console.log('Scrolling in HPLaptop');
    };
    HPLaptop.prototype.diplay = function () {
        console.log('The HPLaptop Property ' + this.ram);
        console.log('The HPLaptop Property ' + this.hd);
        console.log('The HPLaptop Property ' + this.processor);
        console.log('The HPLaptop Property ' + this.selfRecovery);
    };
    return HPLaptop;
}(TouchScreenLaptop));
var DellLapTop = /** @class */ (function (_super) {
    __extends(DellLapTop, _super);
    function DellLapTop(mobileAccess, ram, hd, processor) {
        var _this = _super.call(this, ram, hd, processor) || this;
        _this.mobileAccess = mobileAccess;
        return _this;
    }
    DellLapTop.prototype.scroll = function () {
        console.log('Scrolling in DellLapTop');
    };
    DellLapTop.prototype.diplay = function () {
        console.log('The Dell Property ' + this.ram);
        console.log('The Dell Property ' + this.hd);
        console.log('The Dell Property ' + this.processor);
        console.log('The Dell Property ' + this.mobileAccess);
    };
    return DellLapTop;
}(TouchScreenLaptop));
var hpLaptop = new HPLaptop(true, '5GB', 'OLA', 'octacore');
var dellLapTop = new DellLapTop(false, '4GB', 'OQLED', 'Pentacore');
hpLaptop.scroll();
hpLaptop.diplay();
dellLapTop.scroll();
dellLapTop.diplay();
