let Remote = function () {
    this.changeC = function (tivi) {
        tivi.channel++
    };
    this.changeV = function (tivi) {
        tivi.volume++
    };
    this.changeC1 = function (tivi) {
        tivi.channel--;
    };
    this.changeV1 = function (tivi) {
        tivi.volume--;
    };
    this.turnOn = function (tivi) {
        tivi.turnOn();
    };
    this.turnOff = function (tivi) {
        tivi.turnOff();
    }
};