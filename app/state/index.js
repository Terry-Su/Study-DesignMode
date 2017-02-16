// mock a trafficLight 


class TrafficLight {
  constructor() {
    this.state = {
        color: ''
    } 
    this.stateProxy = new Proxy(this.state, {
        set: (target, prop, value, receiver) => {
            if (prop !== 'color') {
                return true
            }

            const oldColor = target.color
            const newColor = value
            const isNewColor = newColor != oldColor

            if (isNewColor) {
                switch (newColor) {
                    case 'red':
                    console.log(`it's red now`)
                    setTimeout( () => {
                        trafficLight.stateProxy.color = 'green'
                    }, 2000)
                    break
                    case 'orange':
                    console.log(`it's orange now`)
                    setTimeout( () => {
                        trafficLight.stateProxy.color = 'red'
                    }, 200)
                    break
                    case 'green':
                    console.log(`it's green now`)
                    setTimeout( () => {
                        trafficLight.stateProxy.color = 'orange'
                    }, 2000)
                    break
                }
            }

            return Reflect.set(target, prop, value, receiver)
        }
    })
  }
  start() {
    this.stateProxy.color = 'red'
  }
}


const trafficLight = new TrafficLight()

trafficLight.start()