import React, { useEffect, useState } from "react";
import { config } from "./Constant";
import { Dsrpagedatadetaillist } from "../Lists/Dsrpagedatadetaillist";

export const Dsrpagedata = () => {
  const [dsrdata, setDsrdata] = useState([]);

  const fetchData = () => {
    fetch(config.url.API_URL + "/DSRDetails/getAllDSRDetails")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong");
      })
      .then((res) => {
        setDsrdata(res.data);
        console.log("DSRDetails", res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (<Dsrpagedatadetaillist DsrCL={dsrdata} fetchData={fetchData} />);
};
