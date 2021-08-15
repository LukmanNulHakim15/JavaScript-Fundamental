var  tanya = true ;
while(true) {


//Menangkap Pilihan Pemain

	var p = prompt('Pilih: gajah, semut, atau orang'); 
	//Menangkap Pilihan Komputer

	//Membangkitkan Bilangan Moderen
	var komp = Math.random();

	if (komp < 0.34){
		komp = "gajah";
	} else if (komp >= 0.34 && komp < 0.67) {
		komp = "orang";
	} else {
		komp = "semut";
	}

	//Menentukan Peraturan dan hasil
	var hasil = "";

	if (p == komp) {
		hasil = "SERI";
	} else if (p == "gajah"){
		//if (komp == "gajah"){
		//	hasil = "Kalah";
		//} else {
		//	hasil = "Menangk";
		//}
	    //} else if (p == "gajah"){
		//if (komp == "orang"){
		//	hasil = "Menang";
		//} else {
		//	hasil = "Kalah";
		//}
	    //}else {
		//hasil = "Memasukkan Pilihan Yang Salah";
		hasil = (komp == "orang") ? "MENANG!" : "KALAH!";
	} else if(p == "orang") {
		hasil = (komp == "gajah") ? "KALAH!" : "MENANG";
	} else if(p == "semut") {
		hasil = (komp == "orang") ? "KALAH!" : "MENANG!";
	} else {
		hasil = "Anda Memasukkan Kata yang Salah";
	}
	 
	//Tampilkan Hasil

	alert("Kamu Memilih: " + p + " dan Komputer Memilih " + komp + " \n Maka Hasilnya Kamu " + hasil );


	tanya = confirm("Apakah Anda Masih ingin Bermain?");
}	 
	alert("Terimakasih");
	 