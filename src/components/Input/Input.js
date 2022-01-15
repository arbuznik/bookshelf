import './Input.css';

export function Input({placeholder, onChange, value}) {
  return <input type="text" className="input" value={value} placeholder={placeholder} onChange={(evt) => onChange(evt.target.value)}/>;
}