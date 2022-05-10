import { Button } from '@magiclick/button'
import styles from './modal.module.scss'

/* eslint-disable-next-line */
export interface ModalProps {
  isOpen: boolean
  children: React.ReactNode
  close: () => void
  save?: () => void
  title: string
}

export function Modal({ isOpen, close, children, save, title }: ModalProps) {
  if (!isOpen) return null
  return (
    <div className={styles.modal}>
      <div className={styles.modal_content}>
        <div className={styles.modal_header}>
          <h2 className={styles.modal_title}>{title}</h2>
          <button type="button" className="close" onClick={close}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className={styles.modal_body}>{children}</div>
        <div className={styles.modal_footer}>
          <Button onclick={() => save}>
            <span>
              <img src="./assets/aprove.svg" alt="approve" />
            </span>
            Kaydet
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Modal
