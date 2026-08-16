# PT Sewa Copy Sejahtera — Dokumentasi Demo

Website ini adalah **demo statis one-page** untuk jasa sewa mesin fotokopi. Seluruh data komersial, kontak, area layanan, dan informasi perusahaan disiapkan sebagai placeholder sehingga dapat diperbarui sebelum digunakan secara publik.

| Lokasi | Fungsi | Bagian yang perlu diganti |
|---|---|---|
| `client/src/data/machines.ts` | Katalog mesin dan paket layanan | Nama unit, spesifikasi, harga, ketersediaan, dan deskripsi paket. |
| `client/src/pages/Home.tsx` | Copy utama, form, CTA, dan alamat WhatsApp demo | Nomor WhatsApp, nama perusahaan, area layanan, jam operasional, serta teks pesan awal. |
| `client/src/index.css` | Sistem visual Service Ledger | Token warna, responsive layout, dan animation rules. |
| `client/index.html` | SEO basic | Title dan meta description. |

> **Catatan transparansi:** Placeholder testimoni dan logo pelanggan tidak diisi dengan data rekaan. Bagian kredibilitas menggunakan indikator layanan, lalu dapat diganti dengan referensi pelanggan nyata yang telah memperoleh persetujuan.

## Cara menjalankan

Jalankan `pnpm dev` pada root project untuk mode pengembangan. Jalankan `pnpm check` untuk TypeScript check dan `pnpm build` untuk membuat build produksi.

## Integrasi produksi yang disarankan

Pada demo ini, form menyiapkan pesan lalu membuka WhatsApp. Untuk penggunaan produksi, ganti nomor pada konstanta `WHATSAPP_URL`, lalu sambungkan form ke inbox bisnis, CRM, atau workflow Google Sheet yang sudah disetujui. Jangan gunakan nomor placeholder saat dipublikasikan.
