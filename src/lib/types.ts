export interface SiteSettings {
  siteName: string
  tagline: string
  email: string
  location: string
  website: string
  linkedIn: string
  instagram: string
  copyright: string
}

export interface Stat {
  value: string
  label: string
}

export interface HomeContent {
  eyebrow: string
  h1Line1: string
  h1Line2: string
  h1Line3: string
  h1Line4: string
  subtitle: string
  ctaPrimary: string
  ctaSecondary: string
  stats: Stat[]
}

export interface PositioningCell {
  label: string
  text: string
}

export interface FrameworkPillar {
  num: string
  pillar: string
  subtitle: string
  description: string
  items: string[]
}

export interface FrameworkContent {
  positioning: PositioningCell[]
  archetype: { title: string; text: string }
  pillars: FrameworkPillar[]
}

export interface SprintContent {
  badge: string
  headline: string[]
  duration: string
  description: string
  forYouIf: string[]
  outcomesTitle: string
  outcomes: string[]
  ctaLabel: string
}

export interface ValueItem {
  icon: string
  title: string
  description: string
}

export interface VoiceWord {
  word: string
  description: string
}

export interface AboutContent {
  founderInitials: string
  founderName: string
  founderRole: string
  chips: string[]
  sectionTag: string
  headline: string[]
  paragraphs: string[]
  values: ValueItem[]
  voiceWords: VoiceWord[]
}

export interface ContactItem {
  icon: string
  label: string
  value: string
}

export interface ContactContent {
  sectionTag: string
  headline: string[]
  subtitle: string
  contactItems: ContactItem[]
  formTitle: string
  formSubtitle: string
  formNote: string
  interestOptions: string[]
  web3formsKey: string
}

export interface Testimonial {
  slug: string
  stars: number
  quote: string
  authorName: string
  authorRole: string
  initials: string
  avatarColor: 'crimson' | 'amber' | 'gold'
  order: number
}

export interface PostFrontmatter {
  title: string
  slug: string
  category: string
  excerpt: string
  readTime: string
  emoji: string
  emojiBackground: string
  date: string
  published: boolean
}

export interface PostData extends PostFrontmatter {
  contentHtml: string
}
