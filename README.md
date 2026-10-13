<p align="center">
  <img src="public/logo/logobem.png" alt="Logo BEM IBN" width="120" height="120">
</p>

# BEM IBN — Company Profile

Situs company profile **Badan Eksekutif Mahasiswa Institut Bisnis Nusantara (BEM IBN)** periode 2026/2027. Menampilkan profil organisasi, susunan pengurus, program kerja, departemen/kementerian, serta kanal kontak dan aspirasi.

Dibangun sebagai **static site** — seluruh halaman di-export menjadi HTML/CSS/JS murni sehingga ringan, cepat, dan mudah di-hosting di mana saja (termasuk Cloudflare Pages).

## Tech Stack

- **Next.js 16** — App Router, di-build dengan `output: "export"` (static HTML)
- **TypeScript** — tipe data terdefinisi untuk konten (`data/*.ts`)
- **React 19**
- **CSS custom** — ditulis manual di `app/globals.css`, tanpa Tailwind
- **Font self-hosted** — Fraunces, Archivo, IBM Plex Mono via `next/font/local` (tanpa ketergantungan ke Google Fonts saat build)

## Struktur Folder

```
app/
  layout.tsx          # Root layout, metadata, font
  page.tsx            # Halaman utama (semua section)
  globals.css         # Seluruh styling & palet warna
components/
  Nav.tsx             # Navigasi + logo
  Hero.tsx            # Pembuka + marquee
  VisiMisi.tsx        # Visi & misi
  Pengurus.tsx        # Pimpinan, BPH, kementerian (dengan foto)
  ProgramKerja.tsx    # Program kerja
  Departemen.tsx      # Struktur departemen
  Berita.tsx          # Agenda/kegiatan
  KontakFooter.tsx    # Kontak + footer
  ui.tsx              # Komponen kecil (Avatar, SectionHead, dst.)
data/
  site.ts             # Teks: meta, navigasi, program, departemen, berita, sosial
  pengurus.ts         # Data pengurus & kementerian
public/
  logo/logobem.png    # Logo BEM
  pengurus/           # Foto-foto pengurus
```

## Cara Mengedit Konten

Hampir semua teks ada di `data/site.ts`. Semua pembaruan langsung terlihat di halaman:

| Ingin mengubah | File |
| --- | --- |
| Nama/navigasi/kontak organisasi | `data/site.ts` |
| Program kerja, departemen, berita, sosial media | `data/site.ts` |
| Daftar pengurus & kementerian | `data/pengurus.ts` |
| Foto pengurus | taruh di `public/pengurus/` lalu isi jalur `foto` di `data/pengurus.ts` |

## Menjalankan di Lokal

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Verifikasi build & lint:

```bash
npm run build   # output static ke folder out/
npm run lint
```

## Deploy ke Cloudflare Pages

Proyek terhubung ke Git; `next build` menghasilkan folder statis `out/` yang langsung dipakai Cloudflare Pages.

1. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Pilih repository ini, lalu set (framework preset: **Next.js**):
   - Build command: `npm run build`
   - Build output directory: `out`
3. **Save and Deploy** — situs live di `<project>.pages.dev`.

Setiap `git push` ke branch utama otomatis memicu deploy ulang.