import React, { useState } from 'react';
import moment from 'moment';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@mui/material';
import Profiledetailadddedit from '../AddeditPages.tsx/Profiledetailadddedit'; // Ensure correct import path

import { Profilemodel } from '../Model/Profilemodel';

interface IProps {
  ProfileCL: Profilemodel;
  fetchData: () => void;
}

export const Profiledatadetail: React.FC<IProps> = ({ ProfileCL, fetchData }) => {
  const [profiledata, setProfiledata] = useState<Profilemodel>(ProfileCL);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (updatedProfile: Profilemodel) => {
    setProfiledata(updatedProfile); // Update profile data state
    fetchData();
    setIsEditing(false);
  };

  const handleEditToggle = () => {
    setIsEditing(true);
  };

  const handleClose = () => {
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <div className='profile-img d-flex align-items-center'>
        <img
          src={ProfileCL.picture || "/assets/image/User Avatar Vector Design Images, User Vector Avatar, Human Clipart, Female User, Icon PNG Image For Free Download.jfif"}
          alt="Profile"
        /> 
        <h2 className='ms-5'>{ProfileCL.firstName} {ProfileCL.lastName}</h2>
      </div>

      <div className='d-flex float-end top-header-profile justify-content-between mt-4 mb-4'>
        <Button
          startIcon={<EditIcon />}
          onClick={handleEditToggle}
          className='main-btn'
          sx={{ ml: 2 }}
        >
          Edit Profile
        </Button>
      </div>

      <div className="mt-5 col-lg-12">
        <div className='col-xl-5 col-lg-6 col-md-12'>
          <h3 className='card-title'>Basic Detail</h3>
          <div className="profile-detail mt-3 Card-static">
            <p className='mb-4'><strong>User ID:</strong><br />{ProfileCL.userId}</p>
            <p className='mb-4'><strong>Email:</strong><br />{ProfileCL.email}</p>
            <p className='mb-4'><strong>Phone 1:</strong><br />{ProfileCL.phoneNo1}</p>
            <p className='mb-4'><strong>Phone 2:</strong><br />{ProfileCL.phoneNo2}</p>
            <p className='mb-4'><strong>Department ID:</strong><br />{ProfileCL.deptId}</p>
            <p className='mb-4'><strong>Hiring Date:</strong><br />{moment(ProfileCL.hiringDate).format('YYYY-MM-DD')}</p>
          </div>
        </div>

        <div className='row col-lg-12'>
          <div className="mt-5 col-xl-6 col-lg-6 col-md-12">
            <h3 className='card-title'>Permanent Address</h3>
            <div className="profile-details mt-3 Card-static">
              <p className='mb-4'><strong>Address:</strong><br />{ProfileCL.permanentAddress}</p>
              <p className='mb-4'><strong>State:</strong><br />{/* ProfileCL.permanent_State */}</p>
              <p className='mb-4'><strong>Pin Code:</strong><br />{/* ProfileCL.permanent_Pin */}</p>
              <p className='mb-4'><strong>Country:</strong><br />{/* ProfileCL.permanent_Country */}</p>
            </div>
          </div>
          <div className="mt-5 col-xl-6 col-lg-6 col-md-12">
            <h3 className='card-title'>Corresponding Address</h3>
            <div className="profile-details mt-3 Card-static">
              <p className='mb-4'><strong>Address:</strong><br />
                {ProfileCL.correspondingAddress}
              </p>
              <p className='mb-4'><strong>State:</strong><br />
                {/* {ProfileCL.corresponding_State} */}
              </p>
              <p className='mb-4'><strong>Pin Code:</strong><br />
                {/* {ProfileCL.corresponding_Pin} */}
              </p>
              <p className='mb-4'><strong>Country:</strong><br />
                {/* {ProfileCL.corresponding_Country} */}
              </p>
            </div>
          </div>
          {isEditing && (
            <Profiledetailadddedit
              handleClose={handleClose}
              Open={isEditing}
              handleSubmit={handleSubmit}
              initValues={ProfileCL}
              ProfileCL={ProfileCL}


            />
          )}
        </div>
      </div>
    </div>
  );
};
