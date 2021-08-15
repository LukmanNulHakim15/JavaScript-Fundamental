// Contoh dari pembuatan object dengan cara "Object literal"

var mhs = {
	nama : "Lukman",
	usia : "27",
	ips : [3.20, 2.75, 3.00],
	alamat : {
		jalan : "Jl. Pendidikan",
		kota : "Depok",

	}

}

// Contoh dari pembuatan object dengan cara "Function Declaration"
function ObjectMahasiswa(nama, usia, jurusan){

var mhs2 = {};
mhs2.nama = nama;
mhs2.usia = usia;
mhs2.jurusan = jurusan;
return mhs2;
}

var mhs3 = ObjectMahasiswa("siti", 29, "Teknik Informatika")

// Contoh dari pembuatan object dengan cara "Constructor Function"

function Mahasiswa(nama, usia, jurusan, email) {
	this.nama = nama;
	this.usia = usia;
	this.jurusan = jurusan;
	this.email = email;

}

var mhs4 = new Mahasiswa("Mohammad", 1 + " Tahun", "Teknik Informatika", "blabla@gmail.com")
