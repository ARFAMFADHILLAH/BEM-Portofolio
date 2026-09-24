import Image from "next/image"

export function SketchUnderline({
  color = "currentColor",
  width = "100%",
}: {
  color?: string
  width?: string
}) {
  return (
    <svg
      className="sketch-underline"
      width={width}
      height="10"
      viewBox="0 0 220 10"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M2 7 C 18 3, 34 9, 50 6 S 82 3, 98 7 S 130 9, 146 5 S 178 3, 194 7 S 210 8, 218 4"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

export function Marker({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <mark className={`marker ${className}`} data-text={typeof children === "string" ? children : ""}>
      {children}
    </mark>
  )
}

export function Stamp({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={`stamp ${className}`} aria-hidden="true">
      <span className="stamp-inner">
        <span className="stamp-line">★</span>
        <span className="stamp-text">{text}</span>
        <span className="stamp-line">★</span>
      </span>
    </span>
  )
}

export function ArrowRight() {
  return (
    <svg
      className="arrow-right"
      width="22"
      height="14"
      viewBox="0 0 22 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 7 H20 M15 2 L20 7 L15 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const AVATAR_PALETTES = [
  { bg: "#0d2145", fg: "#ffc528" },
  { bg: "#2b4eff", fg: "#fffdf8" },
  { bg: "#ffc528", fg: "#0d2145" },
  { bg: "#e7e0d2", fg: "#0d2145" },
]

function initialsOf(nama: string) {
  const parts = nama.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ""
  const last = parts.length > 1 ? parts[parts.length - 1][0] : ""
  return (first + last).toUpperCase()
}

function paletteOf(nama: string) {
  let hash = 0
  for (let i = 0; i < nama.length; i++) hash = (hash + nama.charCodeAt(i) * (i + 1)) % 997
  return AVATAR_PALETTES[hash % AVATAR_PALETTES.length]
}

export function Avatar({
  nama,
  foto,
  size = "md",
}: {
  nama: string
  foto?: string
  size?: "sm" | "md" | "lg"
}) {
  const className = `avatar avatar-${size}`
  if (foto) {
    return (
      <span className={className}>
        <Image src={foto} alt={`Foto ${nama}`} fill sizes="(max-width: 620px) 40vw, 220px" />
      </span>
    )
  }
  const { bg, fg } = paletteOf(nama)
  return (
    <span className={className} style={{ background: bg, color: fg }} aria-hidden="true">
      <span className="avatar-dots" />
      <span className="avatar-initials">{initialsOf(nama)}</span>
    </span>
  )
}

export function SectionHead({
  no,
  label,
  title,
  underline = true,
}: {
  no: string
  label: string
  title: React.ReactNode
  underline?: boolean
}) {
  return (
    <div className="section-head">
      <p className="section-kicker">
        <span className="kicker-no">{no}</span>
        <span className="kicker-label">{label}</span>
      </p>
      <h2 className="section-title">
        {title}
        {underline && <SketchUnderline />}
      </h2>
    </div>
  )
}