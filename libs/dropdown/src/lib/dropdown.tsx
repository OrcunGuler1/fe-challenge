import { memo } from 'react'
import styles from './dropdown.module.scss'
export interface DropdownProps {
  options: string[]
  onChange: (value: string) => void
  id?: string
}

export const Dropdown = ({ options, onChange, id }: DropdownProps) => (
  <select
    id={id}
    data-testId={'dropdown'}
    defaultValue={'Seçiniz'}
    onChange={e => onChange(e.target.value)}
    className={styles.dropdown}
  >
    <option value={'Seçiniz'}>Seçiniz</option>
    {options?.map((option, index) => (
      <option key={index} id={option}>
        {option}
      </option>
    ))}
  </select>
)

export default memo(Dropdown)
