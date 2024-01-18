import { HTMLAttributes } from 'react'
import './button.scss'

type ButtonProps = HTMLAttributes<HTMLButtonElement>

function Button(props: ButtonProps) {
  return (
    <button {...props} />
  )
}

export default Button
