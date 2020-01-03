function minmax() {
var angka = [45, 100, 99, 3, 2, 4, 1, 2, 3, 19, 22, 14, 10];

console.log('Nilai minimal:', Math.min.apply(null,angka));
console.log('Nilai maximal:', Math.max(...angka));

}

minmax();
