import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Checkbox, FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { json } from "stream/consumers";
import { config } from "../Pages/Constant";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { SelectUser, SelectProject } from "../Elements/select";
import dayjs from "dayjs";
import { TaskModel, TaskValidationSchema } from "../Model/TaskModel";

interface Iprops {
  TaskCL: TaskModel;
  handleClose: () => void;
  Open: boolean;
  handleSubmit: () => void;
  initValues: TaskModel;
}

export const TaskDetailAddEdit: React.FC<Iprops> = ({ handleClose, Open, TaskCL, handleSubmit, initValues }) => {
  const initialTaskData: TaskModel = TaskCL ? TaskCL : initValues;
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);

  const formatDate = (date: dayjs.Dayjs | null): string | null => {
    return date ? date.format("YYYY-MM-DD") : null;
  };

  return (
    <Dialog open={Open} onClose={handleClose} maxWidth={"sm"} className="input-border-round" >
      <DialogTitle className="card-title text-center">Task</DialogTitle>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Formik
          initialValues={{
            ...initialTaskData,
            devStartDate: initialTaskData.devStartDate ? dayjs(initialTaskData.devStartDate) : null,
            devCompleteDate: initialTaskData.devCompleteDate ? dayjs(initialTaskData.devCompleteDate) : null,
            qaStartDate: initialTaskData.qaStartDate ? dayjs(initialTaskData.qaStartDate) : null,
            qaCompleteDate: initialTaskData.qaCompleteDate ? dayjs(initialTaskData.qaCompleteDate) : null,
          }}
          enableReinitialize={true}
          validateOnChange={true}
          // validationSchema={TaskValidationSchema}
          onSubmit={(data, { setSubmitting }) => {
            console.log("hi");
            

            setSubmitting(true);

            const payload = {
              ...data,
              devStartDate: formatDate(data.devStartDate),
              devCompleteDate: formatDate(data.devCompleteDate),
              qaStartDate: formatDate(data.qaStartDate),
              qaCompleteDate: formatDate(data.qaCompleteDate),
            };

            console.log("Payload:", payload);

            fetch(config.url.API_URL + "/Task/put", {
              method: "POST",
              headers: new Headers({
                "Content-Type": "application/json",
              }),
              body: JSON.stringify(payload), // <-- Post parameters
            })
              .then((response) => {
                if (response.ok) {
                  return response.json();
                }
                throw new Error("Something went wrong");
              })
              .then((res) => {
                console.log(res);
                console.log(res.data);
                if (res.resp != 0) {
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
          {({ values, handleChange, handleBlur, setFieldValue, errors, touched }) => (
            <Form className="main-form">
              <DialogContent className="dialog-content" >
                <DialogContentText className="dialog-text">You can now edit the task:</DialogContentText>
                <Grid container   xl={12} spacing={2}>
                  <Grid item xs={12} md={12}>
                    <InputLabel htmlFor="name" className="formtexthelper-heading" >Task Name</InputLabel>
                    <TextField fullWidth  id="name" name="name" value={values.name || ""}   onChange={handleChange} onBlur={handleBlur} className="input-box" error={touched.name && !!errors.name} />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <InputLabel htmlFor="description"
                      className="formtexthelper-heading"
                    >Description</InputLabel>
                    <TextField
                      rows={3}
                      id="description"
                      name="description"
                      value={values.description || ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="input-box  w-100 p-0"
                    // error={touched.description && !!errors.description} 
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <InputLabel className="formtexthelper-heading" >Dev StartDate</InputLabel>
                    <FormControl sx={{ width: "100%" }}>
                      <DatePicker label={null} className="input-box" value={values.devStartDate || null} onChange={(newValue) => setFieldValue("devStartDate", newValue)} />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputLabel className="formtexthelper-heading" >CompleteDate</InputLabel>
                    <FormControl sx={{ width: "100%" }}>
                      <DatePicker label={null} className="input-box" value={values.devCompleteDate || null} onChange={(newValue) => setFieldValue("devCompleteDate", newValue)} />
                    </FormControl>
                  </Grid>
                  {/* <Grid item xs={12} md={6}>
                    <InputLabel>qaStartDate</InputLabel>
                    <FormControl sx={{ width: "100%" }}>
                      <DatePicker label={null} className="input-box" value={values.qaStartDate || null} onChange={(newValue) => setFieldValue("qaStartDate", newValue)} />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputLabel>qaCompleteDate</InputLabel>
                    <FormControl sx={{ width: "100%" }}>
                      <DatePicker label={null} className="input-box" value={values.qaCompleteDate || null} onChange={(newValue) => setFieldValue("qaCompleteDate", newValue)} />
                    </FormControl>
                  </Grid> */}
                  <Grid item xs={12} md={6}>
                    <InputLabel htmlFor="status" className="formtexthelper-heading" >Status</InputLabel>
                    <Select fullWidth margin="dense" id="status" name="status" value={values.status || ""} onChange={handleChange} onBlur={handleBlur}  error={touched.status && !!errors.status}>
                      <MenuItem value="ToDo">To Do</MenuItem>
                      <MenuItem value="InDev">In Dev</MenuItem>
                      <MenuItem value="DevComplete">Dev Complete</MenuItem>
                      <MenuItem value="InQA">In QA</MenuItem>
                      <MenuItem value="QAComplete">QA Complete</MenuItem>
                      <MenuItem value="InUAT">In UAT</MenuItem>
                      <MenuItem value="UATComplete">UAT Complete</MenuItem>
                      <MenuItem value="DeploymentReady">Deployment Ready</MenuItem>
                      <MenuItem value="Done">Done</MenuItem>
                    </Select>
                    {touched.status && errors.status && <FormHelperText error>{errors.status}</FormHelperText>}
                  </Grid>
                  {/* <Grid item xs={12} md={6}>
                    <InputLabel>Dev Start </InputLabel>
                    <FormControl sx={{ width: "100%" }}>
                      <DatePicker label={null} className="input-box" value={values.devStartDate || null} onChange={(newValue) => setFieldValue("devStartDate", newValue)} />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6} >
                     <InputLabel>Dev Complete</InputLabel>
                    <FormControl sx={{ width: "100%" }}>
                      <DatePicker label={null} className="input-box" value={values.devCompleteDate || null} onChange={(newValue) => setFieldValue("devCompleteDate", newValue)} />
                    </FormControl>
                  </Grid> */}
                  {/* <Grid item xs={12} md={6} >
                    <InputLabel className="formtexthelper-heading" >QA Start</InputLabel>
                    <FormControl sx={{ width: "100%" }}>
                      <DatePicker label={null} className="input-box" value={values.qaStartDate || null} onChange={(newValue) => setFieldValue("qaStartDate", newValue)} />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputLabel className="formtexthelper-heading" >QA Complete</InputLabel>
                    <FormControl sx={{ width: "100%" }}>
                      <DatePicker label={null} className="input-box" value={values.qaCompleteDate || null} onChange={(newValue) => setFieldValue("qaCompleteDate", newValue)} />
                    </FormControl>
                  </Grid> */}
                  <Grid item xs={12} md={6}>
                    <FormHelperText className="formtexthelper-heading  w-10">Owner:</FormHelperText>
                    <SelectUser name="ownerId" placeholder="Owner"  type="Text" label="" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputLabel htmlFor="reporteeId" className="formtexthelper-heading"  >Reportee</InputLabel>
                    <SelectUser name="reporteeId" placeholder="Reportee" label="" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputLabel htmlFor="assigneeId" className="formtexthelper-heading" >Assignee</InputLabel>
                    <SelectUser name="assigneeId" placeholder="Assignee" label="" />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputLabel htmlFor="projectId" className="formtexthelper-heading" >Project</InputLabel>
                    <SelectProject name="projectId" placeholder="Project" label="" />
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions className="dialog-actions">
                <Button type="submit" className="white-button">
                  {loading ? "Saving..." : "Save"}
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </LocalizationProvider>
    </Dialog>
  );
};
