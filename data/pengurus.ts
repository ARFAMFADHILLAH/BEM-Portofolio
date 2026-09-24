export type Pengurus = {
  nama: string
  jabatan: string
  prodi: string
  foto?: string
}

export const pimpinan: Pengurus[] = [
  { nama: "Rayhan Aditya Widiantoro", jabatan: "PRESIDEN MAHASISWA", prodi: "Manajemen Bisnis" },
  { nama: "Etia Sekar Sauvany", jabatan: "WAKIL PRESIDEN MAHASISWA", prodi: "Manajemen Bisnis" },
]

export const bph: Pengurus[] = [
  { nama: "Muhamad Azhar", jabatan: "SEKRETARIS UMUM", prodi: "Manajemen Bisnis" },
  { nama: "Mahardika Aurin Adriana", jabatan: "SEKRETARIS UMUM", prodi: "Manajemen Bisnis" },
  { nama: "Michelle Surya Wiguna", jabatan: "BENDAHARA UMUM", prodi: "Manajemen Keuangan" },
  { nama: "Ernes Pramudhita Cintya", jabatan: "BENDAHARA UMUM", prodi: "Manajemen Keuangan" },
]

// export const kepalaDepartemen: (Pengurus & { abbr: string })[] = [
//   { abbr: "DN", nama: "Fajar Ramadhan", jabatan: "Kepala Departemen Dalam Negeri", prodi: "Bisnis Digital" },
//   { abbr: "PSDM", nama: "Kirana Maharani", jabatan: "Kepala Departemen PSDM", prodi: "Manajemen" },
//   { abbr: "SOS", nama: "Aulia Rahman Hakim", jabatan: "Kepala Departemen Sosial & Lingkungan", prodi: "Akuntansi" },
//   { abbr: "ADV", nama: "Dewi Anggraini", jabatan: "Kepala Departemen Advokasi & Aspirasi", prodi: "Sistem Informasi" },
//   { abbr: "KOM", nama: "Yoga Prasetyo", jabatan: "Kepala Departemen Kominfo", prodi: "Bisnis Digital" },
//   { abbr: "KWU", nama: "Intan Permatasari", jabatan: "Kepala Departemen Kewirausahaan", prodi: "Manajemen" },
// ]

export const staf: { dept: string; abbr: string; members: Pengurus[] }[] = [
  {
    dept: "KEMENTRIAN ADVOKASI",
    abbr: "KA",
    members: [
      { nama: "Dimas Ayodhiya Shara", jabatan: "Staf", prodi: "Broadcasting" },
      { nama: "Kayla Zilbi", jabatan: "Staf", prodi: "Marketing Communication" },
    ],
  },
  {
    dept: "APARATUR NEGARA",
    abbr: "AN",
    members: [
      { nama: "Keisya Aulia Salsabila", jabatan: "Staf", prodi: "Akuntansi" },
      { nama: "Anastacia Cagiva Wijaya", jabatan: "Staf", prodi: "Marketing Communication" },
    ],
  },
  {
    dept: "KEMENTRIAN SDM",
    abbr: "SDM",
    members: [
      { nama: "Matthew Gunawan", jabatan: "Staf", prodi: "Sistem Informasi" },
      { nama: "Amanda Zahratun Nabila", jabatan: "Staf", prodi: "Manajemen Keuangan" },
    ],
  },
  {
    dept: "KAJIAN & AKSI STRATEGIS",
    abbr: "KAS",
    members: [
      { nama: "⁠Muhamad Ezra Adriansyah", jabatan: "Staf", prodi: "Broadcasting" },
      { nama: "Haikal Rafly Ananda", jabatan: "Staf", prodi: "Broadcasting" },
    ],
  },
  {
    dept: "KEMENTRIAN KOMINFO",
    abbr: "KOM",
    members: [
      { nama: "Hanna Nabilah Octavia", jabatan: "Staf", prodi: "Marketing Communication" },
      { nama: "Isabel Joan", jabatan: "Staf", prodi: "Marketing Communication" },
    ],
  },
  {
    dept: "KEMENTRIAN LUAR & DALAM NEGERI",
    abbr: "KLN",
    members: [
      { nama: "Maharani Audrey Adriana", jabatan: "Staf", prodi: "Manajemen Bisnis" },
      { nama: "Arfa Muhammad Fadhillah", jabatan: "Staf", prodi: "Sistem Informasi" },
    ],
  },
]