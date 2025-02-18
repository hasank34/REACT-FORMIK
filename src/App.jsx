import { useFormik } from "formik";
import React from "react";
import schema from "./schema";
import InputField from "./InputField";
import { inputs } from "./constants";

const App = () => {
  // useFormik: formik'in bütün özelliklerini kullanmamızı sağlayan hook
  const formik = useFormik({
    // state'i tutulacak olan form verilerinin ilk değerleri
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
    },
    // formiğin hata yönetimi yapması için kuralları söylemeliyiz
    validationSchema: schema,

    // form gönderildiğinde (hata yoksa) çalışacak olan fonksiyon
    onSubmit: (values) => {
      alert("Form Gönderildi: " + JSON.stringify(values));
    },
  });
  console.log(formik.values);
  return (
    <div className="min-vh-100 vw-100 ">
      <div className="container">
        <h2 className="text-center py-5">FORMIK</h2>

        <form
          onSubmit={formik.handleSubmit}
          className="d-flex flex-column gap-4"
        >
          {inputs.map((props) => (
            <InputField formik={formik} {...props} />
          ))}
          <button type="submit" className="my-5">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
