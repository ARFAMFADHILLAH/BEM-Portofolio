import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const fraunces = localFont({
  variable: "--font-fraunces",
  display: "swap",
  src: [
    {
      path: "./fonts/Fraunces-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
})

const archivo = localFont({
  variable: "--font-archivo",
  display: "swap",
  src: [
    {
      path: "./fonts/Archivo-Variable.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
})

const plexMono = localFont({
  variable: "--font-plex-mono",
  display: "swap",
  src: [
    { path: "./fonts/IBMPlexMono-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/IBMPlexMono-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/IBMPlexMono-600.woff2", weight: "600", style: "normal" },
  ],
})

export const metadata: Metadata = {
  title: "BEM Institut Bisnis Nusantara",
  description:
    "Company profile Badan Eksekutif Mahasiswa Institut Bisnis Nusantara — suara mahasiswa, gerakan Nusantara. Visi misi, pengurus, program kerja, departemen, dan kegiatan.",
  keywords: [
    "BEM",
    "Institut Bisnis Nusantara",
    "Badan Eksekutif Mahasiswa",
    "organisasi mahasiswa",
  ],
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${fraunces.variable} ${archivo.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}