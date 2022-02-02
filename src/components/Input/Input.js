import styles from './Input.module.scss'

export function Input({placeholder, onChange, value}) {
  return <input autoFocus
                type="text"
                className={styles.input}
                value={value}
                placeholder={placeholder}
                onChange={(evt) => onChange(evt.target.value)}/>
}