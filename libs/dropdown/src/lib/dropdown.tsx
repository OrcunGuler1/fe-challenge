import styles from './dropdown.module.scss'
/* eslint-disable-next-line */
export interface DropdownProps {
  options: string[]
  onChange: (value: string) => void
}

export function Dropdown({ options, onChange }: DropdownProps) {
  return (
    <select
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
}

export default Dropdown
