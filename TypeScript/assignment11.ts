
class Organizer{

    private id = 0;
    private nameOrganizer='';

    display(){
        console.log('The Organizer is '+ this.id+' And the name is '+this.nameOrganizer);
    }

    get getId():number{
        return this.id;
    }

    set setId(id:number){
        this.id=id
    }

    get getName():string{
        return this.nameOrganizer;
    }
    set setName(nameOrganizer:string){
        this.nameOrganizer=nameOrganizer;
    }   
}

class Venue  {

    private id = 0;
    private nameVenue='';
    private desciption = '';

    constructor(id:number,nameVenue:string,desciption:string,public address:string){
        this.id = id;
        this.nameVenue =nameVenue;
        this.desciption=desciption;
        this.address=address;
    }

    display(){
        console.log('The Organizer is '+ this.id+' And the name is '+this.nameVenue+' And the desciption is '+this.desciption);
    }

    get getId():number{
        return this.id;
    }

    set setId(id:number){
        this.id=id
    }

    get getName():string{
        return this.nameVenue;
    }
    set setName(nameVenue:string){
        this.nameVenue=nameVenue;
    }
}

class Events {
        
    private id = 0;
    private nameEvents='';
    private desciption = '';

    constructor(id:number,nameEvents:string,desciption:string,public startTime:string,public endTime:String){
        this.id = id;
        this.nameEvents =nameEvents;
        this.desciption=desciption;
        this.startTime=startTime;
        this.endTime=endTime;
    }

    display(){
        console.log('The Organizer is '+ this.id+' And the name is '+this.nameEvents+' And the desciption is '+this.desciption+
        ' And the Start Time is '+ this.startTime+' And the End Time is '+ this.endTime);
    }

    get getId():number{
        return this.id;
    }

    set setId(id:number){
        this.id=id
    }

    get getName():string{
        return this.nameEvents;
    }
    set setName(nameEvents:string){
        this.nameEvents=nameEvents;
    }
}

let Organize = new Organizer();
Organize.setId = 1;
Organize.setName = 'Alan Walker';
Organize.display();
let eventObj = new Events(2,'DJblack','Dj event','03:03','04:04');
eventObj.setId = 2;
eventObj.setName = 'DJblack';
eventObj.display();
let venueObj = new Venue(3,'DJRose','Playing DJ','Oppsitie of Office');
venueObj.setId=3;
venueObj.setName='DJRose'
venueObj.display();