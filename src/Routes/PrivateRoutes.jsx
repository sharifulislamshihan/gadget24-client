/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { Spinner } from "keep-react";


const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return <div className="flex flex-col justify-center items-center">
        <span className="pr-2">
            <Spinner color="info" size="xl" />
        </span>
        <h3 className="text-xl font-semibold">Loading...</h3>
    </div>
    }

    if (user) {
        return children;
    }

    // if there is no user it will navigate to login page
    return <Navigate to='/login' state={{from: location}} replace></Navigate>

};

export default PrivateRoutes;