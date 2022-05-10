import styles from './table.module.scss'
import { $enum } from 'ts-enum-util'
import { useHistory } from 'react-router-dom'
/* eslint-disable-next-line */
export interface TableProps {
  data?: any[]
  searchString?: string
  selectedCurrency?: string
}

enum Currency {
  'TRY' = 'Türk lirası',
  'EUR' = 'Euro',
  'USD' = 'Amerikan doları',
  'GBP' = 'İngiliz Sterlini',
}
enum CurrencySymbol {
  'TRY' = '₺',
  'EUR' = '€',
  'USD' = '$',
  'GBP' = '£',
}

export function Table({ data, searchString, selectedCurrency }: TableProps) {
  const history = useHistory()
  return (
    <table>
      <thead>
        <tr className={styles.col_names}>
          <th>&nbsp;</th>
          <th>HESAP ADI</th>
          <th>PARA BİRİMİ</th>
          <th>HESAP NO</th>
        </tr>
      </thead>
      <tbody>
        {data
          ?.filter(item => {
            if (item?.name.includes(searchString)) return item
            else if (
              item?.accountNumber
                .toString()
                ?.includes(
                  searchString?.trim().length === 0 ? '' : searchString?.trim(),
                )
            )
              return item
            return null
          })
          .map(({ name, currency, accountNumber, id }, index) => {
            console.log(selectedCurrency)
            if (selectedCurrency === 'Seçiniz' || selectedCurrency === '')
              return (
                <tr
                  key={index}
                  className={styles.row}
                  onClick={() => {
                    history.push(`/account/${id}`)
                  }}
                >
                  <td>{$enum(CurrencySymbol).getValueOrDefault(currency)}</td>
                  <td>{name}</td>
                  <td>{$enum(Currency).getValueOrDefault(currency)}</td>
                  <td>{accountNumber}</td>
                </tr>
              )
            if (currency === selectedCurrency)
              return (
                <tr
                  key={index}
                  className={styles.row}
                  onClick={() => {
                    history.push(`/account/${id}`)
                  }}
                >
                  <td>{$enum(CurrencySymbol).getValueOrDefault(currency)}</td>
                  <td>{name}</td>
                  <td>{$enum(Currency).getValueOrDefault(currency)}</td>
                  <td>{accountNumber}</td>
                </tr>
              )
            return null
          })}
      </tbody>
    </table>
  )
}

export default Table
