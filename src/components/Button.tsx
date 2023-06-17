import classnames from 'classnames'

import { DefaultProps } from "./interfaces"
import { LoadingIcon } from './Loading'
import Link from 'next/link'
import { WhitepaperLink } from './Links'

interface Props extends DefaultProps {
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  inProgress?: boolean
}

export const Button: React.FunctionComponent<Props> = ({ className, children, onClick, type = "button", inProgress }) => {
  return (
    <button className={classnames( 'btn', className )} onClick={onClick} type={type}>
      {inProgress ?  <LoadingIcon /> : children}
    </button>
  )
}


export const LearnMoreButton:React.FunctionComponent<DefaultProps> = ({ className }) => {
  return <WhitepaperLink className={classnames("btn", className)}>Learn more</WhitepaperLink>
}


export const RequestAccessButton:React.FunctionComponent<DefaultProps> = ({ className }) => {
  return (
    <Link className={classnames("btn", className)} href="/#request_access">Request access</Link>
  )
}
