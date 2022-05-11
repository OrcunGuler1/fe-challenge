import styles from './account-list.module.scss'
import { Button } from '@magiclick/button'
import { Input } from '@magiclick/input'
import { Dropdown } from '@magiclick/dropdown'
import Table from '../table/table'
import useAxios from 'axios-hooks'
import { memo, useEffect, useState } from 'react'
import Modal from '../modal/modal'
import { Axios as axios } from '../../main'
import { Account } from '@prisma/client'

export const AccountList = () => {
  const [{ data, loading }] = useAxios('/account')
  const [searchString, setSearchString] = useState('')
  const [accounts, setAccounts] = useState(data)
  const [selectedCurrency, setSelectedCurrency] = useState('Seçiniz')
  const [accountName, setAccountName] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [accountCurrency, setAccountCurrency] = useState('Seçiniz')
  useEffect(() => {
    setAccounts(data)
  }, [data])
  const handleSave = () => {
    axios
      .post('/account', {
        name: accountName,
        currency: accountCurrency,
      })
      .then(data => {
        setAccounts((prev: Account[]) => [...prev, data.data])
      })
    setIsOpen(false)
  }
  if (loading) return <div className={styles.container}>Loading...</div>
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        <div className={styles.header}>
          <div className={styles.span_2 + ' ' + styles.header_component}>
            <p>Arama</p>
            <Input
              type="text"
              onChange={setSearchString}
              placeholder={'Hesap No veya Hesap Adı ile arayın...'}
            />
          </div>
          <div className={styles.header_component}>
            <p>Hesap Tipi </p>
            <Dropdown
              options={accounts?.filter(
                (opt: Account, ind: number, self: Account[]) =>
                  ind ===
                  self.findIndex((t: Account) => t.currency === opt.currency),
              )}
              onChange={setSelectedCurrency}
            />
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
          data={accounts}
          searchString={searchString}
          selectedCurrency={selectedCurrency}
        />
      </div>
      <Modal
        isOpen={isOpen}
        close={() => setIsOpen(prev => !prev)}
        title="Yeni Hesap Ekle"
        save={() => handleSave()}
      >
        <div className={styles.add_account_modal}>
          <div>
            <p>Adı</p>
            <Input
              onChange={setAccountName}
              placeholder={'Hesap adı girin'}
              type="text"
            />
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
              onChange={setAccountCurrency}
            />
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default memo(AccountList)
