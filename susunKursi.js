// bila ada 10 orang, ['a','b','c','d','e','f','g','h','i','j'].
// orang-orang tsb akan diatur tempat duduk nya berdasarkan urutannya secara vertikal,
// dan jumlah maksimal kursi per baris vertikal adalah 3.
// tampilkan siapa saja yg berada di baris 1, 2, dan 3 nya.

// hasil yg benar :
// Baris 0 :  [ 'a', 'd', 'g', 'j' ]
// Baris 1 :  [ 'b', 'e', 'h' ]
// Baris 2 :  [ 'c', 'f', 'i' ]

'use strict'

function generateSeats(row) {
	let seats = []
	for(let i=0; i<row; i++) {//change 2 typo rowa
		seats.push([])//change 3 s
	}
	return seats
}

function managePerson(arr, rowSeats) {
	let seats = generateSeats(rowSeats)//change 1 s
	let row = 0

	for(let i=0; i<arr.length; i++) {//change 9 from length -1 to length
		if(row <= 2) {
			seats[row].push(arr[i])// change 4 s //change 6 moved in if
		} else {
			row = 0//change 8 compare to declare
			seats[row].push(arr[i])// change 10 push added to else condition
		}
		row++//change 7 moved out of if
	}
	printSeats(seats)
}

function printSeats(seats) {
	for(let i=0; i<seats.length; i++) {//change 5 i=1->0
		console.log(`Baris ${i} : `, seats[i])
	}
}

managePerson(['a','b','c','d','e','f','g','h','i','j'], 3);
