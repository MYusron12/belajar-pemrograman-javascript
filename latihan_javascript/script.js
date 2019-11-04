// alert('hello world!');

// var nama = prompt('masukan nama:');
// alert(nama);

// var tes = confirm('kamu yakin?');
// alert(tes);
// if (tes == true) {
//     alert('user menekan ok!');
// } else {
//     alert('user menekan cancel');
// }

alert('selamat datang..');
var lagi = true;

while (lagi === true) {
    var nama = prompt('masukan nama:');
    alert('halo ' + nama);

    lagi = confirm('coba agi?');
}
alert('teriakasih');