// cook tea and coffee
const Beverage = param => {
	const boilWater = () => {
		console.log( `Boil the water` )
	}
	const brew = param.brew || ( () => { throw new Error( 'brew method is needed!' ) } )
	const pourInCup = param.pourInCup || ( () => { throw new Error( 'pourInCup method is needed!' ) } )
	const addCondiments = param.addCondiments || ( () => { throw new Error( 'addCondiments method is needed!' ) } )
	return {
		init() {
			boilWater()
			brew()
			pourInCup()
			addCondiments()

			console.log(`Cook is completed!\n`)
		}
	}
}

const tea = Beverage({
	brew() {
		console.log(`Brew tea`);
	},
	pourInCup() {
		console.log(`Put tea into the cup`)
	},
	addCondiments() {
		console.log(`Add lemon`)
	}
})

const coffee = Beverage({
	brew() {
		console.log(`Coffee tea`);
	},
	pourInCup() {
		console.log(`Put coffee into the cup`)
	},
	addCondiments() {
		console.log(`Add sugar and milk`)
	},
	// update hook
	customerWantsCondiments() {
		return true
	}
})

tea.init()

coffee.init()
