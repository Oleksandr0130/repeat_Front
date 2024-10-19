import "./styles.css";

function Input({ label, type, name, placeholder, id }) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className="input-element"
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
