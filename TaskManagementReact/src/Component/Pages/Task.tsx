import React, { useEffect, useState } from 'react'
import { Profiledatadetail } from '../Lists/Profiledatadetail'
import { config } from './Constant'
import  { TaskDetailList } from '../Lists/TaskDetaillList'

export const Task = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null);
  const [taskdata, setTaskdata] = useState([]);



  const fetchData = () => {
    setLoading(true)
    fetch(config.url.API_URL +"/Task/GetAll")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("somthing went wrong");
      })
      .then((res)=>{
        setLoading(false);
        setTaskdata(res.data);
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
    <TaskDetailList TaskCL={taskdata} fetchData={fetchData} />
  )
}