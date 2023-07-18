/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
const Button = ({ children, onShowForm }) => {
  return (
    <button className="button" onClick={onShowForm}>
      {children}
    </button>
  );
};

export default Button;
