// var angka = prompt('Masukan Angka');
// if (angka % 2 === 0) {
//     alert(angka + ' adalah bilangan GENAP');
// } else if (angka % 2 === 1) {
//     alert(angka + ' adalah bilangan GANJIL');
// } else {
//     alert('yang anda masukan bukan angka!');
// }

var jmlAngkot = 10,
    angkotBeroperasi = 6;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

    if (noAngkot <= 6) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    } else if (noAngkot == 8) {
        console.log('Angkot No. ' + noAngkot + ' sedang lembur.');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    }
}