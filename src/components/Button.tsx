import classnames from 'classnames'

import { DefaultProps } from "./interfaces"

interface Props extends DefaultProps {
  onClick?: () => void
}

export const Button: React.FunctionComponent<Props> = ({ className, children, onClick }) => {
  return (
    <button className={classnames(
      'px-4 py-2 bg-col6 text-col1 font-body font-bold rounded-xl', 
      className
    )} onClick={onClick}>
      {children}
    </button>
  )
}