import React from "react";
import { Grid, Button, TextField, Dialog, DialogContent, DialogContentText, DialogTitle, Typography, InputLabel, MenuItem, FormControl } from "@mui/material";
import { config } from "../Pages/Constant";
import { Formik, Form } from "formik";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { UserModel } from "../Model/UserModel";
import {Validationschema} from "../Pages/Validationschema"
import { SelectDepartment, SelectDesignation } from "../Elements/select";

interface Iprops {
  UserCL: UserModel;
  Open: boolean;
  handleClose: () => void;
  handleSubmit: () => void;
  initValues: UserModel;
}
export const UserListAddEdit: React.FC<Iprops> = ({ handleClose, initValues, Open, handleSubmit, UserCL }) => {
  const initialuseraddeditdata: UserModel = UserCL ? UserCL : initValues;
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);


  const formatDate = (date: dayjs.Dayjs | null): string | null => {
    return date ? date.format("YYYY-MM-DD") : null;
  };



  return (
    <Dialog open={Open} onClose={handleClose} maxWidth="lg" classes={{ paper: "dialog" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <DialogTitle className="card-title">Add User</DialogTitle>
        <Button onClick={handleClose} style={{ cursor: "pointer" }}>
          <Typography variant="h5" component="span" style={{ fontSize: "32px" }}>
            &#10005;
          </Typography>
        </Button>
      </div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Formik
          initialValues={{
            ...initialuseraddeditdata,
            dateOfBirth: initialuseraddeditdata.dateOfBirth ? dayjs(initialuseraddeditdata.dateOfBirth) : null,
            hiringDate: initialuseraddeditdata.hiringDate ? dayjs(initialuseraddeditdata.hiringDate) : null,
          }}
          //   enableReinitialize={true}
          validationSchema={Validationschema}
          validateOnChange={true}
          onSubmit={(data, { setSubmitting }) => {
            setSubmitting(true);
            const payload = {
              ...data,
              createdBy: "0",
              modifiedBy: "0",
            };
            const finalData = JSON.parse(JSON.stringify(payload));
            delete finalData["picture"];
            delete finalData["userId"];
            //  finalData["departmentID"] = null;
            console.log("Payload:", payload);

            fetch(config.url.API_URL + "/UserData/Save", {
              method: "POST",
              headers: new Headers({
                "Content-Type": "application/json",
              }),
              body: JSON.stringify(payload),
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
                handleSubmit();
                setSubmitting(false);
              })
              .catch((error) => {
                setLoading(false);
                setError(error.message);
                alert(error.message);
                console.error("Error:", error);
              });
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
                    <TextField fullWidth    id="lastName" name="lastName" value={values.lastName || ""} onChange={handleChange} onBlur={handleBlur} className="input-box " error={touched.lastName && !!errors.lastName} />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <InputLabel className="formtexthelper-heading" htmlFor="email">Email</InputLabel>
                    <TextField fullWidth  id="lastName" name="email" value={values.email || ""}  onChange={handleChange} onBlur={handleBlur} className="input-box " error={touched.email && !!errors.email} />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <InputLabel className="formtexthelper-heading" htmlFor="password">Password</InputLabel>
                    <TextField fullWidth   id="password" name="password" value={values.password || ""} onChange={handleChange} onBlur={handleBlur} className="input-box" error={touched.password && !!errors.password} />
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
