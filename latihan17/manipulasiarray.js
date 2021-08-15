// Menambah Elemen Array
// Jika arraynya kosong harus diisi terlebih dahulu karna index yang kosong tidak memiliki nilai
var arr = [];
	arr [0]= "Lukman";
	//arr [1]= "";
	arr [2]= "Muhammad";

	console.log(arr);


// Menghapus Array
// Cara menghapus ini sebenarnya secara harfiah tidak dihapus namun diganti nama. Secara nilai di index masih terekam di memori

var arr2 = ["Lukman", "Siti", "Muhammad"];
	arr2[0] = undefined;
	console.log (arr2);

// Menampilkan Isi Array

var arr3 = ["Lukman", "Siti", "Muhammad"];

for (var i = 0; i < 3; i++){
	console.log(arr3[1]);
}