import styles from './Button.module.scss'

export function Button({buttonText, onClick, isLoading}) {
  const Loader = () => {
    return <div className={styles.buttonLoading}/>
  }

  return <button className={styles.button}
                 aria-label={buttonText}
                 onClick={onClick}
                 disabled={isLoading}>{buttonText} {isLoading && <Loader/>}</button>
}