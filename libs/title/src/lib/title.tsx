import styles from './title.module.scss';

/* eslint-disable-next-line */
export interface TitleProps {}

export function Title(props: TitleProps) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>MagicHesap</h1>
      <p className={styles.desc}>Hesap Uzmanı</p>
    </div>
  );
}

export default Title;
