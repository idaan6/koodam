function cekKhodam(event) {
    event.preventDefault();
    let nama = $('#search').val();
    if (nama === '') {
        alert('Masukkan nama terlebih dahulu!');
    } else {
        let status = [
            'isi',
            'kosong',
        ]
        const randomStatus = Math.floor(Math.random() * status.length);
        if (randomStatus === 0) {
            let khodam = [
                'Kodok Zuma',
                'Gorengan Kering',
                'Penggorengan penyok',
                'Mimi peri',
                'Naga boneng',
                'ikan tongkol',
                'Cicak albino',
                'Monyet Albino',
                'Pohon Palem',
                'Penyu sawah',
                'Knalpot Racing',
                'Biawak mullet',
                'Sendal Bolong',
                'Kakek Sugiono',
                'Sempak robek',
                'Kolong wewe',
                'Sendal putus',
                'Ikan teri',
                'Gorengan basi',
                'Kentang Gepeng',
                'Kentang Crispy',
                'Ice Cream',
                'Celana Robek',
                'Ikan kakap',
                'Monyet kepala singa',
                'Kuda Lumping',
                'Cepak ngehe',
                'Sendal Kodok',
                'Tisu Basah',
                'Makroni kering',
                'Seblak pedes',
                'Seblak kering',
                'Cacing Kremi',
                'Ilalang',
                'Buaya Mulet',
                'Kodok Salto',
                'Orang Hutan',
                'Buaya darat',
                'Kadal Hutan',
                'beruang madu',
                'Kadal Gurun',
                'Bebek Goreng',
                'Klomang',
                'Orang Sawah',
                'Uler singkong',
                'Uler kadut',
                'Uler sawah',
            ]
            const random = Math.floor(Math.random() * khodam.length);
            $('#result').html(`${nama.toUpperCase()} - Khodam Kamu (${khodam[random]})`);
            $('#search').val('');
        }
        else {
            $('#result').html(`${nama.toUpperCase()} - Tidak punya khodam`);
            $('#search').val('');
        }
    }
}

$(document).ready(function () {
    $('#btn-search').click(cekKhodam);
});