const TextInput = ({ label, name, formik, placeholder, step, type }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        step={step}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        placeholder={placeholder}
      />
      {formik.touched[name] && formik.errors[name] && (
        <div>{formik.errors[name]}</div>
      )}
    </>
  );
};

export default TextInput;
