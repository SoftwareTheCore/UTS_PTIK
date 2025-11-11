// 50 Soal PTIK Interaktif
// Catatan: Konten disusun berdasarkan topik umum PTIK (hardware, software, OS, jaringan, etika, TIK perkantoran, algoritma, multimedia, cloud/email).
// Silakan sesuaikan agar persis mengikuti materi pada PDF di folder assets.

const QUESTIONS = [
  // 1-8 Dasar Komputer: Hardware/Software
  {
    id: 1,
    category: "Dasar Komputer",
    question: "Perangkat yang berfungsi mengolah data menjadi informasi disebut…",
    options: ["Perangkat input", "Perangkat proses", "Perangkat output", "Perangkat penyimpanan"],
    answer: 1,
    explanation: "Unit pemroses (CPU) adalah 'otak' komputer yang mengolah data menjadi informasi. <br><br><strong>🧠 Analogi:</strong> Bayangkan CPU seperti seorang chef di dapur. Input (bahan mentah) datang dari perangkat input (keyboard, mouse), lalu chef (CPU) mengolah bahan tersebut menjadi hidangan lezat (informasi), kemudian disajikan melalui perangkat output (monitor, printer). CPU terdiri dari ALU (Arithmetic Logic Unit) yang melakukan perhitungan seperti chef memotong dan memasak, serta CU (Control Unit) yang mengatur alur kerja seperti chef mengatur resep dan timing masakan."
  },
  {
    id: 2,
    category: "Dasar Komputer",
    question: "Manakah yang termasuk perangkat input?",
    options: ["Monitor", "Printer", "Keyboard", "Speaker"],
    answer: 2,
    explanation: "Keyboard adalah perangkat input yang memasukkan data/teks ke komputer. <br><br><strong>⌨️ Analogi:</strong> Pikirkan komputer seperti rumah. Perangkat INPUT adalah 'pintu masuk' - keyboard untuk memasukkan teks, mouse untuk memasukkan perintah klik, microphone untuk memasukkan suara. Sedangkan perangkat OUTPUT adalah 'pintu keluar' - monitor menampilkan gambar keluar, printer mengeluarkan kertas, speaker mengeluarkan suara. Jadi keyboard adalah pintu masuk data, bukan pintu keluar!"
  },
  {
    id: 3,
    category: "Dasar Komputer",
    question: "ROM pada komputer bersifat…",
    options: ["Dapat ditulis ulang bebas", "Hanya-baca (non-volatile)", "Mudah hilang jika listrik padam", "Penyimpanan eksternal"],
    answer: 1,
    explanation: "ROM (Read-Only Memory) menyimpan firmware dan BIOS, bersifat non-volatile (permanen) dan umumnya hanya-baca. <br><br><strong>📚 Analogi:</strong> ROM seperti buku yang sudah dicetak dan tidak bisa diubah lagi. Bayangkan ROM seperti 'buku panduan pabrik' komputer yang berisi instruksi dasar untuk menghidupkan sistem. Berbeda dengan RAM yang seperti papan tulis (bisa dihapus dan ditulis ulang, tapi hilang saat listrik mati), ROM seperti buku yang tetap ada isinya meski tidak ada listrik. Itulah mengapa komputer Anda tetap 'ingat' cara booting meski dicabut dari listrik berhari-hari!"
  },
  {
    id: 4,
    category: "Dasar Komputer",
    question: "Satuan kecepatan CPU yang umum digunakan saat ini adalah…",
    options: ["Mbps", "GHz", "MB", "dpi"],
    answer: 1,
    explanation: "Kecepatan prosesor diukur dalam Hertz (Hz), yang menunjukkan berapa banyak siklus per detik. Saat ini umumnya menggunakan GigaHertz (GHz) = miliaran siklus per detik. <br><br><strong>⚡ Analogi:</strong> GHz seperti detak jantung komputer. Bayangkan CPU dengan kecepatan 3 GHz seperti jantung yang berdetak 3 MILIAR kali per detik! Setiap detak adalah satu siklus pemrosesan instruksi. Semakin tinggi GHz, semakin cepat CPU bekerja. <br><br>Perbandingan satuan: <br>• GHz (GigaHertz) = kecepatan CPU ⚡<br>• Mbps (Megabit per second) = kecepatan internet 🌐<br>• MB (MegaByte) = kapasitas penyimpanan 💾<br>• dpi (dots per inch) = resolusi printer 🖨️"
  },
  {
    id: 5,
    category: "Dasar Komputer",
    question: "Perangkat penyimpanan yang paling cepat di antara berikut adalah…",
    options: ["HDD", "SSD SATA", "SSD NVMe", "DVD"],
    answer: 2,
    explanation: "SSD NVMe menggunakan jalur PCIe dengan bandwidth lebih tinggi dibanding SATA, mencapai kecepatan hingga 7000 MB/s! <br><br><strong>🏎️ Analogi:</strong> Bayangkan penyimpanan data seperti sistem transportasi:<br><br>• <strong>DVD</strong> = Sepeda 🚲 (sangat lambat, 10 MB/s)<br>• <strong>HDD</strong> = Mobil 🚗 (lumayan, 100-150 MB/s, tapi ada bagian bergerak/mekanik yang bisa aus)<br>• <strong>SSD SATA</strong> = Motor sport 🏍️ (cepat, 500 MB/s, full elektronik)<br>• <strong>SSD NVMe</strong> = Jet supersonik ✈️ (super cepat, 3000-7000 MB/s, langsung terhubung ke jalur PCIe seperti runway khusus!)<br><br>NVMe tidak perlu antri di jalur SATA yang lebih lambat, langsung 'terbang' lewat jalur express PCIe!"
  },
  {
    id: 6,
    category: "Dasar Komputer",
    question: "Software yang mengatur seluruh sumber daya perangkat keras adalah…",
    options: ["Driver perangkat", "Sistem operasi", "Aplikasi perkantoran", "Firmware"],
    answer: 1,
    explanation: "Sistem operasi (OS) adalah 'manajer agung' yang mengelola semua hardware, file, proses, memori, dan antarmuka pengguna. <br><br><strong>👔 Analogi:</strong> OS seperti direktur sebuah perusahaan besar. Bayangkan komputer adalah gedung perusahaan:<br><br>• <strong>OS (Windows/Linux)</strong> = Direktur yang mengatur semua divisi<br>• <strong>Driver</strong> = Supervisor khusus untuk satu departemen (misal: driver printer hanya urus printer)<br>• <strong>Firmware</strong> = SOP dasar pabrik yang sudah tertanam<br>• <strong>Aplikasi</strong> = Karyawan yang melakukan pekerjaan spesifik<br><br>Tanpa direktur (OS), karyawan (aplikasi) tidak tahu bagaimana menggunakan fasilitas perusahaan (hardware). OS membuat semua komponen bekerja harmonis!"
  },
  {
    id: 7,
    category: "Dasar Komputer",
    question: "Contoh perangkat output adalah…",
    options: ["Mouse", "Scanner", "Monitor", "Webcam"],
    answer: 2,
    explanation: "Monitor menampilkan informasi (output) dari komputer ke pengguna. <br><br><strong>🎭 Analogi:</strong> Bayangkan komputer sebagai teater:<br><br><strong>INPUT (Masuk ke panggung):</strong><br>• Mouse = Sutradara yang memberi instruksi<br>• Scanner = Kamera yang merekam adegan<br>• Webcam = Kamera yang merekam aktor<br>• Keyboard = Penulis naskah<br><br><strong>OUTPUT (Keluar dari panggung ke penonton):</strong><br>• Monitor = Layar bioskop yang menampilkan film 🎬<br>• Speaker = Sistem audio yang mengeluarkan suara 🔊<br>• Printer = Booth yang mencetak poster 🖨️<br><br>Monitor adalah 'jendela' kita untuk melihat apa yang terjadi di dalam komputer!"
  },
  {
    id: 8,
    category: "Dasar Komputer",
    question: "Yang bukan sistem operasi adalah…",
    options: ["Windows", "Linux", "Android", "Photoshop"],
    answer: 3,
    explanation: "Photoshop adalah aplikasi pengolah gambar, bukan sistem operasi. <br><br><strong>🏢 Analogi:</strong> Bayangkan gedung apartemen:<br><br><strong>SISTEM OPERASI</strong> = Infrastruktur gedung (listrik, air, lift, keamanan)<br>• Windows = Apartemen modern dengan lift otomatis<br>• Linux = Apartemen open-source yang bisa direnovasi sendiri<br>• Android = Apartemen mobile yang bisa dibawa kemana-mana<br><br><strong>APLIKASI</strong> = Penghuni apartemen yang tinggal di gedung<br>• Photoshop = Penghuni yang suka edit foto<br>• Word = Penghuni yang suka menulis<br>• Chrome = Penghuni yang suka browsing<br><br>Tanpa gedung (OS), penghuni (aplikasi) tidak bisa hidup. Photoshop BUTUH Windows/Mac/Linux untuk berjalan!"
  },

  // 9-14 Sistem Operasi & Manajemen File
  {
    id: 9,
    category: "Sistem Operasi",
    question: "Ekstensi file dokumen Microsoft Word modern adalah…",
    options: [".doc", ".docx", ".xlsx", ".ppt"],
    answer: 1,
    explanation: ".docx adalah format Word modern berbasis XML yang diperkenalkan sejak Office 2007. <br><br><strong>🏷️ Analogi:</strong> Ekstensi file seperti label pada kemasan makanan yang menunjukkan isinya:<br><br>• <strong>.docx</strong> = Kardus bertulisan 'WORD' (dokumen teks) 📝<br>• <strong>.doc</strong> = Kardus 'WORD' model lama (masih bisa dibaca tapi jadul)<br>• <strong>.xlsx</strong> = Kardus 'EXCEL' (spreadsheet/tabel) 📊<br>• <strong>.pptx</strong> = Kardus 'POWERPOINT' (presentasi) 🎨<br>• <strong>.pdf</strong> = Kardus yang sudah di-vacuum seal (tidak bisa diubah) 🔒<br><br>Huruf 'x' di akhir (.docx, .xlsx, .pptx) menandakan format XML yang lebih efisien, terkompresi, dan aman dari virus makro!"
  },
  {
    id: 10,
    category: "Sistem Operasi",
    question: "Lokasi default Recycle Bin pada Windows digunakan untuk…",
    options: ["Backup sistem otomatis", "Tempat file sementara saat dihapus", "Menyimpan file virus", "Instalasi aplikasi"],
    answer: 1,
    explanation: "Recycle Bin adalah 'tempat sampah pintar' yang menampung file terhapus sementara sebelum dihapus permanen. <br><br><strong>🗑️ Analogi:</strong> Recycle Bin seperti tempat sampah di rumah dengan sistem 2 tahap:<br><br><strong>Tahap 1 - Delete (Recycle Bin):</strong><br>Seperti membuang kertas ke tempat sampah di kamar. File masih ada dan bisa diambil kembali kapan saja (Restore). Tempat sampah masih ada di dalam rumah.<br><br><strong>Tahap 2 - Shift+Delete atau Empty Recycle Bin (Permanen):</strong><br>Seperti membuang sampah ke TPA (Tempat Pembuangan Akhir). File benar-benar hilang dan SANGAT SULIT dipulihkan. Sampah sudah keluar dari rumah.<br><br>💡 Tip: Selalu cek Recycle Bin sebelum dikosongkan, karena ini adalah kesempatan terakhir Anda menyelamatkan file yang salah hapus!"
  },
  {
    id: 11,
    category: "Sistem Operasi",
    question: "Shortcut keyboard untuk menyalin (copy) pada Windows adalah…",
    options: ["Ctrl+X", "Ctrl+C", "Ctrl+V", "Ctrl+Z"],
    answer: 1,
    explanation: "Ctrl+C adalah shortcut untuk menyalin (copy) teks, file, atau objek ke clipboard. <br><br><strong>✂️ Analogi:</strong> Clipboard seperti kantong ajaib yang menyimpan sementara:<br><br><strong>Ctrl+C (Copy)</strong> = Fotokopi dokumen 📋<br>→ Dokumen asli tetap ada, tapi kamu punya salinannya di kantong<br>→ Contoh: Copy teks dari Word, file masih di folder asli<br><br><strong>Ctrl+X (Cut)</strong> = Gunting & ambil dokumen ✂️<br>→ Dokumen asli HILANG dari tempat asal, masuk ke kantong<br>→ Contoh: Cut file dari folder A, file hilang sampai di-paste ke folder B<br><br><strong>Ctrl+V (Paste)</strong> = Keluarkan isi kantong 📌<br>→ Taruh salinan/barang yang ada di kantong ke tempat baru<br><br><strong>Ctrl+Z (Undo)</strong> = Tombol mundur waktu ⏪<br>→ Batalkan aksi terakhir<br><br><strong>Ctrl+Y (Redo)</strong> = Tombol maju waktu ⏩<br>→ Ulangi aksi yang dibatalkan<br><br>💡 Ingat: <strong>C</strong>=Copy, <strong>X</strong>=X marks the spot (potong), <strong>V</strong>=down arrow (turunkan/paste)"
  },
  {
    id: 12,
    category: "Sistem Operasi",
    question: "Fungsi 'Task Manager' pada Windows adalah…",
    options: ["Menghapus virus", "Mengelola proses/aplikasi dan performa", "Defrag disk", "Mengatur DNS"],
    answer: 1,
    explanation: "Task Manager adalah 'pusat kendali' Windows yang menampilkan dan mengelola proses, aplikasi, performa CPU/RAM, startup program, dan layanan sistem. <br><br><strong>🎛️ Analogi:</strong> Task Manager seperti DASHBOARD MOBIL yang menunjukkan semua indikator:<br><br><strong>Fungsi Task Manager:</strong><br><br>1️⃣ <strong>Processes (Proses)</strong> = Speedometer 🏎️<br>   → Lihat aplikasi apa saja yang berjalan<br>   → CPU/RAM yang dipakai setiap aplikasi<br>   → TUTUP aplikasi yang hang/freeze (End Task)<br><br>2️⃣ <strong>Performance (Performa)</strong> = Indikator mesin 📊<br>   → Monitor CPU, RAM, Disk, Network secara real-time<br>   → Lihat grafik penggunaan<br><br>3️⃣ <strong>Startup</strong> = Daftar aplikasi yang auto-start 🚀<br>   → Matikan aplikasi yang tidak perlu startup<br>   → Mempercepat booting Windows<br><br>4️⃣ <strong>Services (Layanan)</strong> = Mesin background ⚙️<br>   → Layanan Windows yang berjalan di belakang layar<br><br><strong>Cara membuka:</strong><br>• Tekan <strong>Ctrl+Shift+Esc</strong><br>• Atau klik kanan Taskbar → Task Manager<br><br>💡 Task Manager BUKAN antivirus, tapi bisa mendeteksi program mencurigakan yang memakan resource besar!"
  },
  {
    id: 13,
    category: "Sistem Operasi",
    question: "Struktur folder bertingkat pada OS disebut…",
    options: ["Flat file", "Hierarki direktori", "Cluster index", "Relational tree"],
    answer: 1,
    explanation: "Hierarki direktori adalah struktur folder bertingkat seperti pohon terbalik, dimulai dari root (akar) hingga cabang-cabang subfolder. <br><br><strong>🌳 Analogi:</strong> Hierarki direktori seperti POHON KELUARGA atau STRUKTUR ORGANISASI:<br><br><strong>Windows:</strong><br><code>C:\\ (Root/Akar) 🌳<br>├─ Program Files\\ (Cabang utama)<br>│  ├─ Microsoft Office\\ (Cabang kecil)<br>│  └─ Adobe\\ (Cabang kecil)<br>├─ Users\\ (Cabang utama)<br>│  ├─ SXFT\\ (User folder)<br>│  │  ├─ Documents\\ (Dokumen)<br>│  │  │  └─ UTS\\ (Folder UTS)<br>│  │  ├─ Downloads\\ (Unduhan)<br>│  │  └─ Pictures\\ (Gambar)<br>└─ Windows\\ (System)</code><br><br><strong>Keuntungan Hierarki:</strong><br>✅ Organisasi terstruktur (mudah cari file)<br>✅ Pengelompokan logis (foto terpisah dari dokumen)<br>✅ Permission berbeda per folder (keamanan)<br><br><strong>Lawan dari Hierarki:</strong><br>• <strong>Flat File</strong> = Semua file dalam 1 folder (kacau!) 😵<br>• Bayangkan 10,000 file dalam 1 folder tanpa subfolder<br><br>💡 Path absolut: C:\\Users\\SXFT\\Documents\\file.docx<br>Path relatif: ..\\..\\Downloads\\file.zip"
  },
  {
    id: 14,
    category: "Sistem Operasi",
    question: "Perintah untuk melihat daftar file di Command Prompt Windows adalah…",
    options: ["ls", "dir", "list", "view"],
    answer: 1,
    explanation: "DIR (Directory) adalah perintah Command Prompt Windows untuk menampilkan daftar file dan folder dalam direktori. <br><br><strong>💻 Analogi:</strong> Command Prompt seperti berbicara langsung dengan komputer dalam bahasa mesin:<br><br><strong>Perintah Windows (CMD):</strong><br><br>• <strong>DIR</strong> = 'Tunjukkan isi folder ini!' 📂<br>  Contoh output:<br>  <code>Volume in drive C is OS<br>  Directory of C:\\Users\\SXFT<br>  <br>  Documents      [Folder]<br>  Downloads      [Folder]<br>  file.txt       1,024 bytes<br>  photo.jpg      2,048 bytes</code><br><br>• <strong>CD</strong> (Change Directory) = Pindah folder 🚶<br>  <code>cd Documents</code> → masuk ke folder Documents<br>  <code>cd ..</code> → naik 1 tingkat<br><br>• <strong>MD/MKDIR</strong> = Buat folder baru 📁<br>  <code>mkdir ProjectBaru</code><br><br>• <strong>DEL</strong> = Hapus file 🗑️<br>  <code>del file.txt</code><br><br>• <strong>COPY</strong> = Salin file 📋<br>  <code>copy file.txt D:\\Backup\\</code><br><br><strong>Linux/Mac (Terminal):</strong><br>• <strong>ls</strong> = List (sama seperti DIR)<br>• <strong>pwd</strong> = Print Working Directory<br>• <strong>rm</strong> = Remove file<br><br>💡 Ingat: Windows=DIR, Linux=LS (keduanya untuk lihat isi folder)"
  },

  // 15-22 Jaringan & Internet
  {
    id: 15,
    category: "Jaringan",
    question: "Kepanjangan dari LAN adalah…",
    options: ["Large Area Network", "Local Area Network", "Linked Access Network", "Logical Area Network"],
    answer: 1,
    explanation: "LAN (Local Area Network) menghubungkan perangkat dalam area lokal terbatas seperti gedung, kantor, atau rumah. <br><br><strong>🏘️ Analogi:</strong> Bayangkan jaringan komputer seperti sistem pos surat:<br><br>• <strong>LAN (Local Area Network)</strong> = Sistem pos di dalam satu kompleks perumahan 🏘️<br>  Cepat, murah, dikelola sendiri. Contoh: WiFi rumah, lab komputer sekolah.<br><br>• <strong>MAN (Metropolitan Area Network)</strong> = Sistem pos antar kecamatan dalam satu kota 🌆<br>  Menghubungkan beberapa LAN dalam satu kota.<br><br>• <strong>WAN (Wide Area Network)</strong> = Sistem pos antar negara 🌍<br>  Jangkauan luas, butuh infrastruktur besar. Internet adalah contoh WAN terbesar!<br><br>Jadi LAN adalah jaringan 'lokal' untuk area yang sempit dan terkontrol."
  },
  {
    id: 16,
    category: "Jaringan",
    question: "Perangkat yang membagi jaringan menjadi beberapa segmen dan bekerja pada layer 2 OSI adalah…",
    options: ["Router", "Switch", "Repeater", "Firewall"],
    answer: 1,
    explanation: "Switch adalah perangkat jaringan yang bekerja pada Layer 2 (Data Link) model OSI, menggunakan alamat MAC untuk meneruskan data. <br><br><strong>🚦 Analogi:</strong> Perangkat jaringan seperti sistem transportasi kota:<br><br><strong>SWITCH</strong> = Persimpangan jalan pintar 🚦<br>• Bekerja di Layer 2 (Data Link - alamat MAC)<br>• Tahu alamat rumah setiap komputer (MAC address)<br>• Kirim paket LANGSUNG ke tujuan (tidak broadcast ke semua)<br>• Seperti: Polisi lalu lintas yang tahu jalan pintas ke setiap rumah<br><br><strong>HUB</strong> = Persimpangan bodoh 📢<br>• Broadcast ke SEMUA port (tidak efisien)<br>• Seperti: Teriak di pasar, semua orang dengar<br><br><strong>ROUTER</strong> = Peta GPS antar kota 🗺️<br>• Bekerja di Layer 3 (Network - IP address)<br>• Menghubungkan jaringan BERBEDA (LAN ke WAN/Internet)<br>• Seperti: Jembatan tol antar provinsi<br><br><strong>REPEATER</strong> = Penguat sinyal 📡<br>• Memperkuat sinyal yang lemah<br><br><strong>FIREWALL</strong> = Satpam keamanan 🛡️<br>• Filter siapa boleh masuk/keluar<br><br>💡 Switch lebih cerdas dari Hub, tapi Router lebih cerdas dari Switch!"
  },
  {
    id: 17,
    category: "Jaringan",
    question: "Alamat IP versi 4 yang valid contohnya…",
    options: ["256.10.0.1", "192.168.1.10", "999.0.0.1", "192.168.1.256"],
    answer: 1,
    explanation: "IPv4 (Internet Protocol version 4) terdiri dari 4 oktet yang dipisahkan titik, setiap oktet bernilai 0-255. <br><br><strong>🏠 Analogi:</strong> IP Address seperti ALAMAT RUMAH di internet:<br><br><strong>Format IPv4:</strong><br><code>[0-255].[0-255].[0-255].[0-255]</code><br><br><strong>Contoh VALID:</strong><br>✅ 192.168.1.10 → Semua oktet ≤ 255<br>✅ 10.0.0.1 → IP private<br>✅ 8.8.8.8 → Google DNS<br>✅ 172.16.0.1 → IP private<br><br><strong>Contoh INVALID:</strong><br>❌ 256.10.0.1 → Oktet pertama > 255<br>❌ 999.0.0.1 → Oktet pertama > 255<br>❌ 192.168.1.256 → Oktet terakhir > 255<br>❌ 300.400.500.600 → Semua > 255<br><br><strong>Jenis IP Address:</strong><br><br>• <strong>IP Public</strong> = Alamat unik di internet 🌍<br>  Contoh: 203.123.45.67<br><br>• <strong>IP Private</strong> = Alamat lokal (tidak bisa diakses dari internet) 🏠<br>  - 10.0.0.0 - 10.255.255.255<br>  - 172.16.0.0 - 172.31.255.255<br>  - 192.168.0.0 - 192.168.255.255<br><br>💡 Kenapa maksimal 255? Karena 1 oktet = 8 bit = 2^8 = 256 nilai (0-255)"
  },
  {
    id: 18,
    category: "Jaringan",
    question: "Protokol untuk mengirim email dari client ke server adalah…",
    options: ["HTTP", "SMTP", "POP3", "FTP"],
    answer: 1,
    explanation: "SMTP (Simple Mail Transfer Protocol) adalah protokol standar untuk MENGIRIM email dari komputer Anda ke server email. <br><br><strong>📮 Analogi:</strong> Protokol email seperti sistem pos surat:<br><br><strong>SMTP (Simple Mail Transfer Protocol)</strong> = Kantor pos untuk KIRIM surat 📮<br>• Port: 25, 587, atau 465<br>• Fungsi: Kirim email dari Gmail/Outlook Anda ke server penerima<br>• Seperti: Anda antar surat ke kantor pos → pos kirim ke alamat tujuan<br><br><strong>POP3 (Post Office Protocol v3)</strong> = Ambil surat dari kotak pos & bawa pulang 📬<br>• Port: 110 atau 995 (SSL)<br>• Fungsi: Download email dari server ke komputer (lalu HAPUS dari server)<br>• Seperti: Ambil surat dari PO Box, bawa pulang, kotak jadi kosong<br><br><strong>IMAP (Internet Message Access Protocol)</strong> = Lihat surat di kotak pos tanpa bawa pulang 👀<br>• Port: 143 atau 993 (SSL)<br>• Fungsi: Akses email yang TETAP ada di server (sinkron di semua device)<br>• Seperti: Baca surat di kantor pos, surat tetap di sana<br><br><strong>Protokol lain:</strong><br>• HTTP/HTTPS = Buka website 🌐<br>• FTP = Transfer file besar 📁<br><br>💡 Ingat: SMTP = Send (Kirim), POP3/IMAP = Receive (Terima)"
  },
  {
    id: 19,
    category: "Jaringan",
    question: "Perangkat yang menghubungkan dua jaringan berbeda dan meneruskan paket berdasarkan alamat IP adalah…",
    options: ["Hub", "Switch", "Router", "Bridge"],
    answer: 2,
    explanation: "Router adalah perangkat Layer 3 (Network Layer) yang menghubungkan dua atau lebih jaringan berbeda dan meneruskan paket data berdasarkan alamat IP. <br><br><strong>🌉 Analogi:</strong> Perangkat jaringan seperti sistem distribusi paket:<br><br><strong>ROUTER</strong> = Kantor Pos Pusat yang mengirim antar kota 🏤<br>• Bekerja di Layer 3 (Network - IP Address)<br>• Menghubungkan jaringan BERBEDA (LAN ↔ WAN/Internet)<br>• Membaca IP tujuan → pilih jalur terbaik (routing)<br>• Punya tabel routing (peta jalan)<br>• Contoh: Router WiFi rumah menghubungkan jaringan rumah (192.168.1.x) ke Internet<br><br><strong>SWITCH</strong> = Kurir lokal dalam 1 kompleks 🏘️<br>• Layer 2 (Data Link - MAC Address)<br>• Hanya dalam 1 jaringan (LAN)<br>• Kirim paket langsung ke device tujuan<br><br><strong>HUB</strong> = Megaphone (teriak ke semua) 📢<br>• Layer 1 (Physical)<br>• Broadcast ke semua port (bodoh & lambat)<br><br><strong>BRIDGE</strong> = Jembatan antar 2 segmen LAN 🌉<br>• Layer 2<br>• Hanya menghubungkan 2 LAN<br><br><strong>Fungsi Router:</strong><br>1. NAT (Network Address Translation) → 1 IP publik untuk banyak device<br>2. DHCP → Membagi IP otomatis<br>3. Firewall → Keamanan<br>4. QoS → Prioritas bandwidth<br><br>💡 Ingat: Switch untuk 1 jaringan, Router untuk menghubungkan banyak jaringan!"
  },
  {
    id: 20,
    category: "Jaringan",
    question: "HTTPS menambahkan… di atas HTTP untuk keamanan.",
    options: ["UDP", "TLS/SSL", "SSH", "IPSec"],
    answer: 1,
    explanation: "HTTPS (HTTP Secure) menambahkan layer TLS/SSL di atas HTTP untuk mengenkripsi komunikasi antara browser dan server. <br><br><strong>🔐 Analogi:</strong> HTTP vs HTTPS seperti mengirim surat:<br><br><strong>HTTP (Tanpa S)</strong> = Kartu pos terbuka 📬<br>• Data dikirim dalam bentuk PLAIN TEXT (teks biasa)<br>• Siapa saja di jalur bisa BACA isinya<br>• Hacker bisa mencuri password, kartu kredit<br>• URL: http://website.com (tidak ada gembok 🔓)<br><br><strong>HTTPS (Dengan S = Secure)</strong> = Surat dalam amplop berlapis + segel 🔒<br>• Data di-ENKRIPSI dengan TLS/SSL<br>• Hanya penerima yang bisa membuka<br>• Hacker hanya lihat kode acak: ��#@$%<br>• URL: https://website.com (ada gembok 🔒 hijau)<br><br><strong>Cara Kerja HTTPS:</strong><br>1. Browser minta koneksi aman ke server<br>2. Server kirim <strong>Sertifikat SSL</strong> (seperti KTP)<br>3. Browser verifikasi sertifikat (cek keaslian)<br>4. Buat <strong>kunci enkripsi</strong> unik untuk sesi ini<br>5. Semua data di-enkripsi bolak-balik 🔐<br><br><strong>Protokol Keamanan Lain:</strong><br>• TLS/SSL = Untuk HTTPS ✅<br>• SSH = Remote access server (Terminal)<br>• IPSec = VPN<br>• UDP = Protokol transport (bukan keamanan)<br><br>💡 Selalu cek gembok 🔒 sebelum input data sensitif!"
  },
  {
    id: 21,
    category: "Jaringan",
    question: "Topologi fisik di mana semua perangkat terhubung ke perangkat pusat adalah…",
    options: ["Bus", "Ring", "Star", "Mesh"],
    answer: 2,
    explanation: "Topologi Star adalah struktur jaringan di mana semua perangkat (komputer) terhubung ke satu perangkat pusat (switch/hub). <br><br><strong>⭐ Analogi:</strong> Topologi jaringan seperti sistem jalan raya:<br><br><strong>STAR (Bintang)</strong> = Bundaran dengan tugu di tengah ⭐<br>• Semua jalan menuju ke PUSAT (switch/hub)<br>• Komunikasi: PC A → Switch → PC B<br>• ✅ Kerusakan 1 kabel = hanya 1 PC mati<br>• ✅ Mudah troubleshoot<br>• ❌ Kalau switch rusak = SEMUA mati<br>• Paling populer untuk LAN modern!<br><br><strong>BUS</strong> = Jalan tol 1 jalur utama 🚌<br>• Semua PC terhubung ke 1 kabel backbone<br>• ❌ Kabel utama putus = SEMUA mati<br>• ❌ Collision sering terjadi (antri)<br>• Jadul, jarang dipakai<br><br><strong>RING (Cincin)</strong> = Jalan melingkar 💍<br>• Data berputar searah jarum jam<br>• Token passing (estafet)<br>• ❌ 1 PC rusak = seluruh ring terganggu<br>• Contoh: FDDI (Fiber Distributed Data Interface)<br><br><strong>MESH</strong> = Jaring laba-laba penuh 🕸️<br>• Setiap PC terhubung ke SEMUA PC lain<br>• ✅ Redundancy tinggi (banyak jalur cadangan)<br>• ❌ SANGAT mahal (banyak kabel)<br>• Untuk jaringan kritis (bank, data center)<br><br>💡 Topologi Star = paling umum karena balance antara cost & reliability!"
  },
  {
    id: 22,
    category: "Jaringan",
    question: "Perangkat untuk mengubah sinyal digital ke analog dan sebaliknya pada sambungan internet tradisional adalah…",
    options: ["Switch", "Modem", "Access Point", "Bridge"],
    answer: 1,
    explanation: "MODEM (MOdulator-DEModulator) adalah perangkat yang mengubah sinyal digital komputer menjadi sinyal analog (modulasi) untuk dikirim melalui kabel telepon/coax, dan sebaliknya (demodulasi). <br><br><strong>📡 Analogi:</strong> Modem seperti PENERJEMAH BAHASA:<br><br><strong>Cara Kerja Modem:</strong><br><br>1️⃣ <strong>MODulator (Digital → Analog)</strong> 💻➡️📞<br>• Komputer: 'Kirim data: 01010101' (bahasa digital)<br>• Modem: 'Oke, saya ubah jadi gelombang suara untuk kabel telepon' 🎵<br>• Seperti: Menerjemahkan bahasa Indonesia → Inggris<br><br>2️⃣ <strong>DEModulator (Analog → Digital)</strong> 📞➡️💻<br>• Kabel telepon: 'Ada sinyal gelombang masuk' 🎵<br>• Modem: 'Saya ubah jadi kode 01010101 untuk komputer'<br>• Seperti: Menerjemahkan bahasa Inggris → Indonesia<br><br><strong>Jenis Modem:</strong><br><br>• <strong>Dial-up Modem</strong> = Modem jadul via telepon 📞 (56 Kbps - LAMBAT!)<br>• <strong>DSL Modem</strong> = Via kabel telepon tapi lebih cepat (5-20 Mbps)<br>• <strong>Cable Modem</strong> = Via kabel TV coaxial (50-100 Mbps)<br>• <strong>Fiber Modem (ONT)</strong> = Via serat optik (1 Gbps+) ✨<br><br><strong>Perangkat Lain:</strong><br>• <strong>Router</strong> = Mengatur lalu lintas antar jaringan<br>• <strong>Access Point</strong> = Membuat sinyal WiFi 📶<br>• <strong>Modem+Router combo</strong> = 2 in 1 (paling umum di rumah)<br><br>💡 Modem = jembatan antara komputer digital & kabel analog!"
  },

  // 23-28 Etika & Keamanan
  {
    id: 23,
    category: "Etika & Keamanan",
    question: "Praktik aman saat membuat kata sandi adalah…",
    options: ["Gunakan tanggal lahir", "Gunakan kombinasi huruf, angka, simbol", "Gunakan satu kata sandi untuk semua akun", "Catat di layar monitor"],
    answer: 1,
    explanation: "Kata sandi kuat harus mengandung kombinasi huruf besar, huruf kecil, angka, dan simbol dengan panjang minimal 12-16 karakter. <br><br><strong>🔐 Analogi:</strong> Password seperti kunci rumah Anda:<br><br><strong>❌ Password LEMAH:</strong><br>• 'tanggal lahir' = Kunci dari kayu tipis (mudah ditebak)<br>• 'password123' = Kunci duplikat yang dijual di toko (umum dipakai)<br>• Satu password untuk semua = Satu kunci untuk rumah, mobil, kantor (kalau hilang, semua kebobolan!)<br><br><strong>✅ Password KUAT:</strong><br>• 'R4h4s!a@2024#Pt1k' = Kunci titanium berlapis 🔒<br>  → Punya HURUF besar & kecil<br>  → Punya ANGKA<br>  → Punya SIMBOL (!@#$%)<br>  → Panjang ≥12 karakter<br>  → UNIK untuk setiap akun<br><br>💡 Gunakan Password Manager seperti LastPass/Bitwarden = brankas digital untuk menyimpan semua kunci Anda!"
  },
  {
    id: 24,
    category: "Etika & Keamanan",
    question: "Phishing adalah…",
    options: ["Serangan DDoS", "Upaya menipu agar korban memberikan data sensitif", "Malware yang menggandakan diri", "Teknik enkripsi"],
    answer: 1,
    explanation: "Phishing adalah teknik penipuan cyber yang menyamar sebagai pihak terpercaya untuk mencuri data sensitif seperti password, nomor kartu kredit, atau OTP. <br><br><strong>🎣 Analogi:</strong> Phishing = 'Memancing' (Fishing) korban dengan umpan palsu<br><br><strong>Cara kerja Phishing:</strong><br>1. <strong>Email/SMS Palsu:</strong> Penipu kirim pesan seolah dari Bank/Tokopedia/Instagram<br>   → 'Akun Anda bermasalah! Klik link ini untuk verifikasi'<br><br>2. <strong>Website Palsu:</strong> Link membawa ke website tiruan yang mirip asli<br>   → www.t0k0pedia.com (huruf 'o' diganti angka '0')<br><br>3. <strong>Korban Tertipu:</strong> Memasukkan username & password<br>   → Data langsung masuk ke penipu! 😱<br><br><strong>Ciri-ciri Phishing:</strong><br>• Urgensi berlebihan ('SEGERA atau akun diblokir!')<br>• Kesalahan ejaan/grammar<br>• Link mencurigakan (cek URL dengan teliti)<br>• Minta data sensitif via email/SMS<br><br>💡 Ingat: Bank/perusahaan resmi TIDAK PERNAH minta password via email!"
  },
  {
    id: 25,
    category: "Etika & Keamanan",
    question: "Contoh etika digital yang benar saat mengutip konten adalah…",
    options: ["Salin-tempel tanpa sumber", "Sebutkan sumber dan penulis", "Ubah sedikit kalimat agar aman", "Gunakan akun anonim"],
    answer: 1,
    explanation: "Etika digital mengharuskan mencantumkan SUMBER dan PENULIS asli saat mengutip karya orang lain sebagai bentuk penghargaan dan menghindari plagiarisme. <br><br><strong>📚 Analogi:</strong> Kutipan seperti meminjam barang orang:<br><br><strong>❌ PLAGIARISME (Salah):</strong><br><br>1. <strong>Copy-paste tanpa sumber</strong> = Mencuri barang orang 🦹<br>   → Mengaku karya orang lain sebagai karya sendiri<br><br>2. <strong>Ubah sedikit kalimat</strong> = Mencuri lalu cat ulang 🎨<br>   → Parafrase tanpa sumber = tetap plagiat!<br><br>3. <strong>Gunakan akun anonim</strong> = Mencuri dengan topeng 🎭<br>   → Tetap salah meski identitas tersembunyi<br><br><strong>✅ ETIKA BENAR:</strong><br><br><strong>Sebutkan Sumber & Penulis</strong> = Meminjam dengan izin & bilang terima kasih 🙏<br><br><strong>Cara kutip yang benar:</strong><br><br>1️⃣ <strong>Kutipan Langsung:</strong><br>'Menurut John Doe (2024), \"Teknologi AI akan mengubah dunia.\"'<br><br>2️⃣ <strong>Parafrase (tulis ulang):</strong><br>'Doe (2024) menyatakan bahwa AI memiliki potensi transformatif.'<br><br>3️⃣ <strong>Daftar Pustaka:</strong><br>Doe, J. (2024). Judul Buku. Penerbit.<br><br><strong>Format sitasi:</strong><br>• APA Style (umum akademik)<br>• MLA Style (sastra/humaniora)<br>• Chicago Style<br>• IEEE (teknik)<br><br>💡 Gunakan tools: Mendeley, Zotero, atau Google Scholar untuk sitasi otomatis!"
  },
  {
    id: 26,
    category: "Etika & Keamanan",
    question: "2FA (Two-Factor Authentication) menambah keamanan dengan…",
    options: ["Mengganti password tiap jam", "Memerlukan dua bukti identitas berbeda", "Memakai proxy", "Menghapus cache"],
    answer: 1,
    explanation: "2FA (Two-Factor Authentication) adalah sistem keamanan berlapis yang memerlukan DUA bukti berbeda untuk login. <br><br><strong>🔐 Analogi:</strong> 2FA seperti sistem keamanan bank berlapis:<br><br><strong>Login TANPA 2FA</strong> = Pintu rumah dengan 1 kunci 🚪<br>→ Kalau kunci dicuri/ditebak → rumah kebobolan!<br><br><strong>Login DENGAN 2FA</strong> = Pintu brankas dengan 2 kunci berbeda 🏦<br>→ Butuh KUNCI + SIDIK JARI<br>→ Maling punya kunci tapi tidak punya sidik jari → GAGAL masuk!<br><br><strong>3 Faktor Autentikasi:</strong><br><br>1️⃣ <strong>Something You KNOW</strong> (Yang Anda tahu)<br>   → Password, PIN, jawaban pertanyaan rahasia<br><br>2️⃣ <strong>Something You HAVE</strong> (Yang Anda punya)<br>   → HP (OTP via SMS/WhatsApp), Token USB, Kartu ATM<br><br>3️⃣ <strong>Something You ARE</strong> (Yang Anda adalah)<br>   → Sidik jari, Face ID, Retina scan, suara<br><br><strong>Contoh 2FA di dunia nyata:</strong><br>• ATM = Kartu (HAVE) + PIN (KNOW)<br>• Gmail = Password (KNOW) + Kode SMS (HAVE)<br>• iPhone = Passcode (KNOW) + Face ID (ARE)<br><br>💡 2FA membuat akun Anda 99.9% lebih aman dari hacker!"
  },
  {
    id: 27,
    category: "Etika & Keamanan",
    question: "Lisensi Creative Commons memungkinkan…",
    options: ["Penggunaan tanpa atribusi apapun", "Berbagai pilihan hak pakai dengan syarat tertentu", "Hanya untuk penggunaan komersial", "Tidak boleh dibagikan"],
    answer: 1,
    explanation: "Creative Commons (CC) adalah lisensi hak cipta yang fleksibel, memungkinkan pencipta berbagi karya dengan berbagai kombinasi izin dan batasan. <br><br><strong>🎨 Analogi:</strong> CC seperti SISTEM SEWA RUMAH dengan berbagai aturan:<br><br><strong>Lisensi Tradisional (Copyright ©)</strong> = Rumah pribadi 🏠🔒<br>→ Semua hak dilindungi<br>→ Butuh izin eksplisit untuk pakai<br><br><strong>Creative Commons (CC)</strong> = Rumah sewa dengan kontrak jelas 📜<br>→ Boleh dipakai dengan syarat tertentu<br><br><strong>6 Jenis Lisensi CC:</strong><br><br>1️⃣ <strong>CC BY</strong> (Attribution) = Paling bebas 🟢<br>   → Boleh pakai, ubah, komersial<br>   → Syarat: Sebutkan pencipta asli<br><br>2️⃣ <strong>CC BY-SA</strong> (Share Alike) 🔄<br>   → Sama seperti BY<br>   → Karya turunan harus pakai lisensi yang sama<br><br>3️⃣ <strong>CC BY-ND</strong> (No Derivatives) 🚫✂️<br>   → Boleh bagikan<br>   → TIDAK boleh diubah/diedit<br><br>4️⃣ <strong>CC BY-NC</strong> (Non-Commercial) 💰🚫<br>   → Hanya untuk NON-KOMERSIAL<br>   → Tidak boleh jual/cari untung<br><br>5️⃣ <strong>CC BY-NC-SA</strong> 🔄💰🚫<br>   → Kombinasi: Non-komersial + Share Alike<br><br>6️⃣ <strong>CC BY-NC-ND</strong> = Paling ketat 🔴<br>   → Non-komersial + Tidak boleh ubah<br>   → Hanya boleh bagikan as-is<br><br><strong>CC0</strong> (Public Domain) = Rumah umum, gratis untuk semua 🌍<br>→ TIDAK ADA batasan sama sekali<br><br>💡 Cek lisensi di Wikipedia, Unsplash, Pixabay sebelum pakai gambar!"
  },
  {
    id: 28,
    category: "Etika & Keamanan",
    question: "Software antivirus terutama mendeteksi dan…",
    options: ["Membuat virus", "Menghapus/karantina malware", "Mengganti OS", "Menambah RAM"],
    answer: 1,
    explanation: "Antivirus adalah software keamanan yang mendeteksi, mencegah, dan menghapus/mengkarantina malware (virus, trojan, worm, ransomware, spyware). <br><br><strong>🛡️ Analogi:</strong> Antivirus seperti SISTEM KEAMANAN BANDARA:<br><br><strong>Cara Kerja Antivirus:</strong><br><br>1️⃣ <strong>Signature-based Detection</strong> = Foto wanted kriminal 📸<br>   → Database berisi 'sidik jari' virus known<br>   → Scan file → cocokkan dengan database<br>   → Kalau match = VIRUS TERDETEKSI!<br><br>2️⃣ <strong>Heuristic/Behavior Analysis</strong> = Deteksi tingkah laku mencurigakan 👀<br>   → Program mencoba akses registry? 🚨<br>   → Program kirim data ke server asing? 🚨<br>   → Enkripsi file massal? (ransomware!) 🚨<br>   → Deteksi virus BARU yang belum ada di database<br><br>3️⃣ <strong>Real-time Protection</strong> = Satpam 24/7 👮<br>   → Monitor aktivitas file real-time<br>   → Scan otomatis saat download/install<br><br><strong>Aksi Antivirus:</strong><br>• <strong>Quarantine (Karantina)</strong> = Penjara isolasi 🏥<br>  → File dicurigai dikunci, tidak bisa jalan<br>• <strong>Delete (Hapus)</strong> = Eksekusi 💀<br>  → File dihapus permanen<br>• <strong>Repair</strong> = Operasi bedah 🏥<br>  → Hapus kode jahat, selamatkan file<br><br><strong>Jenis Malware:</strong><br>• Virus = Menempel pada file lain 🦠<br>• Worm = Gandakan diri via jaringan 🪱<br>• Trojan = Menyamar sebagai app legit 🐴<br>• Ransomware = Enkripsi file, minta tebusan 💰<br>• Spyware = Mata-mata data Anda 👁️<br><br>💡 Contoh: Windows Defender, Avast, Kaspersky, Bitdefender, Norton"
  },

  // 29-36 Aplikasi Perkantoran
  {
    id: 29,
    category: "Perkantoran",
    question: "Shortcut untuk menebalkan teks di Microsoft Word adalah…",
    options: ["Ctrl+I", "Ctrl+U", "Ctrl+B", "Ctrl+N"],
    answer: 2,
    explanation: "Ctrl+B (Bold) adalah shortcut keyboard untuk menebalkan teks di Microsoft Word dan aplikasi pengolah kata lainnya. <br><br><strong>✍️ Analogi:</strong> Shortcut formatting seperti TOMBOL AJAIB untuk percantik teks:<br><br><strong>Formatting Dasar:</strong><br><br>• <strong>Ctrl+B</strong> = <strong>Bold (Tebal)</strong> 💪<br>  → <strong>B</strong> = Bold<br>  → Teks jadi lebih tegas & menonjol<br>  → Untuk: Judul, poin penting, emphasis<br><br>• <strong>Ctrl+I</strong> = <em>Italic (Miring)</em> 🎭<br>  → <em>I</em> = Italic<br>  → Teks jadi miring ke kanan<br>  → Untuk: Istilah asing, judul buku, penekanan halus<br><br>• <strong>Ctrl+U</strong> = <u>Underline (Garis bawah)</u> ___<br>  → <u>U</u> = Underline<br>  → Garis di bawah teks<br>  → Untuk: Highlight bagian penting (tapi jarang dipakai modern)<br><br>• <strong>Ctrl+N</strong> = <strong>N</strong>ew Document 📄<br>  → Buat dokumen BARU<br>  → Bukan formatting!<br><br><strong>Shortcut Produktivitas Word:</strong><br><br>• Ctrl+S = Save 💾<br>• Ctrl+P = Print 🖨️<br>• Ctrl+A = Select All (pilih semua)<br>• Ctrl+F = Find (cari kata)<br>• Ctrl+H = Replace (ganti kata)<br>• Ctrl+Z = Undo ⏪<br>• Ctrl+Y = Redo ⏩<br>• Ctrl+Home = Awal dokumen ⬆️<br>• Ctrl+End = Akhir dokumen ⬇️<br><br><strong>Kombinasi:</strong><br>Ctrl+B+I = <strong><em>Bold + Italic</em></strong> (tebal & miring sekaligus!)<br><br>💡 Ingat: <strong>B</strong>old, <em>I</em>talic, <u>U</u>nderline → Inisial huruf pertama!"
  },
  {
    id: 30,
    category: "Perkantoran",
    question: "Fungsi =SUM(A1:A5) di Excel akan…",
    options: ["Menghitung rata-rata A1 s.d A5", "Menjumlahkan nilai A1 s.d A5", "Mencari nilai maksimum", "Menghitung jumlah sel kosong"],
    answer: 1,
    explanation: "=SUM() menjumlahkan seluruh nilai dalam rentang sel yang ditentukan. <br><br><strong>🧮 Analogi:</strong> Excel seperti kalkulator super pintar:<br><br>Bayangkan Anda punya toko dan mencatat penjualan 5 hari:<br>• A1 = Rp 100.000 (Senin)<br>• A2 = Rp 150.000 (Selasa)<br>• A3 = Rp 200.000 (Rabu)<br>• A4 = Rp 120.000 (Kamis)<br>• A5 = Rp 180.000 (Jumat)<br><br><strong>=SUM(A1:A5)</strong> = Asisten yang menjumlahkan SEMUA<br>→ 100rb + 150rb + 200rb + 120rb + 180rb = <strong>Rp 750.000</strong> ✅<br><br><strong>Fungsi Excel lainnya:</strong><br>• =AVERAGE(A1:A5) → Rata-rata = 750rb ÷ 5 = 150rb<br>• =MAX(A1:A5) → Nilai tertinggi = 200rb<br>• =MIN(A1:A5) → Nilai terendah = 100rb<br>• =COUNT(A1:A5) → Hitung jumlah sel = 5<br><br>SUM = Sigma (Σ) dalam matematika = JUMLAHKAN SEMUA!"
  },
  {
    id: 31,
    category: "Perkantoran",
    question: "Di PowerPoint, 'Slide Master' digunakan untuk…",
    options: ["Menyisipkan video", "Mengatur tata letak dan gaya global", "Mencetak slide", "Menghitung jumlah kata"],
    answer: 1,
    explanation: "Slide Master adalah template induk yang mengontrol desain, font, warna, dan tata letak SELURUH slide dalam presentasi secara konsisten. <br><br><strong>🎨 Analogi:</strong> Slide Master seperti CETAK BIRU ARSITEKTUR rumah:<br><br><strong>Tanpa Slide Master:</strong><br>→ Desain slide 1 → copas ke slide 2, 3, 4... 😫<br>→ Ubah font slide 1 → harus ubah MANUAL 50 slide lain!<br>→ Tidak konsisten, memakan waktu<br><br><strong>Dengan Slide Master:</strong> 🎯<br>→ Atur 1x di Master → OTOMATIS terapkan ke semua slide!<br>→ Ubah warna di Master → SEMUA slide langsung berubah! ✨<br><br><strong>Apa yang Diatur di Slide Master:</strong><br><br>1️⃣ <strong>Font Global</strong> 🔤<br>   → Judul: Arial 44pt Bold<br>   → Body: Calibri 28pt<br><br>2️⃣ <strong>Warna Tema</strong> 🎨<br>   → Background: Biru<br>   → Accent: Kuning<br><br>3️⃣ <strong>Logo & Header/Footer</strong> 🏷️<br>   → Logo perusahaan di pojok<br>   → Nomor halaman otomatis<br><br>4️⃣ <strong>Layout Template</strong> 📐<br>   → Title Slide<br>   → Content Slide<br>   → Two Column<br>   → Blank<br><br><strong>Cara Akses Slide Master:</strong><br>View tab → Slide Master<br><br><strong>Keuntungan:</strong><br>✅ Konsistensi visual (profesional!)<br>✅ Hemat waktu (ubah 1x, apply ke semua)<br>✅ Branding kuat (logo & warna seragam)<br>✅ Mudah maintain presentasi besar<br><br>💡 Slide Master = Ctrl+Z untuk desain - undo semua slide sekaligus!"
  },
  {
    id: 32,
    category: "Perkantoran",
    question: "Fitur 'Mail Merge' pada Word berfungsi untuk…",
    options: ["Menggabungkan file PDF", "Membuat dokumen massal dari data (surat/label)", "Menerjemahkan bahasa otomatis", "Mengunci dokumen"],
    answer: 1,
    explanation: "Mail Merge adalah fitur Word yang menggabungkan template dokumen dengan database (Excel/CSV) untuk membuat ratusan dokumen personal otomatis. <br><br><strong>📬 Analogi:</strong> Mail Merge seperti PABRIK SURAT OTOMATIS:<br><br><strong>Tanpa Mail Merge:</strong> 😭<br>→ Ketik surat 1: 'Kepada Yth. Budi...'<br>→ Ketik surat 2: 'Kepada Yth. Ani...'<br>→ Ketik surat 3: 'Kepada Yth. Citra...'<br>→ 100 surat = 100x ketik manual! (nightmare!)<br><br><strong>Dengan Mail Merge:</strong> 🎯<br>→ Buat 1 template: 'Kepada Yth. [NAMA]...'<br>→ Ambil data dari Excel (Budi, Ani, Citra...)<br>→ Klik tombol → 100 surat langsung jadi! ✨<br><br><strong>Cara Kerja Mail Merge:</strong><br><br>1️⃣ <strong>Buat Template Word</strong> 📝<br><code>Kepada Yth. «Nama»<br>Di «Alamat»<br><br>Dengan hormat,<br>Anda terpilih untuk «Program»...</code><br><br>2️⃣ <strong>Siapkan Data Excel</strong> 📊<br><code>| Nama  | Alamat      | Program    |<br>|-------|-------------|------------|<br>| Budi  | Jl. Merpati | Beasiswa   |<br>| Ani   | Jl. Kenari  | Magang     |</code><br><br>3️⃣ <strong>Merge!</strong> 🔗<br>Mailings tab → Start Mail Merge → Select Recipients → Excel file → Finish & Merge<br><br><strong>Hasil:</strong><br>Surat 1: Kepada Yth. Budi, Di Jl. Merpati...<br>Surat 2: Kepada Yth. Ani, Di Jl. Kenari...<br><br><strong>Kegunaan:</strong><br>✅ Surat undangan massal<br>✅ Label alamat amplop<br>✅ Sertifikat peserta event<br>✅ Kartu nama<br>✅ Email blast personal<br><br>💡 Mail Merge = Photoshop Batch Processing untuk dokumen!"
  },
  {
    id: 33,
    category: "Perkantoran",
    question: "Di Excel, referensi absolut ditulis sebagai…",
    options: ["A1", "$A$1", "A$1$", "#A1"],
    answer: 1,
    explanation: "Referensi absolut ($A$1) mengunci posisi sel saat formula di-copy, berbeda dengan referensi relatif (A1) yang berubah otomatis. <br><br><strong>📌 Analogi:</strong> Referensi Excel seperti SISTEM NAVIGASI:<br><br><strong>Referensi RELATIF (A1)</strong> = GPS relatif 🧭<br>→ 'Jalan 2 blok ke utara dari posisi Anda'<br>→ Saat copy formula → referensi IKUT BERGESER<br><br>Contoh:<br><code>Cell C1: =A1+B1 (10+5=15)<br>Copy ke C2: =A2+B2 (otomatis berubah!)<br>Copy ke C3: =A3+B3 (berubah lagi!)</code><br><br><strong>Referensi ABSOLUT ($A$1)</strong> = Alamat tetap 📍<br>→ 'Ke Monas, Jakarta Pusat' (tidak peduli Anda di mana)<br>→ Saat copy formula → referensi TETAP TIDAK BERUBAH<br><br>Contoh:<br><code>Cell C1: =A1*$B$1 (harga × pajak)<br>Copy ke C2: =A2*$B$1 ($B$1 tetap!)<br>Copy ke C3: =A3*$B$1 ($B$1 masih tetap!)</code><br><br><strong>Jenis Referensi:</strong><br><br>1️⃣ <strong>A1</strong> = Relatif total (kolom & baris berubah)<br>2️⃣ <strong>$A$1</strong> = Absolut total (TIDAK berubah) 🔒<br>3️⃣ <strong>$A1</strong> = Kolom tetap, baris berubah (mixed)<br>4️⃣ <strong>A$1</strong> = Kolom berubah, baris tetap (mixed)<br><br><strong>Shortcut:</strong><br>Tekan <strong>F4</strong> untuk toggle: A1 → $A$1 → A$1 → $A1 → A1<br><br><strong>Kapan Pakai Absolut?</strong><br>✅ Pajak/diskon fix (contoh: $B$1 = 10%)<br>✅ Kurs mata uang (contoh: $C$1 = 15000)<br>✅ Konstanta/parameter tetap<br><br>💡 Tanda $ = 'kunci gembok' untuk freeze posisi!"
  },
  {
    id: 34,
    category: "Perkantoran",
    question: "Transisi antar slide di PowerPoint disebut…",
    options: ["Animation", "Transition", "Morphing Data", "Hyperlink"],
    answer: 1,
    explanation: "Transition adalah efek visual perpindahan ANTAR slide, sedangkan Animation adalah efek gerakan OBJEK dalam slide. <br><br><strong>🎬 Analogi:</strong> PowerPoint seperti FILM:<br><br><strong>TRANSITION</strong> = Pergantian adegan/scene 🎞️<br>→ Efek saat pindah dari Slide 1 ke Slide 2<br>→ Seperti: Fade, Wipe, Push, Zoom<br>→ Apply ke: Keseluruhan slide<br>→ Location: Transitions tab<br><br>Contoh:<br>Slide 1 (Intro) → [FADE hitam] → Slide 2 (Konten)<br><br><strong>ANIMATION</strong> = Gerakan aktor dalam adegan 🎭<br>→ Efek gerakan OBJEK di dalam 1 slide<br>→ Seperti: Teks muncul dari kiri, gambar putar, chart tumbuh<br>→ Apply ke: Teks, gambar, shape individual<br>→ Location: Animations tab<br><br>Contoh dalam 1 slide:<br>→ Judul: Fly in dari atas ✈️<br>→ Bullet 1: Fade in<br>→ Bullet 2: Slide from left ←<br>→ Gambar: Zoom & rotate 🔄<br><br><strong>Perbedaan:</strong><br><br>| Aspek | Transition | Animation |<br>|-------|-----------|-----------|<br>| Target | Slide ke slide | Objek dalam slide |<br>| Timing | Saat pindah slide | Dalam 1 slide |<br>| Tab | Transitions | Animations |<br>| Contoh | Fade, Push, Wipe | Fly in, Fade, Zoom |<br><br><strong>Tips Presentasi Pro:</strong><br>✅ Gunakan transition KONSISTEN (jangan gonta-ganti)<br>✅ Animation untuk EMPHASIZE poin penting<br>✅ Jangan berlebihan (audience pusing!)<br>✅ Timing: Smooth & tidak terlalu cepat<br><br>💡 Transition = antar slide, Animation = dalam slide"
  },
  {
    id: 35,
    category: "Perkantoran",
    question: "Fitur untuk memeriksa ejaan/grammar di Word adalah…",
    options: ["Find & Replace", "Spelling & Grammar", "Track Changes", "SmartArt"],
    answer: 1,
    explanation: "Spelling & Grammar adalah fitur Word yang otomatis memeriksa kesalahan ejaan (spelling) dan tata bahasa (grammar) dengan memberikan garis bawah merah/biru. <br><br><strong>✏️ Analogi:</strong> Spelling & Grammar seperti GURU BAHASA VIRTUAL:<br><br><strong>Cara Kerja:</strong><br><br>🔴 <strong>Garis Merah</strong> = Kesalahan ejaan (typo)<br>→ 'kompter' ❌ → komputer ✅<br>→ 'terlalau' ❌ → terlalu ✅<br>→ Klik kanan → pilih saran koreksi<br><br>🔵 <strong>Garis Biru</strong> = Kesalahan grammar<br>→ 'Saya suka makan nasi goreng yang enak' (kata yang redundant)<br>→ Subject-verb agreement salah<br><br><strong>Cara Menggunakan:</strong><br>1. Review tab → Spelling & Grammar (atau F7)<br>2. Word akan scan seluruh dokumen<br>3. Berhenti di setiap error → pilih:<br>   • Ignore (abaikan)<br>   • Ignore All (abaikan semua)<br>   • Add to Dictionary (tambah ke kamus)<br>   • Change (ganti dengan saran)<br><br><strong>Fitur Word Lainnya:</strong><br><br>• <strong>Find & Replace</strong> = Cari & ganti kata 🔍<br>  Ctrl+H → Ganti 'dia' dengan 'beliau'<br><br>• <strong>Track Changes</strong> = Rekam semua revisi 📝<br>  Untuk kolaborasi → lihat siapa ubah apa<br><br>• <strong>SmartArt</strong> = Diagram grafis 📊<br>  Buat flowchart, organization chart, dll<br><br>• <strong>Word Count</strong> = Hitung jumlah kata 🔢<br>  Review tab → Word Count<br><br>💡 Shortcut: F7 untuk langsung buka Spelling & Grammar checker!"
  },
  {
    id: 36,
    category: "Perkantoran",
    question: "PivotTable di Excel berguna untuk…",
    options: ["Merekam makro", "Membuat tabel dinamis untuk analisis data", "Membuat grafik 3D", "Mengamankan workbook"],
    answer: 1,
    explanation: "PivotTable adalah tool Excel untuk meringkas, menganalisis, dan eksplorasi data besar secara interaktif dengan drag-and-drop. <br><br><strong>🎯 Analogi:</strong> PivotTable seperti KALKULATOR SUPER PINTAR untuk data:<br><br><strong>Tanpa PivotTable:</strong> 😵<br>→ Data penjualan 10,000 baris<br>→ Hitung manual total per produk → copy-paste → SUM...<br>→ Kelompokkan per bulan → filter manual...<br>→ Analisis per sales → formula ribet...<br>→ Butuh berjam-jam! 😭<br><br><strong>Dengan PivotTable:</strong> 🚀<br>→ Drag 'Produk' ke Row<br>→ Drag 'Penjualan' ke Values<br>→ Drag 'Bulan' ke Column<br>→ BOOM! Ringkasan instant dalam 10 detik! ✨<br><br><strong>Contoh Kasus:</strong><br><br><strong>Data Mentah (10,000 baris):</strong><br><code>| Tanggal | Produk | Sales | Jumlah |<br>|---------|--------|-------|--------|<br>| 1 Jan   | Laptop | Budi  | 5000   |<br>| 2 Jan   | Mouse  | Ani   | 150    |<br>...</code><br><br><strong>PivotTable Magic:</strong><br>1. Select data → Insert tab → PivotTable<br>2. Drag & drop fields:<br>   • Rows: Produk<br>   • Values: SUM of Jumlah<br>3. Hasil instant:<br><code>| Produk  | Total    |<br>|---------|----------|<br>| Laptop  | 500,000  |<br>| Mouse   | 15,000   |<br>| Keyboard| 30,000   |</code><br><br><strong>Fitur Powerful:</strong><br>✅ Filter dinamis (klik filter langsung update)<br>✅ Group by tanggal/kategori<br>✅ Calculated fields (tambah kolom rumus)<br>✅ Drill-down detail (double-click angka)<br>✅ Slice & dice data berbagai sudut pandang<br><br>💡 PivotTable = Swiss Army Knife untuk analisis data Excel!"
  },

  // 37-42 Algoritma & Pemrograman Dasar
  {
    id: 37,
    category: "Algoritma",
    question: "Bagan alur (flowchart) digunakan untuk…",
    options: ["Mempersulit desain program", "Memvisualisasikan langkah-langkah algoritma", "Menyimpan data", "Menjalankan kode"],
    answer: 1,
    explanation: "Flowchart adalah diagram visual yang menggambarkan alur logika dan langkah-langkah algoritma sebelum ditulis menjadi kode program. <br><br><strong>🗺️ Analogi:</strong> Flowchart seperti PETA JALAN atau RESEP MASAKAN:<br><br><strong>Contoh: Algoritma Membuat Mie Instan</strong><br><br>START 🟢<br>↓<br>[Rebus air] 💧<br>↓<br>⟨Air mendidih?⟩ 🔥<br>├─ TIDAK → Tunggu lagi<br>└─ YA ↓<br>[Masukkan mie]<br>↓<br>[Tunggu 3 menit] ⏱️<br>↓<br>[Masukkan bumbu]<br>↓<br>[Angkat & sajikan] 🍜<br>↓<br>END 🔴<br><br><strong>Simbol Flowchart:</strong><br>• 🟢 Oval = Start/End<br>• ▭ Kotak = Proses/Aksi<br>• ⟨⟩ Belah ketupat = Keputusan (Ya/Tidak)<br>• ⬌ Panah = Arah alur<br>• ⬭ Jajar genjang = Input/Output<br><br>Flowchart membuat programmer TIDAK tersesat saat coding, seperti Google Maps untuk menulis program!"
  },
  {
    id: 38,
    category: "Algoritma",
    question: "Struktur kontrol untuk mengulang blok kode hingga kondisi terpenuhi adalah…",
    options: ["If-Else", "Switch", "Loop (For/While)", "Function"],
    answer: 2,
    explanation: "Loop (perulangan) adalah struktur kontrol yang mengulang blok kode berulang kali hingga kondisi tertentu terpenuhi. <br><br><strong>🔁 Analogi:</strong> Loop seperti kegiatan berulang sehari-hari:<br><br><strong>LOOP (For/While)</strong> = Mesin cuci yang berputar 🌀<br>→ Ulangi aksi sampai kondisi tercapai<br><br><strong>Contoh nyata:</strong><br>Program: 'Cuci piring sampai bersih'<br><br><code>WHILE (piring masih kotor) {<br>  1. Ambil sabun<br>  2. Gosok piring<br>  3. Bilas dengan air<br>  4. Cek kebersihan<br>}</code><br><br>Piring ke-1 kotor → ULANGI<br>Piring ke-2 kotor → ULANGI<br>Piring ke-3 kotor → ULANGI<br>Semua bersih → BERHENTI ✅<br><br><strong>Jenis Loop:</strong><br><br>• <strong>FOR</strong> = Ulang dengan jumlah pasti<br>  Contoh: 'Lakukan push-up 10 kali'<br><br>• <strong>WHILE</strong> = Ulang selama kondisi benar<br>  Contoh: 'Tunggu sampai air mendidih'<br><br>• <strong>DO-WHILE</strong> = Lakukan dulu 1x, baru cek kondisi<br>  Contoh: 'Coba password, kalau salah coba lagi'<br><br><strong>Beda dengan If-Else:</strong><br>• IF-ELSE = Percabangan (pilih jalan A atau B) 🛣️<br>• LOOP = Perulangan (jalan yang sama berkali-kali) 🔁<br><br>💡 Tanpa loop, programmer harus copy-paste kode 1000x untuk tugas berulang!"
  },
  {
    id: 39,
    category: "Algoritma",
    question: "Urutan tahap pemecahan masalah: 1) Desain, 2) Analisis, 3) Implementasi, 4) Pengujian. Urutan yang benar adalah…",
    options: ["1-2-3-4", "2-1-3-4", "2-3-1-4", "3-2-1-4"],
    answer: 1,
    explanation: "Umumnya: Analisis → Desain → Implementasi → Pengujian (2-1-3-4).",
    correction: "Mulai dari analisis kebutuhan sebelum desain dan implementasi." 
  },
  {
    id: 40,
    category: "Algoritma",
    question: "Dalam pseudocode, pernyataan input sering ditulis sebagai…",
    options: ["PRINT X", "READ X", "CALC X", "LOOP X"],
    answer: 1,
    explanation: "Konvensi umum: READ/INPUT untuk masukan; PRINT/OUTPUT untuk keluaran.",
    correction: "Gunakan READ/INPUT untuk menerima nilai dari pengguna." 
  },
  {
    id: 41,
    category: "Algoritma",
    question: "Istilah 'debugging' mengacu pada…",
    options: ["Men-deploy aplikasi", "Menemukan dan memperbaiki kesalahan program", "Menulis dokumentasi", "Mengoptimalkan UI"],
    answer: 1,
    explanation: "Debugging fokus mencari bug dan memperbaikinya.",
    correction: "Debugging ≠ deploy/dokumentasi; fokus pada perbaikan error." 
  },
  {
    id: 42,
    category: "Algoritma",
    question: "Tipe data yang menyimpan nilai true/false disebut…",
    options: ["Integer", "Boolean", "String", "Float"],
    answer: 1,
    explanation: "Boolean bernilai dua keadaan: true/false (benar/salah).",
    correction: "Integer untuk bilangan bulat; string teks; float pecahan." 
  },

  // 43-46 Multimedia & Format File
  {
    id: 43,
    category: "Multimedia",
    question: "Format gambar terkompresi lossy yang umum untuk foto di web adalah…",
    options: ["PNG", "SVG", "JPEG/JPG", "BMP"],
    answer: 2,
    explanation: "JPEG (Joint Photographic Experts Group) menggunakan kompresi lossy yang cocok untuk foto dengan jutaan warna. <br><br><strong>📸 Analogi:</strong> Format gambar seperti cara menyimpan foto liburan:<br><br><strong>JPEG/JPG = Fotokopi warna (Lossy)</strong> 📷<br>• Ukuran file KECIL (hemat storage)<br>• Kualitas sedikit turun (tapi mata tak terlihat)<br>• COCOK untuk: Foto selfie, pemandangan, upload ke IG/FB<br>• Seperti: MP3 untuk musik (kompresi dengan pengorbanan kualitas kecil)<br><br><strong>PNG = Scan asli (Lossless)</strong> 🖼️<br>• Ukuran file BESAR<br>• Kualitas SEMPURNA (tidak ada yang hilang)<br>• Punya TRANSPARANSI (background bisa tembus)<br>• COCOK untuk: Logo, icon, desain grafis<br><br><strong>SVG = Gambar vektor (Scalable)</strong> ✏️<br>• Bisa diperbesar tanpa pecah<br>• COCOK untuk: Logo, ilustrasi<br><br><strong>BMP = Foto asli tanpa kompresi (HUGE!)</strong> 🐘<br>• Ukuran SANGAT BESAR<br>• Jarang dipakai web<br><br>💡 Aturan praktis: Foto→JPEG, Logo→PNG/SVG"
  },
  {
    id: 44,
    category: "Multimedia",
    question: "Resolusi layar diukur dalam…",
    options: ["dpi", "ppi", "bps", "rpm"],
    answer: 1,
    explanation: "Untuk layar digital sering digunakan ppi (pixels per inch). dpi lazim untuk cetak.",
    correction: "ppi untuk layar, dpi untuk cetak; bps untuk bit per detik; rpm putaran." 
  },
  {
    id: 45,
    category: "Multimedia",
    question: "Format video modern dengan kompresi efisien dan luas dukungannya adalah…",
    options: ["H.264 (MP4)", "MPEG-1", "3GP", "RealMedia"],
    answer: 0,
    explanation: "H.264/AVC dalam kontainer MP4 didukung luas dan efisien.",
    correction: "H.264 (MP4) lebih umum dan efisien dibanding format lama." 
  },
  {
    id: 46,
    category: "Multimedia",
    question: "File PDF terutama digunakan untuk…",
    options: ["Spreadsheet interaktif", "Dokumen dengan tata letak tetap", "Basis data relasional", "Kode sumber"],
    answer: 1,
    explanation: "PDF menjaga tata letak dokumen konsisten lintas perangkat.",
    correction: "PDF bukan basis data atau kode; ia kontainer dokumen final." 
  },

  // 47-50 Cloud & Email
  {
    id: 47,
    category: "Cloud & Email",
    question: "Contoh layanan cloud storage adalah…",
    options: ["Dropbox/Google Drive/OneDrive", "SMTP", "DHCP", "Git"],
    answer: 0,
    explanation: "Dropbox, Google Drive, dan OneDrive adalah layanan penyimpanan cloud (awan) yang menyimpan file di server internet. <br><br><strong>☁️ Analogi:</strong> Cloud Storage seperti sistem penyimpanan barang:<br><br><strong>CLOUD STORAGE (Dropbox/Google Drive/OneDrive)</strong> = Gudang umum di pusat kota 🏢<br>• Akses dari mana saja (rumah/kantor/cafe)<br>• Otomatis sinkron di semua device<br>• Aman dari kebakaran rumah/laptop rusak<br>• Bisa berbagi dengan teman<br>• Bayar sesuai kapasitas (freemium)<br>• Contoh: Simpan skripsi di Drive, bisa dibuka di laptop/HP kapan saja<br><br><strong>Local Storage (Hard disk/SSD)</strong> = Lemari di kamar sendiri 🗄️<br>• Hanya bisa diakses dari 1 device<br>• Tidak butuh internet<br>• Risiko: Laptop hilang = data hilang<br><br><strong>Bukan Cloud Storage:</strong><br>• SMTP = Protokol kirim email 📧<br>• DHCP = Protokol pemberian IP address 🌐<br>• Git = Version control untuk programmer 👨‍💻<br><br>💡 Cloud = 'Awan' karena data mengambang di internet, bisa diakses dari mana saja!"
  },
  {
    id: 48,
    category: "Cloud & Email",
    question: "IMAP berbeda dengan POP3 karena…",
    options: ["IMAP menghapus email dari server", "IMAP menyinkronkan folder di server", "IMAP hanya untuk pengiriman", "IMAP memerlukan FTP"],
    answer: 1,
    explanation: "IMAP sinkron dengan server (status terbaca, folder). POP3 cenderung mengunduh lokal.",
    correction: "IMAP bukan untuk pengiriman (itu SMTP); POP3/IMAP untuk pengambilan." 
  },
  {
    id: 49,
    category: "Cloud & Email",
    question: "Keuntungan utama penyimpanan cloud bagi kolaborasi adalah…",
    options: ["Tidak perlu internet", "Akses bersama dan versi dokumen", "Lebih cepat dari RAM", "Mengganti sistem operasi"],
    answer: 1,
    explanation: "Cloud memudahkan kolaborasi real-time dan histori versi.",
    correction: "Cloud memerlukan internet; tidak mengganti RAM/OS." 
  },
  {
    id: 50,
    category: "Cloud & Email",
    question: "Bidang subjek (Subject) pada email digunakan untuk…",
    options: ["Alamat penerima", "Ringkasan isi pesan", "Lampiran file", "Tanda tangan digital"],
    answer: 1,
    explanation: "Subject membantu penerima memahami pokok pesan dengan cepat.",
    correction: "Alamat penerima di 'To/CC/BCC', bukan di Subject." 
  }
];
