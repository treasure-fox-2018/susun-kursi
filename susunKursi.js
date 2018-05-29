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
	for(let i=0; i<row; i++) { //terdapat typo 'rowa' yang seharusnya 'row'
		seats.push([]) ////terdapat typo 'seat' yang seharusnya 'seats'
		debugger
	}
	return seats
}

function managePerson(arr, rowSeats) {
	let seats = generateSeats(rowSeats)
	let row = 0;

	for(let i=0; i < arr.length; i++) {
		//jika seats[row].push(arr[i]) berada disini, maka pada perulangan i = 3, terjadi error karena row belum dikembalikan menjadi 0, tetapi sudah dilakukan push sehingga tidak dapat dilakukan.
		if (row <= 2) {
			seats[row].push(arr[i]);
		}
		else {
			row = 0;
			seats[row].push(arr[i]); //seats[row].push(arr[i]) berada disini juga, agar setelah nilai row dikembalikan ke 0, pada looping yang sama dimasukkan nilai yang selanjutnya
		}
		row++; // row++ dipindah agar penambahan variabel row terjadi sebelum masuk ke looping selanjutnya.
		debugger;
	}
	printSeats(seats)
}

function printSeats(seats) {
	for(let i=0; i<seats.length; i++) { //harusnya i dari 0 bukan dari 1
		console.log(`Baris ${i} : `, seats[i])
	}
}

managePerson(['a','b','c','d','e','f','g','h','i','j'], 3)
