import styles from './Select.module.css'

export function Select({options, name, text, selected, onChange}) {
  return (
    <div className={styles.select}>
      <label htmlFor={name}
             className={styles.label}>{text}</label>
      <select name={name}
              id={name}
              className={styles.selector}
              value={selected}
              onChange={(evt) => onChange(evt.target.value)}>
        {options.map((option, index) => {
          return <option key={index}
                         value={option}>{option}</option>
        })}
      </select>
    </div>
  )
}