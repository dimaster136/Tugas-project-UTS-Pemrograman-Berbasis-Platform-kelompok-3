
const express = require('express');
const app = express();

const PORT = 3000;

// Template tampilan website
function halaman(judul, isi, aktif) {
    const menu = [
        ['Beranda', '/beranda'],
        ['Identitas', '/identitas'],
        ['Mata Kuliah', '/matkul'],
        ['Anggota', '/anggota'],
        ['Kontak', '/kontak']
    ];

    return `
    <!DOCTYPE html>
    <html lang="id">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${judul} | Kelompok 3</title>

        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: Arial, sans-serif;
                background: #f1f5f9;
                color: #1e293b;
                line-height: 1.6;
            }

            header {
                background: #14213d;
                color: white;
                padding: 20px 8%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 15px;
            }

            header h2 {
                color: #60a5fa;
            }

            nav {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }

            nav a {
                color: white;
                text-decoration: none;
                padding: 9px 13px;
                border-radius: 8px;
                transition: 0.3s;
            }

            nav a:hover, nav a.active {
                background: #2563eb;
            }

            .hero {
                background: linear-gradient(135deg, #14213d, #2563eb);
                color: white;
                text-align: center;
                padding: 75px 20px;
            }

            .hero h1 {
                font-size: 36px;
                margin-bottom: 12px;
            }

            .hero p {
                font-size: 17px;
                color: #dbeafe;
            }

            .container {
                max-width: 1000px;
                margin: 40px auto;
                padding: 0 20px;
            }

            .content {
                background: white;
                padding: 30px;
                border-radius: 15px;
                box-shadow: 0 5px 20px rgba(0,0,0,0.07);
            }

            h2 {
                color: #1d4ed8;
                margin-bottom: 20px;
            }

            .info {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                gap: 15px;
            }

            .card {
                background: #eff6ff;
                padding: 20px;
                border-radius: 12px;
                border-left: 4px solid #2563eb;
            }

            .card h3 {
                color: #1d4ed8;
                margin-bottom: 8px;
            }

            .card p {
                margin-bottom: 5px;
            }

            .anggota {
                background: #f8fafc;
                padding: 16px;
                border-radius: 10px;
                margin-bottom: 12px;
                border-left: 4px solid #2563eb;
            }

            .anggota strong {
                color: #1d4ed8;
            }

            .btn {
                display: inline-block;
                margin-top: 20px;
                padding: 11px 22px;
                background: #2563eb;
                color: white;
                text-decoration: none;
                border-radius: 8px;
            }

            .btn:hover {
                background: #1e40af;
            }

            footer {
                background: #14213d;
                color: #cbd5e1;
                text-align: center;
                padding: 25px 15px;
                margin-top: 50px;
            }

            footer strong {
                color: white;
            }

            @media (max-width: 600px) {
                header {
                    flex-direction: column;
                }

                nav {
                    justify-content: center;
                }

                .hero h1 {
                    font-size: 27px;
                }

                .content {
                    padding: 22px;
                }
            }
        </style>
    </head>

    <body>

        <header>
            <h2>&lt;/&gt; Kelompok 3</h2>

            <nav>
                ${menu.map(([nama, link]) =>
                    `<a href="${link}" class="${aktif === link ? 'active' : ''}">${nama}</a>`
                ).join('')}
            </nav>
        </header>

        ${isi}

        <footer>
            <p><strong>Kelompok 3</strong></p>
            <p>Pemrograman Berbasis Platform</p>
            <p>Program Studi Teknik Informatika - TI25G</p>
            <p>&copy; 2026 Kelompok 3. All Rights Reserved.</p>
        </footer>

    </body>
    </html>
    `;
}

// 1. Endpoint Beranda
app.get('/beranda', (req, res) => {
    res.send(halaman('Beranda', `
        <section class="hero">
            <h1>Selamat Datang!</h1>
            <p>Webserver Kelompok 3</p>
            <p>Website tugas mata kuliah Pemrograman Berbasis Platform.</p>
            <a href="/identitas" class="btn">Kenali Kelompok Kami</a>
        </section>

        <main class="container">
            <div class="content">
                <h2>Website Kelompok 3</h2>
                <p>
                    Selamat datang di website resmi kelompok kami.
                    Website ini dibuat sebagai bentuk pengerjaan tugas
                    mata kuliah Pemrograman Berbasis Platform dengan
                    menggunakan Node.js dan Express.js.
                </p>
            </div>
        </main>
    `, '/beranda'));
});

// 2. Endpoint Identitas
app.get('/identitas', (req, res) => {
    res.send(halaman('Identitas Kelompok', `
        <main class="container">
            <div class="content">
                <h2>Identitas Kelompok</h2>

                <div class="info">
                    <div class="card">
                        <h3>Nama Kelompok</h3>
                        <p>Kelompok 3</p>
                    </div>

                    <div class="card">
                        <h3>Kelas</h3>
                        <p>TI25G</p>
                    </div>

                    <div class="card">
                        <h3>Program Studi</h3>
                        <p>Teknik Informatika</p>
                    </div>

                    <div class="card">
                        <h3>Dosen Pengampu</h3>
                        <p>Shinta Ayuningtias, S.Kom., M.Kom.</p>
                    </div>
                </div>
            </div>
        </main>
    `, '/identitas'));
});

// 3. Endpoint Mata Kuliah
app.get('/matkul', (req, res) => {
    res.send(halaman('Mata Kuliah', `
        <main class="container">
            <div class="content">
                <h2>Identitas Mata Kuliah</h2>

                <div class="info">
                    <div class="card">
                        <h3>Nama Mata Kuliah</h3>
                        <p>Pemrograman Berbasis Platform</p>
                    </div>

                    <div class="card">
                        <h3>Program Studi</h3>
                        <p>Teknik Informatika</p>
                    </div>

                    <div class="card">
                        <h3>Kelas</h3>
                        <p>TI25G</p>
                    </div>

                    <div class="card">
                        <h3>Dosen Pengampu</h3>
                        <p>Shinta Ayuningtias, S.Kom., M.Kom.</p>
                    </div>
                </div>
            </div>
        </main>
    `, '/matkul'));
});

// 4. Endpoint Anggota
app.get('/anggota', (req, res) => {
    res.send(halaman('Anggota Kelompok', `
        <main class="container">
            <div class="content">
                <h2>Daftar Anggota Kelompok 3</h2>

                <div class="anggota">
                    <strong>01. Dimas Sandy</strong>
                    <p>NIM: 20250040026</p>
                </div>

                <div class="anggota">
                    <strong>02. Bernardus Laba Manikin</strong>
                    <p>NIM: 20250040143</p>
                </div>

                <div class="anggota">
                    <strong>03. Defa Dinah Alfarist</strong>
                    <p>NIM: 20250040125</p>
                </div>

                <div class="anggota">
                    <strong>04. Dicky Abdullah Upara</strong>
                    <p>NIM: 20250040172</p>
                </div>
            </div>
        </main>
    `, '/anggota'));
});

// 5. Endpoint Kontak
app.get('/kontak', (req, res) => {
    res.send(halaman('Kontak', `
        <main class="container">
            <div class="content">
                <h2>Informasi Kelompok</h2>

                <div class="card">
                    <h3>Kelompok 3</h3>
                    <p>Program Studi Teknik Informatika</p>
                    <p>Kelas: TI25G</p>
                    <p>Mata Kuliah: Pemrograman Berbasis Platform</p>
                </div>

                <p style="margin-top: 20px;">
                    Terima kasih telah mengunjungi website kelompok kami.
                    Semoga website ini dapat memberikan informasi
                    mengenai identitas dan anggota kelompok.
                </p>
            </div>
        </main>
    `, '/kontak'));
});

// Halaman utama
app.get('/', (req, res) => {
    res.redirect('/beranda');
});

// Menjalankan server
app.listen(PORT, () => {
    console.log('===================================');
    console.log(' WEB SERVER KELOMPOK 3');
    console.log('===================================');
    console.log(`Server berjalan di http://localhost:${PORT}`);
});