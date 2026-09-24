import { Nav } from "@/components/Nav"
import { Hero } from "@/components/Hero"
import { VisiMisi } from "@/components/VisiMisi"
import { Pengurus } from "@/components/Pengurus"
import { ProgramKerja } from "@/components/ProgramKerja"
import { Departemen } from "@/components/Departemen"
import { Berita } from "@/components/Berita"
import { KontakFooter } from "@/components/KontakFooter"

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <VisiMisi />
        <Pengurus />
        <ProgramKerja />
        <Departemen />
        <Berita />
      </main>
      <KontakFooter />
    </>
  )
}