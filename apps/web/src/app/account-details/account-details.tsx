import { Button } from '@magiclick/button'
import styles from './account-details.module.scss'
import { useHistory, useParams } from 'react-router-dom'
import useAxios from 'axios-hooks'
import { $enum } from 'ts-enum-util'
import AccountActivity from '../account-activity/account-activity'
import { getCurrency, getCurrencySign } from '@magiclick/utils/helpers/currency'
/* eslint-disable-next-line */
export interface AccountDetailsProps {}
interface RouteParams {
  id: string
}

export function AccountDetails(props: AccountDetailsProps) {
  const { id } = useParams<RouteParams>()
  const [{ data, loading, error }, refetch] = useAxios('/account/' + id)
  const [{ data: activityData }] = useAxios('/activity')

  const history = useHistory()
  const handleCLick = () => {
    history.push('/')
  }
  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <Button onclick={handleCLick}>
          <span>
            <img src="/assets/left-arrow.svg" alt="left-arrow" />
          </span>
          Ana sayfa
        </Button>
        <Button onclick={() => console.log('asd')}>
          <span>
            <img src="/assets/cross.svg" alt="cross" />
          </span>
          Yeni Hesap Hareketi
        </Button>
      </div>
      <div className={styles.account}>
        <img src="/assets/TR.svg" alt="eur-flag" />
        <div className={styles.account_info_container}>
          <p>{data?.name}</p>
          <span className={styles.account_info}>
            <p>{data?.accountNumber} - </p>
            <p>{getCurrency(data?.currency)?.label}</p>
            <p>({getCurrency(data?.currency)?.sign})</p>
          </span>
        </div>
      </div>
      <div className={styles.activity_header}>
        <p>Hesap Hareketleri</p>
        <p>
          {activityData?.filter((activity: any) => {
            if (activity.accountId === Number(id)) {
              return activity
            }
          }).length + ' Sonuç'}
        </p>
      </div>
      <AccountActivity
        id={data?.id}
        data={activityData}
        currency={data?.currency}
      />
    </div>
  )
}

export default AccountDetails
