let switcher = function() {
    this.lamp = {};
    this.conectStatus = false;
    this.conectToLamp = function(obj) {
        this.lamp = obj;
        this.status = true;
    };
    this.getStatus = function() {
        if(this.status) {
            console.log(this.lamp.name);
            console.log(this.lamp.status);
        }
    };
    this.turnOff = function() {
        if(this.status) {
            this.lamp.turnOff();
            this.getStatus();
        }
    };
    this.turnOn = function() {
        if(this.status) {
            this.lamp.turnOn();
            this.getStatus();
        }
    }
};