import React, { useMemo, createElement, Fragment } from "react"
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeReact from 'rehype-react'
import rehypeSlug from 'rehype-slug'

import styles from './Markdown.module.css'
import { DefaultProps } from "./interfaces"
import { cn } from "@/utils"

interface Props extends DefaultProps {
  markdown: string
}

const RenderCode: React.FunctionComponent<DefaultProps> = ({ children }) => {
  return <code>{children}</code>
}

const RenderParagraph: React.FunctionComponent<DefaultProps> = ({ children }) => {
  return <p>{children}</p>
}

export const Markdown: React.FunctionComponent<Props> = ({ markdown, className }) => {
  const output = useMemo(() => {
    const ret = unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeSlug)
      .use(rehypeReact, { 
        createElement, 
        Fragment,
      })
      .processSync(markdown)

    return ret.result
  }, [ markdown ])

  return (
    <div className={cn(styles.markdown, className)}>{output}</div>
  )
}

/*
{
        remarkReactComponents: {
          // p: RenderParagraph,
          // img: RenderImage,
          // a: RenderAnchor,
          // pre: generateRenderPre(markdown),
          code: RenderCode,
        }
      }
      */