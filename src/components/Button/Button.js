import styles from './Button.module.scss'

export function Button({buttonText, onClick}) {
  return <button className={styles.button}
                 aria-label={buttonText}
                 onClick={onClick}>{buttonText}</button>
}