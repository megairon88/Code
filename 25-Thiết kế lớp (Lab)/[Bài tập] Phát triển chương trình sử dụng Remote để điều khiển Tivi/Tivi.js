let TV = function (channel, volume) {
    this.channel= channel;
    this.volume=volume;
    this.status=false;
    this.setchannel = function (channel) {
        this.channel=channel;
    };
    this.getchannel = function () {
        return this.channel;
    };
    this.turnOff = function () {
        this.status = false;
    };
    this.turnOn = function () {
        this.status = true;
    };
    this.check = function () {
        if (this.status) {
            console.log("Tivi: On")
        } else {
            console.log("Tivi: Off")
        }
    };
    this.changeChannel = function () {
        this.channel++;
    };
    this.changeChannel1 = function () {
        this.channel--;
    };
    this.changeVolume = function () {
        this.volume++;
    };
    this.changeVolume1 = function () {
        this.volume--;
    };
};