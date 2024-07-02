import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
    //    tan stack query
    const axiosSecure = useAxiosSecure;
    const { user } = useAuth();
    const { refetch, data: cart = [] } = useQuery({
        // finding ordered item for specific email or specific user
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data
        }
    })
    return [cart, refetch];
};

export default useCart;