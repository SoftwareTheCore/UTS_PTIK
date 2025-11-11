// 50 Soal PTIK Interaktif - SESUAI LAMPIRAN
// Catatan: Semua soal diambil langsung dari materi Pertemuan 1-7 yang diberikan

const QUESTIONS = [
  // 1-5: Dasar Komputer & TI (Pertemuan 1)
  {
    id: 1,
    category: "Dasar Komputer",
    question: "Teknologi Informasi menurut Akhmad Fauzi adalah…",
    options: [
      "Teknologi yang memanfaatkan komputer sebagai perangkat utama untuk mengolah data menjadi informasi",
      "Seperangkat alat yang membantu bekerja dengan informasi",
      "Teknologi yang menggabungkan komputasi dengan jalur komunikasi",
      "Cabang pengetahuan yang berhubungan dengan penciptaan sarana teknis"
    ],
    answer: 0,
    explanation: "Berdasarkan Pertemuan 1: 'Teknologi Informasi menurut Akhmad Fauzi: Teknologi Informasi adalah teknologi yang memanfaatkan computer sebagai perangkat utama untuk mengolah data menjadi informasi yang bermanfaat.'"
  },
  {
    id: 2,
    category: "Dasar Komputer",
    question: "Menurut Martin, Teknologi Informasi mencakup…",
    options: [
      "Hanya perangkat keras komputer",
      "Hanya perangkat lunak komputer", 
      "Komputer dan teknologi komunikasi",
      "Hanya jaringan internet"
    ],
    answer: 2,
    explanation: "Berdasarkan Pertemuan 1: 'Teknologi Informasi Menurut Martin: Teknologi informasi tidak hanya terbatas pada teknologi komputer (perangkat keras dan perangkat lunak) yang digunakan untuk memproses dan menyimpan informasi, melainkan juga mencakup teknologi komunikasi untuk mengirimkan informasi.'"
  },
  {
    id: 3,
    category: "Dasar Komputer",
    question: "Komputer yang digunakan untuk mengolah data kualitatif dan kuantitatif adalah…",
    options: [
      "Komputer Analog",
      "Komputer Digital", 
      "Komputer Hibrid",
      "Komputer Mini"
    ],
    answer: 2,
    explanation: "Berdasarkan Pertemuan 1: 'Komputer Hibrid (Hybrid Computer), Komputer hybrid adalah kombinasi antara komputer analog dengan komputer digital, sehingga komputer jenis ini dapat melakukan pengolahan data kualitatif dan kuantitatif.'"
  },
  {
    id: 4,
    category: "Dasar Komputer",
    question: "Generasi komputer pertama menggunakan teknologi…",
    options: [
      "Transistor",
      "IC (Integrated Circuit)", 
      "Tabung Hampa",
      "Microprocessor"
    ],
    answer: 2,
    explanation: "Berdasarkan Pertemuan 1: 'Generasi Ke - 1 (1945 - 1959) Ciri - cirinya : Menggunakan tabung hampa (electronic vacuum tubes)'"
  },
  {
    id: 5,
    category: "Dasar Komputer", 
    question: "Komputer komersial pertama yang dijual ke Biro Sensus AS adalah…",
    options: [
      "ENIAC",
      "MARK I", 
      "UNIVAC I",
      "EDSAC"
    ],
    answer: 2,
    explanation: "Berdasarkan Pertemuan 1: 'UNIVAC I (Universal Automatic Computer) --> komputer komersial pertama yang dijual kepada Biro Sensus AS.'"
  },

  // 6-10: Teknologi Komunikasi (Pertemuan 2)
  {
    id: 6,
    category: "Teknologi Komunikasi",
    question: "Istilah komunikasi berasal dari kata Latin 'Communis' yang berarti…",
    options: [
      "Berbicara",
      "Mendengarkan", 
      "Membuat kebersamaan",
      "Menulis"
    ],
    answer: 2,
    explanation: "Berdasarkan Pertemuan 2: 'Istilah Komunikasi berpangkal pada perkataan latin Communis yang artinya membuat kebersamaan atau membangun kebersamaan antara dua orang atau lebih.'"
  },
  {
    id: 7,
    category: "Teknologi Komunikasi",
    question: "Proses komunikasi tanpa media yang memanipulasi jumlah penerima disebut…",
    options: [
      "Proses Sekunder",
      "Proses Primer", 
      "Proses Tertier",
      "Proses Kuarter"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 2: 'Proses primer adalah proses komunikasi langsung tanpa adanya media yang dapat memanipulasi dan melipatgandakan jumlah penerima pesan.'"
  },
  {
    id: 8,
    category: "Teknologi Komunikasi",
    question: "Tahap INISIASI dalam proses penerapan teknologi komunikasi mencakup…",
    options: [
      "Menggunakan teknologi langsung",
      "Mengumpulkan informasi tentang teknologi dan merencanakan adopsinya", 
      "Menghapus teknologi lama",
      "Membeli hardware"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 2: 'Tahapan inisiasi, usaha untuk mengumpulkan informasi tentang teknologi komunikasi, memahami dengan seksama dan merencanakannya untuk mengadopsinya.'"
  },
  {
    id: 9,
    category: "Teknologi Komunikasi",
    question: "Pelaku teknologi komunikasi mencakup semua berikut, KECUALI…",
    options: [
      "Pemakai",
      "Perusahaan penyedia jasa telekomunikasi", 
      "Produsen peralatan komunikasi",
      "Hacker"
    ],
    answer: 3,
    explanation: "Berdasarkan Pertemuan 2: 'Pelaku Teknologi Komunikasi: 1. Pemakai, 2. Perusahaan penyedia jasa telekomunikasi, 3. Produsen peralatan komunikasi, 4. Badan yang mengatur/mengkoordinir'"
  },
  {
    id: 10,
    category: "Teknologi Komunikasi",
    question: "Informasi yang berkualitas menurut Mc. Leod (1997) harus memiliki ciri…",
    options: [
      "Hanya akurat saja",
      "Akurat, tepat waktu, relevan, dan lengkap", 
      "Hanya cepat",
      "Tidak perlu lengkap"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 2: 'Ciri -ciri informasi yang berkualitas menurut Mc. Leod (1997) ada empat, yaitu: (1) akurat, (2) tepat waktu, (3) relevan, dan (4) lengkap.'"
  },

  // 11-20: Revolusi Industri & Big Data (Pertemuan 3-4)
  {
    id: 11,
    category: "Revolusi Industri",
    question: "Revolusi Industri 1.0 dimulai dengan penemuan…",
    options: [
      "Internet dan komputer",
      "Mesin uap oleh James Watt", 
      "Listrik dan ban berjalan",
      "Artificial Intelligence"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 3: 'Revolusi Industri I dimulai dari ditemukannya Mesin Uap oleh James Watt pada tahun 1764.'"
  },
  {
    id: 12,
    category: "Revolusi Industri",
    question: "Revolusi Industri 4.0 terjadi ketika…",
    options: [
      "Ditemukan mesin uap",
      "Robot dikontrol oleh artificial intelligence tanpa input manusia", 
      "Ditemukan listrik",
      "Ditemukan internet saja"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 3: 'Revolusi Industri 4.0 terjadi ketika robot yang terkoneksi dengan sistem komputer, diperlengkapi dengan machine learning algorithms yang dapat belajar dan mengontrol robot itu sendiri tanpa input dari human operators yang dikenal dengan istilah artificial intellegence (AI).'"
  },
  {
    id: 13,
    category: "Big Data",
    question: "Big Data menurut McKinsey Global (2011) dapat didefinisikan dengan karakteristik…",
    options: [
      "Volume, Velocity, Variety",
      "Video, Voice, Visual", 
      "Virtual, Verified, Valid",
      "Version, Vendor, Value"
    ],
    answer: 0,
    explanation: "Berdasarkan Pertemuan 4: 'Menurut McKinsey Global (2011), Big Data dapat didefinisikan dengan data yang memiliki skala (volume), distribusi (velocity), keragaman (variety) yang sangat besar'"
  },
  {
    id: 14,
    category: "Big Data",
    question: "Teknologi Big Data dibagi menjadi 2 kelompok pemrosesan, yaitu…",
    options: [
      "Online dan Offline processing",
      "Batch processing dan Streaming processing", 
      "Fast dan Slow processing",
      "Manual dan Automatic processing"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 4: 'Untuk Volume Data, Teknologi Big Data dibagi menjadi 2 kelompok: batch processing yang mana digunakan untuk menganalisis data yang sudah settle (data at rest) pada satu waktu tertentu. Dan streaming processing yang mana digunakan untuk menganalisis data yang terus menerus terupdate setiap waktu (data in motion).'"
  },
  {
    id: 15,
    category: "Artificial Intelligence",
    question: "Artificial Intelligence (AI) menurut Rich and Knight [1991] adalah…",
    options: [
      "Komputer yang bisa menggantikan manusia sepenuhnya",
      "Studi tentang bagaimana membuat komputer melakukan hal yang saat ini dilakukan lebih baik oleh manusia", 
      "Program untuk membuat virus",
      "Sistem operasi terbaru"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 4: 'Definisi AI menurut Para ahli: Rich and Knight [1991] - Kecerdasan Buatan (AI) merupakan sebuah studi tentang bagaimana membuat komputer melakukan hal-hal yang pada saat ini dapat dilakukan lebih baik oleh manusia.'"
  },
  {
    id: 16,
    category: "Artificial Intelligence",
    question: "Program checker playing oleh Samuel (1963) unik karena…",
    options: [
      "Hanya bisa bermain catur",
      "Menggunakan pengalamannya untuk meningkatkan kemampuan bermain", 
      "Tidak memerlukan listrik",
      "Bisa berbicara dengan manusia"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 4: 'Samual(1963) menulis sebuah program yang diberi nama checker playing program, yang tidak hanya untuk bermain game, tetapi digunakan juga pengalamannya pada permainan untuk mendukung kemampuan sebelumnya.'"
  },
  {
    id: 17,
    category: "Big Data",
    question: "Dalam konteks Big Data, perbedaan antara Data, Information, dan Knowledge adalah…",
    options: [
      "Semuanya sama saja",
      "Data adalah fakta mentah, Information adalah data yang direkam, Knowledge adalah peta mental kita", 
      "Data lebih penting dari Knowledge",
      "Information hanya untuk komputer"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 4: 'Data (Facts, a description of the World), Information (Captured Data and Knowledge), Knowledge (Our personal map/model of the world)'"
  },
  {
    id: 18,
    category: "Artificial Intelligence",
    question: "Sudut pandang Kecerdasan Buatan (AI) dari sisi bisnis adalah…",
    options: [
      "Kumpulan peralatan powerful untuk menyelesaikan masalah bisnis",
      "Hanya untuk penelitian akademik", 
      "Cara membuat robot",
      "Sistem operasi canggih"
    ],
    answer: 0,
    explanation: "Berdasarkan Pertemuan 4: 'Sudut Pandang Bisnis: Kecerdasan buatan adalah kumpulan peralatan yang sangat powerful dan metodologis dalam menyelesaikan masalah bisnis.'"
  },
  {
    id: 19,
    category: "Revolusi Industri",
    question: "Karakteristik utama Revolusi Industri 4.0 menurut materi PTIK adalah…",
    options: [
      "Mesin uap",
      "Penyatuan dunia online dan industri produksi", 
      "Ban berjalan",
      "Hanya internet"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 3: 'Revolusi industri 4.0 merupakan penyatuan dunia online dengan industri produksi, sehingga merupakan revolusi industri digital.'"
  },
  {
    id: 20,
    category: "Big Data",
    question: "Big Data dari perspektif bisnis digunakan untuk…",
    options: [
      "Hanya menyimpan data",
      "Decision making, improving operations, dan monetizing data", 
      "Menghapus data lama",
      "Membuat website"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 3: 'ada tiga area utama dalam bisnis yang sangat membutuhkan akses terhadap big data, yaitu improving decision making, improving operations, dan the monetizing of data'"
  },

  // 21-30: Jaringan Komputer (Pertemuan 5)
  {
    id: 21,
    category: "Jaringan Komputer",
    question: "LAN (Local Area Network) adalah bentuk jaringan komputer yang…",
    options: [
      "Menghubungkan antar negara",
      "Luas areanya sangat terbatas (rumah, kantor, lab)", 
      "Hanya menggunakan satelit",
      "Memerlukan biaya sangat mahal"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 5: 'LAN adalah bentuk jaringan komputer lokal yang luas areanya sangat terbatas.biasanya untuk jaringan rumahan, kantor, laboraturium komputer'"
  },
  {
    id: 22,
    category: "Jaringan Komputer",
    question: "Media transmisi jaringan yang menggunakan gelombang elektromagnetik disebut…",
    options: [
      "Coaxial",
      "Fiber Optic", 
      "Wireless",
      "Twisted Pair"
    ],
    answer: 2,
    explanation: "Berdasarkan Pertemuan 5: 'Wireless adalah teknologi tanpa kabel, dalam hal ini adalah melakukan hubungan telekomunikasi dengan menggunakan gelombang elektromagnetik sebagai pengganti kabel.'"
  },
  {
    id: 23,
    category: "Jaringan Komputer",
    question: "Konfigurasi jaringan Peer-to-peer cocok untuk…",
    options: [
      "Jaringan dengan komputer banyak dan terpusat",
      "Jaringan dengan jumlah komputer sedikit tanpa server terpusat", 
      "Hanya untuk WAN",
      "Memerlukan administrator khusus"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 5: 'Konfigurasi ini digunakan pada jaringan dengan jumlah komputer yang sedikit, dimana masing-masing komputer memiliki status kedudukan yang sama dan tidak memerlukan sistem yang terpusat(server).'"
  },
  {
    id: 24,
    category: "Jaringan Komputer",
    question: "Kabel UTP (Unshielded Twisted Pair) memiliki karakteristik…",
    options: [
      "Tidak memiliki lapisan pelindung, harga murah, mudah terpengaruh noise",
      "Paling mahal di antara semua kabel", 
      "Jarak jangkau unlimited",
      "Hanya untuk fiber optic"
    ],
    answer: 0,
    explanation: "Berdasarkan Pertemuan 5: 'UTP (Unshielded Twisted Pair) - Tidak memiliki lapisan pelindung. Kelebihan: Harga relatif paling murah, Mudah dalam membangun instalasi. Kelemahan: Mudah terpengaruh noise (gangguan)'"
  },
  {
    id: 25,
    category: "Jaringan Komputer",
    question: "Kelebihan jaringan Client-Server adalah…",
    options: [
      "Implementasi murah dan mudah",
      "Keamanan dan administrasi lebih baik", 
      "Tidak memerlukan administrator",
      "Semua komputer setara"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 5: 'Kelebihan Jaringan Client-Server: Karena hanya ada satu administrator yang mengatur sistem dalam jaringan, maka sudah dapat dipastikan kalau keamanan dan administrasi dalam jaringan client-server lebih baik.'"
  },

  // 26-35: Internet & WWW (Pertemuan 6)
  {
    id: 26,
    category: "Internet",
    question: "Protokol yang digunakan di internet adalah…",
    options: [
      "HTTP/HTTPS",
      "FTP/SFTP", 
      "TCP/IP",
      "SMTP/POP3"
    ],
    answer: 2,
    explanation: "Berdasarkan Pertemuan 6: 'Protokol yang digunakan di internet adalah TCP/IP ( Transmission Control Protocol / Internet Protocol ).'"
  },
  {
    id: 27,
    category: "Internet",
    question: "Komponen layanan internet yang memungkinkan seseorang mengirim dan menerima surat secara elektronik adalah…",
    options: [
      "WWW",
      "E-mail", 
      "FTP",
      "Telnet"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 6: 'Surat Elektronik (E-mail) - Merupakan salahsatu fasilitas internet yang memungkinkan seseorang mengirim dan menerima surat secara elektronik.'"
  },
  {
    id: 28,
    category: "Internet",
    question: "Mailing list adalah aplikasi internet yang berfungsi untuk…",
    options: [
      "Browsing website",
      "Group diskusi lewat email", 
      "Download file besar",
      "Remote komputer"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 6: 'Mailing list - Adalah perkembangan dari e-mail, seseorang yang sudah mempunyai e-mail dapat berlangganan (member) berita-berita (newsletter) ataupun informasi-informasi lain dari suatu topik yang tertentu, atau sebagai wadah bergabung kelompok/group orang-orang dengan kesamaan minat'"
  },
  {
    id: 29,
    category: "Internet",
    question: "FTP (File Transfer Protocol) adalah fasilitas internet untuk…",
    options: [
      "Mengirim email",
      "Download dan Upload file/data", 
      "Chatting online",
      "Video conference"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 6: 'File Transfer Protokol (FTP) - Adalah suatu aplikasi yang memungkinkan pengguna (user) internet dapat mengambil data (download) di situs-situs website dalam bentuk gambar, foto, suara, artikel, tulisan, aplikasi-aplikasi utility dan sebagainya ke komputer user, ataupun sebaliknya (Upload)'"
  },
  {
    id: 30,
    category: "WWW",
    question: "Browser internet pertama yang menggunakan konsep GUI adalah…",
    options: [
      "Internet Explorer",
      "Mosaic", 
      "Netscape Navigator",
      "Google Chrome"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 6: 'Browser internet pertama yang dipakai adalah Mozaic dengan menggunakan konsep GUI yang dikembangkan oleh NCSA pada tahun 1993.'"
  },
  {
    id: 31,
    category: "WWW",
    question: "Jenis domain '.ac' pada website menunjukkan bahwa situs tersebut adalah…",
    options: [
      "Perusahaan komersial",
      "Situs tentang pendidikan/perguruan tinggi", 
      "Organisasi non-profit",
      "Situs pemerintah"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 6: '.ac - Academic, situs tentang pendidikan/perguruan tinggi'"
  },
  {
    id: 32,
    category: "WWW",
    question: "Struktur alamat web 'http://www.bsi.ac.id/' dijelaskan sebagai…",
    options: [
      "http = service transfer, www = alamat informasi, bsi.ac.id = alamat yang dituju",
      "Hanya nama domain saja", 
      "Alamat email",
      "Nomor IP address"
    ],
    answer: 0,
    explanation: "Berdasarkan Pertemuan 6: 'http: Service transfer yang digunakan di dalam web, www : Alamat informasi di internet, bsi.ac.id : Alamat informasi yang dituju atau yang diinginkan dalam internet.'"
  },
  {
    id: 33,
    category: "WWW",
    question: "Webhosting adalah…",
    options: [
      "Software browser",
      "Tempat menyimpan data/dokumen di web server yang tersambung internet", 
      "Alamat email",
      "Sistem operasi"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 6: 'Webhosting adalah tempat seseorang bisa menyimpan data atau dokumen di sebuah web server dan data atau dokumen ini tersambung dengan internet dengan harapan dapat diakses oleh orang lain.'"
  },
  {
    id: 34,
    category: "Internet",
    question: "Sepuluh Hak & Prinsip Internet yang pertama adalah…",
    options: [
      "Hak dan Keadilan Sosial",
      "Keuniversalan dan Kesetaraan", 
      "Aksesibilitas",
      "Kebebasan Berekspresi"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 6: '1. Keuniversalan dan Kesetaraan - Semua manusia terlahir bebas dan setara dalam harga diri dan hak, yang harus dihargai, dilindungi dan dipenuhi dalam lingkungan daring.'"
  },
  {
    id: 35,
    category: "Internet",
    question: "Aktivitas yang DAPAT ditangani oleh Internet menurut materi PTIK adalah…",
    options: [
      "Hanya untuk game online",
      "Sistem pembelajaran jarak jauh, telepon, pencarian kerja, transfer uang", 
      "Tidak bisa untuk komunikasi",
      "Hanya untuk hiburan"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 6: 'Sebagian aktivitas yang dapat ditangani oleh Internet: 1. Sistem pembelajaran jarak jauh, 2. Sistem telepon, 3. Pencarian Lowongan kerja, 4. Transfer Uang.'"
  },

  // 36-45: Era Disruptif & Firm Life Cycle (Pertemuan 3 lanjutan)
  {
    id: 36,
    category: "Era Disruptif",
    question: "Menurut Christensen, disruptive technology biasanya…",
    options: [
      "Muncul dari perusahaan mapan",
      "Menawarkan harga lebih mahal", 
      "Masuk dari segmen pasar yang diabaikan",
      "Langsung menarget pasar utama"
    ],
    answer: 2,
    explanation: "Berdasarkan Pertemuan 3: 'Disruptive technology yang muncul tersebut, seiring dengan waktu, dikembangkan terus menerus dan pada akhirnya menantang produk-produk yang dihasilkan dengan sustainable technology - attack from below.'"
  },
  {
    id: 37,
    category: "Era Disruptif",
    question: "Schumpeter's Theory of Creative Destruction menjelaskan…",
    options: [
      "Inovasi menghancurkan yang lama dan menciptakan yang baru",
      "Teknologi harus dihancurkan sebelum dibuat baru", 
      "Kreativitas harus dihancurkan dulu",
      "Semua bisnis lama harus dihancurkan"
    ],
    answer: 0,
    explanation: "Berdasarkan Pertemuan 3: 'Schumpeter's Theory of Creative Destruction - menjelaskan bahwa proses pembaharuan ekonomi terjadi melalui inovasi yang merupakan mekanisme merusak keseimbangan yang tengah terjadi dan kemudian menciptakan yang baru.'"
  },
  {
    id: 38,
    category: "Firm Life Cycle",
    question: "Tahapan dalam daur hidup perusahaan menurut Pashley & Philippatos adalah…",
    options: [
      "Lahir, Tumbuh, Dewasa, Turun",
      "Startup, Scale-up, Mature, Exit", 
      "Rintisan, Berkembang, Mapan, Bangkrut",
      "Plan, Do, Check, Action"
    ],
    answer: 0,
    explanation: "Berdasarkan Pertemuan 3: 'tahapan daur hidup perusahaan (firm life cycle) dibagi ke dalam empat tahapan, yaitu tahap kelahiran (birth or introduction phase), tahap pertumbuhan (growth phase), tahap kedewasaan (maturity phase) dan tahap penurunan (decline phases), Pashley & Philippatos (1990).'"
  },
  {
    id: 39,
    category: "Firm Life Cycle",
    question: "Perusahaan pada tahap mature biasanya fokus pada…",
    options: [
      "Eksperimen teknologi baru",
      "Mempertahankan konsumen utama", 
      "Mencari pasar baru",
      "Restrukturisasi total"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 3: 'Bagi perusahaan yang tengah berada pada tahapan dewasa, yang terpenting adalah mempertahankan konsumen utama dengan sustaining technology.'"
  },
  {
    id: 40,
    category: "Generasi Milenial",
    question: "Generasi Milenial dikenal sebagai generasi yang…",
    options: [
      "Tidak menggunakan teknologi",
      "Bergaul erat dengan teknologi informasi", 
      "Hanya menggunakan telepon kabel",
      "Menghindari media sosial"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 3: 'Generasi Milenial adalah generasi yang 'bergaul erat' dengan teknologi komunikasi dan informasi, yaitu: melalui internet berselancar di dunia maya dalam memperoleh informasi dan berkomunikasi melalui sosial media.'"
  },

  // 41-50: Lanjutan berbagai topik
  {
    id: 41,
    category: "Generasi Milenial",
    question: "Karakter unggul generasi milenial menurut Alvara Research Center adalah…",
    options: [
      "Kreatif, Percaya Diri, Terkoneksi",
      "Tradisional, Patuh, Individual", 
      "Konservatif, Tertutup, Lokal",
      "Kaku, Formal, Hierarkis"
    ],
    answer: 0,
    explanation: "Berdasarkan Pertemuan 3: 'hasil penelitian Alvara Research Center ... mengungkapkan tiga karakter unggul generasi milenial, yaitu 1.creative: berpikir out of the box, kaya ide dan gagasan, 2.confidence: percaya diri sehingga berani mengungkapkan pendapat, 3.connected: pandai bersosialisasi dalam komunitasnya.'"
  },
  {
    id: 42,
    category: "Internet",
    question: "Alamat IP pada materi PTIK dijelaskan berupa susunan angka dengan format…",
    options: [
      "a.b.c.d dengan nilai 0-255",
      "Hanya huruf kapital", 
      "Angka 0-999",
      "Format tanggal"
    ],
    answer: 0,
    explanation: "Berdasarkan Pertemuan 6: 'Alamat IP berupa susunan angka : a.b.c.d. Dengan masing-masing a,b,c,d berupa sebuah bilangan 0 sampai dengan 255.'"
  },
  {
    id: 43,
    category: "Jaringan Komputer",
    question: "Kelebihan jaringan Peer-to-Peer adalah…",
    options: [
      "Keamanan tinggi",
      "Implementasi murah dan mudah", 
      "Cocok untuk skala besar",
      "Memerlukan administrator khusus"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 5: 'kelebihan jaringan peer-to-peer adalah: Implementasinya murah dan mudah. Tidak memerlukan software administrasi jaringan khusus. Tidak membutuhkan administrator jaringan'"
  },
  {
    id: 44,
    category: "Revolusi Industri",
    question: "Revolusi Industri 2.0 ditandai dengan penemuan…",
    options: [
      "Mesin uap",
      "Listrik dan ban berjalan", 
      "Internet",
      "Artificial Intelligence"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 3: 'Revolusi Industri 2.0 diawali dari hasil penelitian yang dilakukan oleh Faraday & Maxwell sehubungan penggabungan kekuatan antara sistem magnetik dengan sistem elektrik yang menggerakan mesin proses produksi serta ditemukannya ban berjalan'"
  },
  {
    id: 45,
    category: "Revolusi Industri",
    question: "Revolusi Industri 3.0 dimulai dengan penemuan…",
    options: [
      "Mesin uap",
      "Listrik", 
      "Internet dan komputer",
      "Robot AI"
    ],
    answer: 2,
    explanation: "Berdasarkan Pertemuan 3: 'Revolusi Industri 3.0 dimulai dari temuan internet dan komputer yang mempengaruhi pola komunikasi dan peredaran informasi di masyarakat.'"
  },
  {
    id: 46,
    category: "Internet",
    question: "Isi e-mail yang menyatakan orang yang mendapat tembusan tetapi penerima utama TIDAK tahu adalah…",
    options: [
      "To",
      "Cc (Carbon Copy)", 
      "Bcc (Blind Carbon Copy)",
      "Subject"
    ],
    answer: 2,
    explanation: "Berdasarkan Pertemuan 6: 'Bcc : singkatan dari blind carbon copy, menyatakan orang yang mendapatkan tembusan tetapi yang disebut dalam to tidak mengetahui bahwa alamat e-mail ditembuskan ke orang lain'"
  },
  {
    id: 47,
    category: "Internet",
    question: "Untuk mendapatkan informasi lebih luas di internet, kita dapat menggunakan…",
    options: [
      "Modem saja",
      "Search Engine (mesin pencari)", 
      "Hanya browser",
      "Printer"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 6: 'Search engine (mesin pencari elektronik) Adalah aplikasi yang terdapat situs-situs milik perusahaan besar yang memungkinkan kita dapat memperoleh informasi yang lebih luas dan banyak'"
  },
  {
    id: 48,
    category: "WWW",
    question: "WWW (World Wide Web) awalnya dikembangkan pada tahun 1990 di…",
    options: [
      "MIT (Massachusetts Institute of Technology)",
      "CERN (Laboratorium Fisika Partikel)", 
      "NASA",
      "Microsoft"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 6: 'World Wide Web (WWW) - Awalnya dikembangkan pada tahun 1990 di CERN (Laboratorium Fisika Partikel) di Swiss.'"
  },
  {
    id: 49,
    category: "Teknologi Informasi",
    question: "Teknologi Informasi menurut Haaq dan Keen adalah…",
    options: [
      "Hanya hardware komputer",
      "Seperangkat alat yang membantu bekerja dengan informasi dan melakukan tugas pemrosesan informasi", 
      "Hanya software",
      "Hanya internet"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 1: 'Pengertian Teknologi Informasi Menurut Haaq dan Keen : Seperangkat alat yang membantu bekerja dengan informasi dan melakukan tugas-tugas yang berhubungan dengan pemrosesan informasi.'"
  },
  {
    id: 50,
    category: "Teknologi Informasi",
    question: "Contoh penerapan Teknologi Informasi di bidang PENDIDIKAN adalah…",
    options: [
      "E-Commerce",
      "E-Learning untuk pembelajaran jarak jauh", 
      "ATM",
      "Smart card kesehatan"
    ],
    answer: 1,
    explanation: "Berdasarkan Pertemuan 1: 'Bidang Pendidikan - Teknologi pembelajaran terus mengalami perkembangan ... Internet merupakan alat komunikasi yang murah dimana memungkinkan terjadinya interaksi antara dua orang atau lebih. Kemampuan dan karakteristik internet memungkinkan terjadinya proses belajar mengajar jarak jauh (E- Learning) menjadi lebih efektif dan efisien'"
  }
];

// Fungsi untuk menampilkan soal
function displayQuestion(questionId) {
    const question = QUESTIONS.find(q => q.id === questionId);
    if (question) {
        console.log(`Soal ${question.id}: ${question.question}`);
        question.options.forEach((option, index) => {
            console.log(`${index}. ${option}`);
        });
        console.log(`Jawaban: ${question.answer} - ${question.options[question.answer]}`);
        console.log(`Penjelasan: ${question.explanation}`);
        console.log("---");
    }
}

// Ekspor untuk penggunaan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QUESTIONS, displayQuestion };
}