import './input.module.scss'
import { useState } from 'react'
/* eslint-disable-next-line */
export interface InputProps {
  onChange: (value: string) => void
}

export function Input(props: InputProps) {
  return (
    <input
      type="text"
      style={{ width: '100%' }}
      onChange={e => props.onChange(e.target.value)}
    />
  )
}

export default Input
