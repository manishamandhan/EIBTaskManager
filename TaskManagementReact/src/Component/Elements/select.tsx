import {
  Autocomplete,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  SelectProps,
  TextField,
  Theme,
  useTheme,
} from "@mui/material";
import { FieldAttributes, useField } from "formik";
import React, { useEffect, useState } from "react";
import { number, string } from "yup";
import { config } from "../Pages/Constant";
import Multiselect from "multiselect-react-dropdown";
import { useParams } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { UserModel } from "../Model/UserModel";


export const SelectUser: React.FC<FieldAttributes<SelectProps>> = ({
  variant,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error ? meta.error : "";
  const initialdata = { userId: 0, firstName: "" };

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

        console.log("usersData", responseJson.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
 
  return (
    <FormControl error={!!errorText} fullWidth>
      {/* <FormHelperText>Select User</FormHelperText> */}
      <InputLabel id="User-Select-Label"></InputLabel>
      <Select {...field} 
      labelId="State-Select-Label" 
      label="User">
        <MenuItem value={"0"}>User</MenuItem>
        {Users?.map((user, key) => (
          <MenuItem
            key={key}
            value={user.userId}
            className="custom-menu-item"
          >
            {user.firstName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export const SelectProject: React.FC<FieldAttributes<SelectProps>> = ({
  variant,
  ...props
}) => {
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

        console.log("ProjectsData", responseJson.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <FormControl error={!!errorText} fullWidth>
      {/* <FormHelperText>Select User</FormHelperText> */}
      <InputLabel id="Project-Select-Label"></InputLabel>
      <Select {...field} 
      labelId="State-Select-Label" 
      label="Project">
        <MenuItem value={"0"}>Project</MenuItem>
        {Projects?.map((project, key) => (
          <MenuItem
            key={key}
            value={project.projectId}
            className="custom-menu-item"
          >
            {project.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};