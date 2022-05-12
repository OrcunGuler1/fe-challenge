import styles from './account-activity.module.scss'
import { Settings } from 'luxon'
import { memo, useEffect } from 'react'
import ActivityItem from '../activity-item/activity-item'
import { CurrencyValue } from '@magiclick/utils/types/currency'
import useAxios from 'axios-hooks'
import { Activity } from '@prisma/client'
export interface AccountActivityProps {
  id: number
  data: Activity
  currency: CurrencyValue | string
}

export function AccountActivity({ id, data, currency }: AccountActivityProps) {
  const [{ data: category }] = useAxios('/category/' + String(id))
  useEffect(() => {
    Settings.defaultLocale = 'tr'
  }, [])
  return (
    <ActivityItem
      item={data}
      currency={currency}
      categoryData={category?.type}
    />
  )
}

export default AccountActivity
