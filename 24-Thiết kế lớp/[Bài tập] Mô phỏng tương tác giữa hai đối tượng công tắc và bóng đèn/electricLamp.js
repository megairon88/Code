let Lamp = function(name) {
    this.name = name;
    this.status = false;
    this.turnOn = function() {
        if(this.status) {
            console.log("dang sang");
        } else {
            console.log("den da duoc bat!");
            this.status = true;
        }
    };
    this.turnOff = function() {
        if(this.status) {
            console.log("den da duoc tat!");
            this.status = false;
        } else {
            console.log("dang sang roi ma");
        }
    };
};