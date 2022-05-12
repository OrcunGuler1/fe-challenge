import { Button } from '@magiclick/button'
import styles from './account-details.module.scss'
import { useHistory, useParams } from 'react-router-dom'
import useAxios from 'axios-hooks'
import AccountActivity from '../account-activity/account-activity'
import { getCurrency, getCurrencySign } from '@magiclick/utils/helpers/currency'
import Modal from '../modal/modal'
import { memo, useEffect, useState } from 'react'
import { Axios as axios } from '../../main'
import DetailsModal from '../details-modal/details-modal'
import Flag from '../flag/flag'
import { $enum } from 'ts-enum-util'
import { DateTime } from 'luxon'
import { CategoryType } from '@magiclick/utils/types/category'
import { Account, Activity } from '@prisma/client'
import { CurrencyValue } from '@magiclick/utils/types/currency'

interface RouteParams {
  id: string
}

export const AccountDetails = () => {
  const { id } = useParams<RouteParams>()
  const [{ data }] = useAxios<Account>('/account/' + id)
  const [{ data: activityData }] = useAxios('/activity/' + id)
  const [activities, setActivities] = useState<Activity[]>(activityData)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [date, setDate] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [amount, setAmount] = useState<number>(0)
  const [description, setDescription] = useState<string>('')
  const [type, setType] = useState<number>(0)
  const formatDate = (date: string) => {
    const dateTime = DateTime.fromFormat(date, 'yyyy-mm-dd').toISO()
    setDate(dateTime)
  }
  const setters = {
    setAmount,
    formatDate,
    setCategory,
    setDescription,
    setType,
  }
  useEffect(() => {
    setActivities(activityData)
  }, [activityData])
  const handleSave = () => {
    axios
      .post('/activity', {
        accountId: Number(id),
        description: description,
        amount: Number(amount),
        type: Number(type),
        createdAt: new Date(date),
        categoryId: $enum(CategoryType).getValueOrDefault(category),
      })
      .then((data: any) => {
        setActivities(prev => [...prev, data])
        setIsOpen(prev => !prev)
      })
      .catch(err => console.log(err))
  }
  const history = useHistory()
  const handleCLick = () => {
    history.push('/')
  }
  return (
    <div data-testId="container" className={styles.container}>
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
        <Flag currency={data?.currency} />
        <div className={styles.account_info_container}>
          <p>{data?.name}</p>
          <span className={styles.account_info}>
            <p>{data?.accountNumber} - </p>
            <p>{getCurrency(data?.currency)?.label}</p>
            <p>({getCurrencySign(data?.currency)})</p>
          </span>
        </div>
      </div>
      <div className={styles.activity_header}>
        <p>Hesap Hareketleri</p>
        <p>{activities?.length + ' Sonuç'}</p>
      </div>
      {activities?.map((activity: Activity) => (
        <AccountActivity
          id={activity.categoryId}
          data={activity}
          currency={data ? data.currency : CurrencyValue.TRY}
        />
      ))}
      <Modal
        isOpen={isOpen}
        close={() => setIsOpen(prev => !prev)}
        save={() => handleSave()}
        title={'Yeni Hesap Hareketi'}
      >
        <DetailsModal setters={setters} />
      </Modal>
    </div>
  )
}

export default AccountDetails
