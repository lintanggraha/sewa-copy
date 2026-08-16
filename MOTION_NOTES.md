# Motion Verification

Pada preview desktop 16 Agustus 2026, `motion-ready` aktif, 24 target reveal terdaftar, dan elemen yang berada dalam viewport telah memperoleh kelas `is-visible`. Browser tidak menggunakan preferensi reduced motion pada sesi pengujian ini.

Setelah scroll pertama, delapan target di area hero, pengenalan, dan layanan telah berstatus `is-visible`; target katalog, paket, serta section lebih bawah masih menunggu masuk viewport sebagaimana dirancang.

Deployment Vercel pada commit `77048c9` mengaktifkan `motion-ready` dan mendaftarkan 24 target reveal pada halaman publik.

Scroll effect 16 Agustus 2026 menambahkan progress indicator berbasis `requestAnimationFrame`, anchor offset untuk navigasi sticky, dan pergeseran panel hero yang dibatasi maksimal 18px.
