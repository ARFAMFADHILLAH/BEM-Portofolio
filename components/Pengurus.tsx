import { pimpinan, bph, staf } from "@/data/pengurus"
import { Avatar, SectionHead } from "./ui"

export function Pengurus() {
  return (
    <section className="section" id="pengurus">
      <SectionHead no="02" label="Orang-orangnya" title="Pengurus" />

      <div className="peng-leads">
        {pimpinan.map((p) => (
          <article className="peng-lead" key={p.nama}>
            <Avatar nama={p.nama} foto={p.foto} size="lg" />
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
        <div className="peng-grid peng-grid-2">
          {bph.map((p) => (
            <article className="peng-card" key={p.nama}>
              <Avatar nama={p.nama} foto={p.foto} size="md" />
              <div>
                <p className="peng-role">{p.jabatan}</p>
                <h3 className="peng-name">{p.nama}</h3>
                <p className="peng-prodi">Program Studi {p.prodi}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* <div className="peng-block">
        <p className="peng-block-title">
          <span>Kepala Departemen</span>
        </p>
        <div className="peng-grid peng-grid-3">
          {kepalaDepartemen.map((p) => (
            <article className="peng-card" key={p.nama}>
              <Avatar nama={p.nama} foto={p.foto} size="md" />
              <div>
                <p className="peng-role">
                  <span className="peng-abbr">{p.abbr}</span>
                  {p.jabatan}
                </p>
                <h3 className="peng-name">{p.nama}</h3>
                <p className="peng-prodi">Program Studi {p.prodi}</p>
              </div>
            </article>
          ))}
        </div>
      </div> */}

      <div className="peng-block">
        <p className="peng-block-title">
          <span>Staf Anggota</span>
        </p>
        <div className="peng-staf">
          {staf.map((group) => (
            <div className="peng-staf-group" key={group.abbr}>
              <p className="peng-staf-dept">
                <span className="peng-abbr">{group.abbr}</span>
                {group.dept}
              </p>
              <ul>
                {group.members.map((m) => (
                  <li key={m.nama}>
                    <Avatar nama={m.nama} foto={m.foto} size="sm" />
                    <span className="peng-staf-info">
                      <span className="peng-staf-name">{m.nama}</span>
                      <span className="peng-staf-prodi">{m.prodi}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}