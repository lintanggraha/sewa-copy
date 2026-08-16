# Sumber Gambar Katalog

Gambar berikut dipilih dari hasil pencarian produk untuk menggantikan ilustrasi placeholder pada katalog. Gunakan hanya untuk demo; sebelum penggunaan komersial, pastikan hak pakai gambar memenuhi kebijakan pemilik sumber.

| Unit katalog | Berkas pilihan | Sumber hasil pencarian |
| --- | --- | --- |
| Canon iR 2625 | `w7uWKtwJmOgg.webp` | Multitronic — CANON imageRUNNER 2625i MFP B/W 25ppm |
| Xerox DocuCentre S2320 | `8bdWT9Ku4es9.jpg` | GCS — Xerox DocuCentre S2320 |
| Fuji Xerox ApeosPort C2560 | `b6M6TPkfTmZb.png` | FUJIFILM Business Innovation Cambodia — Apeos C3060 / C2560 / C2060 |
| Ricoh MP 3055 | `eBB6Gi6H4C4b.png` | Ricoh Latin America — MP 3055 Black and White Laser Multifunction Printer |

## Penyajian Deployment

Foto katalog tersedia melalui file `client/public/catalog/` di repository GitHub dan dipanggil dari CDN `raw.githubusercontent.com`. Pendekatan ini digunakan karena path `/manus-storage` tidak dapat dimuat pada deployment Vercel eksternal.

Verifikasi akhir pada deployment publik mengonfirmasi keempat gambar termuat normal dari `raw.githubusercontent.com`: Canon 960×960, Xerox 1024×768, Fuji Xerox 2048×1368, dan Ricoh 980×1027.
