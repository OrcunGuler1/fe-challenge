import styles from './input.module.scss'
import { useState } from 'react'
/* eslint-disable-next-line */
export interface InputProps {
  onChange: (value: string) => void
  placeholder?: string
  type: string
}

export function Input({ onChange, placeholder, type }: InputProps) {
  return (
    <input
      className={styles.input}
      type={type}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
    />
  )
}

export default Input
