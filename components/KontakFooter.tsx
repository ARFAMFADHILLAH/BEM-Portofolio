import { site, socials } from "@/data/site"
import { ArrowRight, SketchUnderline } from "./ui"

export function KontakFooter() {
  return (
    <footer className="kontak" id="kontak">
      <div className="kontak-top">
        <p className="kontak-kicker">Kolaborasi &amp; Aspirasi</p>
        <h2 className="kontak-title">
          Mari bicara,
          <br />
          pintunya <span className="kontak-em">terbuka.</span>
          <SketchUnderline color="#FFC528" />
        </h2>
        <a className="kontak-mail" href={`mailto:${site.email}`}>
          {site.email} <ArrowRight />
        </a>
      </div>

      <div className="kontak-bottom">
        <div className="kontak-col">
          <p className="kontak-col-title">Sekretariat</p>
          <p>{site.alamat}</p>
          <p>{site.institusi}</p>
        </div>
        <div className="kontak-col">
          <p className="kontak-col-title">Media Sosial</p>
          <ul className="sos-list">
            {socials.map((s, i) => (
              <li key={s.label}>
                <span className="sos-no">{String(i + 1).padStart(2, "0")}</span>
                <span className="sos-label">{s.label}</span>
                <span className="sos-value">{s.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="footer-bar">
        <span>
          © {site.periode} {site.organisasi} {site.institusi}
        </span>
        <span>Periode {site.periode} / 2027</span>
        <span>Dibuat oleh mahasiswa, untuk mahasiswa.</span>
      </div>
    </footer>
  )
}