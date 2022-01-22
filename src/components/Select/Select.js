import './Select.css'

export function Select({options, name, text, selected, onChange}) {
  return (
    <div className="select">
      <label htmlFor={name}
             className="select__label">{text}</label>
      <select name={name}
              id={name}
              className="select__selector"
              value={selected}
              onChange={(evt) => onChange(evt.target.value)}>
        {options.map((option, index) => {
          return <option key={index}
                         value={option}
                         className={'select__option'}>{option}</option>
        })}
      </select>
    </div>
  )
}