import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { config } from './Constant';
import { UserModel } from '../Model/UserModel';
import { newDate } from 'react-datepicker/dist/date_utils';
import { boolean } from 'yup';



interface IProps {
  userId: number
}

export const UserCard: React.FC<IProps> = ({userId}) => {
  const initialUserData: UserModel = {
    userId: 0,
    picture: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNo1: 0,
    phoneNo2: 0,
    dateOfBirth: new Date,
    designation: '',
    hiringDate: new Date,
    permanentAddress: '',
    correspondingAddress: '',
    isDeleted: true,
    createdBy: 0,
    modifiedBy: 0,
    dateCreated: new Date,
    dateModified: new Date,
    departmentID: 0
  };
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<UserModel | null>(null);
  const [userData, setUserData] = useState<UserModel>(initialUserData);
  const [isEditing, setIsEditing] = useState(false);

  const fetchData = () => {
    setLoading(true);
    console.log(`Fetching data for user ID: ${userId}`);
    fetch(config.url.API_URL + `/UserData/GetById?userId=${userId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Something went wrong');
      })
      .then((res) => {
        setLoading(false);
        console.log('API Response:', res);
        if (res && res.data) {
          setUser(res.data);
        } else {
          setUser(null);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  useEffect(() => {
 // Replace with the specific user ID you want to fetch
    fetchData();
  }, []);

  const handleClick = (userId: number) => {
    console.log(`User ${userId} clicked`);
  };

  const handleCloseEdit = () => {
    setIsEditing(false);
  };

  const handleSubmitEdit = (updatedUser: UserModel) => {
    setUserData(updatedUser);
    fetchData();
    setIsEditing(false);
  };  

  return (
    <div>
      {loading && <Typography>Loading...</Typography>}
      {!loading && !user && <Typography>No user found.</Typography>}
      {!loading && user && (
        // <Grid container spacing={2}>
        //   <Grid item xl={3} lg={6} md={6} sm={12} xs={12} key={user.userId}>
        <div className="card-static-1 p-3 shadow-md me-3  ">
        {/* <span>
          <i title="Go To User Page "  onClick={() => handleClick(user.userId)} className="fa-solid fa-user hover-icon cursor-pointer float-end" style={{ fontSize: "20px" }}></i>
        </span> */}
        <div className=" d-flex card-img  mb-3">
          <img src="/assets/image/images.jfif" alt="User Avatar" className="me-3 "  />
          <div>
            <h2 className="sub-card-title"> {user.firstName} {user.lastName}</h2>
            <p className="">{user.designation}</p>
          </div>
        </div>
        <div className="">
          <p>{user.email}</p>
          <p>{user.phoneNo1}</p>
          <div className="d-flex justify-content-end align-items-center ">
           
          </div>
        </div>
      </div>
        //   </Grid>
        // </Grid>
      )}
    </div>
  );
};
