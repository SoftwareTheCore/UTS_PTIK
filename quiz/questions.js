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
    explanation: "Unit pemroses (CPU) mengolah data menjadi informasi. Ini termasuk ALU dan CU.",
    correction: "Jawaban yang benar adalah 'Perangkat proses' karena ia melakukan pengolahan data." 
  },
  {
    id: 2,
    category: "Dasar Komputer",
    question: "Manakah yang termasuk perangkat input?",
    options: ["Monitor", "Printer", "Keyboard", "Speaker"],
    answer: 2,
    explanation: "Keyboard memasukkan data/teks ke komputer (perangkat input).",
    correction: "'Keyboard' adalah perangkat input; monitor/printer/speaker adalah output." 
  },
  {
    id: 3,
    category: "Dasar Komputer",
    question: "ROM pada komputer bersifat…",
    options: ["Dapat ditulis ulang bebas", "Hanya-baca (non-volatile)", "Mudah hilang jika listrik padam", "Penyimpanan eksternal"],
    answer: 1,
    explanation: "ROM menyimpan firmware, bersifat non-volatile dan umumnya hanya-baca.",
    correction: "ROM bukan RAM; data ROM tidak hilang saat listrik padam." 
  },
  {
    id: 4,
    category: "Dasar Komputer",
    question: "Satuan kecepatan CPU yang umum digunakan saat ini adalah…",
    options: ["Mbps", "GHz", "MB", "dpi"],
    answer: 1,
    explanation: "Kecepatan prosesor diukur dalam Hertz (Hz), umumnya GigaHertz (GHz).",
    correction: "Yang benar 'GHz'; Mbps untuk jaringan, MB untuk kapasitas, dpi untuk resolusi." 
  },
  {
    id: 5,
    category: "Dasar Komputer",
    question: "Perangkat penyimpanan yang paling cepat di antara berikut adalah…",
    options: ["HDD", "SSD SATA", "SSD NVMe", "DVD"],
    answer: 2,
    explanation: "SSD NVMe menggunakan jalur PCIe dengan bandwidth lebih tinggi dibanding SATA.",
    correction: "Urutan kecepatan umum: NVMe > SSD SATA > HDD > DVD." 
  },
  {
    id: 6,
    category: "Dasar Komputer",
    question: "Software yang mengatur seluruh sumber daya perangkat keras adalah…",
    options: ["Driver perangkat", "Sistem operasi", "Aplikasi perkantoran", "Firmware"],
    answer: 1,
    explanation: "Sistem operasi (OS) mengelola hardware, file, proses, dan antarmuka pengguna.",
    correction: "Driver/firmware spesifik perangkat; OS mengatur keseluruhan." 
  },
  {
    id: 7,
    category: "Dasar Komputer",
    question: "Contoh perangkat output adalah…",
    options: ["Mouse", "Scanner", "Monitor", "Webcam"],
    answer: 2,
    explanation: "Monitor menampilkan informasi (output) ke pengguna.",
    correction: "Mouse/scanner/webcam adalah input; monitor adalah output." 
  },
  {
    id: 8,
    category: "Dasar Komputer",
    question: "Yang bukan sistem operasi adalah…",
    options: ["Windows", "Linux", "Android", "Photoshop"],
    answer: 3,
    explanation: "Photoshop adalah aplikasi, bukan sistem operasi.",
    correction: "Windows/Linux/Android adalah OS; Photoshop aplikasi grafis." 
  },

  // 9-14 Sistem Operasi & Manajemen File
  {
    id: 9,
    category: "Sistem Operasi",
    question: "Ekstensi file dokumen Microsoft Word modern adalah…",
    options: [".doc", ".docx", ".xlsx", ".ppt"],
    answer: 1,
    explanation: ".docx adalah format Word berbasis XML (Office 2007+).",
    correction: "'.docx' untuk Word baru; '.doc' format lama; '.xlsx' Excel; '.ppt' PowerPoint lama." 
  },
  {
    id: 10,
    category: "Sistem Operasi",
    question: "Lokasi default Recycle Bin pada Windows digunakan untuk…",
    options: ["Backup sistem otomatis", "Tempat file sementara saat dihapus", "Menyimpan file virus", "Instalasi aplikasi"],
    answer: 1,
    explanation: "Recycle Bin menampung file yang dihapus untuk dapat dipulihkan sebelum dihapus permanen.",
    correction: "Recycle Bin bukan backup; ia menampung file sebelum dihapus permanen." 
  },
  {
    id: 11,
    category: "Sistem Operasi",
    question: "Shortcut keyboard untuk menyalin (copy) pada Windows adalah…",
    options: ["Ctrl+X", "Ctrl+C", "Ctrl+V", "Ctrl+Z"],
    answer: 1,
    explanation: "Ctrl+C untuk copy; Ctrl+X cut; Ctrl+V paste; Ctrl+Z undo.",
    correction: "Ingat trio: C=Copy, X=Cut, V=Paste, Z=Undo." 
  },
  {
    id: 12,
    category: "Sistem Operasi",
    question: "Fungsi 'Task Manager' pada Windows adalah…",
    options: ["Menghapus virus", "Mengelola proses/aplikasi dan performa", "Defrag disk", "Mengatur DNS"],
    answer: 1,
    explanation: "Task Manager menampilkan proses, startup, performa, pengguna, dan layanan.",
    correction: "Task Manager bukan antivirus/defrag; itu untuk memantau/kelola proses." 
  },
  {
    id: 13,
    category: "Sistem Operasi",
    question: "Struktur folder bertingkat pada OS disebut…",
    options: ["Flat file", "Hierarki direktori", "Cluster index", "Relational tree"],
    answer: 1,
    explanation: "Sistem file tersusun hierarkis: root -> subfolder -> file.",
    correction: "Istilah umum: hierarki direktori (directory hierarchy)." 
  },
  {
    id: 14,
    category: "Sistem Operasi",
    question: "Perintah untuk melihat daftar file di Command Prompt Windows adalah…",
    options: ["ls", "dir", "list", "view"],
    answer: 1,
    explanation: "Di Windows: dir. Di Linux/Mac: ls.",
    correction: "Gunakan 'dir' pada CMD; 'ls' milik shell Unix." 
  },

  // 15-22 Jaringan & Internet
  {
    id: 15,
    category: "Jaringan",
    question: "Kepanjangan dari LAN adalah…",
    options: ["Large Area Network", "Local Area Network", "Linked Access Network", "Logical Area Network"],
    answer: 1,
    explanation: "LAN menghubungkan perangkat dalam area lokal (gedung/ruangan).",
    correction: "Yang benar 'Local Area Network'." 
  },
  {
    id: 16,
    category: "Jaringan",
    question: "Perangkat yang membagi jaringan menjadi beberapa segmen dan bekerja pada layer 2 OSI adalah…",
    options: ["Router", "Switch", "Repeater", "Firewall"],
    answer: 1,
    explanation: "Switch beroperasi pada layer data link (MAC).",
    correction: "Router di layer 3; repeater memperkuat sinyal; firewall memfilter trafik." 
  },
  {
    id: 17,
    category: "Jaringan",
    question: "Alamat IP versi 4 yang valid contohnya…",
    options: ["256.10.0.1", "192.168.1.10", "999.0.0.1", "192.168.1.256"],
    answer: 1,
    explanation: "Setiap oktet IPv4 0–255; 192.168.1.10 valid.",
    correction: "Nilai di atas 255 tidak valid untuk IPv4." 
  },
  {
    id: 18,
    category: "Jaringan",
    question: "Protokol untuk mengirim email dari client ke server adalah…",
    options: ["HTTP", "SMTP", "POP3", "FTP"],
    answer: 1,
    explanation: "SMTP (Simple Mail Transfer Protocol) untuk pengiriman email.",
    correction: "POP3/IMAP untuk mengambil email; HTTP untuk web; FTP untuk transfer file." 
  },
  {
    id: 19,
    category: "Jaringan",
    question: "Perangkat yang menghubungkan dua jaringan berbeda dan meneruskan paket berdasarkan alamat IP adalah…",
    options: ["Hub", "Switch", "Router", "Bridge"],
    answer: 2,
    explanation: "Router beroperasi pada layer 3 OSI untuk routing paket.",
    correction: "Switch/hub bekerja di layer 2; router di layer 3." 
  },
  {
    id: 20,
    category: "Jaringan",
    question: "HTTPS menambahkan… di atas HTTP untuk keamanan.",
    options: ["UDP", "TLS/SSL", "SSH", "IPSec"],
    answer: 1,
    explanation: "HTTPS = HTTP over TLS/SSL untuk enkripsi dan integritas.",
    correction: "Bukan SSH; HTTPS menggunakan TLS/SSL." 
  },
  {
    id: 21,
    category: "Jaringan",
    question: "Topologi fisik di mana semua perangkat terhubung ke perangkat pusat adalah…",
    options: ["Bus", "Ring", "Star", "Mesh"],
    answer: 2,
    explanation: "Topologi star memakai switch/hub sebagai pusat.",
    correction: "Bus satu jalur utama; ring melingkar; mesh banyak lintasan." 
  },
  {
    id: 22,
    category: "Jaringan",
    question: "Perangkat untuk mengubah sinyal digital ke analog dan sebaliknya pada sambungan internet tradisional adalah…",
    options: ["Switch", "Modem", "Access Point", "Bridge"],
    answer: 1,
    explanation: "Modem = modulator-demodulator.",
    correction: "Access Point untuk Wi-Fi; switch untuk LAN; bridge menyambungkan segmen." 
  },

  // 23-28 Etika & Keamanan
  {
    id: 23,
    category: "Etika & Keamanan",
    question: "Praktik aman saat membuat kata sandi adalah…",
    options: ["Gunakan tanggal lahir", "Gunakan kombinasi huruf, angka, simbol", "Gunakan satu kata sandi untuk semua akun", "Catat di layar monitor"],
    answer: 1,
    explanation: "Kata sandi kuat mengandung kombinasi karakter dan panjang memadai (≥12).",
    correction: "Hindari info mudah ditebak; gunakan manajer kata sandi untuk unik di tiap akun." 
  },
  {
    id: 24,
    category: "Etika & Keamanan",
    question: "Phishing adalah…",
    options: ["Serangan DDoS", "Upaya menipu agar korban memberikan data sensitif", "Malware yang menggandakan diri", "Teknik enkripsi"],
    answer: 1,
    explanation: "Phishing menyaru sebagai pihak tepercaya untuk memancing data.",
    correction: "Bukan DDoS/worm/enkripsi; phishing adalah penipuan sosial." 
  },
  {
    id: 25,
    category: "Etika & Keamanan",
    question: "Contoh etika digital yang benar saat mengutip konten adalah…",
    options: ["Salin-tempel tanpa sumber", "Sebutkan sumber dan penulis", "Ubah sedikit kalimat agar aman", "Gunakan akun anonim"],
    answer: 1,
    explanation: "Mencantumkan atribusi yang tepat adalah bagian dari etika akademik dan digital.",
    correction: "Plagiarisme dilarang; wajib cantumkan sumber/penulis." 
  },
  {
    id: 26,
    category: "Etika & Keamanan",
    question: "2FA (Two-Factor Authentication) menambah keamanan dengan…",
    options: ["Mengganti password tiap jam", "Memerlukan dua bukti identitas berbeda", "Memakai proxy", "Menghapus cache"],
    answer: 1,
    explanation: "2FA menggabungkan dua faktor: sesuatu yang Anda tahu/punya/ada pada Anda (biometrik).",
    correction: "2FA ≠ ganti password otomatis/proxy; itu lapisan verifikasi kedua." 
  },
  {
    id: 27,
    category: "Etika & Keamanan",
    question: "Lisensi Creative Commons memungkinkan…",
    options: ["Penggunaan tanpa atribusi apapun", "Berbagai pilihan hak pakai dengan syarat tertentu", "Hanya untuk penggunaan komersial", "Tidak boleh dibagikan"],
    answer: 1,
    explanation: "CC menyediakan kombinasi syarat (BY, NC, ND, SA).",
    correction: "CC bukan domain publik; ada syarat tertentu yang harus diikuti." 
  },
  {
    id: 28,
    category: "Etika & Keamanan",
    question: "Software antivirus terutama mendeteksi dan…",
    options: ["Membuat virus", "Menghapus/karantina malware", "Mengganti OS", "Menambah RAM"],
    answer: 1,
    explanation: "Antivirus memindai tanda tangan/perilaku untuk menghapus atau mengarantina ancaman.",
    correction: "Antivirus tidak meningkatkan hardware; fungsinya pada keamanan perangkat lunak." 
  },

  // 29-36 Aplikasi Perkantoran
  {
    id: 29,
    category: "Perkantoran",
    question: "Shortcut untuk menebalkan teks di Microsoft Word adalah…",
    options: ["Ctrl+I", "Ctrl+U", "Ctrl+B", "Ctrl+N"],
    answer: 2,
    explanation: "Ctrl+B = Bold; Ctrl+I Italic; Ctrl+U Underline.",
    correction: "Gunakan Ctrl+B untuk huruf tebal." 
  },
  {
    id: 30,
    category: "Perkantoran",
    question: "Fungsi =SUM(A1:A5) di Excel akan…",
    options: ["Menghitung rata-rata A1 s.d A5", "Menjumlahkan nilai A1 s.d A5", "Mencari nilai maksimum", "Menghitung jumlah sel kosong"],
    answer: 1,
    explanation: "SUM menjumlahkan seluruh nilai dalam rentang.",
    correction: "AVERAGE untuk rata-rata; MAX untuk nilai maksimum." 
  },
  {
    id: 31,
    category: "Perkantoran",
    question: "Di PowerPoint, 'Slide Master' digunakan untuk…",
    options: ["Menyisipkan video", "Mengatur tata letak dan gaya global", "Mencetak slide", "Menghitung jumlah kata"],
    answer: 1,
    explanation: "Slide Master menetapkan desain global agar konsisten di semua slide.",
    correction: "Slide Master bukan untuk cetak/video; ia mengatur template/gaya." 
  },
  {
    id: 32,
    category: "Perkantoran",
    question: "Fitur 'Mail Merge' pada Word berfungsi untuk…",
    options: ["Menggabungkan file PDF", "Membuat dokumen massal dari data (surat/label)", "Menerjemahkan bahasa otomatis", "Mengunci dokumen"],
    answer: 1,
    explanation: "Mail Merge menggabungkan template dengan sumber data (Excel/CSV) untuk banyak penerima.",
    correction: "Bukan gabung PDF; itu pembuatan massal surat/label." 
  },
  {
    id: 33,
    category: "Perkantoran",
    question: "Di Excel, referensi absolut ditulis sebagai…",
    options: ["A1", "$A$1", "A$1$", "#A1"],
    answer: 1,
    explanation: "Tanda $ mengunci kolom dan/atau baris: $A$1 mengunci keduanya.",
    correction: "Gunakan $ untuk referensi absolut (mis. $A$1)." 
  },
  {
    id: 34,
    category: "Perkantoran",
    question: "Transisi antar slide di PowerPoint disebut…",
    options: ["Animation", "Transition", "Morphing Data", "Hyperlink"],
    answer: 1,
    explanation: "Transition adalah efek perpindahan antar slide; Animation untuk objek dalam slide.",
    correction: "Animation ≠ Transition; Transition antar slide, Animation dalam slide." 
  },
  {
    id: 35,
    category: "Perkantoran",
    question: "Fitur untuk memeriksa ejaan/grammar di Word adalah…",
    options: ["Find & Replace", "Spelling & Grammar", "Track Changes", "SmartArt"],
    answer: 1,
    explanation: "Spelling & Grammar memeriksa ejaan dan tata bahasa.",
    correction: "Track Changes untuk meninjau revisi; SmartArt untuk grafik." 
  },
  {
    id: 36,
    category: "Perkantoran",
    question: "PivotTable di Excel berguna untuk…",
    options: ["Merekam makro", "Membuat tabel dinamis untuk analisis data", "Membuat grafik 3D", "Mengamankan workbook"],
    answer: 1,
    explanation: "PivotTable meringkas, mengelompokkan, dan menganalisis data secara dinamis.",
    correction: "Pivot bukan untuk makro/grafik 3D; fokus pada ringkasan data." 
  },

  // 37-42 Algoritma & Pemrograman Dasar
  {
    id: 37,
    category: "Algoritma",
    question: "Bagan alur (flowchart) digunakan untuk…",
    options: ["Mempersulit desain program", "Memvisualisasikan langkah-langkah algoritma", "Menyimpan data", "Menjalankan kode"],
    answer: 1,
    explanation: "Flowchart memudahkan pemahaman proses sebelum diimplementasikan.",
    correction: "Flowchart tidak menjalankan kode; hanya memvisualisasikan langkah." 
  },
  {
    id: 38,
    category: "Algoritma",
    question: "Struktur kontrol untuk mengulang blok kode hingga kondisi terpenuhi adalah…",
    options: ["If-Else", "Loop (For/While)", "Switch", "Function"],
    answer: 1,
    explanation: "Loop (for/while) mengulang eksekusi berdasarkan kondisi.",
    correction: "If-Else untuk percabangan; loop untuk perulangan." 
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
    explanation: "JPEG lossy cocok untuk foto; PNG lossless cocok ikon/logo dengan transparansi.",
    correction: "Untuk foto: JPEG; untuk ikon/logo/transparansi: PNG/SVG." 
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
    explanation: "Dropbox, Google Drive, OneDrive adalah penyimpanan awan.",
    correction: "SMTP/DHCP adalah protokol; Git sistem kontrol versi." 
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
