// realize the basic function of caculator


const addCommand = (value, receiver) => ({
	excute() {
		receiver.value = receiver.value + value
	},
	undo() {
		receiver.value = receiver.value - value
	},
	redo() {
		receiver.value = receiver.value + value
	}
})

const subCommand = (value, receiver) => ({
	excute() {
		receiver.value = receiver.value - value
	},
	undo() {
		receiver.value = receiver.value + value
	},
	redo() {
		receiver.value = receiver.value - value
	}
})

const Caculator = {
	value: 0,
	commands: new Set(),
	add(value) {
		addCommand(value, this).excute()
		this.commands.add({
			command: addCommand,
			value
		})

		console.log( this.value )
	},
	sub(value) {
		subCommand(value, this).excute()
		this.commands.add({
			command: subCommand,
			value
		})

		console.log( this.value )
	},
	undo() {
		const commandObj = [...this.commands].pop()
		const { command, value } = commandObj
		command(value, this).undo()

		this.commands.delete( commandObj )

		console.log( this.value )
	}
}

Caculator.add(10)	// 10

Caculator.sub(5)	// 5

Caculator.undo()	// 10


