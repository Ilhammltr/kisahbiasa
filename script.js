document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-cerita');
    const listCerita = document.getElementById('list-cerita');
    const listArsip = document.getElementById('list-arsip');

    // Fungsi untuk menyimpan cerita ke localStorage
    form?.addEventListener('submit', function(event) {
        event.preventDefault();
        const judul = document.getElementById('judul').value;
        const isi = document.getElementById('isi').value;
        const tanggal = new Date().toLocaleDateString();

        const cerita = { judul, isi, tanggal };
        const semuaCerita = JSON.parse(localStorage.getItem('cerita')) || [];
        semuaCerita.push(cerita);
        localStorage.setItem('cerita', JSON.stringify(semuaCerita));

        alert('Cerita berhasil disimpan!');
        form.reset();
    });

    // Fungsi untuk menampilkan cerita terbaru di index.html
    function tampilkanCerita() {
        const semuaCerita = JSON.parse(localStorage.getItem('cerita')) || [];
        semuaCerita.forEach(cerita => {
            const ceritaElement = document.createElement('div');
            ceritaElement.innerHTML = `<h3>${cerita.judul}</h3><p>${cerita.tanggal}</p><p>${cerita.isi}</p>`;
            listCerita?.appendChild(ceritaElement);
        });
    }

    // Fungsi untuk menampilkan arsip cerita di arsip.html
    function tampilkanArsip() {
        const semuaCerita = JSON.parse(localStorage.getItem('cerita')) || [];
        semuaCerita.forEach(cerita => {
            const ceritaElement = document.createElement('div');
            ceritaElement.innerHTML = `<h3>${cerita.judul}</h3><p>${cerita.tanggal}</p>`;
            listArsip?.appendChild(ceritaElement);
        });
    }

    // Panggil fungsi untuk menampilkan cerita jika ada
    if (listCerita) tampilkanCerita();
    if (listArsip) tampilkanArsip();
});

