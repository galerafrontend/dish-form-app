const SelectInput = ({ label, name, options, formik }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      {formik.touched[name] && formik.errors[name] && (
        <div>{formik.errors[name]}</div>
      )}
    </>
  );
};

export default SelectInput;
