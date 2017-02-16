// manufacture and sell cars


class Car {
	constructor() {
		this.name = 'car'
	}
}

class CarFactory {
	sellCar(type, features) {
		var car = this.manufactureCar(type, features);

		console.log(`The car: ${type} was sold`)

		return car;
	}
	decorateCar(car, features) {
    	// ...
    }
    manufactureCar(type, features) {
    	throw new Error("manufactureCar have to be declared by sub class");
    }
}

const jackCarFactory = new CarFactory()

jackCarFactory.manufactureCar = (type, features) => {
	console.log(`The car: ${type} was manufactured`)
	return new Car(type, {
		color: features.color || 'white'
	})
}

jackCarFactory.sellCar(`Buick`, {})
