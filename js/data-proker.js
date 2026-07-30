// ===================== DATA PROGRAM KERJA =====================
// Divisi Minat & Bakat — HMPS Informatika
//
// Diperbarui berdasarkan dokumen resmi proker (per 30 Juli 2026):
// - IF Database    : terlaksana 6 Maret 2026, data diambil dari finalis FIK GOT TALENT 2025
// - SKETSA         : program rutin/berkelanjutan sejak 20 April 2026, baru 1 episode terlaksana
// - Makrab IF 2026 : berkelanjutan, dijadwalkan 10–11 Oktober 2026 di Gedung Putih Baturraden
// - HMPS IF Sport  : terlaksana 21 Juni 2026 (Funmatch Minisoccer, 28 peserta, round robin)
//
// status yang dikenali oleh js/script.js: "terlaksana", "berkelanjutan", "akan"

const PROKER_DATA = [
  {
    nama: "IF Database",
    status: "terlaksana",
    ringkasan: "Pendataan dan pengarsipan prestasi mahasiswa Informatika, dengan data awal diambil dari finalis FIK Got Talent 2025.",
    deskripsi: "IF Database merupakan program kerja Divisi Minat & Bakat yang bertujuan mendata dan mengarsipkan prestasi mahasiswa Informatika sebagai bentuk apresiasi sekaligus dokumentasi resmi HMPS Informatika. Pelaksanaan perdana program ini menggunakan data dari para finalis FIK Got Talent 2025 sebagai tahap awal pembentukan database prestasi mahasiswa. Data yang dikumpulkan meliputi informasi prestasi, bidang keahlian, karya, organisasi, maupun pencapaian mahasiswa yang nantinya dapat dimanfaatkan sebagai media publikasi, apresiasi, serta referensi pembinaan dan pengembangan potensi mahasiswa Informatika.",
    tujuan: [
      "Mendokumentasikan prestasi mahasiswa Informatika secara terpusat.",
      "Memberikan apresiasi kepada mahasiswa yang telah berprestasi.",
      "Menyediakan database prestasi sebagai referensi publikasi dan pembinaan mahasiswa.",
      "Menjadi arsip resmi prestasi mahasiswa Informatika."
    ],
    sasaran: "Finalis FIK Got Talent 2025 serta mahasiswa Program Studi Informatika yang memiliki prestasi akademik maupun non-akademik.",
    lingkup: "Internal",
    waktuLokasi: "6 Maret 2026 · Universitas Amikom Purwokerto",
    pesertaPJ: "Izul Robettul Imam",
    parameterKeberhasilan: {
      kualitatif: [
        "Tersusunnya database prestasi mahasiswa Informatika secara rapi dan terstruktur.",
        "Seluruh data finalis FIK Got Talent 2025 terdokumentasi dengan baik.",
        "Database dapat dimanfaatkan sebagai media apresiasi dan publikasi prestasi mahasiswa."
      ],
      kuantitatif: [
        "Seluruh finalis FIK Got Talent 2025 berhasil didata sebagai database awal prestasi mahasiswa.",
        "Bertambahnya data prestasi mahasiswa setiap periode pendataan."
      ]
    },
    timeline: [
      { tanggal: "6 Maret 2026", kegiatan: "Pengumpulan data dari finalis FIK Got Talent 2025" },
    ],
    hasil: [
      "Data prestasi finalis FIK Got Talent 2025 berhasil diarsipkan",
      "Arsip prestasi mahasiswa siap dipakai untuk publikasi apresiasi"
    ],
    catatan: "Pendataan batch berikutnya akan dibuka kembali setiap ada kegiatan/prestasi baru — pantau formulir resmi HMPS."
  },
  {
    nama: "SKETSA",
    status: "berkelanjutan",
    ringkasan: "Sharing Kisah & Talenta Mahasiswa (SKETSA) — video wawancara inspiratif mahasiswa Informatika, berkelanjutan sejak 20 April 2026, baru 1 episode terlaksana dari beberapa episode yang direncanakan.",
    deskripsi: "Sharing Kisah & Talenta Mahasiswa (SKETSA) merupakan program kerja Divisi Minat & Bakat yang bertujuan mendokumentasikan perjalanan, pengalaman, serta prestasi mahasiswa Informatika melalui format video wawancara inspiratif. Program ini menjadi media apresiasi sekaligus sarana berbagi motivasi bagi mahasiswa untuk terus berkarya, mengembangkan potensi, serta menginspirasi mahasiswa lainnya. Setiap episode menghadirkan narasumber yang memiliki pengalaman, karya, atau prestasi di bidang akademik maupun non-akademik.",
    tujuan: [
      "Mengapresiasi mahasiswa Informatika yang memiliki prestasi atau karya.",
      "Menjadi media inspirasi dan motivasi bagi mahasiswa.",
      "Mendokumentasikan kisah dan perjalanan prestasi mahasiswa.",
      "Mempromosikan budaya berkarya dan berprestasi di lingkungan Informatika."
    ],
    sasaran: "Mahasiswa Program Studi Informatika Universitas Amikom Purwokerto.",
    lingkup: "Internal",
    waktuLokasi: "Mulai 20 April 2026 (Berkelanjutan) · Universitas Amikom Purwokerto",
    pesertaPJ: "Syahdan Jamjamii",
    parameterKeberhasilan: {
      kualitatif: [
        "Tersajinya konten inspiratif yang bermanfaat bagi mahasiswa.",
        "Menampilkan keberagaman prestasi dan talenta mahasiswa Informatika.",
        "Meningkatkan motivasi mahasiswa untuk terus berkembang."
      ],
      kuantitatif: [
        "Minimal satu narasumber pada setiap episode.",
        "Seluruh episode dipublikasikan melalui media sosial HMPS Informatika."
      ]
    },
    episode: [
      {
        nomor: 1,
        status: "Terlaksana",
        judul: "PKM Daureka",
        topik: "Perjalanan Tim PKM Daureka dalam memperoleh pendanaan Program Kreativitas Mahasiswa.",
        video: "https://youtu.be/Zu3fkF20YEs?si=tACvb3ej1fL2buec"
      },
      {
        nomor: 2,
        status: "Perencanaan",
        judul: "Muhammad Abdiel Al Hafiz",
        topik: "Google Student Ambassador — sudah komunikasi, tinggal menentukan tanggal pelaksanaan."
      },
      {
        nomor: 3,
        status: "Perencanaan",
        judul: "Tim Kurawal",
        topik: "Juara 3 Proxocoris International Competition 2026 (tingkat internasional).",
        anggota: [
          "Firman Zamzami Aziz (23SA11A018)",
          "Muhammad Agus Priyanto (23SA11A015)",
          "Gilang Dely Mukti (23SA11A006)"
        ]
      },
      {
        nomor: 4,
        status: "Perencanaan",
        judul: "Tim P2MW ANYAMI",
        topik: "Inovasi Circular Craft Berbasis Hilirisasi Lidi Kelapa.",
        anggota: [
          "Dian Sri Lestari (24SA11A246, Informatika)",
          "Da'i Gustiantoro (24SA31A005, Teknologi Informasi)",
          "Ani Musarofah (24SA11A237, Informatika)",
          "Rahmat Hidayat (24SA11A092, Informatika)",
          "Mida Aiska Pasha (23SA21A163, Sistem Informasi)",
          "Luthfiyah Salsabila (23SB11A030, Bisnis Digital)"
        ]
      },
      {
        nomor: 5,
        status: "Perencanaan",
        judul: "Tim Ruang Setara",
        topik: "Juara 1 TechSprint Innovation Cup 2026.",
        anggota: [
          "Afridho Nur Zaki (23SA11A003, Informatika, Ketua)",
          "Gilang Dely Mukti (23SA11A006, Informatika)",
          "Sofia Zahira (Universitas Jendral Soedirman)"
        ]
      },
      {
        nomor: 6,
        status: "Perencanaan",
        judul: "Alif Satria Bahari",
        topik: "Juara 1 Air Pistol Men Individu & Team, Kejurnas Menembak Multi Event Jawa Barat 2026 (22–28 Juni 2026).",
        anggota: ["Alif Satria Bahari (23SA11A058)"]
      }
    ],
    timeline: [
      { tanggal: "Eps 1 — Selesai", kegiatan: "PKM Daureka — instagram.com/pkm_daureka" },
      { tanggal: "Eps 2 — Opsi Narasumber", kegiatan: "Muhammad Abdiel Al Hafiz, Google Student Ambassador" },
      { tanggal: "Eps 3 — Opsi Narasumber", kegiatan: "Tim Kurawal, Juara 3 Proxocoris International Competition 2026" },
      { tanggal: "Eps 4 — Opsi Narasumber", kegiatan: "Tim P2MW ANYAMI — Circular Craft Hilirisasi Lidi Kelapa" },
      { tanggal: "Eps 5 — Opsi Narasumber", kegiatan: "Tim Ruang Setara, Juara 1 TechSprint Innovation Cup 2026" },
      { tanggal: "Eps 6 — Opsi Narasumber", kegiatan: "Alif Satria Bahari, Juara 1 Air Pistol Men Kejurnas Jawa Barat 2026" }
    ],
    hasil: [
      "Episode 1 (PKM Daureka) telah tayang dan terdokumentasi",
      "5 kandidat narasumber episode lanjutan sudah teridentifikasi, tinggal difinalisasi jadwalnya"
    ],
    catatan: "Episode 2–6 masih berstatus opsi narasumber — jadwal tayang menyusul setelah dikonfirmasi ke masing-masing narasumber."
  },
  {
    nama: "Makrab IF",
    status: "berkelanjutan",
    ringkasan: "Malam Keakraban Informatika — kegiatan kebersamaan lintas angkatan, dijadwalkan 10–11 Oktober 2026 di Gedung Putih Baturraden, persiapan sedang berjalan.",
    deskripsi: "Makrab IF merupakan kegiatan kebersamaan mahasiswa Informatika yang bertujuan mempererat hubungan antar mahasiswa lintas angkatan. Kegiatan dikemas dalam suasana santai melalui berbagai aktivitas seperti permainan kelompok, sharing session, pentas seni, api unggun, refleksi, dan kegiatan kebersamaan lainnya. Melalui kegiatan ini diharapkan tercipta rasa kekeluargaan, solidaritas, serta kekompakan dalam keluarga besar Informatika.",
    tujuan: [
      "Mempererat hubungan antar mahasiswa Informatika.",
      "Meningkatkan rasa kekeluargaan.",
      "Menumbuhkan solidaritas dan kekompakan.",
      "Membangun komunikasi yang baik antar angkatan."
    ],
    sasaran: "Seluruh mahasiswa Program Studi Informatika Universitas Amikom Purwokerto.",
    lingkup: "Internal",
    waktuLokasi: "10–11 Oktober 2026 · Gedung Putih Baturraden",
    pesertaPJ: "Anindya Kirana Maheswari & Isna Wasilatul Ngarofah",
    parameterKeberhasilan: {
      kualitatif: [
        "Terjalinnya interaksi yang lebih baik antar mahasiswa lintas angkatan.",
        "Terciptanya suasana kekeluargaan yang harmonis.",
        "Meningkatnya solidaritas dan kekompakan mahasiswa Informatika."
      ],
      kuantitatif: [
        "Target peserta sebanyak 100 mahasiswa.",
        "Seluruh rangkaian kegiatan terlaksana sesuai dengan rundown yang telah disusun."
      ]
    },
    timeline: [
      { tanggal: "27 Juli 2026", kegiatan: "Pembentukan 48 panitia pelaksana" },
      { tanggal: "31 Juli 2026", kegiatan: "Penetapan lokasi di Gedung Putih, Baturraden" },
      { tanggal: "10–11 Oktober 2026", kegiatan: "Pelaksanaan Makrab IF" }
    ],
    hasil: [
      "48 panitia pelaksana telah terbentuk",
      "Lokasi kegiatan (Gedung Putih, Baturraden) telah ditetapkan",
      "Tanggal pelaksanaan telah ditetapkan: 10–11 Oktober 2026"
    ],
    catatan: "Pendaftaran peserta dan rundown lengkap akan diumumkan menyusul — pantau Kontak / media sosial HMPS untuk info terbaru."
  },
  {
    nama: "HMPS IF Sport",
    status: "terlaksana",
    ringkasan: "Funmatch Minisoccer antar mahasiswa Informatika, diikuti 28 peserta dengan sistem round robin, terlaksana 21 Juni 2026 dengan baik dan lancar.",
    deskripsi: "HMPS IF Sport merupakan program kerja Divisi Minat & Bakat yang menjadi wadah bagi mahasiswa Informatika untuk berolahraga sekaligus mempererat hubungan antar angkatan melalui kegiatan yang bersifat rekreatif dan sportif. Pada periode 2026, kegiatan yang telah berhasil dilaksanakan adalah Funmatch Minisoccer yang diikuti oleh 28 mahasiswa Informatika dengan menggunakan sistem round robin, sehingga setiap tim memperoleh kesempatan bertanding secara merata. Ke depannya, HMPS IF Sport dapat dikembangkan dengan berbagai cabang olahraga lainnya sesuai minat mahasiswa, seperti futsal, badminton, voli, basket, maupun cabang olahraga lainnya.",
    tujuan: [
      "Meningkatkan solidaritas antar mahasiswa Informatika.",
      "Menumbuhkan jiwa sportivitas.",
      "Mendorong gaya hidup sehat melalui olahraga.",
      "Menjadi wadah pengembangan minat mahasiswa di bidang olahraga."
    ],
    sasaran: "Seluruh mahasiswa Program Studi Informatika Universitas Amikom Purwokerto.",
    lingkup: "Internal",
    waktuLokasi: "21 Juni 2026 · Gerai Land Mini Soccer Purwokerto",
    pesertaPJ: "Irza Nur Tauhid",
    parameterKeberhasilan: {
      kualitatif: [
        "Terjalinnya kebersamaan antar mahasiswa melalui kegiatan olahraga.",
        "Meningkatnya partisipasi mahasiswa dalam kegiatan non-akademik.",
        "Terciptanya suasana kompetisi yang sehat, sportif, dan menyenangkan."
      ],
      kuantitatif: [
        "Funmatch Minisoccer diikuti oleh 28 peserta.",
        "Seluruh pertandingan dengan sistem round robin berjalan dengan baik hingga selesai."
      ]
    },
    timeline: [
      { tanggal: "10 Juni 2026", kegiatan: "Pendaftaran peserta Funmatch Minisoccer" },
      { tanggal: "21 Juni 2026", kegiatan: "Kegiatan selesai — berjalan dengan baik dan lancar" }
    ],
    hasil: [
      "Funmatch Minisoccer terlaksana dengan 28 peserta",
      "Pertandingan sistem round robin berjalan baik dan lancar hingga selesai"
    ],
    catatan: "Cabang olahraga berikutnya bisa berbeda tiap periode, menyesuaikan minat mahasiswa."
  }
];
