import { Markdown } from '@/components/Markdown'
// @ts-ignore
import whitepaper from './whitepaper.md'


export default function Whitepaper() {
  return (
    <div>
      <div className="content-width-wrapper my-16">
        <Markdown markdown={whitepaper} />
      </div>
    </div>
  )
}

