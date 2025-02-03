/* Tugas 4 Javascript Loop & Array */

// Soal 1 Membuat looping sederhana
console.log("soal 1")
for (let i = 0; i < 10; i++) {
    console.log(i)
}

console.log(" ")

// Soal 2 Membuat looping dengan conditional angka ganjil
console.log("soal 2")
for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

console.log(" ")

// Soal 3 Membuat looping dengan conditional angka genap
console.log("soal 3")
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

console.log(" ")

// Soal 4 Mengakses elemen array
console.log("soal 4")
let array1 = [1,2,3,4,5,6]
console.log(array1[5])

console.log(" ")

// Soal 5 Mengurutkan elemen array
console.log("soal 5")
let array2 = [5,2,4,1,3,5]
console.log(array2.sort())

console.log(" ")

// Soal 6 Mengeluarkan elemen array
console.log("soal 6")
let array3 = ["selamat", "anda", "melakukan", "perulangan", "array", "dengan", "for"]
for (let i = 0; i < array3.length; i++) {
    console.log(array3[i])
}

console.log(" ")

// Soal 7 Mengeluarkan elemen array dengan kondisi
console.log("soal 7")
let array4 = [1, 2, 3, 4, 5, 6,7, 8, 9, 10]
for (let i = 0; i < array4.length; i++) {
    if (array4[i] % 2 === 0) {
        console.log(array4[i])
    }
}

console.log(" ")

// Soal 8 Menggabungkan elemen menjadi string
console.log("soal 8")
let kalimat= ["saya", "sangat", "senang", "belajar", "javascript"]
console.log(kalimat.join(" "))

console.log(" ")

// Soal 9 Menambahkan elemen array
console.log("soal 9")
var sayuran=[]
sayuran.push("Kangkung")
sayuran.push("Bayam")
sayuran.push("Buncis")
sayuran.push("Kubis")
sayuran.push("Timun")
sayuran.push("Seledri")
sayuran.push("Tauge")
console.log(sayuran)