import './dropdown.module.scss'

/* eslint-disable-next-line */
export interface DropdownProps {
  options: Array<{ label: string; value: string }>
}

export function Dropdown({ options }: DropdownProps) {
  return (
    <select defaultValue={'Seçiniz'}>
      <option value="Seçiniz">Seçiniz</option>
      {options.map(option => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  )
}

export default Dropdown
