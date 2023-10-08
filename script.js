// if, else, nested if
let harga = 30000;

if (harga <= 25000) {
    console.log("Harga yang sangat murah");
} else if (harga <= 50000) {
    console.log("Harga yang terbilang murah");
} else if (harga <= 100000) {
    console.log("Harga yang terbilang mahal");
} else {
    console.log("Harga yang sangat mahal");
}

// switch case
let angka = 3;

switch (angka) {
    case 1:
        console.log("Satu");
    break;
    case 2:
        console.log("Dua");
    break;
    case 3:
        console.log("Tiga");
    break;
    case 4:
        console.log("Empat");
    break;
    case 5:
        console.log("Lima");
    break;
    default:
        console.log("Angka tidak terdaftar");
    break;
}

// for statement
const hewan = ["Ayam", "Bebek", "Capung", "Domba", "Angsa", "Sapi"];

for (let i = 0; i < hewan.length; i++) {
    console.log("hewan urutan ke-" + (i + 1) + ": " + hewan[i]);

    if (hewan[i] === "Ayam") {
        console.log("Hewan berkaki 2");
    } else if (hewan[i] === "Sapi") {
        console.log("Hewan berkaki 4");
    }
}

// while, do while
let ayam = 10;

while (i < 10) {
    console.log("Anak ayam turun " + i);
    i--;
}

// function
function toCelsius(f) {
    return (5/9) * (f-32);
  }
  
  let value = toCelsius(77);