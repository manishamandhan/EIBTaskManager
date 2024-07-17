import React, { useEffect, useState } from 'react'
import { Profiledatadetail } from '../Lists/Profiledatadetail'
import { config } from './Constant'
import { TaskDetailList } from '../Lists/TaskDetaillList'
import useAuth from '../../Context/AuthProvider'

export const Task = () => {
  // loading and error not used currently
  const [loading, setLoading] = useState(false)
  // const [error, setError] = useState(null);
  const [taskdata, setTaskdata] = useState([]);
  const { user } = useAuth();
    const token = user?.token;

  const fetchData = () => {
    setLoading(true)
    fetch(config.url.API_URL + "/Task/GetAll",
    {
      headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
      })
  })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((res) => {
        if(res.data !== null){
          setTaskdata(res.data);
        }
        else
        
        console.log("Data", res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TaskDetailList TaskCL={taskdata} fetchData={fetchData} />
  )
}