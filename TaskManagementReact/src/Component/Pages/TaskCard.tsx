import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardContent, List, ListItem, ListItemText } from "@mui/material";
import { config } from "./Constant";
import { TaskModel } from "../Model/TaskModel";

export const TaskCard = () => {




  const { userId } = useParams<{ userId: string }>();
  const [loading, setLoading] = useState(false);
  const [taskdata, setTaskdata] = useState<TaskModel | null>(null);
  const [previewtaskpage, setPreviewtaskpage] = useState(false);
 

  const fetchData = () => {
    setLoading(true);
    fetch(config.url.API_URL + "/Task/GetById?TaskId=" + 1)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((res) => {
        const task = res.data;
        task.id = task.taskId;
        setTaskdata(task);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching task:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();
  const handleonclick = () => {
    navigate("/Tasks");
      }

      
  if (loading || !taskdata) return <div>Loading...</div>;

  return (
    <Card className="task-card">
      <CardContent>
        <div className="task-card-header d-flex justify-content-between align-items-center ">
          <h4  >My Task</h4>
          <span>
            <i
              title="preview full task"
              className="fa-solid fa-eye hover-icon"
              onClick={handleonclick}
              style={{ fontSize: "20px" }}
            ></i>
          </span>
        </div>
        <hr />
        <List>
          <ListItem className="task-card-item">
            <ListItemText primary={taskdata.name} />
            <ListItemText primary={taskdata.description} />
            <ListItemText primary={taskdata.ownerId} />
            <ListItemText primary={taskdata.status} />
            <ListItemText primary={taskdata.projectId} />
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
};
