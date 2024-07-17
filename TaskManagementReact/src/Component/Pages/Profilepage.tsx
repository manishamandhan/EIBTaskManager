import React, { useEffect, useState } from "react";
import { Profiledatadetail } from "../Lists/Profiledatadetail";
import { config } from "./Constant";
import { Profilemodel } from "../Model/Profilemodel";
import { useParams } from "react-router-dom";

export const Profilepage = ({ profileId = "16" }) => {
  // profileId = this.props.match.params.userId
  // const {userId} = useParams();
  // profileId = userId ? userId : profileId;
  const [loading, setLoading] = useState(false);
  const { userId } = useParams<{ userId: string }>();
  const intialprofiledata: Profilemodel = {
    userId: 0,
    picture: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNo1: 0,
    phoneNo2: 0,
    deptId: 0,
    designation: "",
    hiringDate: undefined,
    permanentAddress: "",
    correspondingAddress: "",
    isDeleted: false,
    createdBy: "",
    modifiedBy: "",
    dateCreated: undefined,
    dateModified: undefined,
  };
  const [profiledata, setProfiledata] = useState<Profilemodel>(intialprofiledata);
  // const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true);

    fetch(config.url.API_URL + "/UserData/GetById?userId=" + userId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("somthing went wrong");
      })
      .then((res) => {
        // setLoading(false);
        // const x = res.data as Profilemodel;

        console.log(res.data);
        setProfiledata(res.data);
      })
      .catch((error) => {
        setLoading(false);
        // setError(error.message);
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <Profiledatadetail ProfileCL={profiledata} fetchData={fetchData} />;
};
