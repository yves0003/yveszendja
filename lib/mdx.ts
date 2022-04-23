import fs from "fs"
import { sync } from "glob"
import matter from "gray-matter"
import path from "path"
//import readingTime from "reading-time"
import { articlesMeta, directory, metaArticles } from "../@types"
import { slugify } from "../helpers/slugify"

const getDirectory = (directory: directory) => {
  return path.join(process.cwd(), `/${directory}`)
}

export const getAllArticlesByDirectory = (directory: directory) => {
  const posts = getSlugFromArticleFileNameByDirectory(directory)
    .map(slug => getDocFromSlugByDirectory(slug, directory))
    .sort((a, b) => {
      if (a.meta.datePublication > b.meta.datePublication) return -1
      if (a.meta.datePublication < b.meta.datePublication) return 1
      return 0
    })
  return posts
}

export const getSlugFromArticleFileNameByDirectory = (directory: directory) => {
  const paths = sync(`${getDirectory(directory)}/*.mdx`)
  return paths.map(path => {
    const parts = path.split("/")
    const fileName = parts[parts.length - 1]
    const [slug, _ext] = fileName.split(".")
    return slug
  })
}

export const getDocFromSlugByDirectory = (slug: string, directory: directory): metaArticles => {
  const postPath = path.join(getDirectory(directory), `${slug}.mdx`)
  const source = fs.readFileSync(postPath)
  const { content, data } = matter(source)
  let frontMatter = data as articlesMeta
  return {
    content,
    meta: {
      ...frontMatter,
      datePublication: frontMatter.datePublication.toString(),
      tags: frontMatter.tags.map(tag => tag.toLowerCase()),
    },
  }
}

export const getSlugFromArticleTitleByDirectory = (directory: directory) => {
  const paths = sync(`${getDirectory(directory)}/*.mdx`)
  return paths.map(path => {
    const source = fs.readFileSync(path)
    const { content, data } = matter(source)
    let frontMatter = data as articlesMeta
    return slugify(frontMatter.title)
  })
}
export const getDocFromSlugTitleByDirectory = (
  slugTitle: string,
  directory: directory
): metaArticles => {
  const paths = sync(`${getDirectory(directory)}/*.mdx`)
  const infos = paths
    .map(path => {
      const source = fs.readFileSync(path)
      const { content, data } = matter(source)
      let info = { content, data } as { content: string; data: articlesMeta }
      return info
    })
    .filter(info => slugify(info.data.title) === slugTitle)
  const { content, data: frontMatter } = infos[0]
  return {
    content,
    meta: {
      ...frontMatter,
      datePublication: frontMatter.datePublication.toString(),
      tags: frontMatter.tags.map(tag => tag.toLowerCase()),
    },
  }
}
