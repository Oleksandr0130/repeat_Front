import "./styles.css";

function Button({ nameButton, type = "button", onButtonClick }) {
  return (
    <button className="button-component" type={type} onClick={onButtonClick}>
      {nameButton}
    </button>
  );
}

export default Button;
