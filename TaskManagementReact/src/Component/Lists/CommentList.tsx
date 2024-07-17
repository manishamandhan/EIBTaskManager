import React, { useState } from "react";
import { Box, Button, Grid, List, ListItem, ListItemText, TextField } from "@mui/material";
import { CommentModel } from "../Model/CommentModel";
import { useNavigate, useParams } from "react-router-dom";
import { config } from "../Pages/Constant";
import { IoMdSend } from "react-icons/io";
interface Iprops {
  CommentCL: CommentModel[];
  fetchData: () => void;
}

export const CommentList: React.FC<Iprops> = ({ CommentCL, fetchData }) => {
  const initialCommentData: CommentModel = {
    commentId: 0,
    values: "",
    isDeleted: false,
    createdBy: 0,
    modifiedBy: 0,
    dateCreated: new Date(),
    dateModified: new Date(),
    tasksId: 0,
  };

  const [comments, setComments] = useState<CommentModel[]>(CommentCL);
  const [fieldValue, setFieldValue] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const goBack = () => {
    navigate(-1);
  };

  const handleAddComment = () => {
    const newComment: CommentModel = {
      ...initialCommentData,
      values: fieldValue,
      dateCreated: new Date(),
      dateModified: new Date(),
      createdBy: 47,
      modifiedBy: 47,
      tasksId: Number(params.tasksId),
    };

    fetch(config.url.API_URL + "/Comment/Save", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(newComment),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((res) => {
        if (res.resp !== 0) {
          throw new Error(res.message);
        }
        fetchData();
      })
      .catch((error) => {
        alert(error.message);
        console.error("Error:", error);
      });

    setFieldValue("");
  };

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(event.target.value);
  };

  const handleEdit = (comment: CommentModel) => {
    setOpen(true);
  };

  return (
    <Box sx={{ width: "100%" }}>
        {/* <div className="haeder-task-comment">
          <h2 className="card-title">Task Name</h2>
        </div> */}

        <List className="card  overflow-auto  mb-5 ml" style={{ height: "25vh" }}>
          {CommentCL.map((comment) => (
            <ListItem key={comment.commentId} sx={{ borderBottom: "1px solid #ddd" }}>
              <ListItemText primary={<div dangerouslySetInnerHTML={{ __html: comment.values }} />} secondary={`Created by: ${comment.createdBy} on ${new Date(comment.dateCreated).toLocaleDateString()}`} />
            </ListItem>
          ))}
        </List>

        <Box sx={{ marginTop: 2 }}>
          <div className="footer-comment ">
            <div className="container position-relative"  style={{marginRight:"122px"}}>
              <TextField label="Add a Comment"   style={{width:"97.5%"}} value={fieldValue} onChange={handleFieldChange} variant="outlined" fullWidth multiline rows={2} />
              <Button title="Add Comment" className="btn-icon" onClick={handleAddComment} sx={{ marginTop: 2}}>
              <IoMdSend />
              </Button>
            </div>
          </div>
        </Box>
    </Box>
  );
};
