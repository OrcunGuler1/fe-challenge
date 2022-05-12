import styles from './title.module.scss'

export const Title = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>MagicHesap</h1>
    <p className={styles.desc}>Hesap Uzmanı</p>
  </div>
)
export default Title
