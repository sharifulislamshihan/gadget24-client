import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import userAuth from "./userAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {

    const navigate = useNavigate();
    const { logOut } = userAuth();
    // request interceptor to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        //console.log('req stopped by interceptors', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        // doing something with request error
        return Promise.reject(error);
    })



    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
       // console.log('status error in the interceptor', status);
        // for 401 or 403 logout the user and move user to the login page
        if (status === 401 || status === 403) {
            await logOut();
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useEffect(() => {
                navigate('/login')
            }, [])

        }
        return Promise.reject(error)
    })



    return axiosSecure;
};

export default useAxiosSecure;