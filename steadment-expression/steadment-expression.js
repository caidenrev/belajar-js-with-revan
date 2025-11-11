//** oke ini latihan gua buat bikin ekspresi sama steadment di js, singkatnya ini ada beberapa object yang bisa gua cetak dan gua masukin ke kalimat console gua 
// ** ========================================================================================================
// **! ========================================== STEADMENT ==================================================
const nama = 'revan';
var umur = 20;
let semester = 5;
const hobi = 'ngoding jsht';
// **? nah di atas itu ada banyak atribut variable yang ada value nya masing masing, nah ini bakal gua susun ke dalam sebuah kalimat yang gua bikin, buat cetak satu steadment kalimat dari variable yang gua bikin
// ** ========================================================================================================
// **TODO : Instruksi 1: buat variabel bernama nama dan berikan nilai atau value 'nama lu sendiri';. 
// **TODO: Instruksi 2: buat variabel bernama umur dan berikan nilai 20
// **TODO: Instruksi 3: buat variable lagi bernama semester yang nilai nya intejer yaitu 5
// **TODO : Instruksi 4 : buat variable lagi terakhir
// **TODO: Instruksi 5 :halo kenalin nama gua ${nama}, umur gua baru ${umur}, gua di kampus baru semester ${semester},terus hobi gua tuh masih tetep sama yaitu ${hobi},
// ** ========================================================================================================
console.log(`
    halo kenalin nama gua ${nama},
    umur gua baru ${umur},
    gua di kampus baru semester ${semester},
    terus hobi gua tuh masih tetep sama yaitu ${hobi}
    `);

// **? nah fyi juga pada umum nya itu 1 instruksi di tulis dalam satu baris kode, dan tiga instruksi juga sama. nah kata lain dari instruksi yang biasa kita kenal di dunia programming itu adalah "STEADMENT" 
// ** ========================================================================================================

// **! ============================ EXPRESSION ===============================================================
// ** kalo tadi udah bahas soal apa sih steadment?, sekarang apa sih expression di jsht?
const unpam = 'kampus';
// **? udah liat kode di atas kan?, apa yang lu liat?. yap, ada steadment sama expression. lah bang cara bedain sama tau nya gimana?, oke sini sini. jadi singkat nya kalo tadi steadment itu sebuah instruksi yang punya nilai, nah justru nilai nya itu expression coy.
// ** jadi const nama = (....); itu steadment.
// ** nah isi nya atau nilai nya itu expression. (contoh : const nama = 'revan';) nah si 'revan' ini lah expression
// **? ==========================================================================================================
// **! ga cuman nilai statis aja ya (nilai langsung jadi atau ga ada operasi di dalem nya) si expression ini juga bisa kita sebut walaupun nilai nya ada operasi di dalem nya, jadi misalnya ada operasi kalkulasi value di dalem nya. jadi expression itu bisa berupa hal hal yang menghasilkan nilai.
// ** contoh :
const nilai = 4+4;
console.log(nilai);

// ** contoh lagi :
const loveChecker = 'revan '+""+'ganteng';
console.log(loveChecker, 'aowkaakoko');
// **? nah itu contoh contoh steadment sama expression ya

const jenengMu = 'wahyu';
const jurusanMu = 'Teknik Informatika';
console.log(`
        oke guys nama gua ${jenengMu},
        gua kuliah jurusan ${jurusanMu}
    `);
return 0;

