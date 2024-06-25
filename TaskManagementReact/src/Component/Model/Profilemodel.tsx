import * as yup from 'yup';
export interface Profilemodel {
  userId: number,
  picture: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phoneNo1: number,
  phoneNo2: number,
  deptId: number,
  dateOfBirth:  Date,
  designation: string,
  hiringDate: Date,
  permanentAddress: string,
  correspondingAddress: string,
  isDeleted: boolean,
  createdBy: string,
  modifiedBy: string,
  dateCreated: Date,
  dateModified: Date
  }
 

  // export interface profData{
  //   userId: number,
  //   picture: string,
  //   firstName: string,
  //   lastName: string,
  //   email: string,
  //   password: string,
  //   phoneNo1: number,
  //   phoneNo2: number,
  //   deptId: number,
  //   dateOfBirth:  Date,
  //   designation: string,
  //   hiringDate: Date,
  //   permanentAddress: string,
  //   correspondingAddress: string,
  //   isDeleted: boolean,
  //   createdBy: string,
  //   modifiedBy: string,
  //   dateCreated: Date,
  //   dateModified: Date
  // }
