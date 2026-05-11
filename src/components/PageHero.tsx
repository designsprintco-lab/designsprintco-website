interface Props {
  tag: string
  title: string
  subtitle?: string
  accentWord?: string
}

export default function PageHero({ tag, title, subtitle, accentWord }: Props) {
  const titleParts = accentWord
    ? title.split(accentWord)
    : null

  return (
    <div className="page-hero bg-deep">
      <div className="s-tag">{tag}</div>
      <h1>
        {titleParts
          ? <>{titleParts[0]}<span className="cr">{accentWord}</span>{titleParts[1]}</>
          : title
        }
      </h1>
      {subtitle && <p className="s-sub">{subtitle}</p>}
    </div>
  )
}
