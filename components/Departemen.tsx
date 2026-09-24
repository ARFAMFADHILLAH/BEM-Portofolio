import { departments } from "@/data/site"
import { SectionHead } from "./ui"

export function Departemen() {
  return (
    <section className="section" id="departemen">
      <SectionHead no="04" label="Struktur" title="Departemen & Bidang" />

      <div className="dep-grid">
        {departments.map((d, i) => (
          <article className="dep-card" key={d.abbr} data-odd={i % 2 === 1}>
            <span className="dep-abbr">{d.abbr}</span>
            <h3 className="dep-name">{d.name}</h3>
            <p className="dep-desc">{d.desc}</p>
            <span className="dep-index">{String(i + 1).padStart(2, "0")}</span>
          </article>
        ))}
      </div>
    </section>
  )
}