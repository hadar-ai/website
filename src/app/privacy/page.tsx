import { Markdown } from '@/components/Markdown'
// @ts-ignore
import privacyContent from './privacy.md' 
import { Content } from '@/components/Content'


export default function Privacy() {
  return (
    <Content className="pb-20">
      <Markdown markdown={privacyContent} />
    </Content>
  )
}
