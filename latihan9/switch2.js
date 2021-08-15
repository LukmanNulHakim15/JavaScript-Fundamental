var item = prompt("Masukkan Nama Makanan atau Minuman \n (Contoh : Nasi, Daging, Beer, Pork)");

switch(item) {
	case "Nasi" :
	case "Daging" :
	alert ("Makanan atau Minuman SEHAT !");
	break ;

	case "Beer" :
	case "Pork" :
	alert ("Makanan atau Minuman TIDAK SEHAT");
	break;

	default:
	alert ("Makanan atau Minuman tidak ada di List");

}