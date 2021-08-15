//Pseudocode

//Aplikasi Turun Penumpang
var penumpang = [];

var hapuspenumpang = function (namaPenumpang, penumpang){

	
	// Jika angkot kosong tampilkan informasi "Angkot kosong"

	if (penumpang.length == 0) {
		console.log ("Angkot Kosong");
		return penumpang ();
	}

	// Jika ada penumpang yang namanya sesuai maka ganti dan berika nilai "undefined"
	// Ingat telusuri dahulu
	else {

		for (var = i; i < penumpang.length; i++) {

			if (penumpang[i] == namaPenumpang) {
				penumpang[i] = undefined;

				return penumpang ();

			} else if (i == penumpang.length -1){

				console.log (namaPenumpang + "Tidak ada didalam angkot");
				return penumpang();
			}

			
			}

		}
	}
