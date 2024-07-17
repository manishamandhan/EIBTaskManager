import * as Yup from "yup";

export const Validationschema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().required("Password is required"),
  phoneNo1: Yup.string().required("Phone Number 1 is required"),
  phoneNo2: Yup.string().nullable(),
  dateOfBirth: Yup.date().nullable(),
  hiringDate: Yup.date().nullable(),
  designation: Yup.string().required("Designation is required"),
  permanentAddress: Yup.string().required("Permanent Address is required"),
  correspondingAddress: Yup.string().required("Corresponding Address is required"),
});

