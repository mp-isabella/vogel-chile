import { groq } from 'next-sanity'

export const allPostsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    featured,
    coverImage { asset, alt },
    author->{ name, role, image },
    categories[]->{ title, slug }
  }
`

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    featured,
    coverImage { asset, alt },
    author->{ name, role, image, bio },
    categories[]->{ title, slug },
    body,
    seoTitle,
    seoDescription
  }
`

export const allPostSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)] {
    "slug": slug.current,
    publishedAt
  }
`
