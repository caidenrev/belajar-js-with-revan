// ** MASUK KE VARIABLE NIH,
const nilai = 123;
let username = 'caidenrev';

console.log(nilai);
console.log(username);
// **? nah itu tadi contoh variable di jsht, jadi variable itu adalah sebuah tempat penyimpanan data yang bisa kita panggil kapan aja kita butuh data itu. jadi singkatnya variable itu kaya kotak penyimpanan gitu deh, terus isinya itu data yang mau kita simpen. terus data nya itu bisa bermacam macam jenis nya, ada number, string, boolean, array, object, dll.
// ** nah cara bikin variable di jsht itu gampang banget, ada tiga keyword yang biasa kita pake buat bikin variable, yaitu : const, let, var
// **? bedanya apa bang ketiga keyword itu?, oke sini sini gua jelasin dikit ya.
// **=========================================== VARIABLE CONST ==================================================
// **! CONST : itu keyword buat bikin variable yang nilai nya ga bisa di ubah lagi setelah di kasih nilai pertama kali. jadi kalo lu bikin variable pake const, lu ga bisa ganti nilai nya lagi nanti.
// ** contoh :
const pi = 3.14; // ini bakal error karena pi itu const
// ** kalo lu coba ganti nilai pi nya nanti, bakal error coy.
// ** pi = 3.14159; // ini bakal error karena pi itu const
console.log(pi); 
// ** =========================================== VARIABLE LET ==================================================
// **? nah kalo lu butuh variable yang nilai nya bisa di ubah ubah, lu bisa pake LET atau VAR
// **! LET : itu keyword buat bikin variable yang nilai nya bisa di ubah ubah nanti. jadi kalo lu bikin variable pake let, lu bisa ganti nilai nya kapan aja lu mau.
// ** contoh : 
let score = 10;
console.log(score); // output: 10
score = 20; // ganti nilai score
console.log(score); // output: 20
// ** =========================================== VARIABLE VAR ==================================================
// **! VAR : itu keyword buat bikin variable yang juga bisa di ubah ubah nilai nya nanti, tapi var itu punya scope yang beda sama let. jadi kalo lu bikin variable pake var, lu harus hati hati sama scope nya ya.
// ** contoh : 
var level = 1;
console.log(level); //* output: 1
level = 2; //** ganti nilai jadi 2
console.log(level); //* output: 2
// **? nah itu tadi penjelasan singkat soal variable di jsht, semoga lu paham ya!

let namaPengguna = 'revan';
console.log('before di ubah', namaPengguna);

namaPengguna = 'hehehe';
console.log("sesudah", namaPengguna);

// **============================================== BAB 2 VARIABLE =========================================
function cetakDatakaryawan () {
    const nama = 'revan';
    const umur = 20;

    console.log(nama.umur);
};
cetakDatakaryawan();

const currentYear = new Date(). getFullYear();
const text = `sekarang adalah tahun ${currentYear}`;
console.log(text);

const jamSekarang = new Date(). getHours ();
const teks = `sekarang jam ${jamSekarang}`;
console.log(teks);

const menitSekarang = new Date(). getMinutes ();
const teksMenit = `sekarang menit ke ${menitSekarang}`;
console.log(teksMenit);

const waktuLengkap = new Date(). toLocaleString ();
const teksWaktu = `sekarang tanggal dan waktu lengkap adalah ${waktuLengkap}`;
console.log(teksWaktu);

function cetakWaktu () {
    const waktuSekarang =
    new Date(). getDate () + '-' +
    new Date(). getMonth () + '-' +
    new Date(). getFullYear () + ' ' +
    new Date(). getHours () + ':' +
    new Date(). getMinutes () + ':' +
    new Date(). getSeconds ();

    console.log(`sekarang tuh pukul ${waktuSekarang}`);
}

cetakWaktu();

const angkaPertama = 10 > 5;
console.log(angkaPertama);

const name1 = { first: 'Dicoding', last: null };
const name2 = { first: 'Dicoding', last: undefined };

console.log(JSON.stringify(name1)); // output: {"first":"Dicoding","last":null}
console.log(JSON.stringify(name2));



