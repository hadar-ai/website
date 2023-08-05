import { Markdown } from '@/components/Markdown'
// @ts-ignore
import termsContent from './terms.md' 
import { Content } from '@/components/Content'


export default function Terms() {
  return (
    <Content className="pb-20">
      <Markdown markdown={termsContent} />
    </Content>
  )
}
