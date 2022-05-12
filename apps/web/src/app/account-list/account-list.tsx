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
import AccountAddModal from '../account-add-modal/account-add-modal'
const currencyOpt: string[] = ['TRY', 'USD', 'GBP']
export const AccountList = () => {
  const [{ data, loading }] = useAxios('/account')
  const [searchString, setSearchString] = useState('')
  const [accounts, setAccounts] = useState<Account[]>(data)
  const [selectedCurrency, setSelectedCurrency] = useState('Seçiniz')
  const [accountName, setAccountName] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [accountCurrency, setAccountCurrency] = useState('Seçiniz')
  const [options, setOptions] = useState<string[]>([])
  useEffect(() => {
    setAccounts(data)
    setOptions(data?.map((account: Account) => account.currency))
  }, [data])
  const handleSave = () => {
    axios
      .post('/account', {
        name: accountName,
        currency: accountCurrency,
      })
      .then(data => {
        setAccounts((prev: Account[]) => [data.data, ...prev])
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
              classname={styles.search}
              onChange={setSearchString}
              placeholder={'Hesap No veya Hesap Adı ile arayın...'}
            />
          </div>
          <div className={styles.header_component}>
            <p>Hesap Tipi </p>
            <Dropdown
              options={options?.filter(
                (opt: string, ind: number, self: string[]): boolean | null =>
                  ind === self.findIndex((t: string) => t === opt),
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
        <AccountAddModal
          setAccountCurrency={setAccountCurrency}
          setAccountName={setAccountName}
        />
      </Modal>
    </div>
  )
}

export default memo(AccountList)
