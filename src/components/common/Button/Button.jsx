import "./Button.scss";

function Button({ children, variant = "primary", ...props }) {
  return (
    <button className={`btn btn--${variant}`} {...props}>
      <span>{children}</span>
    </button>
  );
}

export default Button;
