// Detect whether array1 equals array 2 or not

const compare =  (iterator1, iterator2) => {
	let iter1 = iterator1.next()
	let iter2 = iterator2.next()

	while( !iter1.done && !iter2.done ){
		if ( iter1.value !== iter2.value ){
			return false
		}
		
		iter1 = iterator1.next()
		iter2 = iterator2.next()
	}
	return true
}

const iterator1 = [1, 2, 3][Symbol.iterator]();
const iterator2 = [1, 2, 3][Symbol.iterator]();

console.log( 
	compare( iterator1, iterator2 )
) // true