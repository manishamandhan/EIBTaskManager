import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, TextField, Button } from "@mui/material";
import { UserModel } from "../Model/UserModel";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import { UserListAddEdit } from "../AddeditPages/UserListAddEdit";
import { UsersListProps } from "./UsersListProps";

export const UsersList: React.FC<UsersListProps> = ({ UsersCL, UserCL, fetchData, Open, handleClose, handleSubmit, initValues }) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<UserModel[]>(UsersCL);
  const [isEditing, setIsEditing] = useState(Open);
  const [userdata, setUserdata] = useState<UserModel>(UserCL);

  useEffect(() => {
    setFilteredUsers(UsersCL.filter((user) => `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())));
  }, [searchQuery, UsersCL]);
  const handleClick = (userId: number) => {
    navigate(`/Profile/${userId}`);
  };
  const handleClickDashboard = (userId: number) => {
    navigate(`/Dashboard/${userId}`);
  };
  const handleEditToggle = () => {
    setIsEditing(true);
  };
  const handleCloseEdit = () => {
    setIsEditing(false);
  };
  const handleSubmitEdit = (updatedUser: UserModel) => {
    // setUserdata(updatedUser);
    handleSubmit();
    setIsEditing(false);
  };
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1 className="card-title">User Details</h1>
        <TextField
          label="Search Users"
          className="me-2 d-flex float-end  search-bar"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{  width: "300px", borderRadius: "4px" ,padding:"7px"}}
          
        />

        <Button onClick={handleEditToggle} className="add-employee main-btn">
          + Add New Employee
        </Button>
      </div>
      <Grid container spacing={2}>
        {filteredUsers.map(
          (user) =>
            user.userId && (
              <Grid item xl={4} lg={6} md={6} sm={12} xs={12} key={user.userId}>
                <div className="card-static-1 p-3 shadow-md me-3  ">
                  <span>
                    <i title="Go To User Page " onClick={() => handleClick(user.userId)} className="fa-solid fa-user hover-icon cursor-pointer float-end" style={{ fontSize: "20px" }}></i>
                  </span>
                  <div className=" d-flex card-img  mb-3">
                    <img src="/assets/image/images.jfif" alt="User Avatar" className="me-3 " />
                    <div>
                      <h2 className="sub-card-title">
                        {" "}
                        {user.firstName} {user.lastName}
                      </h2>
                      <p className="">{user.departmentID}</p>

                    </div>
                  </div>
                  <div className="">
                    <p>{user.email}</p>
                    <p>{user.phoneNo1}</p>
                    <div className="d-flex justify-content-end align-items-center ">
                      <span>
                        <i title="Go To Dashboard Page " onClick={() => handleClickDashboard(user.userId)} className="fa-solid fa-table-columns cursor-pointer hover-icon float-end" style={{ fontSize: "20px" }}></i>
                      </span>
                    </div>
                  </div>
                </div>

                {/* <div className="Card-static " style={{ height: "360px" }}>
                  <div className="mt-2 text-center card-img">
                    <img className="text-center" src={user.picture || "/assets/image/User Avatar Vector Design Images, User Vector Avatar, Human Clipart, Female User, Icon PNG Image For Free Download.jfif"} alt="User" />
                    <Typography className="sub-card-title mt-2">
                      {user.firstName} {user.lastName}
                    </Typography>
                  </div>
                  <div className="mt-5">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="user-id-text">UserId:</span>
                      <span className="user-text">{user.userId}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="user-id-text">Department: </span>
                      <span className="user-text">{user.department?.deptName}</span>
                    </div>
                    
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="user-id-text">Designation:</span>
                      <span className="user-text">{user.designation}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="user-id-text">Email:</span>
                      <span className="user-text">{user.email}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="user-id-text">Phone:</span>
                      <span className="user-text">{user.phoneNo1}</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <span>
                        <i onClick={() => handleClickDashboard(user.userId)} title="Go To Dashboard Page " className="fa-solid fa-table-columns cursor-pointer hover-icon" style={{ fontSize: "20px" }}></i>
                      </span>
                      <span>
                        <i onClick={() => handleClick(user.userId)} title="Go To User Page " className="fa-solid fa-user hover-icon cursor-pointer" style={{ fontSize: "20px" }}></i>
                      </span>
                    </div>
                  </div>
                </div> */}
              </Grid>
            )
        )}
      </Grid>
      {isEditing && <UserListAddEdit handleClose={handleCloseEdit} Open={isEditing} handleSubmit={handleSubmit} initValues={initValues} UserCL={userdata} />}
    </Box>
  );
};
