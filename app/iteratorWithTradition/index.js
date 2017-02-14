const Iterator =  obj => {
	let current = 0
	const next = () => {
		current += 1
	}
	const isDone = () => ( current >= obj.length )
	const getCurrItem = () => obj[ current ]
	return {
		next,
		isDone,
		getCurrItem
	}
} 


// Detect whether array1 equals array 2 or not

const compare =  (iterator1, iterator2) => {
	while( !iterator1.isDone() && !iterator2.isDone() ){
		if ( iterator1.getCurrItem() !== iterator2.getCurrItem() ){
			return false
		}
		iterator1.next();
		iterator2.next();
	}
	return true
}
const iterator1 = Iterator( [ 1, 2, 3 ] );
const iterator2 = Iterator( [ 1, 2, 3 ] );
console.log( 
	compare( iterator1, iterator2 )
) // true