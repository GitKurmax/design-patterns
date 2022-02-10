class TeslaCar {

    constructor(model, price, interior, autopilot) {
        this.model = model;
        this.price = price;
        this.interior = interior;
        this.autopilot = autopilot;
    }

    produce() {
        return new TeslaCar(this.model, this.price, this.interior, this.autopilot);
    }
}

const carPrototype = new TeslaCar('X', 20000, 'black', true)

const car1 = carPrototype.produce()
const car2 = carPrototype.produce()
const car3 = carPrototype.produce()

car2.interior = 'white'
car3.autopilot = false

console.log(car1);
console.log(car2);
console.log(car3);