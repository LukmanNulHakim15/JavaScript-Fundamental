var angkot = 1;
var jmlangkot = 10;
var beroperasi = 6;

for(angkot; angkot <= jmlangkot; angkot++) {

	if(angkot <= 6 && angkot !== 5) {
	console.log ("Angkot No. " + angkot + " Beroperasi Dengan Baik");
	} 
	else if (angkot === 8 || angkot === 10 || angkot === 5){
		console.log ("Angkot No. " + angkot + " Sedang lembur");
	} 
	else {
		console.log ("Angkot No. " + angkot + " Sedang Rusak");
	}


}