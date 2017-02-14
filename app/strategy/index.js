// Calculate bonus

const strategies = {
	"S":  salary => ( salary * 4 ),
	"A":  salary => ( salary * 3 ),
	"B":  salary => ( salary * 2 )
};

const calculateBonus = (level, salary) => strategies[ level ]( salary )


console.log( calculateBonus( 'S', 20000 ) ); // result: 80000
console.log( calculateBonus( 'A', 10000 ) ); // result: 30000 