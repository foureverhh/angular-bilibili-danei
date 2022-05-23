interface Operable {
    start():void;
    stop():void;
}

class Car implements Operable{
    start(): void {
        console.log("car start")
    }
    stop(): void {
        console.log("car stop")
    }
}

let car = new Car();
car.start(); 