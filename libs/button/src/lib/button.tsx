import styles from './button.module.scss'
/* eslint-disable-next-line */
export interface ButtonProps {
  children?: React.ReactNode
  onclick: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export const Button = ({ onclick, children, type }: ButtonProps) => (
  <button
    data-testId={'button'}
    type={type}
    onClick={onclick}
    className={styles.button}
    children={children}
  />
)

export default Button
