import styles from './account-activity.module.scss'
import { Settings } from 'luxon'
import { useEffect } from 'react'
import ActivityItem from '../activity-item/activity-item'
import { CurrencyValue } from '@magiclick/utils/types/currency'
import useAxios from 'axios-hooks'
import { Activity, Category } from '@prisma/client'
/* eslint-disable-next-line */
export interface AccountActivityProps {
  id: number | string
  data: Activity[]
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
        ?.filter((item: Activity): Activity | null => {
          if (item.accountId === id) return item
          return null
        })
        .map((item: Activity, index: number) => {
          const categoryData = category.find(
            (item2: Category): Category | null => {
              if (item2.id === item.categoryId) return item2
              return null
            },
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
