// create a chatroom supporting basic chat


const chatroom = {
    participants: new Set(),
    register(participant) {
        this.participants.add(participant)
    },
    send({ message, from, to }) {
        if (to) {
            return to.receive(message, from)
        }

        this.participants.forEach( participant => {
            if (participant === from) {
                return true
            }
            participant.receive(message, from)
        } )

        console.log(`\n`)
    }
}

class Participant {
    constructor(name) {
        this.name = name
    }
    enter(chatroom) {
        chatroom.register(this)
    }
    send({ message, to, chatroom }) {
        chatroom.send({
            message,
            from: this,
            to
        })
    }
    receive(message, from) {
        console.log(`${this.name} receive: ${message} from ${from.name}`)
    }
}

// initial participant
const peter = new Participant('Peter')
const jack = new Participant('Jack')
const lily = new Participant('Lily')

// enter chatroom
peter.enter(chatroom)
jack.enter(chatroom)
lily.enter(chatroom)

// send message to all
peter.send({
    message: 'Hi',
    to: null,
    chatroom
})
// output
// Jack receive: Hi from Peter
// Lily receive: Hi from Peter

// send message to lily
peter.send({
    message: 'Hi',
    to: lily,
    chatroom
})

// output
// Lily receive: Hi from Peter