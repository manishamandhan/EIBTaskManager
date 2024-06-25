import React, { useEffect, useState } from 'react'
import { config } from './Constant'
// import Dsrpagedatadetaillist from '../Lists/Dsrpagedatadetaillist'
  import { Dsrpagedatadetaillist } from '../Lists/Dsrpagedatadetaillist'


  export const Dsrpagedata = () => {
  const [loading, setLoading] = useState(false)
  const [dsrdata, setDsrdata] = useState([])

  const fetchData = () => {
    setLoading(true)
    fetch(config.url.API_URL + '/DSRDetails/getAllDSRDetails',)

      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Somehing Went Wrong ')
      })
      .then((res) => {
        setLoading(false)
        setDsrdata(res.data)
        console.log("DSRDetails",res.data)
      }).catch((error) => {
        setLoading(false)
        console.log(error)
      });

  }
  useEffect(() => {
    fetchData();
  }, [])
  return (
    <Dsrpagedatadetaillist DsrCL={dsrdata} fetchData={fetchData}  />
  )
}

