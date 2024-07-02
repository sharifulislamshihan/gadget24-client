import { useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import useCart from "../../Hooks/useCart";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCart();
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    useEffect(() =>{
        const res = axiosSecure.get(`/carts?email=${user.email}`)
        console.log(res);
    },[])
    return (
        <div>
            console.log(cart);
        </div>
    );
};

export default Cart;