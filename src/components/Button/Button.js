import styles from './Button.module.scss'
import classNames from "classnames/bind";

export function Button({buttonText, onClick, isLoading, hideOnMobile}) {
  const cx = classNames.bind(styles)

  const Loader = () => {
    return <div className={styles.loading}/>
  }

  const buttonClass = cx({
    button: true,
    hidden: hideOnMobile
  })

  return <button className={buttonClass}
    aria-label={buttonText}
    onClick={onClick}
    disabled={isLoading}>{isLoading ? <>Loading... <Loader/></> : buttonText}</button>
}