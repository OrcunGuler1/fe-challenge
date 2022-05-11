import styles from './details-modal.module.scss'
import { useState } from 'react'
import { Input } from '@magiclick/input'
import { Dropdown } from '@magiclick/dropdown'
/* eslint-disable-next-line */
export interface DetailsModalProps {}
const options: string[] = ['Market', 'Gelir', 'Gider', 'Diğer']
export function DetailsModal(props: DetailsModalProps) {
  const [date, setDate] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [amount, setAmount] = useState<string>()
  const [description, setDescription] = useState<string>()
  const [type, setType] = useState<number | string>()
  return (
    <>
      <div className={styles.top_content}>
        <div className={styles.top_content_left}>
          <p>Tarih</p>
          <Input type="date" placeholder="Seçiniz" onChange={setDate} />
        </div>
        <div className={styles.top_content_middle}>
          <p>Kategori</p>
          <Dropdown options={options} onChange={setCategory} />
        </div>
        <div className={styles.top_content_right}>
          <p>Tutar</p>
          <Input type="text" placeholder="Tutar" onChange={setAmount} />
        </div>
      </div>
      <div className={styles.middle_content}>
        <textarea
          className={styles.textarea}
          placeholder="Açıklama"
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <div className={styles.bottom_content}>
        <Input type="radio" placeholder="Gelir" onChange={setType} />
        <Input type="radio" placeholder="Gider" onChange={setType} />
      </div>
    </>
  )
}

export default DetailsModal
