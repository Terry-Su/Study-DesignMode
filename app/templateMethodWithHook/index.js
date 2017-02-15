// cook tea and coffee

class Beverage {
	boilWater() {
		console.log( `Boil the water` )
	}
	brew() {
		// to be described by child class
	}
	pourInCup() {
		// to be described by child class
	}
	addCondiments() {
		// to be described by child class
	}
	// hook
	customerWantsCondiments() {
		return true
	}
	init() {
		this.boilWater()
		this.brew()
		this.pourInCup()
		if (this.customerWantsCondiments()) {
			this.addCondiments()
		}

		console.log(`Cook is completed!\n`)
	}
}

class Tea extends Beverage {
	brew() {
		console.log(`Brew tea`);
	}
	pourInCup() {
		console.log(`Put tea into the cup`)
	}
	addCondiments() {
		console.log(`Add lemon`)
	}
	// update hook
	customerWantsCondiments() {
		return false
	}

}

class Coffee extends Beverage {
	brew() {
		console.log(`Coffee tea`);
	}
	pourInCup() {
		console.log(`Put coffee into the cup`)
	}
	addCondiments() {
		console.log(`Add sugar and milk`)
	}
	// update hook
	customerWantsCondiments() {
		return true
	}
}


const tea = new Tea()
tea.init()

const coffee = new Coffee()
coffee.init()
