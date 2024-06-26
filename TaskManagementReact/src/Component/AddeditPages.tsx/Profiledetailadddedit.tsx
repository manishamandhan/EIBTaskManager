import React, { useState } from 'react';
import {
  Grid,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
  InputLabel,
} from '@mui/material';
import { Profilemodel } from '../Model/Profilemodel';
import { config } from '../Pages/Constant';
import { useFormik, Formik, Form } from 'formik';
import * as yup from 'yup';
import { json } from 'stream/consumers';

interface Iprops {
  ProfileCL: Profilemodel;
  Open: boolean;
  handleClose: () => void;
  handleSubmit: (data: Profilemodel) => void;
  initValues: Profilemodel;
}

const Profiledetailaddedit: React.FC<Iprops> = ({ handleClose, initValues, Open, handleSubmit, ProfileCL }) => {
  const initialprofiledata: Profilemodel = ProfileCL ? ProfileCL : initValues;
  const [profileImage, setProfileImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const validationSchema = yup.object({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid email format').required('Email is required'),

    phoneNo1: yup.string().required('Phone Number 1 is required'),
    phoneNo2: yup.string(),
    deptId: yup.string().required('Department ID is required'),
    dateOfBirth: yup.date().required('Date of Birth is required').nullable(),
    designation: yup.string().required('Designation is required'),
    hiringDate: yup.date().required('Hiring Date is required').nullable(),
    permanentAddress: yup.string().required('Permanent Address is required'),
    correspondingAddress: yup.string().required('Corresponding Address is required'),
  });

  const validatePassword = (password: string): string => {
    if (!password) {
      return 'Please enter a password';
    }

    if (!/[0-9]/.test(password)) {
      return 'Password must contain at least one digit';
    }
    if (!/[a-z]/.test(password)) {
      return 'Password must contain at least one lowercase letter';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must contain at least one uppercase letter';
    }
    if (!/[@$!%*#?&]/.test(password)) {
      return 'Password must contain at least one special character';
    }
    if (/^(123|234|345|456|567|678|789|012)/.test(password)) {
      return 'Consecutive digits not allowed';
    }
    if (/(123|234|345|456|567|678|789|890|901|abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz)/.test(password)) {
      return 'Sequence of characters not allowed';
    }
    if (/(AAA|BBB|CCC|DDD|EEE|FFF|GGG|HHH|III|JJJ|KKK|LLL|MMM|NNN|OOO|PPP|QQQ|RRR|SSS|TTT|UUU|VVV|WWW|XXX|YYY|ZZZ|ABCDEFGHIJKLMNOPQRSTUVWXYZ)/.test(password)) {
      return 'Sequence of uppercase alphabets not allowed';
    }
    if (/(.)\1\1/.test(password)) {
      return 'Consecutive characters not allowed';
    }

    return '';
  };

  const formatDate = (date: Date | string | undefined): string => {
    if (!date) return '';
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  };

  return (
    <Dialog open={Open} onClose={handleClose} maxWidth="lg" classes={{ paper: 'dialog' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <DialogTitle className="card-title">Edit Profile</DialogTitle>
        <Button onClick={handleClose} style={{ cursor: 'pointer' }}>
          <Typography variant="h5" component="span" style={{ fontSize: '32px' }}>
            &#10005;
          </Typography>
        </Button>
      </div>

      <Formik
        initialValues={{
          ...initialprofiledata,
          dateOfBirth: formatDate(initialprofiledata.dateOfBirth),
          hiringDate: formatDate(initialprofiledata.hiringDate),
        }}
        enableReinitialize={true}
        validateOnChange={true}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setLoading(true);
          var data = JSON.parse(JSON.stringify(values));
          // delete data['picture']
          data = JSON.stringify(data);
          console.log(data);
          fetch(config.url.API_URL + '/UserData/Update', {
            method: 'PUT',
            headers: new Headers({
              'Content-Type': 'application/json',
            }),
            body: data,
          })
            .then((res) => {
              if (res.ok ){
                return res.json();
              }
              throw new Error('Something went wrong');
            })
           
            .then((res) => {
              console.log(res);
              console.log(res.data);
              if(res.resp != 0){
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
              console.error('Error:', error);
            })
            .finally(() => setSubmitting(false));
        }}
      >
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <Form className="main-form">
            <DialogContent className="dialog-content">
              <DialogContentText className="dialog-content-text">
                Please edit your profile information below:
              </DialogContentText>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="firstName">First Name</InputLabel>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="firstName"
                    name="firstName"
                    value={values.firstName || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input-box"
                    error={touched.firstName && !!errors.firstName}
                    helperText={touched.firstName && errors.firstName}
                    
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="lastName">Last Name</InputLabel>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="lastName"
                    name="lastName"
                    value={values.lastName || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input-box"
                    error={touched.lastName && !!errors.lastName}
                    helperText={touched.lastName && errors.lastName}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="email"
                    type="email"
                    name="email"
                    value={values.email || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input-box"
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="password"
                    name="password"
                    type="password"
                    value={values.password || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input-box"
                    error={touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="phoneNo1">Phone Number 1</InputLabel>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="phoneNo1"
                    name="phoneNo1"
                    type="text"
                    value={values.phoneNo1 || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input-box"
                    error={touched.phoneNo1 && !!errors.phoneNo1}
                    helperText={touched.phoneNo1 && errors.phoneNo1}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="phoneNo2">Phone Number 2</InputLabel>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="phoneNo2"
                    name="phoneNo2"
                    type="text"
                    value={values.phoneNo2 || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input-box"
                    error={touched.phoneNo2 && !!errors.phoneNo2}
                    helperText={touched.phoneNo2 && errors.phoneNo2}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="deptId">Department ID</InputLabel>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="deptId"
                    name="deptId"
                    value={values.deptId || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input-box"
                    error={touched.deptId && !!errors.deptId}
                    helperText={touched.deptId && errors.deptId}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="dateOfBirth">Date Of Birth</InputLabel>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    value={values.dateOfBirth || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className="input-box"
                    error={touched.dateOfBirth && !!errors.dateOfBirth}
                    helperText={touched.dateOfBirth && errors.dateOfBirth}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="designation">Designation</InputLabel>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="designation"
                    name="designation"
                    value={values.designation || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input-box"
                    error={touched.designation && !!errors.designation}
                    helperText={touched.designation && errors.designation}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="hiringDate">Hiring Date</InputLabel>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="hiringDate"
                    name="hiringDate"
                    type="date"
                    value={values.hiringDate || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className="input-box"
                    error={touched.hiringDate && !!errors.hiringDate}
                    helperText={touched.hiringDate && errors.hiringDate}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel htmlFor="permanentAddress">Permanent Address</InputLabel>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="permanentAddress"
                    name="permanentAddress"
                    value={values.permanentAddress || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input-box"
                    error={touched.permanentAddress && !!errors.permanentAddress}
                    helperText={touched.permanentAddress && errors.permanentAddress}
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel htmlFor="correspondingAddress">Corresponding Address</InputLabel>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="correspondingAddress"
                    name="correspondingAddress"
                    value={values.correspondingAddress || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input-box"
                    error={touched.correspondingAddress && !!errors.correspondingAddress}
                    helperText={touched.correspondingAddress && errors.correspondingAddress}
                  />
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions className="dialog-actions">
              <Button type="submit" className="white-button">
                {loading ? 'Saving...' : 'Save'}
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default Profiledetailaddedit;
