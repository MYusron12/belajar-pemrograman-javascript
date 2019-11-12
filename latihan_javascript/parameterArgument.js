function tambah(a, b){
    return a + b;
}

// console.log(tambah(2,3));

// var hasil = tambah(2, 3);
//console.log(hasil);

// var a = 10;
// var b = 20;
// var hasil = tambah(a, b);
// console.log(hasil);

// var a = parseInt(prompt('masukan nilai 1:'));
// var b = parseInt(prompt('masukan nilai 2:'));
// var hasil = tambah(a, b);

function kali(a, b) {
    return a * b;
}

var hasil = kali(tambah(1,2), tambah(3,4));
console.log(hasil);