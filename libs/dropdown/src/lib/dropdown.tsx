import styles from './dropdown.module.scss'
/* eslint-disable-next-line */
export interface DropdownProps {
  options: Array<any>
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
      {options
        .filter(
          (opt, ind, self) =>
            ind === self.findIndex(t => t.currency === opt.currency),
        )
        .map((option, index) => (
          <option key={index} id={option.currency}>
            {option.currency}
          </option>
        ))}
    </select>
  )
}

export default Dropdown
