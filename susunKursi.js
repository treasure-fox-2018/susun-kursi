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
	for(let i=0; i<row; i++) { //'rowa' seharusnya 'row'
		seats.push([]) //'seat' kurang 's' dibelakang
	}
	return seats
}

function managePerson(arr, rowSeats) {
	let seats = generateSeats(rowSeats) //'generateSeat' kurang 's' dibelakang
	let row = 0

	for(let i=0; i<=arr.length-1; i++) { //bila memakai arr.length-1 seharusnya juga memakai <=
		
		if(row <= 2) {
			seats[row].push(arr[i]) //'seat' kurang 's' dibelakang
			// row++ //'row' baru ditambahkan setelah loop sesuai kondisi berjalan
		} else {
			row = 0
			seats[row].push(arr[i]) //'seat' kurang 's' dibelakang
		}
		row++ //letak 'row' yg baru
	}
	return printSeats(seats)
}

function printSeats(seats) {
	var hasil = '' // tambahan var hasil untuk me-return 
	for(let i=0; i<seats.length; i++) { //seharusnya mulai dari 0
		hasil += `Baris ${i} : [${seats[i]}] \n` //'console.log' diganti menjadi 'return' dan merubah sedikit format penulisan agar sesuai dg output yg diinginkan
	}
	return hasil
}

console.log(managePerson(['a','b','c','d','e','f','g','h','i','j'], 3))