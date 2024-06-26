
import React, { useEffect, useState } from 'react'
import { config } from './Constant'
import { ProjectDetailList } from '../Lists/ProjectDetailList'


export const Project = () => {
  const [loading, setLoading] = useState(false)
  const [projectdata, setProjectdata] = useState([])
  const [error, setError] = useState(null);

  const fetchData = () => {
    setLoading(true)
    fetch(config.url.API_URL +"/Project/GetAll")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("somthing went wrong");
      })
      .then((res)=>{
        setLoading(false);
        setProjectdata(res.data);
        console.log("Data",res.data);
      })
      .catch((error)=>{
      setLoading(false);
      setError(error.message);
      console.log(error);
      });
  };




  useEffect(() => {
    fetchData();
  }, []);
  return (
    <ProjectDetailList ProjectCL={projectdata} fetchData={fetchData} />

  )
}

