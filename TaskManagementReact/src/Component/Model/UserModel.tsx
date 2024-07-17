
import * as Yup from "yup";
import { DepartmentModel } from "./DepartmentModel";

export interface UserModel{
  
  userId: number,
  picture: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phoneNo1: number,
  phoneNo2: number,
  dateOfBirth: Date,
  designation: string,
  hiringDate: Date,
  permanentAddress?: string,
  correspondingAddress?: string,
  isDeleted?: true,
  createdBy?: number,
  modifiedBy?: number,
  dateCreated?: Date,
  dateModified?: Date,
  departmentID?: number,
  department?: DepartmentModel,
  
  
}


export const validationSchema = Yup.object().shape({
  userId: Yup.number().required("User ID is required"),
  picture: Yup.string().url("Invalid URL format").required("Picture URL is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().required("Password is required"),
  phoneNo1: Yup.number().typeError("Phone Number 1 must be a number").required("Phone Number 1 is required"),
  phoneNo2: Yup.number().typeError("Phone Number 2 must be a number").nullable(),
  deptId: Yup.number().required("Department ID is required"),
  dateOfBirth: Yup.date().required("date is required"),
  designation: Yup.string().required("Designation is required"),
  hiringDate: Yup.date().required("hiringDate is required"),
  permanentAddress: Yup.string().required("Permanent Address is required"),
  correspondingAddress: Yup.string().required("Corresponding Address is required"),
  isDeleted: Yup.boolean().required("Is Deleted is required"),
  createdBy: Yup.number().required("Created By is required"),
  modifiedBy: Yup.number().required("Modified By is required"),
  dateCreated: Yup.date().required("Date Created is required"),
  dateModified: Yup.date().required("Date Modified is required"),
});
