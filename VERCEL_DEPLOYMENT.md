# Deployment Vercel

## Diagnosis

Pada 16 Agustus 2026, root deployment `sewa-copy.vercel.app` menyajikan bundle teks dari `server/index.ts`, bukan hasil React. Hal ini menunjukkan Vercel belum memakai output static Vite yang benar.

## Konfigurasi yang Ditambahkan

File `vercel.json` menetapkan framework `vite`, menjalankan `pnpm run build:vercel`, menggunakan output directory `dist/public`, dan menyediakan fallback SPA ke `index.html`.

## Tindakan di Dashboard Vercel

Jika deployment belum otomatis memuat commit terbaru, buka deployment terbaru dari branch `main`, lalu pilih **Redeploy**. Pengaturan di repository sekarang akan mengabaikan konfigurasi build/output lama yang tersimpan di dashboard.
