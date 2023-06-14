import classnames from 'classnames'

import { DefaultProps } from "./interfaces"

interface Props extends DefaultProps {
  onClick?: () => void
}

export const Button: React.FunctionComponent<Props> = ({ className, children, onClick }) => {
  return (
    <button className={classnames( 'btn', className )} onClick={onClick}>
      {children}
    </button>
  )
}