import styles from './table.module.scss'
import { useHistory } from 'react-router-dom'
import { getCurrency } from '@magiclick/utils/helpers/currency'
import { Account } from '@prisma/client'
import { memo } from 'react'
/* eslint-disable-next-line */
export interface TableProps {
  data: Account[]
  searchString: string
  selectedCurrency?: string
}

export function Table({ data, searchString, selectedCurrency }: TableProps) {
  const history = useHistory()
  const handleCLick = (id: number) => {
    history.push('/account/' + id + '')
  }
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
            if (item?.name.toLowerCase().includes(searchString)) return item
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
            if (selectedCurrency === 'Seçiniz' || selectedCurrency === '')
              return (
                <tr
                  key={index}
                  className={styles.row}
                  onClick={() => handleCLick(id)}
                >
                  <td>{getCurrency(currency)?.sign}</td>
                  <td>{name}</td>
                  <td>{getCurrency(currency)?.label}</td>
                  <td>{accountNumber}</td>
                </tr>
              )
            if (currency === selectedCurrency)
              return (
                <tr
                  key={index}
                  className={styles.row}
                  onClick={() => handleCLick(id)}
                >
                  <td>{getCurrency(currency)?.sign}</td>
                  <td>{name}</td>
                  <td>{getCurrency(currency)?.label}</td>
                  <td>{accountNumber}</td>
                </tr>
              )
            return null
          })}
      </tbody>
    </table>
  )
}

export default memo(Table)
