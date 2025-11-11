# Quiz PTIK Interaktif

Situs kuis responsif berisi 50 soal pilihan ganda dengan umpan balik langsung (koreksi + penjelasan). Seluruh aset berada di folder `quiz/`.

## Struktur

- `quiz/index.html` — Halaman utama kuis
- `quiz/style.css` — Gaya tampilan (mobile-first)
- `quiz/questions.js` — Bank soal (50 soal, dapat Anda sesuaikan)
- `quiz/quiz.js` — Logika aplikasi (render, skor, review, penyimpanan lokal)
- `assets/` — Materi PDF referensi (Pertemuan 1–7)

## Cara Menjalankan

Buka file berikut langsung di browser:

- `quiz/index.html`

Tidak perlu server khusus; semuanya berjalan di sisi klien.

## Menyesuaikan Soal

Edit `quiz/questions.js` untuk menyesuaikan isi sesuai PDF pertemuan. Setiap soal memiliki struktur:

```js
{
  id: 1,
  category: "Dasar Komputer",
  question: "Teks soal…",
  options: ["A", "B", "C", "D"],
  answer: 1, // index jawaban benar mulai dari 0
  explanation: "Penjelasan mengapa jawaban benar",
  correction: "Pesan koreksi saat salah"
}
```

Tips:
- Pastikan panjang array `options` konsisten dengan indeks `answer`.
- Simpan file, lalu reload halaman untuk melihat perubahan.

## Fitur

- Feedback instan: benar/salah, tampil koreksi dan penjelasan
- Progress bar dan skor langsung
- Navigasi sebelumnya/berikutnya
- Mode Tinjau (jawaban terkunci, untuk meninjau hasil)
- Ringkasan akhir (rekap semua soal)
- Penyimpanan lokal (lanjutkan sesi sebelumnya)
- Urutan soal diacak saat mulai baru

## Catatan

- Jika Anda menginginkan agar soal benar-benar 1:1 mengikuti PDF, mohon tempelkan ringkasan/daftar topik inti dari setiap pertemuan. Saat ini, soal disusun berdasarkan topik PTIK umum (hardware, OS, jaringan, etika, perkantoran, algoritma, multimedia, cloud/email).
- Untuk menambah jumlah soal, tambahkan objek baru di `questions.js` dan sesuaikan konstanta yang memakai `QUESTIONS.length` (otomatis terhitung).
