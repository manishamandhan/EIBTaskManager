import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import HomeIcon from "@mui/icons-material/Home";
import { Autocomplete, Checkbox, CircularProgress, FormControl, FormControlLabel, FormHelperText, Grid, InputLabel, LinearProgress, Link, MenuItem, Select, SelectChangeEvent, SelectProps, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { FieldAttributes, Form, Formik, useField } from "formik";
import React, { useEffect, useMemo, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useParams } from "react-router-dom";
import { config } from "../Pages/Constant";
// import useAuth from "../../context/AuthProvider";

// import { FMTextField } from '../Elements/input';
// import { LoggedInUserInfo } from '../Elements/loggedInUserInfo';
import { useDropzone } from "react-dropzone";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { fontSize } from "@mui/system";
import { TaskModel } from "../Model/TaskModel";
import { EIBTextarea, EIBTextField } from "../Elements/input";
import { CommentList } from "../Lists/CommentList";
import { CommentModel } from "../Model/CommentModel";
import { SelectProject, SelectUser } from "../Elements/select";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Task } from "@mui/icons-material";
import { TaskDetailList } from "../Lists/TaskDetaillList";
import useAuth from "../../Context/AuthProvider";
// import { TaskDetailAddEdit } from "./TaskDetailAddEdit";

const formatDate = (date: dayjs.Dayjs | null): string | null => {
  return date ? date.format("YYYY-MM-DD") : null;
};

var formData = new FormData();

const baseStyle = {
  flex: 1,
  display: "flex",
  alignItems: "center",
  padding: "10px",
  borderWidth: 1,
  borderRadius: 8,
  borderColor: "#41729F",
  borderStyle: "dashed",

  backgroundColor: "#fafafa",
  // color: '#bdbdbd',
  color: "#41729F",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const focusedStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

export const AddEditTask = () => {
  const initialValues: TaskModel = {
    tasksId: 0,
    name: "",
    description: "",
    status: "",
    isDeleted: false,
    createdBy: 0,
    modifiedBy: 0,
    dateCreated: new Date(),
    dateModified: new Date(),
    devStartDate: new Date(),
    devCompleteDate: new Date(),
    devEstimateDate: new Date(),
    qaStartDate: new Date(),
    qaCompleteDate: new Date(),
    qaEstimateDate: new Date(),
    ownerId: 0,
    // owner : {} as UserModel,
    reporteeId: 0,
    // reportee : {} as UserModel,
    assigneeId: 0,
    // assignee : {} as UserModel,
    projectId: 0,
    // project : {} as ProjectModel
  };

  const [InitialData, setInitialData] = useState<TaskModel>(initialValues);

  const [commentsData, setCommentsData] = useState<CommentModel[]>([]);
  const navigate = useNavigate();

  const params = useParams();

  const { user } = useAuth();
  const token = user?.token;

  // const navigate1 = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    if (params.tasksId !== "0") {
      fetch(config.url.API_URL + `/Task/GetById?TasksId=${params.tasksId}`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Something went wrong");
        })
        .then((responseJson) => {
          // Do something with the response

          if (responseJson.data != null) {
            setInitialData(responseJson.data);
            return responseJson.data;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const fetchCommentsData = () => {
    fetch(config.url.API_URL + "/Comment/GetAllByTasksId?tasksId=" + params.tasksId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((res) => {
        setCommentsData(res.data);
        console.log("Comments Data", res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
    fetchCommentsData();
  }, []);

  const handleSubmit = () => {
    fetchData();
  };

  const handleStatusUpdateClick = (status: String) => {
    console.log(status);
    const payload = {
      TasksId: InitialData.tasksId,
      Status: status,
    };

    console.log("Payload:", payload);

    fetch(config.url.API_URL + "/Task/updateStatus", {
      method: "PUT",
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
        if (res.resp != 0) {
          throw new Error(res.message);
        }
        alert(res.message);
        handleSubmit();
        // setSubmitting(false);
      })
      .catch((error) => {
        setLoading(false);
        // setError(error.message);
        alert(error.message);
        console.error("Error:", error);
      });
  };

  return (
    <React.Fragment>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Formik
          initialValues={{
            ...InitialData,
            devStartDate: InitialData.devStartDate ? dayjs(InitialData.devStartDate) : null,
            devCompleteDate: InitialData.devCompleteDate ? dayjs(InitialData.devCompleteDate) : null,
            qaStartDate: InitialData.qaStartDate ? dayjs(InitialData.qaStartDate) : null,
            qaCompleteDate: InitialData.qaCompleteDate ? dayjs(InitialData.qaCompleteDate) : null,
          }}
          enableReinitialize={true}
          validateOnChange={true}
          // validationSchema={PartnersModelVS}

          onSubmit={(data, { setSubmitting }) => {
            console.log("FinalData", data);

            data.tasksId = Number(params.tasksId ?? 0);

            setLoading(true);

            formData.append("data", JSON.stringify(data));
            console.log("Final DAta", formData);

            fetch(config.url.API_URL + "/Task/put", {
              method: "POST",

              headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              }),
              body: JSON.stringify(data),
              // body: formData  // <-- Post parameters
            })
              .then((response) => {
                console.log(response);

                setLoading(false);
                setSubmitting(false);
                if (response.ok) {
                  return response.json();
                }
                throw new Error("Something went wrong");
              })
              .then((res) => {
                // Do something with the response
                navigate("/Task");

                setLoading(false);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          {({ values, isSubmitting, setFieldValue }) => (
            <React.Fragment>
              <Form>
                <div className="table-responsive main-form">
                  <div>
                    {params.taskId === "0" ? (
                      <h2 style={{}} className="card-title">
                        New Task
                      </h2>
                    ) : (
                      <h2 style={{}} className="card-title">
                        {/* Edit Task */}
                      </h2>
                    )}
                    <Grid container spacing={2} xs={12} className="mt-3">
                        <Grid item sm={12} md={12} lg={12} xl={12}marginBottom="50px">
                          <div className="container">
                              <Grid item xs={12}>
                                <Button type="submit" className="main-btn mt-1 float-end ">
                                  <i className="fa-regular fa-bookmark me-2"></i> {loading ? "Saving..." : "Save"}
                                </Button>
                              </Grid>
                              <Grid item xs={12}>
                                <FormControl className="border-none  headerstyling-title hover-border  mt-3 hide-dropdown-icon" sx={{ width: "100%" }}>
                                  <EIBTextField name="name" type="Text" fullWidth variant="outlined" />
                                </FormControl>
                              </Grid>
                              <Grid container xs={6} spacing={1} className="mt-3  ms-1 ">
                                <div className="col-lg-12 d-flex align-items-center" style={{ textAlign: "center" }}>
                                  {values.status !== "Invalid" ? <h2 className="sub-card-title">Move To: </h2> : null}
                                  {values.status == "ToDo" && (
                                    <button
                                      type="button"
                                      className="main-btn ms-2"
                                      onClick={() => {
                                        handleStatusUpdateClick("Invalid");
                                      }}
                                    >
                                      Invalid
                                    </button>
                                  )}
                                  {values.status === "InDev" && (
                                    <button
                                      type="button"
                                      id="ToDo"
                                      name="ToDo"
                                      className="main-btn ms-2"
                                      onClick={() => {
                                        handleStatusUpdateClick("ToDo");
                                      }}
                                    >
                                      ToDo{" "}
                                    </button>
                                  )}
                                  {values.status == "ToDo" && (
                                    <button
                                      type="button"
                                      className="main-btn ms-2"
                                      onClick={() => {
                                        handleStatusUpdateClick("InDev");
                                      }}
                                    >
                                      InDev
                                    </button>
                                  )}
                                  {values.status == "InDev" && (
                                    <button
                                      type="button"
                                      className="main-btn ms-2"
                                      onClick={() => {
                                        handleStatusUpdateClick("DevComplete");
                                      }}
                                    >
                                      DevComplete{" "}
                                    </button>
                                  )}
                                  {values.status == "DevComplete" && values.status && (
                                    <button
                                      type="button"
                                      className="main-btn ms-2"
                                      onClick={() => {
                                        handleStatusUpdateClick("InQA");
                                      }}
                                    >
                                      InQA{" "}
                                    </button>
                                  )}

                                  {values.status == "InQA" && (
                                    <button
                                      type="button"
                                      className="main-btn ms-2"
                                      onClick={() => {
                                        handleStatusUpdateClick("QAComplete");
                                      }}
                                    >
                                      QAComplete{" "}
                                    </button>
                                  )}

                                  {values.status == "InQA" && (
                                    <button
                                      type="button"
                                      className="main-btn ms-2"
                                      onClick={() => {
                                        handleStatusUpdateClick("InDev");
                                      }}
                                    >
                                      InDev{" "}
                                    </button>
                                  )}

                                  {values.status == "QAComplete" && (
                                    <button
                                      type="button"
                                      className="main-btn ms-2"
                                      onClick={() => {
                                        handleStatusUpdateClick("InUAT");
                                      }}
                                    >
                                      InUAT{" "}
                                    </button>
                                  )}
                                  {values.status == "InUAT" && (
                                    <button
                                      type="button"
                                      className="main-btn ms-2"
                                      onClick={() => {
                                        handleStatusUpdateClick("UATComplete");
                                      }}
                                    >
                                      UATComplete{" "}
                                    </button>
                                  )}
                                  {values.status == "InUAT" && (
                                    <button
                                      type="button"
                                      className="main-btn ms-2"
                                      onClick={() => {
                                        handleStatusUpdateClick("InDev");
                                      }}
                                    >
                                      InDev{" "}
                                    </button>
                                  )}
                                  {values.status == "UATComplete" && (
                                    <button
                                      type="button"
                                      className="main-btn ms-2"
                                      onClick={() => {
                                        handleStatusUpdateClick("DeploymentReady");
                                      }}
                                    >
                                      DeploymentReady{" "}
                                    </button>
                                  )}
                                  {values.status == "DeploymentReady" && (
                                    <button
                                      type="button"
                                      className="main-btn ms-2"
                                      onClick={() => {
                                        handleStatusUpdateClick("Done");
                                      }}
                                    >
                                      Done{" "}
                                    </button>
                                  )}
                                </div>
                              </Grid>

                              <Grid container xs={12} spacing={2} className=" mt-2 p-2">
                                <Grid item xs={12} className="d-flex align-items-center pt-0">
                                  <FormHelperText className="label-text  w-10">Owner:</FormHelperText>
                                  <FormControl className="border-none card-font-header hide-dropdown-icon" sx={{ width: "40%", marginLeft: "12px" }}>
                                    <SelectUser name="ownerId" label="" type="Text" fullWidth variant="outlined" sx={{ m: 2 }} />
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12} className="d-flex align-items-center pt-0">
                                  <FormHelperText className="label-text w-10">Reportee:</FormHelperText>
                                  <FormControl className="border-none card-font-header hide-dropdown-icon" sx={{ width: "40%", marginLeft: "12px" }}>
                                    <SelectUser name="reporteeId" label="" type="Text" fullWidth variant="outlined" sx={{ m: 2 }} />
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12} className="d-flex align-items-center pt-0">
                                  <p className="label-text w-10">Project: </p>
                                  <FormControl className="border-none card-font-header hide-dropdown-icon" sx={{ width: "40%", marginLeft: "12px" }}>
                                    <SelectProject name="projectId" type="Text" fullWidth variant="outlined" sx={{ m: 2 }} />
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12} className="d-flex align-items-center pt-0">
                                  <FormHelperText className="label-text w-10">Status:</FormHelperText> <p style={{ marginLeft: "20px", background: "#ee314c", color: "white", fontSize: "12px", padding: "0px 7px", borderRadius: "4px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>{values.status}</p>
                                </Grid>
                                <Grid item xs={12}>
                                  <FormHelperText className="label-text">Description</FormHelperText>
                                  <FormControl className="hover-border " sx={{ width: "98%" }}>
                                    <EIBTextField multiline rows={3} name="description" label="" type="Text" fullWidth variant="outlined" sx={{ m: 2 }} />
                                  </FormControl>
                                </Grid>
                                <Grid item xs={12} className="mt-4" marginBottom="50px">
                                    <span className="sub-card-title">Comments</span>
                                    <CommentList CommentCL={commentsData} fetchData={fetchCommentsData} />
                                </Grid>
                              </Grid>
                          </div>
                        </Grid>
                      </Grid>
                  </div>
                </div>
              </Form>
            </React.Fragment>
          )}
        </Formik>
      </LocalizationProvider>
    </React.Fragment>
  );
};
