import styles from './activity-item.module.scss'
import { DateTime } from 'luxon'
import { getCurrency } from '@magiclick/utils/helpers/currency'
import { CurrencyValue } from '@magiclick/utils/types/currency'
import useAxios from 'axios-hooks'
/* eslint-disable-next-line */
export interface ActivityItemProps {
  item: any
  currency: CurrencyValue
  categoryData: any
}

export function ActivityItem({
  item,
  currency,
  categoryData,
}: ActivityItemProps) {
  const formatDate = (date: string) => {
    return DateTime.fromISO(date).toLocaleParts(DateTime.DATE_FULL)
  }
  return (
    <div className={styles.container}>
      <div className={styles.date}>
        <p>{formatDate(item.createdAt)[0].value}</p>
        <p>{formatDate(item.createdAt)[2].value}</p>
      </div>
      <div className={styles.details}>
        <div className={styles.details_container}>
          <p>{item.description}</p>
          <p>{categoryData}</p>
        </div>
        <p className={item.type === 0 ? styles.red : styles.green}>
          {item.type === 0 ? '-' : '+'}
          {item.amount}
          <span>{getCurrency(currency)?.sign}</span>
        </p>
      </div>
    </div>
  )
}

export default ActivityItem
