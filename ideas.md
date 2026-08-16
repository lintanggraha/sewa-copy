# Arah Desain — PT Sewa Copy Sejahtera

## Eksplorasi singkat

### 1. Service Ledger
**Very Brief Intro:** Landing page bergaya **service desk operasional**: informasi sewa ditata seperti lembar kerja yang rapi, dengan jejak visual kertas fotokopi, barcode servis, dan modul status yang membangun rasa siap-tanggap. Arah ini memberi karakter khas pada layanan B2B tanpa mengorbankan keterbacaan.

**Probability:** 0.07

### 2. Office Atlas
**Very Brief Intro:** Pengalaman seperti peta cakupan layanan metropolitan, memakai garis rute dan blok area sebagai elemen navigasi. Kesan utamanya sistematis, cepat, dan relevan dengan kebutuhan pengantaran Jabodetabek.

**Probability:** 0.04

### 3. Paper Workshop
**Very Brief Intro:** Arah editorial yang mengambil tekstur kertas, garis crop mark, dan lapisan cetak sebagai bahasa visual. Lebih hangat serta taktil, dengan fokus pada ketelitian proses di balik mesin.

**Probability:** 0.09

---

## Arah yang dipilih: Service Ledger

### Design Movement
**Operational editorial design** yang memadukan disiplin service desk B2B dengan detail material dari dunia reprografi: lembar cetak, penanda mesin, label logistik, dan blok layanan. Website tidak tampil seperti katalog template; ia berfungsi seperti halaman pertama dari buku kendali layanan yang meyakinkan.

### Core Principles

1. **Bukti operasional sebelum klaim promosi.** Setiap bagian menerjemahkan manfaat menjadi indikator yang mudah dipahami, seperti respons teknisi, penggantian toner, dan opsi durasi sewa.
2. **Rapi, tetapi tidak steril.** Grid editorial, garis halus, dan ruang putih dipadukan dengan panel biru berlapis agar terasa profesional sekaligus hangat.
3. **Aksen dipakai untuk arah tindakan.** Oranye hanya menandai CTA, status penting, dan angka estimasi; warna ini tidak dipakai sebagai dekorasi massal.
4. **Kecepatan terlihat melalui ritme.** Tata letak memandu mata dari kebutuhan, unit, paket, hingga penawaran dalam alur kiri-ke-kanan lalu turun ke formulir.

### Color Philosophy

| Token | Hex | Peran dan alasan |
|---|---:|---|
| Ink Navy | `#0C2B4E` | Warna kepercayaan dan kedalaman untuk panel utama, header, serta teks paling penting. |
| Blueprint Blue | `#156FAE` | Warna informasi operasional; memberi energi tanpa kesan agresif. |
| Signal Orange | `#F47A2A` | Sinyal tindakan: hanya untuk tombol, indikator proses, dan nilai estimasi. |
| Paper White | `#F8FAFB` | Latar terang yang merujuk pada kertas hasil cetak dan menjaga halaman tetap ringan. |
| Mist Blue | `#EAF3F8` | Lapisan tenang untuk panel data, filter, dan bagian transisi. |
| Graphite | `#21313F` | Teks pendukung yang tetap mudah dibaca di atas latar terang. |

**Signature brand color:** **Signal Orange `#F47A2A`** — warna pemicu aksi yang secara konsisten muncul pada penawaran dan elemen respons cepat.

### Layout Paradigm

Halaman mengikuti metafora **lembar kendali layanan**. Hero terdiri dari kolom headline besar di kiri dan kartu “jalur layanan” bertumpuk di kanan, bukan blok konten yang serba terpusat. Bagian-bagian berikutnya terhubung oleh garis sirkuit tipis yang berubah fungsi: sebagai timeline proses di area layanan, sebagai separator pada katalog, dan sebagai penghubung kalkulator dengan formulir.

```text
┌──────────────────────────────────────────────────────────────────┐
│ wordmark                    layanan · unit · paket · kontak      │
├──────────────────────────────┬───────────────────────────────────┤
│ headline asimetris           │  kartu jalur layanan / visual unit│
│ CTA + label area             │  [ 01 kebutuhan ] [ 02 unit ]     │
│                              │  [ 03 siap pakai ]                │
└──────────────────────────────┴───────────────────────────────────┘
  rail informasi → alasan → katalog filter → paket → kalkulator → form
```

### Signature Elements

1. **Service rail:** garis biru tipis dengan node oranye, sebagai benang informasi sepanjang halaman.
2. **Machine tickets:** kartu unit berbentuk tiket operasional dengan label tipe, kecepatan, dan harga yang terstruktur.
3. **Output sheet:** bidang putih bertumpuk ringan di atas panel navy, mengingatkan pada halaman yang baru tercetak tanpa menggunakan skeuomorfisme berlebihan.

### Interaction Philosophy

Interaksi harus memberi rasa bahwa kebutuhan pengguna sedang ditangani. Filter katalog memperbarui jumlah unit dan status hasil secara langsung. Kalkulator menunjukkan estimasi jelas, sementara CTA WhatsApp menyusun pesan awal yang relevan. Semua kontrol memiliki fokus keyboard yang kuat dan label yang menjelaskan aksi.

### Animation

Gunakan gerak singkat dan fungsional: service rail menggambar dirinya sekali ketika hero masuk; kartu unit bergeser naik maksimal 8 px saat hover; hasil kalkulator memudar dan bergerak 6 px saat nilai berubah. Animasi menggunakan `transform` dan `opacity`, durasi 160–240 ms dengan `cubic-bezier(0.23, 1, 0.32, 1)`. Pengguna dengan `prefers-reduced-motion` menerima antarmuka statis.

### Typography System

**Manrope** digunakan sebagai display yang padat dan tegas pada headline, angka harga, serta label navigasi. **Source Sans 3** digunakan untuk body copy dan formulir karena ritmenya nyaman pada teks Bahasa Indonesia. **IBM Plex Mono** dipakai terbatas pada micro-label, spesifikasi PPM, kode unit, dan metadata agar nuansa service ledger tetap terasa. Headline memakai bobot 700–800 dan tracking rapat; teks body memakai 400–500 dengan line-height longgar.

### Brand Essence

**PT Sewa Copy Sejahtera adalah partner sewa fotokopi yang mengubah kebutuhan cetak kantor menjadi operasional siap jalan—untuk tim yang tidak punya waktu menghadapi mesin bermasalah.**

Kepribadian: **tanggap, teratur, meyakinkan**.

### Brand Voice

Bahasanya lugas, terbuka, dan membantu pengambil keputusan. Headline menyebut hasil operasional, CTA menyebut tindakan jelas, dan microcopy mengurangi rasa ragu tanpa hiperbola.

Contoh: “Mesin siap pakai, operasional tetap bergerak.”

Contoh: “Ceritakan kebutuhan cetak Anda, kami siapkan rekomendasi unitnya.”

### Wordmark & Logo

Logo berupa **simbol dua lembar output yang membentuk huruf S melalui ruang negatif**, dengan satu node oranye kecil sebagai tanda respons servis. Wordmark custom dibuat dari Manrope yang dimodifikasi melalui pengaturan tracking dan pemisahan “COPY” sebagai label mono; simbol tetap dapat berdiri sendiri pada favicon.

### Catatan Konten

Website ini tidak akan menampilkan testimoni, rating, atau logo klien rekaan. Area kredibilitas akan menampilkan **indikator layanan dan placeholder berlabel [EDITABLE]** untuk referensi pelanggan nyata yang telah disetujui; penggantian ini menjaga demo tetap transparan.

## Catatan Revisi Card

Strip tiga benefit di bawah hero adalah **tiga card sejajar** dengan pemisah vertikal tipis. Wadah strip tidak boleh dibuat sebagai kapsul dengan sudut luar membulat; setiap card cukup memakai radius kecil dan bersih agar tetap terasa tegas sebagai card operasional.

Seluruh typography menggunakan **Nunito Sans** agar headline, body copy, label, spesifikasi, dan form memiliki rasa yang lebih lembut dan konsisten.
