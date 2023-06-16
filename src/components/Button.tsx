import classnames from 'classnames'

import { DefaultProps } from "./interfaces"
import { LoadingIcon } from './Loading'

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