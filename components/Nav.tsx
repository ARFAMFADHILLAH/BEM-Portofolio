import Image from "next/image"
import { site } from "@/data/site"

export function Nav() {
  return (
    <header className="nav">
      <a className="nav-mark" href="#">
        <Image
          src="/logo/logobem.png"
          alt="Logo BEM IBN"
          width={34}
          height={34}
          className="nav-mark-logo"
          priority
        />
        <span className="nav-mark-text">
          BEM <em>{site.singkatan}</em>
        </span>
      </a>
      <nav className="nav-links" aria-label="Navigasi utama">
        {site.nav.map((n) => (
          <a key={n.href} href={n.href}>
            {n.label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href="#kontak">
        Sapaan →
      </a>
    </header>
  )
}