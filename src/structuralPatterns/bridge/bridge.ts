
/* 
* Designed to decouple an abstraction from its implementation so that the two can vary independently.
* More simply put, consider the abstraction and the implentation two different hierarchies.
* By using the bridge pattern, we can change the implementation without changing the abstraction.
* And we can change the abstraction without changing the implementation.
* They can evolve independently.
* 
* Imagine a world in which you had to handle every possible combination in the abtraction. Windows, Mac, Linux, Android, iOS, etc.
* Yikes!
*/

//abstraction (what the client will use)

abstract class Alert {

    protected device: IDevice;

    constructor (device: IDevice) {
        this.device = device;
    }

    abstract alert(): void;
}

//implementor (the how)

interface IDevice {
    errorAlert: () => void;
    warningAlert: () => void;
}


//concrete implementor 1

class Phone implements IDevice {
    errorAlert() {
        console.log('Phone error alert');
    }
    warningAlert() {
        console.log('Phone warning alert');
    }
}


//concrete implementor 2

class Desktop implements IDevice {
    errorAlert() {
        console.log('Desktop error alert');
    }
    warningAlert() {
        console.log('Desktop warning alert');
    }
}


//Concrete abstraction 1

class ErrorAlert extends Alert {

    constructor(device: IDevice) {
        super(device);
    }

    alert() {
        this.device.errorAlert();
    }
}

//Concrete abstraction 2

class WarningAlert extends Alert {

    constructor(device: IDevice) {
        super(device);
    }

    alert() {
        this.device.warningAlert();
    }
}

//client

const phone = new Phone();
const desktop = new Desktop();

const errorAlertPhone = new ErrorAlert(phone);
const warningAlertPhone = new WarningAlert(phone);

errorAlertPhone.alert();
warningAlertPhone.alert();

const errorAlertDesktop = new ErrorAlert(desktop);
const warningAlertDesktop = new WarningAlert(desktop);

errorAlertDesktop.alert();
warningAlertDesktop.alert();