import classnames from 'classnames'

import { DefaultProps } from "./interfaces"

interface Props extends DefaultProps {
  onClick?: () => void
  type?: "button" | "submit" | "reset"
}

export const Button: React.FunctionComponent<Props> = ({ className, children, onClick, type = "button" }) => {
  return (
    <button className={classnames( 'btn', className )} onClick={onClick} type={type}>
      {children}
    </button>
  )
}