// Set string to name

let target = {}

let receiveStr = new Proxy(target, {
	set(target, prop, value, receiver) {
		const isStr = (typeof value) === 'string'
		return isStr ? Reflect.set(target, prop, value, receiver) : true
	}
})

receiveStr.name = 123
console.log( target.name )	// undefined

receiveStr.name = 'Peter'
console.log( target.name )	// 'Peter'