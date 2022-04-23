export interface articlesMeta {
  title: string
  photoUrl: string
  seoTitle: string
  extrait: string
  isPublished: boolean
  datePublication: string
  tags: string[]
  langue: string
}

export type metaArticles = {
  content: string
  meta: articlesMeta
}

export type directory = "codes" | "articles" | "inspirations" | "voyages"

export interface MDXDoc {
  source: MDXRemoteSerializeResult<Record<string, unknown>>
  meta: articlesMeta
}
