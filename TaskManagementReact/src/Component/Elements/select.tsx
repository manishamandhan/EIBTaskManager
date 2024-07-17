import { Autocomplete, FormControl, FormHelperText, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, SelectProps, TextField, Theme, useTheme } from "@mui/material";
import { FieldAttributes, useField } from "formik";
import React, { useEffect, useState } from "react";
import { number, string } from "yup";
import { config } from "../Pages/Constant";
import Multiselect from "multiselect-react-dropdown";
import { useParams } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UserModel } from "../Model/UserModel";

export const SelectUser: React.FC<FieldAttributes<SelectProps>> = ({ variant, ...props }) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error ? meta.error : "";
  const initialdata = { userId: undefined, firstName: "" };

  const [Users, setUsers] = useState([initialdata]);
  const fetchData = () => {
    fetch(config.url.API_URL + "/UserData/GetAll", {
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
          setUsers(responseJson.data);
        }

        // console.log("usersData", responseJson.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FormControl error={!!errorText} className="input-box hover-border" fullWidth>
      {/* <FormHelperText>Select User</FormHelperText> */}
      <InputLabel id="User-Select-Label"></InputLabel>
      <Select {...field} labelId="State-Select-Label" label={null}>
        {/* <MenuItem value={"0"}>User</MenuItem> */}
        {Users?.map((user, key) => (
          <MenuItem key={key} value={user.userId} className="custom-menu-item">
            {user.firstName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const SelectDepartment: React.FC<FieldAttributes<SelectProps>> = ({ variant, ...props }) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error ? meta.error : "";
  const initialdata = { departmentId: undefined, deptName: "" };

  const [Department, setDepartment] = useState([initialdata]);
  const fetchData = () => {
    fetch(config.url.API_URL + "/Department/GetAll", {
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
          setDepartment(responseJson.data);
        }

        // console.log("usersData", responseJson.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FormControl error={!!errorText} className="input-box" fullWidth>
      {/* <FormHelperText>Select User</FormHelperText> */}
      <InputLabel id="User-Select-Label"></InputLabel>
      <Select {...field} labelId="State-Select-Label" label={null}>
        {/* <MenuItem value={"0"}>User</MenuItem> */}
        {Department?.map((department, key) => (
          <MenuItem key={key} value={department.departmentId} className="custom-menu-item">
            {department.deptName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const SelectProject: React.FC<FieldAttributes<SelectProps>> = ({ variant, ...props }) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error ? meta.error : "";

  const initialdata = { projectId: 0, name: "" };

  const [Projects, setProjects] = useState([initialdata]);
  // const [userId, setuserId] = useState(0);
  const fetchData = () => {
    fetch(config.url.API_URL + "/Project/GetAll", {
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
          setProjects(responseJson.data);
        }

        // console.log("ProjectsData", responseJson.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FormControl error={!!errorText}  fullWidth>
      {/* <FormHelperText>Select User</FormHelperText> */}
      <InputLabel id="Project-Select-Label"></InputLabel>
      <Select  {...field} labelId="State-Select-Label" label={null}>
        {/* <MenuItem value={"0"}>Project</MenuItem> */}
        {Projects?.map((project, key) => (
          <MenuItem key={key} value={project.projectId} className="custom-menu-item">
            {project.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
export const SelectDesignation: React.FC<FieldAttributes<SelectProps>> = ({ variant, ...props }) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error ? meta.error : "";
  const initialdata = ["CTO","Project manager","Web Developer","Systems Analyst","HR Manager","HR Assistant","Jr.Developer", "Senior Developer","Team Leader", "Quality Assurance Engineer"];

  const [Designations, setDesignations] = useState(initialdata);
 

  return (
    <FormControl error={!!errorText} className="input-box" fullWidth>
      {/* <FormHelperText>Select User</FormHelperText> */}
      <InputLabel id="User-Select-Label"></InputLabel>
      <Select {...field} labelId="State-Select-Label" label={null}>
        {/* <MenuItem value={"0"}>User</MenuItem> */}
        {Designations?.map((designation, key) => (
          <MenuItem key={key} value={designation} className="custom-menu-item">
            {designation}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
