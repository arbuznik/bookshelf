import './Button.css';

export function Button({buttonText}) {
  return <button className="button" aria-label={buttonText}>{buttonText}</button>
}