import React from "react";

const InputField = ({ formik, label, name, type = "text" }) => {
  console.log(formik.errors[name]);
  return (
    <div>
      <label className="form-label">{label}</label>
      <input
        name={name}
        onChange={formik.handleChange}
        // onBlur input odak kaybolunca başka yere basınca
        onBlur={formik.handleBlur}
        // touched onBlur state tutar
        className={`form-control ${
          formik.touched[name] && formik.errors[name] && "is-invalid"
        }`} //is-invalid bootstrapten geldi
        type={type}
      />
      <label className="feedback">{formik.errors[name]}</label>
    </div>
  );
};

export default InputField;
