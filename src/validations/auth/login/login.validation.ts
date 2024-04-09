import * as Yup from "yup";

export const loginValidation = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email")
    .required("field is required"),
  password: Yup.string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("field is required"),
});
