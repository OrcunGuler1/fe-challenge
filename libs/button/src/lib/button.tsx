import styles from './button.module.scss'
/* eslint-disable-next-line */
export interface ButtonProps {
  children?: React.ReactNode
  onclick: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  [key: string]: any
}

export function Button({ onclick, children, type }: ButtonProps) {
  return (
    <button type={type} onClick={onclick} className={styles.button}>
      {children}
    </button>
  )
}

export default Button
