import { Button } from '@magiclick/button'
import styles from './account-details.module.scss'
import { useHistory, useParams } from 'react-router-dom'
import useAxios from 'axios-hooks'
import AccountActivity from '../account-activity/account-activity'
import { getCurrency } from '@magiclick/utils/helpers/currency'
import Modal from '../modal/modal'
import { useState } from 'react'
import { Input } from '@magiclick/input'
import { Dropdown } from '@magiclick/dropdown'
import { Axios as axios } from '../../main'
import { Activity } from '@prisma/client'
interface RouteParams {
  id: string
}

export function AccountDetails() {
  const { id } = useParams<RouteParams>()
  const [{ data }] = useAxios('/account/' + id)
  const [{ data: activityData }] = useAxios('/activity')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [date, setDate] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const handleSave = () => {
    setIsOpen(prev => !prev)
  }
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
        <Button onclick={() => setIsOpen(true)}>
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
          {activityData?.filter((activity: Activity): Activity | undefined => {
            if (activity.accountId === Number(id)) return activity
            return undefined
          }).length + ' Sonuç'}
        </p>
      </div>
      <AccountActivity
        id={data?.id}
        data={activityData}
        currency={data?.currency}
      />
      <Modal
        isOpen={isOpen}
        close={() => setIsOpen(prev => !prev)}
        save={() => handleSave()}
        title={'Yeni Hesap Hareketi'}
      >
        <Input type="date" placeholder="Seçiniz" onChange={setDate} />
        <Dropdown options={[]} onChange={setCategory} />
      </Modal>
    </div>
  )
}

export default AccountDetails
