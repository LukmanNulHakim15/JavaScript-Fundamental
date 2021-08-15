// PseudoCode

// Pengelolaan Penumpang
var penumpang = [];

var tambahpenumpang = function (namaPenumpang, penumpnag) {

//* Penumpang Naik (Tambah Penumpang)
	
	//Jika angkot kosong
	if ( penumpang.length == 0) {	
		// Tambah penumpang di awal array
		penumpang.push(namaPenumpang);
		// Kembalikan isi array  & keluar dari function
		return penumpang;
	} else {
		//Telusuri kursi dari awal
	
	for (var i = 0; i < penumpang.length; i++){
			//jika ada kursi kosong diantara kursi isi maka harus diisi terlebih dahulu
		if (penumpang[i] == undefined) {		
				// tambah penumpang dikursi tersebut
				penumpang[i] = namaPenumpang;
				// Kembalikan isi array dan keluar dari function
				return penumpang;
				}
		else if (penumpang[i] == namaPenumpang){
				//Tampilkan peesan kesalahannya
				console.log("Penumpang dengan nama " + namaPenumpang + " sudah ada didalam angkot");
				//Kembalikan isi array dan keluar
				return penumpang;
			}
		//Jika  Seluruh kursi terisi
		else if (i == penumpang.length -1) {
			
				//tambah penumpang di akhir array
				penumpang.push(namaPenumpang);
				// Kembalikan isi array
				return penumpang;
				}

			}

		}
	}

var hapuspenumpang = function (namaPenumpang, penumpang){

	
	// Jika angkot kosong tampilkan informasi "Angkot kosong"

	if (penumpang.length == 0) {
		console.log ("Angkot Kosong");
		// return penumpang ();
	}

	// Jika ada penumpang yang namanya sesuai maka ganti dan berika nilai "undefined"
	// Ingat telusuri dahulu
	else {

		for(var i = 0; i < penumpang.length; i++) {

			if (penumpang[i] == namaPenumpang) {
				penumpang[i] = undefined;

				return penumpang ();

			} else if (i == penumpang.length -1){

				console.log (namaPenumpang + "Tidak ada didalam angkot");
				return penumpang();
			}

			
			}

		}

			return penumpang();
	}
