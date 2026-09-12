export interface SanitySlug {
  current: string
}

export interface SanityImageAsset {
  _ref: string
  _type: 'reference'
}

export interface SanityImage {
  asset:  SanityImageAsset
  alt?:   string
  hotspot?: { x: number; y: number }
}

export interface Author {
  _id?:  string
  name:  string
  role?: string
  image?: SanityImage
  bio?:  string
}

export interface Category {
  _id?:   string
  title:  string
  slug:   SanitySlug
}

export interface Post {
  _id:          string
  title:        string
  slug:         SanitySlug
  publishedAt:  string
  excerpt:      string
  featured?:    boolean
  coverImage?:  SanityImage
  author?:      Author
  categories?:  Category[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?:        any[]
  seoTitle?:    string
  seoDescription?: string
}

export interface PostSlug {
  slug:        string
  publishedAt: string
}
