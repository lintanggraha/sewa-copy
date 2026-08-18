/**
 * Service Ledger page: operational editorial language, paper-white work surfaces,
 * ink-navy structure, and signal-orange reserved for high-intent actions.
 */
import { machines, type Machine } from "@/data/machines";
import {
  ArrowRight,
  Building2,
  ChevronRight,
  CircleCheck,
  Clock3,
  FileCheck2,
  FileText,
  Filter,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Printer,
  Send,
  Settings2,
  ShieldCheck,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useMemo, useState, type FormEvent } from "react";

const ASSET = {
  hero: "/manus-storage/sewa-copy-hero_fd62557d.jpg",
};

const CATALOG_IMAGES: Record<string, string> = {
  "SC-2625": "https://raw.githubusercontent.com/lintanggraha/sewa-copy/main/client/public/catalog/canon-ir-2625.webp",
  "SC-S2320": "https://raw.githubusercontent.com/lintanggraha/sewa-copy/main/client/public/catalog/xerox-s2320.jpg",
  "SC-C2560": "https://raw.githubusercontent.com/lintanggraha/sewa-copy/main/client/public/catalog/fuji-apeosport-c2560.png",
  "SC-3055": "https://raw.githubusercontent.com/lintanggraha/sewa-copy/main/client/public/catalog/ricoh-mp-3055.png",
};

const WHATSAPP_URL = "https://wa.me/620000000000";
const WHATSAPP_MESSAGE = "Halo PT Sewa Copy Sejahtera, saya ingin mengajukan penawaran sewa mesin fotokopi.";

const navItems = [
  ["Layanan", "#layanan"],
  ["Katalog", "#katalog"],
  ["Kontak", "#kontak"],
] as const;

const services = [
  { icon: Clock3, title: "Sewa harian", description: "Untuk kebutuhan singkat, proyek, atau tim yang sedang bertumbuh." },
  { icon: Building2, title: "Sewa bulanan", description: "Pilihan praktis untuk ritme administrasi kantor setiap hari." },
  { icon: FileCheck2, title: "Kontrak tahunan", description: "Skema korporat yang dapat disusun menurut volume dan unit." },
  { icon: Wrench, title: "Event & maintenance", description: "Dukungan unit pameran serta perawatan terjadwal untuk operasional." },
];

function waLink(message = WHATSAPP_MESSAGE) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}

function MachineVisual({ machine }: { machine: Machine }) {
  const image = CATALOG_IMAGES[machine.id];
  return <img src={image} alt={`Foto produk ${machine.name}`} loading="lazy" />;
}

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 44 44" focusable="false">
        <rect width="44" height="44" rx="8" fill="#eaf3f7" />
        <path d="M29.9 10.1c-2.2-1.8-5.2-2.7-8.6-2.7-4.6 0-8 2-8 5.3 0 2.7 2 4.1 6.7 5l3.6.7c1.7.3 2.5.9 2.5 1.8 0 1.1-1.3 1.8-3.6 1.8-2.5 0-4.7-.9-6.6-2.5l-3.2 4.1c2.4 2.3 5.8 3.5 10 3.5 5.3 0 8.8-2.3 8.8-5.9 0-2.8-2.1-4.5-6.6-5.4l-3.7-.7c-1.9-.4-2.8-.9-2.8-1.8 0-1 1.1-1.6 3.1-1.6 2 0 3.8.7 5.3 1.8l3.1-3.2Z" fill="#0a2b4d" />
        <path d="M31.7 18.8h4.2v11.4h-4.2z" fill="#f47a2a" />
        <path d="M31.7 30.2h4.2v3.7h-4.2z" fill="#2d7ca8" />
      </svg>
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [typeFilter, setTypeFilter] = useState<"Semua" | "B/W" | "Warna">("Semua");
  const [speedFilter, setSpeedFilter] = useState<"Semua" | "20+ ppm" | "25+ ppm">("Semua");
  const [units, setUnits] = useState(1);
  const [duration, setDuration] = useState(1);
  const [machineType, setMachineType] = useState<"B/W" | "Warna">("B/W");

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    document.documentElement.classList.add("motion-ready");
    let scrollFrame = 0;
    const updateScrollEffects = () => {
      scrollFrame = 0;
      const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / maxScroll));
      document.documentElement.style.setProperty("--scroll-progress", String(progress));
      document.documentElement.style.setProperty("--hero-rail-lift", `${Math.min(window.scrollY * 0.028, 18)}px`);
    };
    const requestScrollUpdate = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateScrollEffects);
    };
    updateScrollEffects();
    window.addEventListener("scroll", requestScrollUpdate, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", requestScrollUpdate);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  const filteredMachines = useMemo(() => machines.filter((machine) => {
    const passesType = typeFilter === "Semua" || machine.type === typeFilter;
    const minPpm = speedFilter === "20+ ppm" ? 20 : speedFilter === "25+ ppm" ? 25 : 0;
    return passesType && machine.ppm >= minPpm;
  }), [typeFilter, speedFilter]);

  const submitQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const message = [
      "Halo PT Sewa Copy Sejahtera, saya ingin mengajukan penawaran.",
      `Nama: ${fields.get("name") || "-"}`,
      `Perusahaan: ${fields.get("company") || "-"}`,
      `No. HP: ${fields.get("phone") || "-"}`,
      `Durasi sewa: ${fields.get("duration") || "-"}`,
      `Kebutuhan: ${fields.get("need") || "-"}`,
    ].join("\n");
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="site-shell">
      <div className="scroll-progress" aria-hidden="true" />
      <a href="#konten" className="skip-link">Lewati ke konten</a>

      <div className="top-strip">
        <div className="page-width">
          <span className="availability"><i className="dot" />Area layanan: <strong>Jabodetabek</strong></span>
          <span className="top-phone">Jam operasional: Sen–Sab · 08.00–17.00</span>
        </div>
      </div>

      <header className="main-nav">
        <div className="page-width nav-inner">
          <a href="#beranda" className="brand" aria-label="PT Sewa Copy Sejahtera, kembali ke beranda">
            <BrandMark />
            <span className="brand-name">SEWA COPY<small>Sejahtera · Service Desk</small></span>
          </a>
          <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Navigasi utama">
            {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          </nav>
          <a className="nav-cta" href={waLink()} target="_blank" rel="noreferrer">Ajukan penawaran <ArrowRight size={16} /></a>
          <button className="menu-toggle" aria-label={menuOpen ? "Tutup navigasi" : "Buka navigasi"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main id="konten">
        <section id="beranda" className="hero">
          <div className="hero-visual" style={{ backgroundImage: `url(${ASSET.hero})` }} aria-hidden="true" />
          <div className="page-width hero-grid">
            <div className="hero-copy">
              <span className="eyebrow light">Unit · toner · teknisi dalam satu alur</span>
              <h1>Mesin siap pakai.<br />Operasional tetap <span className="accent">bergerak.</span></h1>
              <p>Sewa mesin fotokopi untuk kantor, sekolah, dan event. Pilih unit yang tepat, lalu biarkan tim Anda fokus pada pekerjaan yang lebih penting.</p>
              <div className="hero-actions">
                <a className="button-primary" href={waLink()} target="_blank" rel="noreferrer">Ajukan penawaran <ArrowRight size={18} /></a>
                <a className="text-link" href="#katalog">Lihat unit tersedia <ChevronRight size={17} /></a>
              </div>
              <div className="hero-note"><span className="rule" />Konsultasikan kebutuhan unit, volume cetak, dan jadwal layanan Anda.</div>
            </div>

            <div className="hero-rail" data-scroll-depth="true" aria-label="Alur layanan sewa">
              <div className="rail-head"><span>Jalur layanan</span><span>03 langkah</span></div>
              <div className="rail-step"><span className="rail-index">01</span><div><h3>Ceritakan kebutuhan</h3><p>Durasi, volume cetak, dan lokasi Anda.</p></div><span className="rail-icon"><MessageCircle size={15} /></span></div>
              <div className="rail-step"><span className="rail-index">02</span><div><h3>Pilih unit yang pas</h3><p>Rekomendasi berdasarkan ritme kerja tim.</p></div><span className="rail-icon"><Printer size={15} /></span></div>
              <div className="rail-step"><span className="rail-index">03</span><div><h3>Mulai operasional</h3><p>Pengiriman, instalasi, dan servis terjadwal.</p></div><span className="rail-icon"><Zap size={15} /></span></div>
            </div>
          </div>
          <div className="service-rail">
            <div className="page-width">
              <div className="service-rail-item"><ShieldCheck size={20} /><div><strong>Maintenance terjadwal</strong><span>Untuk ritme kerja yang stabil</span></div></div>
              <div className="service-rail-item"><Wrench size={20} /><div><strong>Teknisi siap koordinasi</strong><span>Koordinasi layanan sesuai kebutuhan operasional</span></div></div>
              <div className="service-rail-item"><FileText size={20} /><div><strong>Paket dapat disusun</strong><span>Unit, durasi, dan volume sesuai kebutuhan</span></div></div>
            </div>
          </div>
        </section>

        <section className="intro-section" aria-labelledby="mengapa-kami">
          <div className="page-width intro-grid" data-reveal="true">
            <div className="desk-card">
              <span className="card-label">OPERASIONAL TANPA RIBET</span>
              <div className="big-number">01</div>
              <p>Satu partner untuk kebutuhan unit, toner, dan maintenance.</p>
            </div>
            <div>
              <span className="eyebrow">Kenapa memilih kami</span>
              <h2 id="mengapa-kami" className="section-heading">Keputusan sewa yang lebih terarah.</h2>
              <div className="value-list">
                <div className="value-item"><span className="value-number">A</span><div><h3>Rekomendasi berbasis kebutuhan</h3><p>Mulai dari volume cetak, tipe dokumen, hingga durasi penggunaan.</p></div><ChevronRight size={20} /></div>
                <div className="value-item"><span className="value-number">B</span><div><h3>Biaya operasional lebih terkendali</h3><p>Pilih paket yang membuat pengadaan mesin lebih sederhana untuk dikelola.</p></div><ChevronRight size={20} /></div>
                <div className="value-item"><span className="value-number">C</span><div><h3>Dukungan selama masa sewa</h3><p>Jadwal maintenance dan kebutuhan toner disusun bersama sejak awal.</p></div><ChevronRight size={20} /></div>
              </div>
            </div>
          </div>
        </section>

        <section id="layanan" className="services-section" aria-labelledby="layanan-title">
          <div className="page-width">
            <div className="services-heading-row" data-reveal="true"><div><span className="eyebrow light">Pilihan layanan</span><h2 id="layanan-title" className="section-heading">Durasi sewa mengikuti cara kerja Anda.</h2></div><p className="section-copy">Dari kebutuhan harian yang singkat hingga kontrak perusahaan yang disusun lebih spesifik.</p></div>
            <div className="services-grid">
              {services.map(({ icon: Icon, title, description }) => <article key={title} className="service-card" data-reveal="true"><span className="service-icon"><Icon size={19} /></span><h3>{title}</h3><p>{description}</p><span className="card-arrow"><ArrowRight size={18} /></span></article>)}
            </div>
          </div>
        </section>

        <section id="katalog" className="catalog-section" aria-labelledby="katalog-title">
          <div className="page-width">
            <div className="catalog-top" data-reveal="true">
              <div><span className="eyebrow">Katalog unit</span><h2 id="katalog-title" className="section-heading">Pilih mesin dari ritme kerja, bukan sekadar merek.</h2></div>
              <div className="catalog-filter" aria-label="Filter katalog"><button className={`filter-button ${typeFilter === "Semua" ? "active" : ""}`} onClick={() => setTypeFilter("Semua")}>Semua tipe</button><button className={`filter-button ${typeFilter === "B/W" ? "active" : ""}`} onClick={() => setTypeFilter("B/W")}>B/W</button><button className={`filter-button ${typeFilter === "Warna" ? "active" : ""}`} onClick={() => setTypeFilter("Warna")}>Warna</button><button className={`filter-button ${speedFilter === "20+ ppm" ? "active" : ""}`} onClick={() => setSpeedFilter(speedFilter === "20+ ppm" ? "Semua" : "20+ ppm")}>20+ ppm</button><button className={`filter-button ${speedFilter === "25+ ppm" ? "active" : ""}`} onClick={() => setSpeedFilter(speedFilter === "25+ ppm" ? "Semua" : "25+ ppm")}>25+ ppm</button></div>
            </div>
            <div className="catalog-status" data-reveal="true"><Filter size={13} /><span className="line" />Menampilkan {filteredMachines.length} dari {machines.length} unit tersedia</div>
            <div className="machines-grid">
              {filteredMachines.map((machine) => <article className="machine-ticket" key={machine.id} data-reveal="true"><div className="machine-visual"><span className="ticket-bar">{machine.id}</span><MachineVisual machine={machine} /></div><div className="machine-content"><div className="machine-meta"><span>{machine.type}</span><span className="ready">{machine.availability}</span></div><h3>{machine.name}</h3><p className="machine-use">{machine.recommended}</p><div className="machine-specs"><span className="machine-spec">{machine.ppm} ppm</span><span className="machine-spec">Sewa fleksibel</span></div><div className="machine-quote"><div><span>Butuh rekomendasi?</span><strong>Konsultasikan unit</strong></div><a href={waLink(`Halo PT Sewa Copy Sejahtera, saya ingin berkonsultasi mengenai unit ${machine.name}.`)} target="_blank" rel="noreferrer" aria-label={`Konsultasikan ${machine.name}`}><ArrowRight size={19} /></a></div></div></article>)}
              {filteredMachines.length === 0 && <p className="empty-catalog">Tidak ada unit yang cocok dengan filter ini. Ubah filter atau hubungi tim untuk kebutuhan khusus.</p>}
            </div>
          </div>
        </section>

        <section className="calculator-section" aria-labelledby="calc-title">
          <div className="page-width calculator-grid">
            <div data-reveal="true"><span className="eyebrow light">Konsultasi cepat</span><h2 id="calc-title" className="section-heading">Diskusikan kebutuhan Anda dengan kami.</h2><p className="section-copy">Pilih jumlah unit, tipe, dan durasi. Tim kami akan menyiapkan rekomendasi yang sesuai dengan kebutuhan operasional Anda.</p><p className="calc-note"><MessageCircle size={15} />Rekomendasi akhir disusun setelah kami memahami volume dan alur kerja tim Anda.</p></div>
            <div className="calc-panel" data-reveal="true"><div className="calc-panel-head"><h3>Rencana kebutuhan</h3><span>SESUAI KEBUTUHAN</span></div><div className="calc-controls"><div className="control"><label htmlFor="unit-count">Jumlah unit</label><input id="unit-count" type="number" min="1" max="20" value={units} onChange={(event) => setUnits(Math.max(1, Number(event.target.value)))} /></div><div className="control"><label htmlFor="months">Durasi sewa</label><input id="months" type="number" min="1" max="36" value={duration} onChange={(event) => setDuration(Math.max(1, Number(event.target.value)))} /></div><div className="control full"><label htmlFor="machine-type">Tipe mesin</label><select id="machine-type" value={machineType} onChange={(event) => setMachineType(event.target.value as "B/W" | "Warna")}><option value="B/W">B/W</option><option value="Warna">Warna</option></select></div></div><p className="consult-note">Sampaikan kebutuhan volume cetak dan lokasi agar tim kami dapat menyiapkan paket yang tepat.</p><a href={waLink(`Halo PT Sewa Copy Sejahtera, saya ingin berkonsultasi untuk ${units} unit tipe ${machineType} selama ${duration} bulan.`)} target="_blank" rel="noreferrer" className="button-primary">Konsultasikan kebutuhan <ArrowRight size={17} /></a></div>
          </div>
        </section>

        <section className="proof-section" aria-labelledby="kepercayaan-title">
          <div className="page-width proof-grid">
            <div className="proof-card" data-reveal="true"><h3 id="kepercayaan-title">Layanan yang disusun untuk operasional harian.</h3><p>Mulai dari pemilihan unit hingga jadwal perawatan, setiap kebutuhan ditangani dalam satu alur yang jelas.</p><span className="proof-tag">Pendampingan dari awal hingga operasional berjalan</span></div>
            <div className="proof-items"><article className="proof-item" data-reveal="true"><ShieldCheck size={21} /><h4>Unit terkelola</h4><p>Unit diperiksa sebelum pengiriman dan instalasi.</p></article><article className="proof-item" data-reveal="true"><Settings2 size={21} /><h4>Rencana perawatan</h4><p>Jadwal maintenance disusun mengikuti kebutuhan operasional.</p></article><article className="proof-item" data-reveal="true"><MapPin size={21} /><h4>Cakupan layanan</h4><p>Melayani Jabodetabek dan sekitarnya.</p></article></div>
          </div>
        </section>

        <section id="kontak" className="contact-section" aria-labelledby="kontak-title">
          <div className="page-width contact-grid">
            <div data-reveal="true"><span className="eyebrow light">Mulai dari kebutuhan Anda</span><h2 id="kontak-title" className="section-heading">Ceritakan alur cetak tim Anda.</h2><p className="section-copy">Isi formulir singkat ini. Tim kami akan menindaklanjuti kebutuhan Anda melalui WhatsApp.</p><div className="contact-details"><div className="contact-detail"><Phone size={18} /><div><small>WHATSAPP</small>Tim Konsultan Sewa Copy</div></div><div className="contact-detail"><MapPin size={18} /><div><small>AREA LAYANAN</small>Jabodetabek dan sekitarnya</div></div><div className="contact-detail"><Clock3 size={18} /><div><small>JAM OPERASIONAL</small>Senin–Sabtu · 08.00–17.00</div></div></div></div>
            <form className="contact-form" onSubmit={submitQuote} data-reveal="true"><div className="form-head"><div><h3>Ajukan penawaran</h3><p>Data Anda membantu kami menyusun rekomendasi awal.</p></div><Send size={20} color="#F47A2A" /></div><div className="form-grid"><div className="form-field"><label htmlFor="name">Nama</label><input id="name" name="name" required placeholder="Nama Anda" /></div><div className="form-field"><label htmlFor="company">Perusahaan</label><input id="company" name="company" placeholder="Nama perusahaan / instansi" /></div><div className="form-field"><label htmlFor="phone">No. HP</label><input id="phone" name="phone" required type="tel" placeholder="08xx-xxxx-xxxx" /></div><div className="form-field"><label htmlFor="quote-duration">Durasi sewa</label><select id="quote-duration" name="duration" defaultValue="1 bulan"><option>Harian / event</option><option>1 bulan</option><option>6 bulan</option><option>12 bulan atau lebih</option></select></div><div className="form-field full"><label htmlFor="need">Kebutuhan</label><textarea id="need" name="need" placeholder="Contoh: 2 unit B/W untuk administrasi, perkiraan 7.000 lembar/bulan." /></div></div><button className="button-primary form-submit" type="submit">Kirim ke WhatsApp <ArrowRight size={17} /></button><p className="form-help">Tim kami akan meninjau kebutuhan Anda dan menyiapkan rekomendasi layanan yang sesuai.</p></form>
          </div>
        </section>
      </main>

      <footer className="footer"><div className="page-width footer-inner"><a href="#beranda" className="brand"><BrandMark /><span className="brand-name">SEWA COPY<small>Sejahtera · Service Desk</small></span></a><span>© 2026 PT Sewa Copy Sejahtera · Solusi Fotokopi Praktis</span></div></footer>
      <a href={waLink()} className="floating-wa" target="_blank" rel="noreferrer" aria-label="Hubungi kami melalui WhatsApp"><MessageCircle size={19} /><span>WhatsApp</span></a>
    </div>
  );
}
