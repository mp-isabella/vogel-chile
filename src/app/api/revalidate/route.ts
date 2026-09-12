export const runtime = 'nodejs'

import { revalidatePath } from 'next/cache'
import { NextResponse }   from 'next/server'

export async function POST(req: Request) {
  const secret = req.headers.get('x-sanity-webhook-secret')

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
  }

  let slug: string | undefined

  try {
    const body = await req.json()
    slug = body?.slug?.current ?? body?.slug
  } catch {
    // body vacío o inválido — revalidamos solo /blog
  }

  revalidatePath('/blog')

  if (slug) {
    revalidatePath(`/blog/${slug}`)
  }

  return NextResponse.json({ revalidated: true, slug: slug ?? null })
}
