import Link from "next/link"
import { DefaultProps } from "./interfaces"

export const WhitepaperLink:React.FunctionComponent<DefaultProps> = ({ className, children }) => {
  return (
    <Link className={className} href="https://docs.hadar.ai">{children || 'Whitepaper'}</Link>
  )
}
