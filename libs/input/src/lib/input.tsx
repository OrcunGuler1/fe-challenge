import { memo } from 'react'
import styles from './input.module.scss'
/* eslint-disable-next-line */
export interface InputProps {
  onChange: (value: any) => void
  placeholder?: string
  type: string
  name?: string
  id?: string
  classname?: string
  checked?: boolean
}

export const Input = ({
  onChange,
  placeholder,
  type,
  name,
  id,
  classname,
  checked,
}: InputProps) => {
  return (
    <input
      checked={checked}
      id={id}
      className={classname}
      type={type}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      name={name}
    />
  )
}

export default memo(Input)
