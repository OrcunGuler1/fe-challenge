import styles from './account-activity.module.scss'
import { Settings } from 'luxon'
import { useEffect } from 'react'
import ActivityItem from '../activity-item/activity-item'
import { CurrencyValue } from '@magiclick/utils/types/currency'
import useAxios from 'axios-hooks'
/* eslint-disable-next-line */
export interface AccountActivityProps {
  id: number | string
  data: any[]
  currency: CurrencyValue
}

export function AccountActivity({ id, data, currency }: AccountActivityProps) {
  const [{ data: category }] = useAxios('/category')

  useEffect(() => {
    Settings.defaultLocale = 'tr'
  }, [])
  console.log(data)
  return (
    <div className={styles.container}>
      {data
        ?.filter((item: any) => {
          if (item.accountId === id) return item
        })
        .map((item: any, index: number) => {
          const categoryData = category.find(
            (item2: any) => item2.id === item.categoryId,
          )

          return (
            <ActivityItem
              key={index}
              item={item}
              currency={currency}
              categoryData={categoryData.type}
            />
          )
        })}
    </div>
  )
}

export default AccountActivity
