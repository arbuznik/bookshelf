import styles from './Input.module.scss'
import {forwardRef} from "react";

export const Input = forwardRef(({placeholder, onChange, value}, ref) => {
  return <input autoFocus
                ref={ref}
                type="text"
                className={styles.input}
                value={value}
                placeholder={placeholder}
                onChange={(evt) => onChange(evt.target.value)}
                required/>
})