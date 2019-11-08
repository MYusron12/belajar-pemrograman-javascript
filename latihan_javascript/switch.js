// var angka = prompt('masukan angka :');
// switch (angka) {
//     case '1':
//         alert('anda memasukkan angka 1');
//         break;
//     case '2':
//         alert('anda memasukkan angka 2');
//         break;
//     case '3':
//         alert('anda memasukkan angka 3');
//         break;
//     default:
//         alert('angka yang anda masukkan salah');
//         break;
// }


var item = prompt('masukan nama makanan / minuman : \n contoh : daging, susu, nasi, soda, bir.');
switch (item) {
    case 'daging':
    case 'susu':
    case 'nasi':
        alert('makanan / minuman SEHAT');
        break;
    case 'soda':
    case 'bir':
        alert('makanan / minuman TIDAK SEHAT');
        break;
    default:
        alert('makanan / minuman tidak tersedia');
        break;
}