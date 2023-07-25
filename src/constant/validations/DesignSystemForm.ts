import * as Yup from "yup";

export const LoginValidation = Yup.object({
  username: Yup.string()
    .required("Required")
    .min(5, "Must be 5 characters or less")
    .max(10, "Must be 10 characters or less")
    .trim("Username cannot contain whitespace. Please remove the whitespace."),
  password: Yup.string()
    .required("Required")
    .min(5, "Must be 5 characters or less")
    .max(10, "Must be 10 characters or less")
    .trim("Password cannot contain whitespace. Please remove the whitespace."),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password")], "Passwords must match")
    .trim("Password cannot contain whitespace. Please remove the whitespace."),
});
