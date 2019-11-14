//menghitung luas kubus
function jumlahVolumeDuaKubus(a, b) {
    var total, volumeA, volumeB;

    volumeA = a * a * a;
    volumeB = b * b * b;


    
    total = volumeA + volumeB;


    return total;
}

console.log(jumlahVolumeDuaKubus(8, 3));
console.log(jumlahVolumeDuaKubus(5, 2));