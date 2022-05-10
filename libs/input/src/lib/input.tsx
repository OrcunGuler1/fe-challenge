import styles from './input.module.scss'
import { useState } from 'react'
/* eslint-disable-next-line */
export interface InputProps {
  onChange: (value: string) => void
  placeholder?: string
}

export function Input({ onChange, placeholder }: InputProps) {
  return (
    <input
      className={styles.input}
      type="text"
      style={{ width: '100%' }}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
    />
  )
}

export default Input
