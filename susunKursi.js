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
	for(let i = 0; i < row; i++) { //typo rowa seharusnya row
		seats.push([]) //typo seat seharusnya seats
	}
	return seats;
}

function managePerson(arr, rowSeats) { //arr = 9; rowSeats = 3;
	let seats = generateSeats(rowSeats) //keluar [[],[],[]]
	let row = 0

	for(let i = 0; i < arr.length; i++) {
		seats[row].push(arr[i])
		if(row < 2) { //jika row <= 2 maka pada saat row === 2, row selanjutnya akan menjadi 3.. sedangkan seats hanya sampai 2(dimulai dari index 0);
			row++
		} else {
			row = 0 // jumlah '=' harus 1 untuk mereset row kembali menjadi 0
		}
	}
	printSeats(seats)
}

function printSeats(seats) {
	for(let i = 0; i < seats.length; i++) { //jika dimulai dari 1, index seats yang pertama tidak terpanggil
		console.log(`Baris ${i} : `, seats[i])
	}
}

managePerson(['a','b','c','d','e','f','g','h','i','j'], 3)
