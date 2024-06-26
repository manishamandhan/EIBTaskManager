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
import { TaskModel } from '../Model/TaskModel';
import Select from "react-dropdown-select";
import { SelectUser, SelectProject } from '../Elements/select';

interface Iprops {
  TaskCL: TaskModel,
  handleClose: () => void,
  Open: boolean,
  handleSubmit: () => void,
  initValues: TaskModel
}


export const TaskDetailAddEdit: React.FC<Iprops> = ({ handleClose, Open, TaskCL, handleSubmit, initValues }) => {
  const initialTaskData: TaskModel = TaskCL ? TaskCL : initValues;
 



  const [loading, setLoading] = React.useState<boolean>(false);

  function setError(message: any) {
    throw new Error('Function not implemented.');
  }

  const formatDate = (date: Date | string | undefined): string => {
    if (!date) return '';
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  };

  

  return (

    <Dialog open={Open} onClose={handleClose}>
      <DialogTitle className='sub-card-title text-center'  >Task </DialogTitle>
      <Formik
        initialValues={{
          ...initialTaskData,
          devStartDate: formatDate(initialTaskData.devStartDate),
          devCompleteDate: formatDate(initialTaskData.devCompleteDate),
          // devEstimateDate: formatDate(initialTaskData.devEstimateDate),
          qaStartDate: formatDate(initialTaskData.qaStartDate),
          qaCompleteDate: formatDate(initialTaskData.qaCompleteDate),
        }}
        validateOnChange={true}
        // validationSchema={TransactionTypeModel_VS}
        onSubmit={(data, { setSubmitting }) => {
          data.createdBy = 16;
          data.modifiedBy = 16;
          setSubmitting(true);
          fetch(
            config.url.API_URL + '/Task/put',
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
              <DialogContentText className="dialog-content-text">
                You can now edit the task:
              </DialogContentText>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="name">Task Name</InputLabel>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="name"
                    name="name"
                    value={values.name || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input-box"
                    error={touched.name && !!errors.name}
                    helperText={touched.name && errors.name}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="description">Description</InputLabel>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="description"
                    name="description"
                    value={values.description || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input-box"
                    error={touched.description && !!errors.description}
                    helperText={touched.description && errors.description}
                  />
                </Grid>
               
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="status">Status</InputLabel>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="status"
                    name="status"
                    value={values.status || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="input-box"
                    error={touched.status && !!errors.status}
                    helperText={touched.status && errors.status}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="devStartDate">devStartDate</InputLabel>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="devStartDate"
                    name="devStartDate"
                    type="date"
                    value={values.devStartDate || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className="input-box"
                    error={touched.devStartDate && !!errors.devStartDate}
                    // helperText={touched.devStartDate && errors.devStartDate}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="devCompleteDate">devCompleteDate</InputLabel>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="devCompleteDate"
                    name="devCompleteDate"
                     type="date"
                    value={values.devCompleteDate || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                   
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className="input-box"
                    error={touched.devCompleteDate && !!errors.devCompleteDate}
                    // helperText={touched.devCompleteDate && errors.devCompleteDate}
                  />
                </Grid>
                {/* <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="devEstimateDate">devEstimateDate</InputLabel>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="devEstimateDate"
                    name="devEstimateDate"
                    type="date"
                    value={values.devEstimateDate || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className="input-box"
                    error={touched.devEstimateDate && !!errors.devEstimateDate}
                    // helperText={touched.devCompleteDate && errors.devCompleteDate}
                  />
                </Grid> */}
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="qaStartDate">qaStartDate</InputLabel>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="qaStartDate"
                    name="qaStartDate"
                    type="date"
                    value={values.qaStartDate || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className="input-box"
                    error={touched.qaStartDate && !!errors.qaStartDate}
                    // helperText={touched.devCompleteDate && errors.devCompleteDate}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="qaCompleteDate">qaCompleteDate</InputLabel>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="qaCompleteDate"
                    name="qaCompleteDate"
                    type="date"
                    value={values.qaCompleteDate || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className="input-box"
                    error={touched.qaCompleteDate && !!errors.qaCompleteDate}
                    // helperText={touched.devCompleteDate && errors.devCompleteDate}
                  />
                </Grid>
                {/* <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="qaEstimateDate">qaEstimateDate</InputLabel>
                  <TextField
                    fullWidth
                    margin="dense"
                    id="qaEstimateDate"
                    name="qaEstimateDate"
                    type="date"
                    value={values.qaEstimateDate || ''}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    className="input-box"
                    error={touched.qaEstimateDate && !!errors.qaEstimateDate}
                    // helperText={touched.devCompleteDate && errors.devCompleteDate}
                  />
                </Grid> */}
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="ownerId">Owner</InputLabel>
                  <SelectUser name="ownerId" placeholder='Owner' label="" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="reporteeId">Reportee</InputLabel>
                  <SelectUser name="reporteeId" placeholder='Reportee' label="" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="assigneeId">Assignee</InputLabel>
                  <SelectUser name="assigneeId" placeholder='Assignee' label="" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputLabel htmlFor="projectId">Project</InputLabel>
                  <SelectProject name="projectId" placeholder='Project' label="" />
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

