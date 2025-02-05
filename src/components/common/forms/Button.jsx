
import './Button.css'
function Button({ className, value, ...props }) {
  return (
    <button className={className} {...props}>
      {value}
    </button>
  );
}

export default Button;
