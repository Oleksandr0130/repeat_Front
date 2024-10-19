import './styles.css'

function Button({nameButton, type = 'button'}) {
  return <button className="button-component" type={type}>{nameButton}</button>;
}

export default Button