// add status to a person


const user = {
	name: 'Peter',
	speak() {
		let sentence = ''
		Object.keys(this).map(key => {
			const value = this[key]
			if (typeof value != 'function') {
				sentence += `${this.name}'s ${key} is ${value} \n`
			}
		})
		console.log(sentence)
	}
}

const decorateUser = (user, city) => {
	return {
		...user,
		city
	}
}

const docoratedUser = decorateUser(user, 'New York')


user.speak()	// Peter's name is Peter

docoratedUser.speak()	// Peter's name is Peter, Peter's city is New York 