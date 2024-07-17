import React, { useEffect, useState } from "react";
import { config } from "./Constant";
import { UsersList } from "../Lists/UsersList";
import { UserModel } from "../Model/UserModel";
import useAuth from "../../Context/AuthProvider";
const initialUserData: UserModel = {
    userId: 0,
    picture: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNo1: 0,
    phoneNo2: 0,
    dateOfBirth: new Date,
    designation: "",
    hiringDate: new Date
};
export const Users = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState<UserModel[]>([]);
    const [userData, setUserData] = useState<UserModel>(initialUserData);
    const [isEditing, setIsEditing] = useState(false);
    const { user } = useAuth();
    const token = user?.token;
    
    const fetchData = () => {
        setLoading(true);
        fetch(config.url.API_URL + '/UserData/GetAll',
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
                throw new Error('Something went wrong');
            })
            // .then((res) => {
            //     setLoading(false);
            //     setUsers(res.data);
            // })
            
            .then((res) => {
                setLoading(false);
                if(res.data !== null){
                    setUsers(res.data);
                }
               
                
                console.log("Data", res.data);
              })
            
            .catch((error) => {
                setLoading(false);
                console.log(error);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);
    const handleCloseEdit = () => {
        setIsEditing(false);
    };
    const handleSubmitEdit = () => {
        // setUserData(updatedUser);
        fetchData();
        setIsEditing(false);
    };
    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <UsersList
                    UsersCL={users}
                    UserCL={userData}
                    Open={isEditing}
                    handleClose={handleCloseEdit}
                    handleSubmit={handleSubmitEdit}
                    initValues={userData}
                    fetchData={fetchData}
                />
            )}
        </div>
    );
};