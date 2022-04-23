import { GetStaticPaths, GetStaticProps } from "next"
import { serialize } from "next-mdx-remote/serialize"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeHighlight from "rehype-highlight"
import rehypeImgSize from "rehype-img-size"
import rehypeSlug from "rehype-slug"
import { getDocFromSlugTitleByDirectory, getSlugFromArticleTitleByDirectory } from "./mdx"
import type { Plugin } from "unified"
import { directory } from "../@types"

export const getStaticPropsFunc = (directory: directory) => {
  const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug } = params as { slug: string }
    const { content, meta } = getDocFromSlugTitleByDirectory(slug, directory)
    const mdxSource = await serialize(content, {
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: "before" }],
          rehypeHighlight,
          [rehypeImgSize as Plugin<any[], any, any>, { dir: "public" }],
        ],
      },
    })
    return { props: { doc: { source: mdxSource, meta } } }
  }
  return getStaticProps
}

export const getStaticPathsFunc = (directory: directory) => {
  const getStaticPathsFunc: GetStaticPaths = async () => {
    let paths: any = []
    const slugs = getSlugFromArticleTitleByDirectory(directory)
    slugs.forEach(slug => {
      paths.push({
        params: {
          slug,
        },
      })
    })
    return {
      paths,
      fallback: false,
    }
  }
  return getStaticPathsFunc
}
