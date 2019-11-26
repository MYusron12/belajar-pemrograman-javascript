var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    // jika angkot kosong
    if( penumpang.length == 0) {
        // tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        // kembalikan isi array dan keluar dari function
        return penumpang;
    }
    // else
    else {
        // telusuri seluruh kursi dari awal
        for (var i = 0; i < penumpang.length; i++) {
            // jika ada kursi kosong
            if ( penumpang[i] == undefined ) {
                // tambah penumpang di kursi tersebut
                penumpang[i] = namaPenumpang;
                // kembalikan isi array dan kelua dari function
                return penumpang;
            }
            // jika sudah ada nama yang sama
            else if( penumpang[i] == namaPenumpang ) {
                // tampilkan pesan keslahannya
                console.log(namaPenumpang + 'sudah ada dalam angkot');
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
            // jika seluruh kursi terisi
            else if( i == penumpang.length - 1 ) {
                // tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi arraydan keluar dari function
                return penumpang;
            }
        }
    }
}


var hapusPenumpang = function(namaPenumpang, penumpang) {
    // jika angkot kosong
    if( penumpang.length == 0 ) {
        // tampilkan pesan bahwa angkot kosong
        console.log('angkot kosong');
        // tidak mungkin ada penumpang turun
        // kembalikan isi array dan kelluar dari function
        return penumpang;
    }
    // else
    else {
        // telusuri seluruh kursi dari awal
        for( var i = 0; i < penumpang.length; i++) {
            // jika nama penumpang sesuai
            if( penumpang[i] == namaPenumpang ) {
                // hapus penumpang dengan mengubah namanya menjadi indefined
                penumpang[i] = undefined;
                // kembalikan isi array dan keluar dari function
                return penumpang;
                // jika tidak ada nama yang sesuai
            } else if( i == penumpang.length -1 ) {
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + 'nama tidak ada');
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
        }
    }
}