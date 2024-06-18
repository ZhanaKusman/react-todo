import PropTypes from "prop-types";

const InputWithLabel = ({ id, label, type, value, onChange }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} value={value} onChange={onChange} />
    </>
  );
};

InputWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputWithLabel;
