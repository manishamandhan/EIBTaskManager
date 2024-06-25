import React, { useEffect, useState } from "react";
import { config } from "./Constant";
import { UsersList } from "../Lists/UsersList";


export const Users = () => {

    const [loading, setloading] = useState(false);

    const [users, setUsers] = useState([])

    const fetchData = () => {
        setloading(true)

        fetch(config.url.API_URL + '/UserData/GetAll')
            
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Something went wrong');
            })
            .then((res) => {
                setloading(false)
                // Do something with the response
                setUsers(res.data)
                console.log("atuser",res.data)
            }).catch((error) => {
                setloading(false)

                console.log(error)
            });


    }

    useEffect(() => {
        fetchData();
    }, [])


    return (
       

       
         <UsersList UsersCL={users} fetchData={fetchData} />
    )
       

}