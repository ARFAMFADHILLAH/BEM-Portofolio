export type Person = {
  nama: string
  prodi: string
}

export type Pimpinan = {
  nama: string
  jabatan: string
  prodi: string
  foto: string
}

export type Kelompok = {
  label: string
  abbr: string
  foto: string
  anggota: [Person, Person]
}

export const pimpinan: Pimpinan[] = [
  {
    nama: "Rayhan Aditya Widiantoro",
    jabatan: "Presiden Mahasiswa",
    prodi: "Manajemen Bisnis",
    foto: "/pengurus/rayhan-aditya-widiantoro.jpg",
  },
  {
    nama: "Etia Sekar Sauvany",
    jabatan: "Wakil Presiden Mahasiswa",
    prodi: "Manajemen Bisnis",
    foto: "/pengurus/etia-sekar-sauvany.jpg",
  },
]

export const bph: Kelompok[] = [
  {
    label: "Sekretaris Umum",
    abbr: "SU",
    foto: "/pengurus/muhamad-azhar-mahardika-aurin-adriana.jpg",
    anggota: [
      { nama: "Muhamad Azhar", prodi: "Manajemen Bisnis" },
      { nama: "Mahardika Aurin Adriana", prodi: "Manajemen Bisnis" },
    ],
  },
  {
    label: "Bendahara Umum",
    abbr: "BU",
    foto: "/pengurus/michelle-surya-wiguna-ernes-pramudhita-cintya.jpg",
    anggota: [
      { nama: "Michelle Surya Wiguna", prodi: "Manajemen Keuangan" },
      { nama: "Ernes Pramudhita Cintya", prodi: "Manajemen Keuangan" },
    ],
  },
]

export const staf: Kelompok[] = [
  {
    label: "Kementerian Advokasi",
    abbr: "KA",
    foto: "/pengurus/dimas-ayodhiya-shara-kayla-zilbi.jpg",
    anggota: [
      { nama: "Dimas Ayodhiya Shara", prodi: "Broadcasting" },
      { nama: "Kayla Zilbi", prodi: "Marketing Communication" },
    ],
  },
  {
    label: "Aparatur Negara",
    abbr: "AN",
    foto: "/pengurus/keisya-aulia-salsabila-anastacia-cagiva-wijaya.jpg",
    anggota: [
      { nama: "Keisya Aulia Salsabila", prodi: "Akuntansi" },
      { nama: "Anastacia Cagiva Wijaya", prodi: "Marketing Communication" },
    ],
  },
  {
    label: "Kementerian SDM",
    abbr: "SDM",
    foto: "/pengurus/matthew-gunawan-amanda-zahratun-nabila.jpg",
    anggota: [
      { nama: "Matthew Gunawan", prodi: "Sistem Informasi" },
      { nama: "Amanda Zahratun Nabila", prodi: "Manajemen Keuangan" },
    ],
  },
  {
    label: "Kajian & Aksi Strategis",
    abbr: "KAS",
    foto: "/pengurus/muhamad-ezra-adriansyah-haikal-rafly-ananda.jpg",
    anggota: [
      { nama: "Muhamad Ezra Adriansyah", prodi: "Broadcasting" },
      { nama: "Haikal Rafly Ananda", prodi: "Broadcasting" },
    ],
  },
  {
    label: "Kementerian Kominfo",
    abbr: "KOM",
    foto: "/pengurus/hanna-nabilah-octavia-isabel-joan.jpg",
    anggota: [
      { nama: "Hanna Nabilah Octavia", prodi: "Marketing Communication" },
      { nama: "Isabel Joan", prodi: "Marketing Communication" },
    ],
  },
  {
    label: "Kementerian Luar & Dalam Negeri",
    abbr: "KLN",
    foto: "/pengurus/arfa-muhammad-fadhillah-maharani-audrey-adriana.jpg",
    anggota: [
      { nama: "Maharani Audrey Adriana", prodi: "Manajemen Bisnis" },
      { nama: "Arfa Muhammad Fadhillah", prodi: "Sistem Informasi" },
    ],
  },
]