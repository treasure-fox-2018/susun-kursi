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
	for (let i = 0; i < row; i++) { //salah penulisan parameter pada kondisi
		seats.push([]) // salah penulisan variable (kurang s)
		debugger
	}
	return seats
}

function managePerson(arr, rowSeats) {
	let seats = generateSeats(rowSeats) //salah penulisan nama function
	let row = 0

	for (let i = 0; i < arr.length; i++) {
		//seats[row].push(arr[i]) //salah penulisan nama variable
		if (row <= 2) {
			seats[row].push(arr[i]) //pemindahan posisi seats[row]. karena apabila diatas Cannot read property 'push' of undefined
			//row++
			debugger
		} else {
			row = 0
			seats[row].push(arr[i])
			debugger
		}
		row++ // pemindahan posisi row++.
	}
	printSeats(seats)
}

function printSeats(seats) {
	for (let i = 0; i < seats.length; i++) { // inisialisasi seharusnya dimulai dari 0.jika dimulai dari satu, bari ke 0 tidak ditampilkan
		console.log(`Baris ${i} : `, seats[i])
	}
}

managePerson(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 3)
