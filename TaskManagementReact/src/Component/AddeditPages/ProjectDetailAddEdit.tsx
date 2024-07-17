import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Checkbox, FormControl, Grid, InputLabel } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { json } from 'stream/consumers';
import { config } from '../Pages/Constant';
import { ProjectModel } from '../Model/ProjectModel';
import Select from "react-dropdown-select";
import { SelectUser, SelectProject } from '../Elements/select';

interface Iprops {
  ProjectCL: ProjectModel,
  handleClose: () => void,
  Open: boolean,
  handleSubmit: () => void,
  initValues: ProjectModel
}


export const ProjectDetailAddEdit: React.FC<Iprops> = ({ handleClose, Open, ProjectCL, handleSubmit, initValues }) => {
  const initialProjectData: ProjectModel = ProjectCL ? ProjectCL : initValues;
  const [loading, setLoading] = React.useState<boolean>(false);

  const [error, setError] = React.useState<string | null>(null);

  return (

    <Dialog open={Open} onClose={handleClose}>
      <DialogTitle className='card-title text-center'  >Project </DialogTitle>
      <Formik
        initialValues={{
          ...initialProjectData,
         
        }}
        validateOnChange={true}
        // validationSchema={TransactionTypeModel_VS}
        onSubmit={(data, { setSubmitting }) => {
          data.createdBy = 47;
          data.modifiedBy = 47;
          setSubmitting(true);
          fetch(
            config.url.API_URL + '/Project/put',
            {
              method: 'POST',
              headers: new Headers({
                'Content-Type': 'application/json',
              }),            
              body: JSON.stringify(data)  // <-- Post parameters
            })
            .then((response) => {
              if (response.ok) {
                return response.json();
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
              handleSubmit();
              setSubmitting(true);
            })
            .catch((error) => {
              setLoading(false);
              alert(error.message);
              setError(error.message);
              
              console.error('Error:', error);
            });
        }}

      >
        

{({ values, handleChange, handleBlur, errors, touched }) => (
          <Form className="main-form">
            <DialogContent className="dialog-content">
              <DialogContentText className="dialog-text">
                You can now edit the Project:
              </DialogContentText>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  <InputLabel className="formtexthelper-heading" htmlFor="name">Project Name</InputLabel>
                  <TextField
                    fullWidth
                    id="name"
                    name="name"
                    value={values.name || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input-box"
                    error={touched.name && !!errors.name}
                    // helperText={touched.name && errors.name}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <InputLabel className="formtexthelper-heading" htmlFor="description">Description</InputLabel>
                  <textarea
                    
             
                    name="description"
                    value={values.description || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-100 p-2"
       
                    // helperText={touched.description && errors.description}
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
    </Dialog >

  );
}

