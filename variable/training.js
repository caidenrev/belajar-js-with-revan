function cetakDatakaryawan () {
    const nama = 'revan';
    const umur = 20;

    console.log('nama gua', nama);
    console.log('umur gua', umur);
}

function cetakDatacompany () {
    const namaPt = 'pt maju mundur';
    const namaCeo = 'revan lagi';

    console.log('nama pt gua', namaPt);
    console.log('nama yang punya', namaCeo);
}

cetakDatakaryawan();
cetakDatacompany();

function daftarPlaylist () {
    const namaArtis = ('drake, rihana, chris brown, juice wrld, lil dicky');
    const laguFav = 'freaky friday' 

    console.log('penyanyi fav gua', namaArtis);
    console.log('lagu favorit gua', laguFav);
}

daftarPlaylist();

function dataCompany () {
    const namaFounder = 'revan lagih';
    const namaKaryawan = ('wahyu, ivan, rudi, aufa, arip');
    var namaProduk = 'racun tikus cap kaki tujuh';
    namaProduk = 'racun tikus cap kaki rudi';
    let identitas = {idCard : 231011403212};

    console.log('BIODATA PERUSAHAAN, Nama Founder', namaFounder);
    console.log('DAFTAR KARYAWAN :', namaKaryawan);
    console.log('BRAND :'+ namaProduk);
    console.log(namaFounder.namaKaryawan);
    console.log(identitas.idCard);
}

dataCompany();
