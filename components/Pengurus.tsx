import { pimpinan, bph, staf, type Kelompok } from "@/data/pengurus"
import { Avatar, SectionHead } from "./ui"

function PairCard({ group }: { group: Kelompok }) {
  return (
    <article className="peng-pair">
      <Avatar nama={group.anggota[0].nama} foto={group.foto} size="pair" />
      <div className="peng-pair-body">
        <p className="peng-role">
          <span className="peng-abbr">{group.abbr}</span>
          {group.label}
        </p>
        <ul className="peng-pair-names">
          {group.anggota.map((a) => (
            <li key={a.nama}>
              <span className="peng-pair-name">{a.nama}</span>
              <span className="peng-pair-prodi">{a.prodi}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export function Pengurus() {
  return (
    <section className="section" id="pengurus">
      <SectionHead no="02" label="Orang-orangnya" title="Pengurus" />

      <div className="peng-leads">
        {pimpinan.map((p) => (
          <article className="peng-lead" key={p.nama}>
            <Avatar nama={p.nama} foto={p.foto} size="portrait" />
            <div className="peng-lead-info">
              <p className="peng-role">{p.jabatan}</p>
              <h3 className="peng-name">{p.nama}</h3>
              <p className="peng-prodi">Program Studi {p.prodi}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="peng-block">
        <p className="peng-block-title">
          <span>Badan Pengurus Harian</span>
        </p>
        <div className="peng-pairs peng-pairs-2">
          {bph.map((g) => (
            <PairCard group={g} key={g.label} />
          ))}
        </div>
      </div>

      <div className="peng-block">
        <p className="peng-block-title">
          <span>Kementerian &amp; Lembaga</span>
        </p>
        <div className="peng-pairs peng-pairs-3">
          {staf.map((g) => (
            <PairCard group={g} key={g.label} />
          ))}
        </div>
      </div>
    </section>
  )
}