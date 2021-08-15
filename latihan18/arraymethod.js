// Contoh length
var coba = [true,"Lukman","Siti","Mohammad"];
	
	console.log(coba.length);

// Contoh Join
var coba2 = [true, "Lukman", "Siti", "Mohammad"];
	
	console.log(coba2.join("-"));

//Contoh Push

var coba3 = ["Lukman", "siti", "Mohammad"];

	coba3.push(true, 22, 16, 7);
	console.log(coba3.join("-"));

// Contoh Pop

var coba4 = ["Lukman", "Siti", "Mohammad", false];
	
	coba4.pop();
	console.log(coba4.join("-"));

//Contoh Unshift

var coba5 = ["Lukman", "Siti", "Mohammad"];

	coba5.unshift(true,"Hakim");
	console.log(coba5.join("-"));

// Contoh Shift

var coba6 = [false, "Lukman", "Siti", "Mohammad"];

	coba6.shift();
	console.log(coba6.join("-"));

// Contoh Splice 
// rumusnya splice("mau dimulai dari index berapa", "Mau dihapus berapa", "Data baru yang ingin di masukkan1", "Data baru yang ingin di masukkan1");

var coba7 = [true, 22, 16, 7, "Lukman", "Siti", "Mohammad"];

	coba7.splice(0, 1, "Hakim");
	console.log(coba7.join("-"));
	

// Contoh slice
var coba8 = [true, 22, 16, 7, "Lukman", "Siti", "Mohammad"];

	var coba9 = coba8.splice(1,3);
	console.log(coba9.join("-"));

// Contoh forEach
// i = Akan mengacu ke index
// e = Akan mengacu ke elemen
var coba10 = ["Lukman", "Siti", "Mohammad"];

	coba10.forEach(function (e, i){
		console.log("Mahasiswa ke " + (i+1) + " adalah " + e )
	});

// Contoh Map

var coba11 = [1, 3, 5, 7];

	var coba12 = coba11.map (function (e){
		return e * 2;

	});

	console.log(coba12.join("-"));


// Contoh Sort

var coba13 = [1,2,10,5,20,3,6,8,4];

	coba13.sort(function (a,b){
		return a-b;

	});

	console.log(coba13.join("-"));

// function (a,b) dan return a-b adalah perbandingan, karena jika tidak dipakai maka mesin akan melihat
// angka awal.


// Contoh Filter

	var coba15 = [1, 3, 6, 4, 6, 9, 10,50];

		var coba16 = coba15.filter (function (s) {
			return s < 20;
			});

		console.log (coba16.join("-"));
