import styles from './account-list.module.scss';
import { Button } from '@magiclick/button';
import { Input } from '@magiclick/input';
import { Dropdown } from '@magiclick/dropdown';
/* eslint-disable-next-line */
export interface AccountListProps {}

export const AccountList = (props: AccountListProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.span_2}>
          <p>aaaa</p>
          <Input />
        </div>
        <div>
          <p>aaaa</p>
          <Dropdown />
        </div>
        <div>
          <p>aaaa</p>
          <Button onClick={() => console.log('click')} children={'aaa'}/>
        </div>
      </div>
      <Button onClick={() => console.log('clicked')}>asd</Button>
    </div>
  );
};

export default AccountList;
