import * as Yup from "yup";

export const signUpValidation = Yup.object().shape({
  name: Yup.string()
    .max(64, "Name should not exceed 64 characters")
    .matches(
      /^[A-Za-z\s]*$/,
      "Name should only contain alphabetical characters and spaces"
    )
    .required("Field is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("field is required"),
  password: Yup.string()
    .min(8, "Password should be of minimum 8 characters length")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one letter, one number, and one special character"
    )
    .required("Field is required"),
  policy: Yup.boolean()
    .oneOf([true], "Field is required")
    .required("Field is required"),
});
