import singletonTester from './singletonTester'



let singletonTester1 = new singletonTester('singletonTester1')
console.log( singletonTester1.name )

let singletonTester2 = new singletonTester('singletonTester2')
console.log( singletonTester2.name)