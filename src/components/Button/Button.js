import './Button.css';

export function Button({buttonText, onClick}) {
  return <button className="button"
                 aria-label={buttonText}
                 onClick={onClick}>{buttonText}</button>
}