import { hero, marquee } from "@/data/site"
import { Marker, Stamp } from "./ui"

export function Hero() {
  return (
    <section className="hero" id="tentang">
      <div className="hero-grid">
        <div className="hero-main">
          <p className="hero-kicker">{hero.kicker}</p>
          <h1 className="hero-title">
            <span className="hero-line">{hero.headlineTop}</span>
            <span className="hero-line">
              <Marker>{hero.headlineBottom.split(" ")[0]}</Marker>{" "}
              {hero.headlineBottom.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <p className="hero-sub">{hero.sub}</p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="#program">
              Lihat program kerja
            </a>
            <a className="btn btn-ghost" href="#kontak">
              Hubungi kami
            </a>
          </div>
        </div>

        <aside className="hero-side">
          <Stamp text={hero.stamp} />
          <dl className="hero-meta">
            {hero.meta.map((m) => (
              <div key={m.label}>
                <dt>{m.label}</dt>
                <dd>{m.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[0, 1].map((dup) => (
            <ul className="marquee-group" key={dup}>
              {marquee.map((m) => (
                <li key={m}>
                  <span className="marquee-dot" />
                  {m}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}