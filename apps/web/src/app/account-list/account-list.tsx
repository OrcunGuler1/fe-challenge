import styles from './account-list.module.scss'
import { Button } from '@magiclick/button'
import { Input } from '@magiclick/input'
import { Dropdown } from '@magiclick/dropdown'
import Table from '../table/table'
import useAxios from 'axios-hooks'
import { memo, useState } from 'react'
import Modal from '../modal/modal'
/* eslint-disable-next-line */
export interface AccountListProps {}

export const AccountList = (props: AccountListProps) => {
  const [{ data, loading, error }, refetch] = useAxios('/account')
  const [searchString, setSearchString] = useState('')
  const [selectedCurrency, setSelectedCurrency] = useState('Seçiniz')
  const [accountName, setAccountName] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [accountCurrency, setAccounCurrency] = useState('Seçiniz')

  if (loading) return <div className={styles.container}>Loading...</div>
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.header}>
          <div className={styles.span_2 + ' ' + styles.header_component}>
            <p>Arama</p>
            <Input
              onChange={setSearchString}
              placeholder={'Hesap No veya Hesap Adı ile arayın...'}
            />
          </div>
          <div className={styles.header_component}>
            <p>Hesap Tipi </p>
            <Dropdown options={data} onChange={setSelectedCurrency} />
          </div>
          <div className={styles.header_component}>
            <Button onclick={() => setIsOpen(prev => !prev)}>
              <span>
                <img src="/assets/cross.svg" alt="plus" />
              </span>
              YENİ HESAP
            </Button>
          </div>
        </div>
        <Table
          data={data}
          searchString={searchString}
          selectedCurrency={selectedCurrency}
        />
      </div>
      <Modal
        isOpen={isOpen}
        close={() => setIsOpen(prev => !prev)}
        title="Yeni Hesap Ekle"
      >
        <div className={styles.add_account_modal}>
          <div>
            <p>Adı</p>
            <Input onChange={setAccountName} placeholder={'Hesap adı girin'} />
          </div>
          <div>
            <p>Tipi</p>
            <Dropdown
              options={[
                { currency: 'TRY' },
                { currency: 'GBP' },
                { currency: 'USD' },
                { currency: 'EUR' },
              ]}
              onChange={setAccounCurrency}
            />
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default memo(AccountList)
