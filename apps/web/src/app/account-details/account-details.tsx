import { Button } from '@magiclick/button'
import styles from './account-details.module.scss'
import { useHistory, useParams } from 'react-router-dom'
import useAxios from 'axios-hooks'
import { $enum } from 'ts-enum-util'
import AccountActivity from '../account-activity/account-activity'
/* eslint-disable-next-line */
export interface AccountDetailsProps {}
interface RouteParams {
  id: string
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
export function AccountDetails(props: AccountDetailsProps) {
  const { id } = useParams<RouteParams>()
  const [{ data, loading, error }, refetch] = useAxios('/account/' + id)
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
        <Button onclick={handleCLick}>
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
            <p>{$enum(Currency).getValueOrDefault(data?.currency)}</p>
            <p>({$enum(CurrencySymbol).getValueOrDefault(data?.currency)})</p>
          </span>
        </div>
      </div>
      <AccountActivity id={data?.id} />
    </div>
  )
}

export default AccountDetails
