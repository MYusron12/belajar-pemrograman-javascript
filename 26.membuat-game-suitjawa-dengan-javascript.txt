var tanyakan = true;
while (tanyakan) {
    //menangkap pilihan player
    var pemain = prompt('Masukan Pilihan : gunting, batu, kertas');

    //menangkap pilihan komputer
    //membangkitkan bilangan random
    var komputer = Math.random();

    if (komputer < 0.34) {
        komputer = 'gunting';
    } else if (komputer >= 0.34 && komputer < 0.67) {
        komputer = 'batu';
    } else {
        komputer = 'kertas';
    }

    var hasil = '';
    //menentukan rules
    if (pemain == komputer) {
        hasil = 'SERI';
    } else if (pemain == 'gunting') {
        // if (komputer == 'kertas') {
        //     hasil = 'MENANG';
        // } else {
        //     hasil = 'KALAH';
        // }
        hasil = (komputer == 'kertas') ? 'MENANG' : 'KALAH';
    } else if (pemain == 'kertas') {
        // if (komputer == 'gunting') {
        //     hasil = 'KALAH';
        // } else {
        //     hasil = 'MENANG';
        // }
        hasil = (komputer == 'gunting') ? 'KALAH' : 'MENANG';
    } else if (pemain == 'batu') {
        // if(komputer == 'kertas') {
        //     hasil = 'KALAH';
        // } else {
        //     hasil = 'MENANG';
        // }
        hasil = (komputer == 'kertas') ? 'KALAH' : 'MENANG';
    } else {
        hasil = 'Memasukan Pilihan Salah';
    }

    //tampilkan hasilnya
    alert('Kamu Memilih : ' + pemain + ' Dan Komputer Memilih : ' + komputer + '\nMaka Hasilnya : Kamu ' + hasil);


    //konfirmasi apakah ingin bermain lagi
    tanyakan = confirm('Apakah ingin Bermain Lagi?');
}

alert('Terimakasih Sudah Bermain...');