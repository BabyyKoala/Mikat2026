// PENTING: file ini HANYA berisi logic render (fungsi-fungsi).
// Jangan gabungkan isi js/data-proker.js ke dalam file ini, dan jangan
// gabungkan isi file ini ke js/data-proker.js — keduanya harus tetap dua
// file terpisah, masing-masing dimuat sekali lewat <script src="..."> di HTML.

// ===================== KONFIGURASI TAMPILAN STATUS =====================
const STATUS_LABEL = {
  terlaksana: "terlaksana",
  berkelanjutan: "berkelanjutan",
  akan: "akan berjalan"
};
const STATUS_COLOR = {
  terlaksana: "text-[#45D6C0]",
  berkelanjutan: "text-[#A990FF]",
  akan: "text-[#F2B84B]"
};
const STATUS_DOT = {
  terlaksana: "bg-[#45D6C0]",
  berkelanjutan: "bg-[#A990FF]",
  akan: "bg-[#F2B84B]"
};

// Label status khusus untuk item episode (SKETSA) — dicocokkan berdasarkan kata kunci,
// karena field episode[].status berupa teks bebas ("Terlaksana ✅", "Perencanaan 🆕").
function episodeStatusColor(status) {
  if (!status) return "text-white/50";
  const s = status.toLowerCase();
  if (s.includes("terlaksana")) return "text-[#45D6C0]";
  if (s.includes("perencanaan")) return "text-[#F2B84B]";
  return "text-white/50";
}

// ===================== HELPER: SLUGIFY =====================
// Dipakai untuk id kartu (deep-link "#nama-tim") dan untuk href hasil command palette.
function slugify(str) {
  return (str || "")
    .toString()
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// ===================== HELPER: RENDER LIST BERPOIN =====================
// Dipakai untuk tujuan, hasil, dan parameter keberhasilan (kualitatif/kuantitatif).
function renderBulletList(items, bulletClass, bulletChar) {
  if (!items || !items.length) return "";
  return `<ul class="text-white/80 text-sm space-y-1.5">
    ${items.map((item) => `<li class="flex gap-2"><span class="${bulletClass} font-mono shrink-0">${bulletChar}</span><span>${item}</span></li>`).join("")}
  </ul>`;
}

// Field seperti "tujuan" bisa berupa array (data baru) maupun string (data lama) —
// fungsi ini menangani keduanya supaya tidak tampil sebagai teks bergabung koma.
function renderTextOrList(value, bulletClass, bulletChar) {
  if (!value) return "";
  if (Array.isArray(value)) return renderBulletList(value, bulletClass, bulletChar);
  return `<p class="text-white/80">${value}</p>`;
}

// ===================== RENDER PROGRAM KERJA DARI data-proker.js =====================
function renderProker() {
  const container = document.getElementById("prokerList");
  if (!container || typeof PROKER_DATA === "undefined") return;

  container.innerHTML = PROKER_DATA.map((p) => {
    const colorClass = STATUS_COLOR[p.status] || "text-white";
    const dotClass = STATUS_DOT[p.status] || "bg-white";
    const label = STATUS_LABEL[p.status] || p.status;

    const infoGrid = `
      <div class="grid sm:grid-cols-2 gap-x-8 gap-y-4 mt-6 text-sm">
        ${p.tujuan ? `<div><p class="font-mono text-white/40 text-[11px] uppercase tracking-wide mb-1">tujuan</p>${renderTextOrList(p.tujuan, "text-[#7C5CFC]", "—")}</div>` : ""}
        ${p.sasaran ? `<div><p class="font-mono text-white/40 text-[11px] uppercase tracking-wide mb-1">sasaran</p><p class="text-white/80">${p.sasaran}</p></div>` : ""}
        ${p.waktuLokasi ? `<div><p class="font-mono text-white/40 text-[11px] uppercase tracking-wide mb-1">waktu & lokasi</p><p class="text-white/80">${p.waktuLokasi}</p></div>` : ""}
        ${p.pesertaPJ ? `<div><p class="font-mono text-white/40 text-[11px] uppercase tracking-wide mb-1">peserta & pj</p><p class="text-white/80">${p.pesertaPJ}</p></div>` : ""}
        ${p.lingkup ? `<div><p class="font-mono text-white/40 text-[11px] uppercase tracking-wide mb-1">lingkup</p><p class="text-white/80">${p.lingkup}</p></div>` : ""}
      </div>`;

    const timelineHtml = (p.timeline && p.timeline.length > 0) ? `
      <div class="mt-7">
        <p class="font-mono text-white/40 text-[11px] uppercase tracking-wide mb-4">agenda</p>
        <div class="relative pl-6">
          <div class="timeline-line absolute left-[3px] top-1 bottom-1 w-[2px]"></div>
          ${p.timeline.map((t, i) => `
            <div class="relative ${i === p.timeline.length - 1 ? "" : "pb-6"}">
              <div class="absolute -left-6 top-1 w-2 h-2 rounded-full bg-[#7C5CFC]"></div>
              <p class="text-white text-sm font-semibold leading-relaxed">${t.tanggal} — ${t.kegiatan}</p>
            </div>`).join("")}
        </div>
      </div>` : "";

    // Daftar episode (khusus SKETSA, tapi generik — muncul untuk proker manapun yang punya field `episode`)
    const episodeHtml = (p.episode && p.episode.length > 0) ? `
      <div class="mt-7">
        <p class="font-mono text-white/40 text-[11px] uppercase tracking-wide mb-4">daftar episode</p>
        <div class="space-y-3">
          ${p.episode.map((e) => `
            <div class="rounded-xl bg-white/[0.03] border border-white/10 p-4">
              <div class="flex items-center justify-between gap-3 flex-wrap">
                <span class="font-mono text-xs text-white/50">Episode ${e.nomor}</span>
                <span class="font-mono text-xs ${episodeStatusColor(e.status)}">${e.status || ""}</span>
              </div>
              <p class="text-white font-semibold text-sm mt-2">${e.judul}</p>
              ${e.topik ? `<p class="text-white/60 text-sm mt-1">${e.topik}</p>` : ""}
              ${(e.anggota && e.anggota.length) ? `<p class="text-white/40 text-xs mt-2 font-mono leading-relaxed">Anggota: ${e.anggota.join(", ")}</p>` : ""}
              ${e.video ? `<a href="${e.video}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-[#45D6C0] text-xs font-mono mt-3 hover:underline">▶ tonton video</a>` : ""}
            </div>`).join("")}
        </div>
      </div>` : "";

    // Parameter keberhasilan (kualitatif & kuantitatif)
    const pk = p.parameterKeberhasilan;
    const parameterHtml = (pk && (pk.kualitatif?.length || pk.kuantitatif?.length)) ? `
      <div class="mt-7">
        <p class="font-mono text-white/40 text-[11px] uppercase tracking-wide mb-4">parameter keberhasilan</p>
        <div class="grid sm:grid-cols-2 gap-x-8 gap-y-5">
          ${pk.kualitatif?.length ? `<div><p class="font-mono text-white/40 text-[10px] uppercase tracking-wide mb-2">kualitatif</p>${renderBulletList(pk.kualitatif, "text-[#A990FF]", "—")}</div>` : ""}
          ${pk.kuantitatif?.length ? `<div><p class="font-mono text-white/40 text-[10px] uppercase tracking-wide mb-2">kuantitatif</p>${renderBulletList(pk.kuantitatif, "text-[#A990FF]", "—")}</div>` : ""}
        </div>
      </div>` : "";

    const hasilHtml = (p.hasil && p.hasil.length > 0) ? `
      <div class="mt-6">
        <p class="font-mono text-white/40 text-[11px] uppercase tracking-wide mb-2">hasil / output</p>
        <ul class="text-white/80 text-sm space-y-1.5">
          ${p.hasil.map(h => `<li class="flex gap-2"><span class="text-[#45D6C0] font-mono shrink-0">✓</span><span>${h}</span></li>`).join("")}
        </ul>
      </div>` : "";

    const catatanHtml = p.catatan ? `<p class="mt-6 font-mono text-xs text-white/40 italic leading-relaxed">// ${p.catatan}</p>` : "";

    return `
      <details id="${slugify(p.nama)}" data-status="${p.status}" class="proker-item group rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden fade-up">
        <summary class="p-5 sm:p-7 flex items-start justify-between gap-4">
          <div class="min-w-0">
            <span class="font-mono inline-flex items-center gap-2 ${colorClass} text-[11px] uppercase tracking-wide"><span class="w-1.5 h-1.5 rounded-full ${dotClass} shrink-0"></span>${label}</span>
            <h3 class="font-display font-semibold text-xl sm:text-2xl mt-3 break-words">${p.nama}</h3>
            <p class="text-white/55 text-sm mt-1.5 max-w-lg">${p.ringkasan}</p>
          </div>
          <svg class="chev shrink-0 mt-1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
        </summary>
        <div class="px-5 sm:px-7 pb-8 pt-1 border-t border-white/10">
          <p class="text-white/70 text-sm leading-relaxed mt-5">${p.deskripsi}</p>
          ${timelineHtml}
          ${episodeHtml}
          ${infoGrid}
          ${parameterHtml}
          ${hasilHtml}
          ${catatanHtml}
        </div>
      </details>`;
  }).join("");
}

// ===================== RENDER IF DATABASE (halaman database.html) =====================
const MAHASISWA_CATEGORY_LABEL = {
  "business-plan": "Business Plan",
  "data-science": "Data Science",
  "iot-robotics": "IoT & Robotics",
  "web-application": "Web Application",
  "mobile-application": "Mobile Application"
};
const MAHASISWA_CATEGORY_COLOR = {
  "business-plan": { text: "text-[#A990FF]", bg: "bg-[#A990FF]/10" },
  "data-science": { text: "text-[#45D6C0]", bg: "bg-[#45D6C0]/10" },
  "iot-robotics": { text: "text-[#F2B84B]", bg: "bg-[#F2B84B]/10" },
  "web-application": { text: "text-[#A990FF]", bg: "bg-[#A990FF]/10" },
  "mobile-application": { text: "text-[#45D6C0]", bg: "bg-[#45D6C0]/10" }
};

function renderMahasiswa() {
  const container = document.getElementById("mahasiswaList");
  if (!container || typeof MAHASISWA_DATA === "undefined") return;

  container.innerHTML = MAHASISWA_DATA.map((m) => {
    const searchText = [m.tim, m.kategori, m.prodi, ...m.anggota].join(" ").toLowerCase();
    const label = MAHASISWA_CATEGORY_LABEL[m.kategoriSlug] || m.kategori;
    const color = MAHASISWA_CATEGORY_COLOR[m.kategoriSlug] || { text: "text-[#A990FF]", bg: "bg-[#A990FF]/10" };
    const anggotaHtml = m.anggota.map((a) => `<li class="flex gap-1.5"><span class="text-[#45D6C0] font-mono shrink-0">›</span><span>${a}</span></li>`).join("");

    // Kartu kompak & seragam (seperti kartu foto di halaman Pengurus): badge kategori,
    // nama tim (maks 2 baris), lalu daftar anggota disembunyikan di balik <details> —
    // supaya tinggi kartu tidak melonjak walau anggotanya banyak, dan grid 2 kolom di
    // mobile tetap terlihat rapi/sejajar.
    return `
      <div id="${slugify(m.tim)}" class="mahasiswa-item rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 fade-up flex flex-col h-full" data-kategori="${m.kategoriSlug}" data-search="${searchText.replace(/"/g, "&quot;")}">
        <span class="inline-block self-start font-mono text-[10px] uppercase tracking-wide ${color.text} ${color.bg} px-2 py-1 rounded-md">${label}</span>
        <h3 class="font-display font-semibold text-white mt-2.5 text-[15px] sm:text-base leading-snug line-clamp-2 min-h-[2.6rem] sm:min-h-[2.75rem]">${m.tim}</h3>
        <p class="font-mono text-[10px] text-white/40 mt-1">${m.tahun} · ${m.prodi}</p>
        <details class="mt-3">
          <summary class="flex items-center justify-between gap-2 cursor-pointer">
            <span class="font-mono text-white/45 text-[10px] uppercase tracking-wide">${m.anggota.length} anggota</span>
            <svg class="chev shrink-0 text-white/40" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>
          </summary>
          <ul class="mt-2.5 text-white/75 text-[13px] leading-relaxed space-y-1">${anggotaHtml}</ul>
        </details>
      </div>`;
  }).join("");
}

// Filter kategori + pencarian teks digabung jadi satu fungsi supaya keduanya
// bisa aktif bersamaan (misal: kategori "Data Science" + cari "Deden").
function initMahasiswaFilter() {
  const filterBtns = document.querySelectorAll(".mhs-filter-btn");
  const searchInput = document.getElementById("mahasiswaSearch");
  const emptyMsg = document.getElementById("mahasiswaEmpty");
  const countLabel = document.getElementById("mahasiswaCount");
  if (!filterBtns.length && !searchInput) return;

  let activeFilter = "all";

  function applyFilters() {
    const q = (searchInput?.value || "").trim().toLowerCase();
    const items = document.querySelectorAll(".mahasiswa-item");
    let visibleCount = 0;

    items.forEach((it) => {
      const matchFilter = activeFilter === "all" || it.dataset.kategori === activeFilter;
      const matchSearch = !q || it.dataset.search.includes(q);
      const show = matchFilter && matchSearch;
      it.style.display = show ? "" : "none";
      if (show) visibleCount++;
    });

    if (emptyMsg) emptyMsg.classList.toggle("hidden", visibleCount !== 0);
    if (countLabel) countLabel.textContent = `Menampilkan ${visibleCount} dari ${items.length} tim`;
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => {
        b.classList.remove("bg-white", "text-[#0A0B12]");
        b.classList.add("border", "border-white/25", "text-white/80");
      });
      btn.classList.add("bg-white", "text-[#0A0B12]");
      btn.classList.remove("border", "border-white/25", "text-white/80");
      activeFilter = btn.dataset.filter;
      applyFilters();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }

  applyFilters();
}

// Menyamakan status buka/tutup SEMUA kartu "lihat anggota" secara bersamaan:
// begitu satu <details> dibuka/ditutup (baik lewat klik summary maupun keyboard),
// semua <details> kartu mahasiswa lainnya ikut dibuka/ditutup ke status yang sama.
// Guard `syncing` mencegah loop tak terbatas, karena mengubah properti `.open`
// lewat JS juga memicu event "toggle" di beberapa browser.
function initMahasiswaSyncToggle() {
  const detailsList = document.querySelectorAll(".mahasiswa-item details");
  if (!detailsList.length) return;

  let syncing = false;

  detailsList.forEach((d) => {
    d.addEventListener("toggle", () => {
      if (syncing) return;
      syncing = true;
      const isOpen = d.open;
      detailsList.forEach((other) => {
        if (other !== d) other.open = isOpen;
      });
      syncing = false;
    });
  });
}

// ===================== COMMAND PALETTE (Ctrl/Cmd + K) =====================
// Disisipkan lewat JS (bukan ditulis manual di tiap file HTML) supaya konsisten
// di semua halaman dan gampang dirawat dari satu tempat. Menggabungkan 3 sumber:
// daftar halaman statis, PROKER_DATA, dan MAHASISWA_DATA (kalau tersedia di halaman itu).
const CMDK_PAGES = [
  { title: "Beranda", desc: "Halaman utama Divisi Minat & Bakat", href: "index.html" },
  { title: "Tentang", desc: "Visi, misi, dan ruang lingkup divisi", href: "tentang.html" },
  { title: "Program Kerja", desc: "IF Database, SKETSA, Makrab IF, HMPS IF Sport", href: "program-kerja.html" },
  { title: "IF Database", desc: "Cari & telusuri prestasi mahasiswa", href: "database.html" },
  { title: "Pengurus", desc: "Wajah di balik program kerja", href: "pengurus.html" },
  { title: "Galeri", desc: "Dokumentasi momen dari setiap kegiatan", href: "galeri.html" },
  { title: "Kontak", desc: "Kolaborasi & pertanyaan", href: "kontak.html" }
];

function buildCmdkIndex() {
  const items = CMDK_PAGES.map((p) => ({ title: p.title, desc: p.desc, href: p.href, group: "Halaman" }));

  if (typeof PROKER_DATA !== "undefined") {
    PROKER_DATA.forEach((p) => {
      items.push({
        title: p.nama,
        desc: p.ringkasan || "Program kerja",
        href: `program-kerja.html#${slugify(p.nama)}`,
        group: "Program Kerja"
      });
    });
  }

  if (typeof MAHASISWA_DATA !== "undefined") {
    MAHASISWA_DATA.forEach((m) => {
      const anggotaPreview = m.anggota.slice(0, 2).join(", ") + (m.anggota.length > 2 ? ", …" : "");
      items.push({
        title: m.tim,
        desc: `${m.kategori} · ${anggotaPreview}`,
        href: `database.html#${slugify(m.tim)}`,
        group: "IF Database"
      });
    });
  }

  return items;
}

function initCommandPalette() {
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.querySelector("#top nav");
  if (!menuBtn || !nav || document.getElementById("cmdkTrigger")) return;

  // Tombol pemicu.
  const trigger = document.createElement("button");
  trigger.id = "cmdkTrigger";
  trigger.type = "button";
  trigger.setAttribute("aria-label", "Cari (Ctrl+K)");
  trigger.className = "flex items-center gap-2 text-white/70 hover:text-white transition text-sm shrink-0";
  trigger.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    <span class="hidden lg:inline">Cari</span>
  `;

  // Rapikan struktur header: aslinya container header pakai justify-between dengan
  // 3 anak langsung (logo, nav, menuBtn) — begitu tombol cari disisipkan sebagai anak
  // ke-4, justify-between menyebar 3 elemen kanan itu merata dan bikin jarak yang aneh
  // antara "Kontak" dan tombol cari. Perbaikannya: kelompokkan nav + tombol cari +
  // menuBtn jadi SATU flex-group, supaya justify-between di container luar hanya
  // menyeimbangkan 2 hal: [logo] vs [grup kanan].
  const headerRow = menuBtn.parentElement; // div.max-w-6xl ... flex items-center justify-between
  if (!headerRow.querySelector(".header-right-group")) {
    const rightGroup = document.createElement("div");
    rightGroup.className = "header-right-group flex items-center gap-5 lg:gap-7 shrink-0";
    headerRow.insertBefore(rightGroup, nav);
    rightGroup.appendChild(nav);
    rightGroup.appendChild(trigger);
    rightGroup.appendChild(menuBtn);
  } else {
    headerRow.querySelector(".header-right-group").insertBefore(trigger, menuBtn);
  }

  // Scrollbar khusus panel hasil pencarian, supaya senada dengan tema gelap
  // (scrollbar bawaan browser biasanya putih/terang dan mencolok di atas dasar gelap).
  if (!document.getElementById("cmdkScrollbarStyle")) {
    const style = document.createElement("style");
    style.id = "cmdkScrollbarStyle";
    style.textContent = `
      #cmdkResults { scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.18) transparent; }
      #cmdkResults::-webkit-scrollbar { width: 8px; }
      #cmdkResults::-webkit-scrollbar-track { background: transparent; }
      #cmdkResults::-webkit-scrollbar-thumb { background-color: rgba(255,255,255,0.18); border-radius: 8px; }
      #cmdkResults::-webkit-scrollbar-thumb:hover { background-color: rgba(255,255,255,0.3); }
    `;
    document.head.appendChild(style);
  }

  // Overlay + panel — pakai gaya term-window yang sama seperti di Beranda/Tentang/404.
  // Overlay di-flex agar panel selalu tepat di tengah layar (bukan menempel ke atas
  // lewat margin-top tetap), baik secara horizontal maupun vertikal.
  const overlay = document.createElement("div");
  overlay.id = "cmdkOverlay";
  overlay.className = "fixed inset-0 z-[100] hidden justify-center items-center p-4";
  overlay.innerHTML = `
    <div id="cmdkBackdrop" class="absolute inset-0 bg-[#05060A]/80 backdrop-blur-sm"></div>
    <div class="relative w-full max-w-lg max-h-[85vh] flex flex-col">
      <div class="term-window flex flex-col min-h-0">
        <div class="term-bar">
          <span class="term-dot" style="--c:#FF6159"></span>
          <span class="term-dot" style="--c:#FFC02E"></span>
          <span class="term-dot" style="--c:#28C840"></span>
          <span class="term-path">cari</span>
          <button type="button" id="cmdkClose" aria-label="Tutup pencarian" class="ml-auto text-white/40 hover:text-white transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="flex items-center gap-2 p-3 border-b border-white/10 shrink-0">
          <svg class="text-white/35 shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input id="cmdkInput" type="text" placeholder="Cari halaman, program kerja, atau tim…" class="w-full bg-transparent text-white placeholder-white/35 font-mono text-sm px-1 py-2 focus:outline-none" autocomplete="off">
        </div>
        <div id="cmdkResults" class="overflow-y-auto p-2 min-h-0"></div>
        <div class="px-4 py-2.5 border-t border-white/10 flex items-center justify-between font-mono text-[10px] text-white/30 shrink-0">
          <span>↑↓ pilih · enter buka · esc tutup</span>
          <span id="cmdkCount"></span>
        </div>
      </div>
    </div>`;
  document.body.appendChild(overlay);

  const input = overlay.querySelector("#cmdkInput");
  const resultsEl = overlay.querySelector("#cmdkResults");
  const countEl = overlay.querySelector("#cmdkCount");
  const backdrop = overlay.querySelector("#cmdkBackdrop");
  const closeBtn = overlay.querySelector("#cmdkClose");
  const index = buildCmdkIndex();
  let activeIdx = 0;
  let currentResults = [];

  function renderResults(query) {
    const q = query.trim().toLowerCase();
    currentResults = !q
      ? index.slice(0, 8)
      : index.filter((it) => (it.title + " " + it.desc + " " + it.group).toLowerCase().includes(q)).slice(0, 20);

    activeIdx = 0;
    countEl.textContent = currentResults.length ? `${currentResults.length} hasil` : "";

    if (!currentResults.length) {
      resultsEl.innerHTML = `<p class="font-mono text-xs text-white/35 px-3 py-6 text-center">// tidak ada hasil untuk "${query}"</p>`;
      return;
    }

    let lastGroup = null;
    resultsEl.innerHTML = currentResults.map((it, i) => {
      const groupHeader = it.group !== lastGroup
        ? `<p class="font-mono text-[10px] uppercase tracking-wide text-white/30 px-3 pt-3 pb-1">${it.group}</p>`
        : "";
      lastGroup = it.group;
      return `${groupHeader}<button type="button" data-idx="${i}" class="cmdk-item w-full text-left px-3 py-2.5 rounded-lg flex flex-col gap-0.5 transition ${i === activeIdx ? "bg-white/10" : ""}">
          <span class="text-white text-sm font-medium truncate">${it.title}</span>
          <span class="text-white/45 text-xs truncate">${it.desc}</span>
        </button>`;
    }).join("");
  }

  function updateActiveVisual() {
    resultsEl.querySelectorAll(".cmdk-item").forEach((btn) => {
      btn.classList.toggle("bg-white/10", Number(btn.dataset.idx) === activeIdx);
    });
  }

  function goTo(item) {
    if (item) window.location.href = item.href;
  }

  function open() {
    overlay.classList.remove("hidden");
    overlay.classList.add("flex");
    input.value = "";
    renderResults("");
    document.body.style.overflow = "hidden";
    setTimeout(() => input.focus(), 0);
  }

  function close() {
    overlay.classList.add("hidden");
    overlay.classList.remove("flex");
    document.body.style.overflow = "";
  }

  trigger.addEventListener("click", open);
  backdrop.addEventListener("click", close);
  closeBtn.addEventListener("click", close);
  input.addEventListener("input", () => renderResults(input.value));

  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      activeIdx = Math.min(activeIdx + 1, currentResults.length - 1);
      updateActiveVisual();
      resultsEl.querySelector(`[data-idx="${activeIdx}"]`)?.scrollIntoView({ block: "nearest" });
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      activeIdx = Math.max(activeIdx - 1, 0);
      updateActiveVisual();
      resultsEl.querySelector(`[data-idx="${activeIdx}"]`)?.scrollIntoView({ block: "nearest" });
    } else if (e.key === "Enter") {
      e.preventDefault();
      goTo(currentResults[activeIdx]);
    } else if (e.key === "Escape") {
      close();
    }
  });

  resultsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".cmdk-item");
    if (btn) goTo(currentResults[Number(btn.dataset.idx)]);
  });

  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      overlay.classList.contains("hidden") ? open() : close();
    } else if (e.key === "Escape" && !overlay.classList.contains("hidden")) {
      close();
    }
  });
}

// ===================== DEEP-LINK: BUKA & SOROT KARTU DARI URL HASH =====================
// Dipanggil setelah render, supaya link seperti "program-kerja.html#if-database"
// atau "database.html#daizado-id" (dari command palette / dibagikan manual) langsung
// scroll ke kartu yang dimaksud dan menyorotnya sebentar.
function scrollToHash() {
  if (!location.hash) return;
  const id = decodeURIComponent(location.hash.slice(1));
  const el = document.getElementById(id);
  if (!el) return;

  if (el.tagName === "DETAILS") el.open = true;

  setTimeout(() => {
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.classList.add("ring-2", "ring-[#7C5CFC]", "ring-offset-2", "ring-offset-[#12141F]");
    setTimeout(() => {
      el.classList.remove("ring-2", "ring-[#7C5CFC]", "ring-offset-2", "ring-offset-[#12141F]");
    }, 2200);
  }, 150);
}

// ===================== MENANDAI MENU AKTIF =====================
function initActiveNav() {
  const current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  document.querySelectorAll(".nav-link, .mobile-link").forEach((a) => {
    const hrefFile = (a.getAttribute("href") || "").split("#")[0].toLowerCase();
    if (hrefFile === current || (current === "" && hrefFile === "index.html")) {
      a.classList.add("is-active");
    }
  });
}

// ===================== MENU MOBILE =====================
function initMobileMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (!menuBtn || !mobileMenu) return;

  menuBtn.setAttribute("aria-expanded", "false");
  menuBtn.setAttribute("aria-controls", "mobileMenu");

  menuBtn.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.toggle("hidden");
    menuBtn.setAttribute("aria-expanded", String(!isHidden));
  });
  document.querySelectorAll(".mobile-link").forEach((a) => {
    a.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// ===================== FILTER PROGRAM KERJA =====================
function initFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  if (!filterBtns.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const items = document.querySelectorAll(".proker-item");

      filterBtns.forEach((b) => {
        b.classList.remove("bg-white", "text-[#0A0B12]");
        b.classList.add("border", "border-white/25", "text-white/80");
      });
      btn.classList.add("bg-white", "text-[#0A0B12]");
      btn.classList.remove("border", "border-white/25", "text-white/80");

      const f = btn.dataset.filter;
      items.forEach((it) => {
        it.style.display = f === "all" || it.dataset.status === f ? "" : "none";
      });
    });
  });
}

// ===================== TOMBOL KEMBALI KE ATAS =====================
// Muncul di pojok kanan bawah setelah user scroll cukup jauh, berguna untuk
// halaman panjang seperti Program Kerja atau Database. Disisipkan lewat JS
// (sama seperti command palette) supaya otomatis ada di semua halaman.
function initBackToTop() {
  if (document.getElementById("backToTopBtn")) return;

  const btn = document.createElement("button");
  btn.id = "backToTopBtn";
  btn.type = "button";
  btn.setAttribute("aria-label", "Kembali ke atas");
  btn.className = "fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm text-white flex items-center justify-center opacity-0 pointer-events-none translate-y-2 transition-all duration-300 hover:bg-white/20";
  btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`;
  document.body.appendChild(btn);

  function toggleVisibility() {
    const show = window.scrollY > 480;
    btn.classList.toggle("opacity-0", !show);
    btn.classList.toggle("pointer-events-none", !show);
    btn.classList.toggle("translate-y-2", !show);
  }

  window.addEventListener("scroll", toggleVisibility, { passive: true });
  toggleVisibility();

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ===================== SCROLL REVEAL =====================
function initScrollReveal() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".fade-up").forEach((el) => io.observe(el));
}

// ===================== INIT =====================
document.addEventListener("DOMContentLoaded", () => {
  renderProker();
  renderMahasiswa();
  initMobileMenu();
  initFilter();
  initMahasiswaFilter();
  initMahasiswaSyncToggle();
  initCommandPalette();
  scrollToHash();
  initBackToTop();
  initScrollReveal();
  initActiveNav();
});
