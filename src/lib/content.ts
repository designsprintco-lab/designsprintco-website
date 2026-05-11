import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import type {
  SiteSettings, HomeContent, FrameworkContent,
  SprintContent, AboutContent, ContactContent,
  Testimonial, PostFrontmatter, PostData,
} from './types'

const CONTENT = path.join(process.cwd(), 'content')

function readJson<T>(rel: string): T {
  return JSON.parse(fs.readFileSync(path.join(CONTENT, rel), 'utf8')) as T
}

export function getSettings(): SiteSettings {
  return readJson('settings.json')
}

export function getHomePage(): HomeContent {
  return readJson('pages/home.json')
}

export function getFrameworkPage(): FrameworkContent {
  return readJson('pages/framework.json')
}

export function getSprintPage(): SprintContent {
  return readJson('pages/sprint.json')
}

export function getAboutPage(): AboutContent {
  return readJson('pages/about.json')
}

export function getContactPage(): ContactContent {
  return readJson('pages/contact.json')
}

export function getAllTestimonials(): Testimonial[] {
  const dir = path.join(CONTENT, 'testimonials')
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.json'))
    .map(f => ({ ...readJson<Testimonial>(`testimonials/${f}`), slug: f.replace('.json', '') }))
    .sort((a, b) => a.order - b.order)
}

export function getAllPostFrontmatter(): PostFrontmatter[] {
  const dir = path.join(CONTENT, 'posts')
  return fs.readdirSync(dir)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const { data } = matter(fs.readFileSync(path.join(dir, f), 'utf8'))
      return { ...data, slug: f.replace('.md', '') } as PostFrontmatter
    })
    .filter(p => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllPostSlugs(): string[] {
  return getAllPostFrontmatter().map(p => p.slug)
}

export function getPostBySlug(slug: string): PostData {
  const raw = fs.readFileSync(path.join(CONTENT, 'posts', `${slug}.md`), 'utf8')
  const { data, content } = matter(raw)
  const contentHtml = marked.parse(content) as string
  return { ...data, slug, contentHtml } as PostData
}
