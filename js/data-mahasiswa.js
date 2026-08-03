// ===================== DATA IF DATABASE =====================
// Finalis FIK Got Talent 2025 — Divisi Minat & Bakat, HMPS Informatika
// Semua peserta berasal dari Program Studi Informatika, Universitas Amikom Purwokerto.
//
// Struktur: satu entri = satu tim yang lolos sebagai finalis, dikelompokkan per
// kategori lomba. kategoriSlug dipakai untuk filter di js/script.js — jangan diubah
// tanpa menyesuaikan juga daftar tombol filter di database.html.

const MAHASISWA_DATA = [
  {
    no: 1,
    kategori: "Business Plan Competition",
    kategoriSlug: "business-plan",
    tim: "Daizado.id",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Adrinedo Dean Nugroho",
      "Izzati Shafa",
      "Izul Robettul Imam"
    ]
  },
  {
    no: 2,
    kategori: "Business Plan Competition",
    kategoriSlug: "business-plan",
    tim: "ANYAMI",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Dian Sri Lestari",
      "Mida Asika Pasha"
    ]
  },
  {
    no: 3,
    kategori: "Business Plan Competition",
    kategoriSlug: "business-plan",
    tim: "Tropical Crunch",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Nurul Tri Anjani",
      "Dina Puspita Sari",
      "Mar'atun Solikhah"
    ]
  },
  {
    no: 4,
    kategori: "Business Plan Competition",
    kategoriSlug: "business-plan",
    tim: "Tandur Space",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Ikhwan Nur Rizki Fathama",
      "Sofyan Khoiron Mukhlis",
      "Rahmat Hidayat"
    ]
  },
  {
    no: 5,
    kategori: "Business Plan Competition",
    kategoriSlug: "business-plan",
    tim: "Jasa Desain UI-UX",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Baits Nur Rohman",
      "Muhlisin",
      "Meisha Ramadhani"
    ]
  },
  {
    no: 6,
    kategori: "Business Plan Competition",
    kategoriSlug: "business-plan",
    tim: "PROOF AI",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Fazar Adhan Hakim",
      "Achmad Syifa Mubarok",
      "Najwa Ananda Felia",
      "Mufti Frikli Alwi"
    ]
  },
  {
    no: 7,
    kategori: "Business Plan Competition",
    kategoriSlug: "business-plan",
    tim: "Butala",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Nuril Rizqian Ar Ridho",
      "Ismail Mubarok",
      "Fastabiq Ibnu A",
      "Chelsi Arif Prasetyo"
    ]
  },
  {
    no: 8,
    kategori: "Business Plan Competition",
    kategoriSlug: "business-plan",
    tim: "Rumpang",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Ali SR",
      "Nova SR"
    ]
  },
  {
    no: 9,
    kategori: "Business Plan Competition",
    kategoriSlug: "business-plan",
    tim: "Jajanin Aja",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Aura Arnelia Zahrani",
      "Ani Musarofah",
      "Rahajeng Sasi Maghfira"
    ]
  },
  {
    no: 10,
    kategori: "Business Plan Competition",
    kategoriSlug: "business-plan",
    tim: "MINIBot.id",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Deny Ardiansah",
      "Hikmal Yudanto",
      "Ilham Firmansyah"
    ]
  },
  {
    no: 11,
    kategori: "Business Plan Competition",
    kategoriSlug: "business-plan",
    tim: "CitraLime",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Daffa Bagas Mahardika",
      "Rizky Julianto",
      "Mahessa Tegar Rajendra",
      "Igo Tegar Prambudhy"
    ]
  },
  {
    no: 12,
    kategori: "Business Plan Competition",
    kategoriSlug: "business-plan",
    tim: "Mochi Ichigo Daifuku",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Andhika Ridho Oktavian",
      "Ikmal Aulia Rahman",
      "Hamdani Rafi Pangestu"
    ]
  },
  {
    no: 13,
    kategori: "Data Science Competition",
    kategoriSlug: "data-science",
    tim: "IRIS",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Deden Tri Aditya Kurniawan",
      "Yuniar Akbar Noroyan",
      "Rizki Triananda"
    ]
  },
  {
    no: 14,
    kategori: "Data Science Competition",
    kategoriSlug: "data-science",
    tim: "Innovision",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Azhar Khoirul Ramadan Fitroni",
      "Hilmii Daffa Andika",
      "Deny Ardiansah"
    ]
  },
  {
    no: 15,
    kategori: "Data Science Competition",
    kategoriSlug: "data-science",
    tim: "BAROK FC",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Fazar Adhan Hakim",
      "Najwa Ananda Felia",
      "Ilham Firmansyah"
    ]
  },
  {
    no: 16,
    kategori: "Iot & Robotics Competition",
    kategoriSlug: "iot-robotics",
    tim: "Bro My Sensor Just Vibing",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Daud Zulfikarrea",
      "Aziz Hidayatuloh",
      "Bintang Febriand"
    ]
  },
  {
    no: 17,
    kategori: "Iot & Robotics Competition",
    kategoriSlug: "iot-robotics",
    tim: "Berkah",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Sofyan Khoiron Mukhlis",
      "Rendi Cahyo Saputro",
      "Ika Rina Saputri"
    ]
  },
  {
    no: 18,
    kategori: "Iot & Robotics Competition",
    kategoriSlug: "iot-robotics",
    tim: "Smart Plant",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Rahmat Hidayat",
      "Mahessa Tegar Rajendra",
      "Fastabiq Ibnu Akbar"
    ]
  },
  {
    no: 19,
    kategori: "Iot & Robotics Competition",
    kategoriSlug: "iot-robotics",
    tim: "Sepuluh Jaya",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Raka Abi Muyassar",
      "Denendra Ezar Rahardika",
      "Bunga Puspita Sari"
    ]
  },
  {
    no: 20,
    kategori: "Web Application Development",
    kategoriSlug: "web-application",
    tim: "Tektok Javatech.id",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Mohamad Ridho Mubarok",
      "Muhammad Faiz Alfi Rahman",
      "Muhammad Aqil Bafaqih"
    ]
  },
  {
    no: 21,
    kategori: "Web Application Development",
    kategoriSlug: "web-application",
    tim: "Kurawal Creativer",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Gilang Dely Mukti",
      "Firman Zamzami Aziz",
      "Muhammad Agus Priyanto"
    ]
  },
  {
    no: 22,
    kategori: "Mobile Application Development",
    kategoriSlug: "mobile-application",
    tim: "E-Voting",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Irfan Maulana",
      "Biyan Apri Nur Albani",
      "Rasyid Faiz Abdilah",
      "Aditya Fadli Pratama",
      "Aji Santosa",
      "Kazul Sakha Pradipa"
    ]
  },
  {
    no: 23,
    kategori: "Mobile Application Development",
    kategoriSlug: "mobile-application",
    tim: "Campus Room Booking System",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Ade Saputra",
      "Amaria Nur Zamthu",
      "Aisyah Nur Ramadhani",
      "Amanda Puji Rahayu",
      "Amelia Lutfiani",
      "Devy Lusiana"
    ]
  },
  {
    no: 24,
    kategori: "Mobile Application Development",
    kategoriSlug: "mobile-application",
    tim: "CappuDev",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Rivaldo Jeffmarvin",
      "Derli Irawan",
      "Aprilianto Dwi Saputra",
      "Gusnaeni Indah Pratiwi",
      "Ramadhitsa Setya N",
      "Augst Nurandini"
    ]
  },
  {
    no: 25,
    kategori: "Mobile Application Development",
    kategoriSlug: "mobile-application",
    tim: "PlumbDev",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Rahma Wati",
      "Adlifan Mauladhani Ramadhan",
      "Adinda Pangestu",
      "Rias Estriana",
      "Ratna Praptiwi"
    ]
  },
  {
    no: 26,
    kategori: "Mobile Application Development",
    kategoriSlug: "mobile-application",
    tim: "Team Doaq",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Zaidan Umar",
      "Maulana Ilham Ramadhani",
      "Lulu Isfi A",
      "Rahwati Niaga Sari W",
      "Arif Andrianto G.K",
      "Ratim"
    ]
  },
  {
    no: 27,
    kategori: "Mobile Application Development",
    kategoriSlug: "mobile-application",
    tim: "InapKita",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Noval Esa Ramdany",
      "Asri Imbuh Gumpita",
      "Khinta Ramadhani"
    ]
  },
  {
    no: 28,
    kategori: "Mobile Application Development",
    kategoriSlug: "mobile-application",
    tim: "Cine Movie",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Aldrian Firmansyah Putranto",
      "Rhoy Emiliano D",
      "Agung Septian",
      "Dicky Bagus Prasetyo",
      "Muhammad Fahat Azam Amirul Faiq"
    ]
  },
  {
    no: 29,
    kategori: "Mobile Application Development",
    kategoriSlug: "mobile-application",
    tim: "Ang Ang Ang",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Intan Nur Sifa",
      "Aulia Suryaning Tyas",
      "Purnia Setiawati"
    ]
  },
  {
    no: 30,
    kategori: "Mobile Application Development",
    kategoriSlug: "mobile-application",
    tim: "Tim Resepin",
    tahun: 2025,
    prodi: "Informatika",
    anggota: [
      "Muhami Jauza Alma Ramadhan",
      "Andre Januarta",
      "Surya Herwindu Putra Wibawa"
    ]
  },
];