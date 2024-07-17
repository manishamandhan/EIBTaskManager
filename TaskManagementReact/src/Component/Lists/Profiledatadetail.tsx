import React, { useState } from "react";
import moment from "moment";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import Profiledetailadddedit from "../AddeditPages/Profiledetailadddedit"; // Ensure correct import path

import { Profilemodel } from "../Model/Profilemodel";
import { SelectDepartment } from "../Elements/select";

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
    
    <div className=" rounded  mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column profile-img align-items-center text-center p-3 py-5">
            <img className="rounded-circle mt-5   " src={ProfileCL.picture || "/assets/image/User Avatar Vector Design Images, User Vector Avatar, Human Clipart, Female User, Icon PNG Image For Free Download.jfif"} alt="Profile" />
            <span className="font-weight-bold sub-card-title mt-3">
              {ProfileCL.firstName} {ProfileCL.lastName}
            </span>
            <span className="text-black-50">{ProfileCL.email}</span>
          </div>
        </div>
        <div className="col-md-7 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right sub-card-title">Profile Settings</h4>
              <Button startIcon={<EditIcon />} onClick={handleEditToggle} className="main-btn" sx={{ ml: 2 }}>
                Edit Profile
              </Button>
            </div>
            <div className="row  mt-3">
              
              <div className="col-md-12  mt-3">
                <label className="labels">Name</label>
                <input type="text" className="form-control" placeholder="full name" value={`${ProfileCL.firstName || ""} ${ProfileCL.lastName || ""}`} readOnly />
              </div>
              <div className="col-md-6  mt-3">
                <label className="labels">User ID:</label>
                <input type="text" className="form-control" placeholder="User ID" value={ProfileCL.userId || ""} readOnly />
              </div>
              <div className="col-md-6  mt-3">
                <label className="labels"> Designation</label>
                <input type="text" className="form-control" placeholder=" Designation" value={ProfileCL.designation || ""} readOnly />
              </div>
              {/* <div className="col-md-6  mt-3">
                    <label className="labels">Department</label>
                    <input type="text" className="form-control" placeholder=" Department" value={ProfileCL.departmentId || ""} readOnly />
                  </div> */}
            </div>
            <div className="row mt-3">
              <div className="col-md-6  mt-3">
                <label className="labels">Mobile Number1</label>
                <input type="text" className="form-control" placeholder="Mobile Number1" value={ProfileCL.phoneNo1 || ""} readOnly />
              </div>
              <div className="col-md-6  mt-3">
                <label className="labels">Mobile Number2</label>
                <input type="text" className="form-control" placeholder="Mobile Number2" value={ProfileCL.phoneNo2 || ""} readOnly />
              </div>
              <div className="col-md-12  mt-3 ">
                <label className="labels">Permanent Address</label>
                <input type="text" className="form-control" placeholder="Permanent Address" value={ProfileCL.permanentAddress || ""} readOnly />
              </div>
              <div className="col-md-12  mt-3">
                <label className="labels">Corresponding Address</label>
                <input type="text" className="form-control" placeholder="Corresponding Address" value={ProfileCL.correspondingAddress || ""} readOnly />
              </div>
              
              <div className="col-md-12  mt-3">
                <label className="labels">Hiring Date:</label>
                <input type="text" className="form-control" placeholder="Hiring Date:" value={moment(ProfileCL.dateOfBirth).format("YYYY-MM-DD")} readOnly />
              </div>
              <div className="col-md-12  mt-3">
                <label className="labels">Date of Birth:</label>
                <input type="text" className="form-control" placeholder="Date of Birth" value={moment(ProfileCL.hiringDate).format("YYYY-MM-DD")} readOnly />
              </div>
            </div>
          </div>
        </div>
      </div>

      {isEditing && <Profiledetailadddedit handleClose={handleClose} Open={isEditing} handleSubmit={handleSubmit} initValues={ProfileCL} ProfileCL={ProfileCL} />}
    </div>
  );
};
