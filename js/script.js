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
        ${p.PJ ? `<div><p class="font-mono text-white/40 text-[11px] uppercase tracking-wide mb-1">peserta & pj</p><p class="text-white/80">${p.PJ}</p></div>` : ""}
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
      <details data-status="${p.status}" class="proker-item group rounded-2xl bg-white/[0.04] border border-white/10 overflow-hidden fade-up">
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
  initMobileMenu();
  initFilter();
  initScrollReveal();
  initActiveNav();
});
