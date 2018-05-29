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
	for(let i=0; i<row; i++) { //was type used rowa
		seats.push([]) //was typo used seat
	}
	return seats
}

function managePerson(arr, rowSeats) {
	let seats = generateSeats(rowSeats) //function call name was wrong
  let row = 0
	for(let i=0; i<arr.length; i++) { //was arr.length-1
    seats[row].push(arr[i]); //was seat
		if(row < 2) { //was <=, this will make next row = 3
			row++;
		} else {
			row = 0; //== is not for assign value
		}
	}
	printSeats(seats)
}

function printSeats(seats) {
	for(let i=0; i<seats.length; i++) { //was i=1, seats[0] not printed
		console.log(`Baris ${i} : `, seats[i])
	}
}

managePerson(['a','b','c','d','e','f','g','h','i','j'], 3)
