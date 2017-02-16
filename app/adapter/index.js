// sync the function of two interface


const idealInterface = {
	data: {
		name: 'peter',
		age: '20'
	}
}

const currentInterface = {
	name: 'peter',
	age: '20'
}

const interfaceAdapter = theInterface => {
	return {
		data: { ...theInterface }
	}
}

// create new interface
const adaptedInterface = interfaceAdapter(currentInterface)


console.log( JSON.stringify(idealInterface) === JSON.stringify(adaptedInterface) )	// true