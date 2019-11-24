//manipulasi

//1. menambah isi array
// var arr = [];
// arr[0] = "muhammad";
// arr[1] = "yusron";
// arr[2] = "oke";

// console.log(arr);

//2. menghapus isi array
// var arr = ["muhammad", "yusron", "ok"];
// arr[1] = undefined;
// console.log(arr);

//3.menampilkan isis array
// var arr = ["muhammad", "yusron", "ok"];

// for(var y = 0; y < arr.length; y++) {
//     console.log('orang nya' + y + '->' +
//     arr[y]);
// }





//method array
//1. join
// console.log(arr.join(' - '));

//2. push & pop
// arr.push("ganteng");
// arr.pop()
// console.log(arr.join(' - '));

//3. unshift & shift
// arr.unshift("mantap");
// console.log(arr.join(' - '));
// arr.shift();
// console.log(arr.join(' - '));

//4. splice
//splice(indexAwal, mauDihapusBerapa, elemenBaru1)
// arr.splice(1, 2, 'mamah', 'aku');
// console.log(arr.join(' - '));

//5. slice
//slice(awal, akhir);
// var arr = ['yusron','oke','waw','mantap'];
// var arr2 = arr.slice(2,3);
// console.log(arr2.join(' - '));

//6. forEach
// var nomer = [1,2,3,4,5,6,7,8];
// var nama = ['yusron', 'ok'];
// for( var ok = 0; ok < nomer.length; ok++) {
//     console.log(nomer[ok]);
// }
// nomer.forEach(function(e) {
//     console.log(e);
// });
// nama.forEach(function(e, i) {
//     console.log('mahasiswa ke-' + (i+1) + ' adalah : ' + e);
// })


//7. map
// var angka = [2,3,4,2,2];
// var angka2 = angka.map(function(e) {
//     return e * 2;
// });
// console.log(angka2.join(' - '));

//8. sort
// var angka = [1,2,3,4,5,];
// angka.sort(function(a,b) {
//     return a-b;
// });
// console.log(angka.join(' - '));

9. filter & find
var angka = [2,3,5,45,46,67];
var angka2 = angka.find(function(x) {
    return x > 5;
});
console.log(angka2);




