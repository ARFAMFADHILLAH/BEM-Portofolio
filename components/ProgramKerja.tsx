import { programs } from "@/data/site"
import { ArrowRight, SectionHead } from "./ui"

export function ProgramKerja() {
  return (
    <section className="section" id="program">
      <SectionHead no="03" label="Yang Kami Kerjakan" title="Program Kerja" />

      <ul className="prog-list">
        {programs.map((p) => (
          <li className="prog-row" key={p.no}>
            <span className="prog-no">{p.no}</span>
            <span className="prog-tag">{p.tag}</span>
            <span className="prog-body">
              <span className="prog-title">{p.title}</span>
              <span className="prog-desc">{p.desc}</span>
            </span>
            <span className="prog-go">
              <ArrowRight />
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}