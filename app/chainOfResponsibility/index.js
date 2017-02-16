// get $247 from an ATM machine(servering $100, $50, $20, $10, $5, $1) automatically


const ATM = {
	targetAmount: 0,
	outputFactory(value) {
		return () => {
			const count = Math.floor(this.targetAmount / value)
			if (!!count) {
				console.log(`ATM outputs ${count} X $${value}`)
			}

			this.targetAmount -= count * value

			return this
		}
	},
	output100() {
		const fn = this.outputFactory(100)
		return fn()
	},
	output50() {
		const fn = this.outputFactory(50)
		return fn()
	},
	output20() {
		const fn = this.outputFactory(20)
		return fn()
	},
	output10() {
		const fn = this.outputFactory(10)
		return fn()
	},
	output5() {
		const fn = this.outputFactory(5)
		return fn()
	},
	output1() {
		const fn = this.outputFactory(1)
		return fn()
	},
	output(amount) {
		// reset
		this.targetAmount = amount

		// chain
		this.output100().output50().output20().output10().output5().output1()
	}
}

const getDollar = amount => ATM.output(amount)

getDollar(568)
// output
// ATM outputs 5 X $100
// ATM outputs 1 X $50
// ATM outputs 1 X $10
// ATM outputs 1 X $5
// ATM outputs 3 X $1
