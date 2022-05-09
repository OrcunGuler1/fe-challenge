import styles from './account-list.module.scss'
import { Button } from '@magiclick/button'
import { Input } from '@magiclick/input'
import { Dropdown } from '@magiclick/dropdown'
import Table from '../table/table'
import useAxios from 'axios-hooks'
import { memo } from 'react'
/* eslint-disable-next-line */
export interface AccountListProps {}

export const AccountList = (props: AccountListProps) => {
  const [{ data, loading, error }, refetch] = useAxios('/account')
  const setValue = (value: string) => {
    console.log(value)
  }
  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <div className={styles.header}>
          <div className={(styles.span_2, styles.header_component)}>
            <p>aaaa</p>
            <Input onChange={setValue} />
          </div>
          <div>
            <p>aaaa</p>
            <Dropdown
              options={[{ label: 'sjhdf', value: 'sdhfsdklfj' }]}
            ></Dropdown>
          </div>
          <div className={styles.header_component}>
            <Button onClick={() => console.log('click')} children={'aaa'} />
          </div>
        </div>
      </div>
      <Table data={data} />
    </div>
  )
}

export default memo(AccountList)
