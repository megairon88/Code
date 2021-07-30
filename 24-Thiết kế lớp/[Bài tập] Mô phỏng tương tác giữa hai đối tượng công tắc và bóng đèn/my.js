let switchButton = new switcher();
let electricLamp = new Lamp("h1102");
switchButton.conectToLamp(electricLamp);
switchButton.turnOn();
switchButton.turnOff();