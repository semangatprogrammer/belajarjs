function cetakNama(nama) {
    return `nama saya ${nama}`
}
const PI = 3.14
const mahasiswa = {
    nama: 'ali',
    jurusan: 'IT',
    cetakMhs() {
        return 'saya ${nama} mahasiswa jurusan ${jurusan}'
    },
}
class Orang {
    constructor() {
        console.log(`saya ok`)
    }
}
//cara 1
module.exports.cetakNamas = cetakNama
module.exports.PIs = PI
module.exports.mahasiswas = mahasiswa
module.exports.Orangs = Orang

//cara 2 namanya kita samakan bisa lebih sederhana
// module.exports = {
// cetakNama,
// PI,
// mahasiswa,
// Orang,
// }