import { visiMisi } from "@/data/site"
import { SectionHead } from "./ui"

export function VisiMisi() {
  return (
    <section className="section" id="visi">
      <SectionHead no="01" label="Arah Gerak" title="Visi & Misi" />

      <div className="vm">
        <div className="vm-visi">
          <p className="vm-label">Visi</p>
          <p className="vm-quote">{visiMisi.visi}</p>
        </div>

        <div className="vm-misi">
          <p className="vm-label">Misi</p>
          <ol className="vm-list">
            {visiMisi.misi.map((m, i) => (
              <li key={m}>
                <span className="vm-num">{String(i + 1).padStart(2, "0")}</span>
                <span>{m}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}