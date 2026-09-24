import { news } from "@/data/site"
import { ArrowRight, SectionHead } from "./ui"

export function Berita() {
  return (
    <section className="section" id="kegiatan">
      <SectionHead no="05" label="Catatan Terbaru" title="Kegiatan" />

      <div className="news-grid">
        {news.map((n) => (
          <article className="news-card" key={n.title}>
            <div className="news-thumb" aria-hidden="true">
              <span className="news-thumb-index">{n.index}</span>
              <span className="news-thumb-dots" />
            </div>
            <p className="news-meta">
              <span className="news-cat">{n.cat}</span>
              <span className="news-date">{n.date}</span>
            </p>
            <h3 className="news-title">{n.title}</h3>
            <p className="news-desc">{n.desc}</p>
            <span className="news-more">
              Baca selengkapnya <ArrowRight />
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}