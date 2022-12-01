var Organizer = /** @class */ (function () {
    function Organizer() {
        this.id = 0;
        this.nameOrganizer = '';
    }
    Organizer.prototype.display = function () {
        console.log('The Organizer is ' + this.id + ' And the name is ' + this.nameOrganizer);
    };
    Object.defineProperty(Organizer.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Organizer.prototype, "setId", {
        set: function (id) {
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Organizer.prototype, "getName", {
        get: function () {
            return this.nameOrganizer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Organizer.prototype, "setName", {
        set: function (nameOrganizer) {
            this.nameOrganizer = nameOrganizer;
        },
        enumerable: false,
        configurable: true
    });
    return Organizer;
}());
var Venue = /** @class */ (function () {
    function Venue(id, nameVenue, desciption, address) {
        this.address = address;
        this.id = 0;
        this.nameVenue = '';
        this.desciption = '';
        this.id = id;
        this.nameVenue = nameVenue;
        this.desciption = desciption;
        this.address = address;
    }
    Venue.prototype.display = function () {
        console.log('The Organizer is ' + this.id + ' And the name is ' + this.nameVenue + ' And the desciption is ' + this.desciption);
    };
    Object.defineProperty(Venue.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "setId", {
        set: function (id) {
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "getName", {
        get: function () {
            return this.nameVenue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Venue.prototype, "setName", {
        set: function (nameVenue) {
            this.nameVenue = nameVenue;
        },
        enumerable: false,
        configurable: true
    });
    return Venue;
}());
var Events = /** @class */ (function () {
    function Events(id, nameEvents, desciption, startTime, endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.id = 0;
        this.nameEvents = '';
        this.desciption = '';
        this.id = id;
        this.nameEvents = nameEvents;
        this.desciption = desciption;
        this.startTime = startTime;
        this.endTime = endTime;
    }
    Events.prototype.display = function () {
        console.log('The Organizer is ' + this.id + ' And the name is ' + this.nameEvents + ' And the desciption is ' + this.desciption +
            ' And the Start Time is ' + this.startTime + ' And the End Time is ' + this.endTime);
    };
    Object.defineProperty(Events.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Events.prototype, "setId", {
        set: function (id) {
            this.id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Events.prototype, "getName", {
        get: function () {
            return this.nameEvents;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Events.prototype, "setName", {
        set: function (nameEvents) {
            this.nameEvents = nameEvents;
        },
        enumerable: false,
        configurable: true
    });
    return Events;
}());
var Organize = new Organizer();
Organize.setId = 1;
Organize.setName = 'Alan Walker';
Organize.display();
var eventObj = new Events(2, 'DJblack', 'Dj event', '03:03', '04:04');
eventObj.setId = 2;
eventObj.setName = 'DJblack';
eventObj.display();
var venueObj = new Venue(3, 'DJRose', 'Playing DJ', 'Oppsitie of Office');
venueObj.setId = 3;
venueObj.setName = 'DJRose';
venueObj.display();
