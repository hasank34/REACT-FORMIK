// validayson şeması
// yup kullanarak bir doğrulama şeması oluşturabiliriz.
// şemalar, nesnelerin yapısını ve bu nesnelerin her bir alanı için
// geçerli doğrulama kurallarının tanıtılmasını sağlar.

import * as yup from "yup";

// REGEX Kuralları: en az
// 1 büyük harf
// 1 küçük harf
// 1 rakam
// 1 özel karakter
// min 5 karakter

const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#!@$%^&*-]).{5,}$";

// yup.object().shape() ifadesi form'un state'ini tuttuğumuz nesnenin her bir
// alanın geçerli olması için gerekli olan koşulları ifade etmemizi sağlar.
const schema = yup.object().shape({
  //emaik alanının geçerli olması için gerekli koşulları yazarız.
  email: yup
    .string()
    .required("Email alanı zorunludur.")
    .email("Email formatı doğru değil"),

  //   age alanı
  age: yup
    .number()
    .min(18, "Yaş 18'den küçük olamaz")
    .max(100, "Yaş 100'den büyük olamaz.")
    .integer("Yaş değeri tam sayı olmalıdır.")
    .required("Yaş alanı zorunludur."),
  // password alanı
  // matches ile şifre uygun mu diye kontrol edilir.
  password: yup
    .string()
    .min(5, "Şifre en az 5 karakter olmalıdır.")
    .required("Şifre alanı zorunludur.")
    .matches(
      regex,
      "Şifre, en az bir küçük harf, bir büyük harf, bir rakam ve bir özel karakter içermelidir."
    ),

  // confirmPassword alanı
  // oneOf dizi alır birden çok eşleşme durumu yapılır
  // ref ile nesnenin farklı bir metodunu çağırır.
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor.")
    .required("Şifre onayı alanı zorunludur."),
});

export default schema;
