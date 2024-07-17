import { config } from "@fullcalendar/core/internal";
import React, {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";



export interface apiResponse<Type> {
    message: string,
    data: Type,
    resp: number,


}

export interface authData {
    userId: number
    userFirstName: string
    userLastName: string,
    token: string
    userRoles: string
}

interface AuthContextType {

    user?: authData;
    loading: boolean;
    error?: any;
    login: (authData: apiResponse<authData>) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType>(
    {} as AuthContextType
);

// Export the provider as we need to wrap the entire app with it
export function AuthProvider({ children }: { children: ReactNode; }): JSX.Element {
    const [user, setUser] = useState<authData>();
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingInitial, setLoadingInitial] = useState<boolean>(true);
   
   
    // We are using `react-router` for this example,
    // but feel free to omit this or use the
    // router of your choice.

    const location = useLocation();
    const navigate = useNavigate();
    // If we change page, reset the error state.
    useEffect(() => {
        if (error) setError(null);
    }, [location.pathname]);

    // Check if there is a currently active session
    // when the provider is mounted for the first time.
    //
    // If there is an error, it means there is no session.
    //
    // Finally, just signal the component that the initial load
    // is over.
    useEffect(() => {
        
        setLoading(true);
        const currentUser = getCurrentUser();
        if (currentUser != null) {
            handleAlreadyLoggedIn(currentUser);
        }
        else{
            //send to login
            // logout();
             setLoading(false);
            setLoadingInitial(false);

         }
        
        
    }, []);

    function getCurrentUser() {
        const userStr = localStorage.getItem("user");
        if (userStr) return JSON.parse(userStr);

        return null;
    }


   async function handleAlreadyLoggedIn(authData: authData) 
    {
       
        await IsAuthenticated(authData);
        
    }

   async function  IsAuthenticated (authData: authData) 
    {
       
       await fetch( config.url.API_URL +'/Auth/IsAuthenthenticated',
            {
                method: "GET",
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization' : `Bearer ${authData.token}`,
                })
                }).then((response) => {
                if (response.ok) {
                  return response.json();
                }
                throw new Error('Something went wrong');
               })
               .then((responseJson) => {
               
               if(responseJson)
               {
               
                  setUser(authData);
                
               }  
               else
               {
                 logout();
                 
               }
                setLoading(false);
                setLoadingInitial(false);
              
               }).catch((error) => {
                setLoading(false);
                setLoadingInitial(false);
              
            });

       
    }

    // Flags the component loading state and posts the login
    // data to the server.
    //
    // An error means that the email/password combination is
    // not valid.
    //
    // Finally, just signal the component that loading the
    // loading state is over.
    function login(authData: apiResponse<authData>) {
        setLoading(true);

        if (authData.resp == 0) {
            setUser(authData.data);
            localStorage.setItem("user", JSON.stringify(authData.data));
            navigate("/");
        }
        else {
            setError(authData.message)
            navigate("/login");
        }
        setLoading(false);

    }

    // Call the logout endpoint and then remove the user
    // from the state.
    function logout() {
        localStorage.removeItem("user");
        setUser(undefined);
        navigate("/login");
        //sessionsApi.logout().then(() => setUser(undefined));
    }

    // Make the provider update only when it should.
    // We only want to force re-renders if the user,
    // loading or error states change.
    //
    // Whenever the `value` passed into a provider changes,
    // the whole tree under the provider re-renders, and
    // that can be very costly! Even in this case, where
    // you only get re-renders when logging in and out
    // we want to keep things very performant.
    const memoedValue = useMemo(
        () => ({
            user,
            loading,
            error,
            login,
            logout,
        }),
        [user, loading, error]
    );

    // We only want to render the underlying app after we
    // assert for the presence of a current user.
    return (
        <AuthContext.Provider value={memoedValue}>
            {!loadingInitial && children}
        </AuthContext.Provider>
    );
}

// Let's only export the `useAuth` hook instead of the context.
// We only want to use the hook directly and never the context component.
export default function useAuth() {
    return useContext(AuthContext);
}