class TouchScreenLaptop {
    ram:String;
    hd:string;
    processor:string;

    constructor(ram:String,hd:string,processor:string){
        this.ram=ram;
        this.hd=hd;
        this.processor=processor;
     }

    scroll() {
        console.log('Scrolling');
    }

    click(){
        console.log('Clicked');
    }
}

class HPLaptop extends TouchScreenLaptop {
    selfRecovery:boolean;

    constructor(selfRecovery:boolean,ram:String,hd:string,processor:string){
        super(ram,hd,processor);
        this.selfRecovery=selfRecovery;
    }

    scroll() {
        console.log('Scrolling in HPLaptop');
    }

    diplay(){
        console.log('The HPLaptop Property '+this.ram);
        console.log('The HPLaptop Property '+this.hd);
        console.log('The HPLaptop Property '+this.processor);
        console.log('The HPLaptop Property '+this.selfRecovery);
    }

}

class DellLapTop extends TouchScreenLaptop {
    mobileAccess:boolean
    constructor(mobileAccess:boolean,ram:String,hd:string,processor:string){
        super(ram,hd,processor);
        this.mobileAccess=mobileAccess;
    }
    scroll() {
        console.log('Scrolling in DellLapTop');
    }

    diplay(){
        console.log('The Dell Property '+this.ram);
        console.log('The Dell Property '+this.hd);
        console.log('The Dell Property '+this.processor);
        console.log('The Dell Property '+this.mobileAccess);
    }
}

let hpLaptop = new HPLaptop(true,'5GB','OLA','octacore');
let dellLapTop = new DellLapTop(false,'4GB','OQLED','Pentacore');

hpLaptop.scroll();
hpLaptop.diplay();

dellLapTop.scroll();
dellLapTop.diplay();


