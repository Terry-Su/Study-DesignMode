// create plenty of cars


class Car {
	constructor() {
		this.name = 'car'
	}
}

const carSimpleFactory = {
    makeCar: (color, size) => {
        const car = new Car()
        car.color = color
        car.size = size
        return car
    }
}


const car1 = carSimpleFactory.makeCar('white', 'big')
const car2 = carSimpleFactory.makeCar('red', 'big')
const car3 = carSimpleFactory.makeCar('yellow', 'middle')

console.log(car1, car2, car3)