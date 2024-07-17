import React, { useState } from "react";
import { Grid, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, InputLabel, MenuItem, FormControl } from "@mui/material";
import { Profilemodel, ProfilevalidationSchema } from "../Model/Profilemodel";
import { config } from "../Pages/Constant";
import { Formik, Form } from "formik";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Validationschema } from "../Pages/Validationschema";
import { SelectDepartment, SelectDesignation } from "../Elements/select";
interface Iprops {
  ProfileCL: Profilemodel;
  Open: boolean;
  handleClose: () => void;
  handleSubmit: (data: Profilemodel) => void;
  initValues: Profilemodel;
}

const Profiledetailaddedit: React.FC<Iprops> = ({ handleClose, initValues, Open, handleSubmit, ProfileCL }) => {
  const initialprofiledata: Profilemodel = ProfileCL ? ProfileCL : initValues;

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // const validationSchema = yup.object({
  //   firstName: yup.string().required('First Name is required'),
  //   lastName: yup.string().required('Last Name is required'),
  //   email: yup.string().email('Invalid email format').required('Email is required'),

  //   phoneNo1: yup.string().required('Phone Number 1 is required'),
  //   phoneNo2: yup.string(),
  //   deptId: yup.string().required('Department ID is required'),
  //   dateOfBirth: yup.date().required('Date of Birth is required').nullable(),
  //   designation: yup.string().required('Designation is required'),
  //   hiringDate: yup.date().required('Hiring Date is required').nullable(),
  //   permanentAddress: yup.string().required('Permanent Address is required'),
  //   correspondingAddress: yup.string().required('Corresponding Address is required'),
  // });

  // const validatePassword = (password: string): string => {
  //   if (!password) {
  //     return 'Please enter a password';
  //   }

  //   if (!/[0-9]/.test(password)) {
  //     return 'Password must contain at least one digit';
  //   }
  //   if (!/[a-z]/.test(password)) {
  //     return 'Password must contain at least one lowercase letter';
  //   }
  //   if (!/[A-Z]/.test(password)) {
  //     return 'Password must contain at least one uppercase letter';
  //   }
  //   if (!/[@$!%*#?&]/.test(password)) {
  //     return 'Password must contain at least one special character';
  //   }
  //   if (/^(123|234|345|456|567|678|789|012)/.test(password)) {
  //     return 'Consecutive digits not allowed';
  //   }
  //   if (/(123|234|345|456|567|678|789|890|901|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/.test(password)) {
  //     return 'Sequence of characters not allowed';
  //   }
  //   if (/(AAA|BBB|CCC|DDD|EEE|FFF|GGG|HHH|III|JJJ|KKK|LLL|MMM|NNN|OOO|PPP|QQQ|RRR|SSS|TTT|UUU|VVV|WWW|XXX|YYY|ZZZ|ABCDEFGHIJKLMNOPQRSTUVWXYZ)/.test(password)) {
  //     return 'Sequence of uppercase alphabets not allowed';
  //   }
  //   if (/(.)\1\1/.test(password)) {
  //     return 'Consecutive characters not allowed';
  //   }

  //   return '';
  // };

  const formatDate = (date: Date | string | undefined): string => {
    if (!date) return "";
    const d = new Date(date);
    return d.toISOString().split("T")[0];
  };

  return (
    <Dialog open={Open} onClose={handleClose} maxWidth="lg" classes={{ paper: "dialog" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <DialogTitle className="card-title">Edit Profile</DialogTitle>
        <Button onClick={handleClose} style={{ cursor: "pointer" }}>
          <Typography variant="h5" component="span" style={{ fontSize: "32px" }}>
            &#10005;
          </Typography>
        </Button>
      </div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Formik
          initialValues={{
          
            ...initialprofiledata, 
          
            // dateOfBirth: formatDate(initialprofiledata.dateOfBirth),
            dateOfBirth: initialprofiledata.dateOfBirth ? dayjs(initialprofiledata.dateOfBirth) : null,
            // hiringDate: formatDate(initialprofiledata.hiringDate),
            hiringDate: initialprofiledata.hiringDate ? dayjs(initialprofiledata.hiringDate) : null,
          }}
          enableReinitialize={true}
          validateOnChange={true}
          // validationSchema={ProfilevalidationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setLoading(true);
            var data = JSON.parse(JSON.stringify(values));
            // delete data['picture']
            data = JSON.stringify(data);
            console.log(data);
            fetch(config.url.API_URL + "/UserData/Update", {
              method: "PUT",
              headers: new Headers({
                "Content-Type": "application/json",
              }),
              body: data,
            })
              .then((res) => {
                if (res.ok) {
                  return res.json();
                }
                throw new Error("Something went wrong");
              })

              .then((res) => {
                console.log(res);
                console.log(res.data);
                if (res.resp !== 0) {
                  throw new Error(res.message);
                }
                alert(res.message);
                setLoading(false);
                handleSubmit(res);
              })
              .catch((error) => {
                setLoading(false);
                setError(error.message);
                alert(error.message);
                console.error("Error:", error);
              })
              .finally(() => setSubmitting(false));
          }}
        >
          {({ values, handleChange, setFieldValue, handleBlur, errors, touched }) => (
            <Form className="main-form p-4">
              <DialogContent className="dialog-content" >
                <DialogContentText className="dialog-text">Please add profile information below:</DialogContentText>
                <Grid container spacing={2}>
                  <Grid item xs={6} md={6}>
                    <InputLabel className="formtexthelper-heading" htmlFor="firstName">First Name</InputLabel>
                    <TextField fullWidth  id="firstName" name="firstName" value={values.firstName || ""} onChange={handleChange} onBlur={handleBlur} className="input-box" error={touched.firstName && !!errors.firstName} />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <InputLabel className="formtexthelper-heading" htmlFor="lastName">Last Name</InputLabel>
                    <TextField fullWidth   id="lastName" name="lastName" value={values.lastName || ""} onChange={handleChange} onBlur={handleBlur}  error={touched.lastName && !!errors.lastName} />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <InputLabel className="formtexthelper-heading" htmlFor="email">Email</InputLabel>
                    <TextField fullWidth  id="lastName" name="email" value={values.email || ""} onChange={handleChange} onBlur={handleBlur}  error={touched.email && !!errors.email} />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <InputLabel className="formtexthelper-heading" htmlFor="password">Password</InputLabel>
                    <TextField fullWidth   id="password" name="password" value={values.password || ""} onChange={handleChange} onBlur={handleBlur}  error={touched.password && !!errors.password} />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <InputLabel className="formtexthelper-heading" htmlFor="phoneNo1">Phone No1</InputLabel>
                    <TextField fullWidth 
                      
                      id="phoneNo1"
                      name="phoneNo1"
                      value={values.phoneNo1 || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      
                      error={touched.phoneNo1 && !!errors.phoneNo1} />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <InputLabel className="formtexthelper-heading" htmlFor="phoneNo2">Phone No2</InputLabel>
                    <TextField fullWidth 
                      
                      id="phoneNo2"
                      name="phoneNo2"
                      value={values.phoneNo2 || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      
                      error={touched.phoneNo2 && !!errors.phoneNo2} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputLabel className="formtexthelper-heading">Date Of Birth</InputLabel>
                    <FormControl sx={{ width: "100%" }}>
                      <DatePicker label={null}
                        className="input-box"
                        value={values.dateOfBirth || null}
                        onChange={(newValue) =>
                          setFieldValue("dateOfBirth",
                            newValue)} />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputLabel className="formtexthelper-heading">Hiring Date</InputLabel>
                    <FormControl sx={{ width: "100%" }}>
                      <DatePicker label={null}
                        className="input-box"
                        value={values.hiringDate || null}
                        onChange={(newValue) =>
                          setFieldValue("hiringDate",
                            newValue)} />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputLabel className="formtexthelper-heading" htmlFor="departmentId">Department</InputLabel>
                    <SelectDepartment name="departmentId" placeholder="department" label="" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputLabel className="formtexthelper-heading" htmlFor="designation">Designation</InputLabel>
                    <SelectDesignation name="designation" placeholder="Designation" label="" />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <InputLabel className="formtexthelper-heading" htmlFor="permanentAddress">Permanent Address</InputLabel>
                    <TextField fullWidth 
                      
                      id="permanentAddress"
                      name="permanentAddress"
                      value={values.permanentAddress || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      
                      error={touched.permanentAddress && !!errors.permanentAddress} />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <InputLabel className="formtexthelper-heading" htmlFor="correspondingAddress">Corresponding Address</InputLabel>
                    <TextField fullWidth 
                      
                      id="correspondingAddress"
                      name="correspondingAddress"
                      value={values.correspondingAddress || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      
                      error={touched.correspondingAddress && !!errors.correspondingAddress} />
                  </Grid>
                </Grid>
              </DialogContent>
              <div className="dialog-actions">
                <Button type="submit" className="main-btn mt-3 float-end">
                  {loading ? "Saving..." : "Save"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </LocalizationProvider>
    </Dialog>
  );
};

export default Profiledetailaddedit;
