let instance = null

class singletonTester {
	constructor(name) {
		if (!instance) {
			instance = this
		}

		this.name = name

		return instance
	}
}

export default singletonTester



