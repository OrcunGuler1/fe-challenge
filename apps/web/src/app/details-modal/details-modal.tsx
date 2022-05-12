import styles from './details-modal.module.scss'
import { Input } from '@magiclick/input'
import { Dropdown } from '@magiclick/dropdown'
import { memo } from 'react'
import useAxios from 'axios-hooks'
import { Category } from '@prisma/client'
export interface DetailsModalProps {
  setters: {
    setDescription: (value: string) => void
    setCategory: (value: string) => void
    setAmount: (value: number) => void
    setType: (value: number) => void
    formatDate: (value: string) => void
  }
}
export function DetailsModal(props: DetailsModalProps) {
  const [{ data }] = useAxios('/category')
  const { formatDate, setCategory, setDescription, setAmount, setType } =
    props.setters
  return (
    <>
      <div className={styles.top_content}>
        <div className={styles.top_content_left}>
          <p>Tarih</p>
          <Input
            type="date"
            placeholder="Seçiniz"
            onChange={formatDate}
            classname={styles.input_styles}
          />
        </div>
        <div className={styles.top_content_middle}>
          <p>Kategori</p>
          <Dropdown
            options={data?.map((category: Category) => category.type)}
            onChange={setCategory}
          />
        </div>
        <div className={styles.top_content_right}>
          <p>Tutar</p>
          <Input
            type="text"
            placeholder="Tutar"
            onChange={setAmount}
            classname={styles.input_styles}
          />
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
        <p>Hareket türü</p>
        <div className={styles.radio_container}>
          <div className={styles.radio_styles}>
            <Input
              classname={styles.radio}
              id="income"
              type="radio"
              placeholder="Gelir"
              onChange={() => setType(1)}
              name="type"
            />
            <label htmlFor="income">Gelir</label>
          </div>
          <div className={styles.radio_styles}>
            <Input
              classname={styles.radio}
              id="expense"
              type="radio"
              placeholder="Gider"
              onChange={() => setType(0)}
              name="type"
            />
            <label htmlFor="expense">Gider</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default memo(DetailsModal)
