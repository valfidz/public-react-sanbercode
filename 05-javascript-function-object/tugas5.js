/* Tugas 5 Javascript Function & Object */

// Soal 1 Membuat function dengan return string
console.log("Soal 1")

function cetakFunction() {
    return "Hallo Nama saya Naufal Hafizh Nugraha"
}

console.log(cetakFunction())

console.log(" ")

// Soal 2 Membuat function dengan rumus penjumlahan di dalamnya
console.log("Soal 2")

function myFunction(number1, number2) {
    return number1 + number2
}

let angka1 = 20

let angka2 = 7

let output = myFunction(angka1, angka2)

console.log(output)

console.log(" ")

// Soal 3 Mengubah dalam bentuk arrow function
console.log("Soal 3")

// function Hello() {
//     return "Hello"
// }

const Hello = () => {
    return "Hello"
}

console.log(Hello())

console.log(" ")

// Soal 4 Memanggil key dalam sebuah object
console.log("Soal 4")

let obj = {
    nama: "john",
    umur: 22,
    bahasa: "indonesia"
}

const nama = obj.nama
const umur = obj.umur
const bahasa = obj.bahasa

console.log("nama", nama)
console.log("umur", umur)
console.log("bahasa", bahasa)

console.log(" ")

// Soal 5 Mengubah array menjadi object
console.log("Soal 5")

let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]
let objDaftarPeserta = {
    nama: arrayDaftarPeserta[0],
    jenisKelamin: arrayDaftarPeserta[1],
    hobi: arrayDaftarPeserta[2],
    tahunLahir: arrayDaftarPeserta[3]
}

console.log(objDaftarPeserta)

console.log(" ")

// Soal 6 Membuat sebuah array of object dan melakukan filter
console.log("Soal 6")

const buah = [
    {
        nama: "Nanas",
        warna: "Kuning",
        adaBijinya: false,
        harga: 9000
    },
    {
        nama: "jeruk",
        warna: "Oranye",
        adaBijinya: true,
        harga: 8000
    },
    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        adaBijinya: true,
        harga: 10000
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        adaBijinya: false,
        harga: 5000
    }
]

const buahFilter = buah.filter((item) => {
    return item.adaBijinya == false || item.adaBijinya != true
})

console.log(buahFilter)

console.log(" ")

// Soal 7 Destructuring pada object
console.log("Soal 7")

let phone = {
    name: "Galaxy Fold 5",
    brand: "Samsung",
    year: 2023
 }

 const { name, brand, year } = phone

 console.log(name, brand, year)

 console.log(" ")

// Soal 8 Spread operator pada object
console.log("Soal 8")

let dataBukuTambahan= {
    penulis: "john doe",
    tahunTerbit: 2020 
  }
  
let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172
  }
  
let objOutput = {...dataBukuTambahan, ...buku}

console.log(objOutput)

console.log(" ")

// Soal 9 Penggunaan function dan object
console.log("Soal 9")

let mobil = {
    merk: "bmw",
    color: "red",
    year: 2002
}

const functionObject = (param) => {
    return param
}

console.log(functionObject(mobil))