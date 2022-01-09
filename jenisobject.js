let Mahasiswa = {
    nama : "kayyisa",
    usia : "1 tahun 4 bulan",
    energy : 5,
    makan : function (porsi){
        this.energy += porsi;
        console.log(`selamat makan sebanyak {porsi} porsi`);
    },
    minum : function (porsi){
        this.energy += porsi;
        console.log(`selamat minum sebanyak {porsi} porsi`);

    },
    tidur : function (jam){
        this.energy = this.energy+(2*jam);
        console.log(`selamat istirahat sebanyak {jam} jam`);
    }
}

