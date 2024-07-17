import React, { useEffect, useState } from "react";
import { Users } from "./Users";
import { Project } from "./Project";
import { UserCard } from "./UserCard";
import { TaskCard } from "./TaskCard";
import { Grid } from "@mui/material";
import { TaskDetailList } from "../Lists/TaskDetaillList";
import { config } from "./Constant";
import { useParams } from "react-router-dom";


const Dashboard = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);
  const [taskdata, setTaskdata] = useState([]);
  const currentHour = new Date().getHours();
  const params = useParams();
  let greeting;

  if (currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon";
  } else if (currentHour < 22) {
    greeting = "Good Evening";
  } else {
    greeting = "Good Night";
  }


  const fetchTaskData = () => {
    setLoading(true)
    fetch(config.url.API_URL + "/Task/GetAllTasksByOwner?ownerId=" +params.ownerId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((res) => {
        setTaskdata(res.data);
        console.log("Data", res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchTaskData();
  }, []);
  return (
    <>
      <div>{/* <Users></Users> */}</div>
      <div className="profile-card-classss">
        <Grid container spacing={2} xl={12}>
          
        <Grid item xl={4}>
        <h1 className="sub-card-title">{greeting} </h1>
                      {/* <h2 className="card-title text-center">User </h2> */}
            <UserCard userId={parseInt(params.ownerId!)} />
          </Grid>
          <Grid item xl={5}>
            <div className="">
              
              <TaskDetailList TaskCL={taskdata} fetchData={fetchTaskData}/>
            </div>
          </Grid>
          
        </Grid>
      </div>
    </>
  );
};

export default Dashboard;
