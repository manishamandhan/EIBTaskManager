import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, TextField } from '@mui/material';
import { UserModel } from '../Model/UserModel';
import { useNavigate } from 'react-router-dom';

interface Iprops {
    UsersCL: UserModel[],
    fetchData: () => void
}

export const UsersList: React.FC<Iprops> = ({ UsersCL }) => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredUsers, setFilteredUsers] = useState<UserModel[]>(UsersCL);

    useEffect(() => {
        setFilteredUsers(
            UsersCL.filter(user =>
                `${user.firstName} ${user.lastName}`.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [searchQuery, UsersCL]);

    const handleClick = (userId: number) => {
        debugger
        navigate(`/profile/${userId}`);
    };

    return (
        <Box sx={{ flexGrow: 1, padding: 2 }}>
            <TextField 
                label="Search Users"
                className=" me-2 d-flex float-end bg-white search-bar"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={{ marginBottom: 2 }}
            />


            
            <Grid container spacing={2}>
                {filteredUsers.map((user) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={user.userId}>
                        <div className="Card-static card-hover" style={{ height: "400px" }} onClick={() => handleClick(user.userId)}>
                            <div className="mt-2 text-center  card-img">
                                <img
                                    src={user.picture || "/assets/image/User Avatar Vector Design Images, User Vector Avatar, Human Clipart, Female User, Icon PNG Image For Free Download.jfif"}
                                    alt="Profile"
                                />
                                <Typography className="sub-card-title mt-2">
                                    {user.firstName} {user.lastName}
                                </Typography>
                            </div>
                            <div className="mt-5">
                                <div color="text.secondary"  className=" d-flex justify-content-between align-itmes-center">
                                 <span className="user-id-text" >UserId:</span>    <span className="user-text">{user.userId}</span> 
                                </div>
                                <div color="text.secondary"  className=" d-flex justify-content-between align-itmes-center" >
                                <span className="user-id-text" >Designation: </span> <span className="user-text">{user.designation}</span> 
                                </div>
                                <div color="text.secondary"  className=" d-flex justify-content-between align-itmes-center">
                                <span className="user-id-text" >Email:</span>    <span className="user-text">{user.email}</span> 
                                </div>
                                <div color="text.secondary"  className=" d-flex justify-content-between align-itmes-center">
                                <span className="user-id-text" >Phone:</span>    <span className="user-text">{user.phoneNo1}</span> 
                                </div>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};
