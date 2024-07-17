import { Navigate, useLocation } from "react-router-dom";

import useAuth, { authData } from "./AuthProvider";


export const PrivateRoute = ({
  children,
  roles,
  currentUser,
  loading
}: {
  children: JSX.Element;
  roles: string[];
  currentUser: authData|undefined,
  loading: boolean
}) => {
  let location = useLocation();
 

  if (loading) {
    return <p className="heading">Checking auth..</p>;
  }
 
  
  const userHasRequiredRole = roles?.length <= 0 ? true : (currentUser && roles.filter(r => currentUser.userRoles.split(",").includes(r)).length>0 ? true : false);
  const isAuthenticated: boolean = currentUser ? true : false;
  
  if (!isAuthenticated) {
    return <Navigate to="/Login" state={{ from: location }} />;
  }

  // if (isAuthenticated && !userHasRequiredRole) {
  //   return <AccessDenied />; // build your won access denied page (sth like 404)
  // }

  return children;
};