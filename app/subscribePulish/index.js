const EventEmitter = require('events')


// Publish the newest message to message subscriber

const pulisher = new EventEmitter()
const subscribers = new Set()
const subscibe = name => {
	subscribers.add(name)
}
const unscribe = name => {
	subscribers.delete(name)
}


// Peter subscribes
subscibe('Peter') 
// Jack subscribes
subscibe('Jack') 
// Lily subscribes
subscibe('Lily') 


pulisher.on('New message comes!', () => {
	subscribers.forEach( subscriber => {
		console.log( `${subscriber}: New message comes!` )
	} )
})

// Lily unsubscribes
unscribe('Lily') 


// pulish
pulisher.emit('New message comes!')