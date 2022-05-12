import styles from './account-add-modal.module.scss'
import { Input } from '@magiclick/input'
import { Dropdown } from '@magiclick/dropdown'
/* eslint-disable-next-line */
export interface AccountAddModalProps {
  setAccountName: (value: string) => void
  setAccountCurrency: (value: string) => void
}
const currencyOpt: string[] = ['TRY', 'USD', 'GBP']

export function AccountAddModal({
  setAccountName,
  setAccountCurrency,
}: AccountAddModalProps) {
  return (
    <div data-testId="container" className={styles.add_account_modal}>
      <div data-testId="input-container">
        <label htmlFor="account-name">Adı</label>
        <Input
          id="account-name"
          classname={styles.add_account_modal_input}
          onChange={setAccountName}
          placeholder={'Hesap adı girin'}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="account-type">Tipi</label>
        <Dropdown
          id="account-type"
          options={currencyOpt}
          onChange={setAccountCurrency}
        />
      </div>
    </div>
  )
}

export default AccountAddModal
