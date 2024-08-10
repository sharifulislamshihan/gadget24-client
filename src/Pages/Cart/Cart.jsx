import { DotsThreeOutlineVertical, MagnifyingGlass, Minus, Plus } from 'phosphor-react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    Label, NumberInput, NumberInputBox, NumberInputButton,
} from 'keep-react'
import useCart from '../../Hooks/useCart';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {

    const [cart, refetch] = useCart();
    //const [number, setNumber] = useState(0);
    const [aggregatedCart, setAggregatedCart] = useState([]);

    useEffect(() => {
        // Group cart items by product name and calculate total quantity and total price
        const groupedCart = cart.reduce((acc, item) => {
            const existingItemIndex = acc.findIndex(i => i.name === item.name);
            if (existingItemIndex !== -1) {
                // Item already exists in the grouped array, update quantity and total price
                acc[existingItemIndex].quantity += item.quantity;
                acc[existingItemIndex].totalPrice += item.price * item.quantity;
            } else {
                // Item does not exist in the grouped array, add it
                acc.push({
                    ...item,
                    totalPrice: item.price * item.quantity,
                });
            }
            return acc;
        }, []);

        setAggregatedCart(groupedCart);
    }, [cart]);

    const handleQuantityChange = async (productId, newQuantity) => {
        try {
            const response = await axios.patch(`/carts/${productId}`, { quantity: newQuantity });
            if (response.data.message === 'Item deleted') {
                setAggregatedCart(prevCart => prevCart.filter(item => item._id !== productId));
            } else if (response.data.message === 'Item quantity updated') {
                setAggregatedCart(prevCart =>
                    prevCart.map(item =>
                        item._id === productId
                            ? { ...item, quantity: newQuantity, totalPrice: item.price * newQuantity }
                            : item
                    )
                );
            }
        } catch (error) {
            console.error("Error updating cart item: ", error);
        }
    };


    //using reduce funtion to sum up the price
    // const totalPrice = cart.reduce((total, item) => total + item.price, 0);

    //const axiosSecure = useAxiosSecure();
    console.log("cart: ", cart);
    //setNumber(cart.quantity)


    return (
        <div>
            <div className="text-center space-y-5 my-10">
                <h3 className="text-4xl font-semibold">Hi SHihan</h3>
                <h2 className="text-4xl font-semibold">Your Cart (Total {aggregatedCart.length} item)</h2>
            </div>

            <div>
                {
                    aggregatedCart.length === 0 ? (
                        <div>
                            <h2 className="text-4xl font-semibold">Your Cart is Empty</h2>
                        </div>
                    )

                        :

                        (
                            <Table>
                                <TableHeader>
                                    <TableRow>

                                        <TableHead>Image</TableHead>
                                        <TableHead>Name</TableHead>
                                        <TableHead>Price</TableHead>
                                        <TableHead>Quantity</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Total</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {aggregatedCart.map((item) => (
                                        <TableRow key={item.id}>
                                            <TableCell>
                                                <div>
                                                    <img className='w-1/4' src={item.image} alt="" />
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <h3>{item.name}</h3>
                                            </TableCell>
                                            <TableCell>{item.price}</TableCell>
                                            {/* quantity */}
                                            <TableCell>
                                                <fieldset className="flex space-y-1">
                                                    <NumberInput>
                                                        <NumberInputButton
                                                            disabled={item.quantity === 0}
                                                            onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                                                        >
                                                            <Minus size={16} color="#455468" />
                                                        </NumberInputButton>
                                                    </NumberInput>




                                                    <div>
                                                        <NumberInputBox
                                                            type="number"
                                                            min={1}
                                                            max={100}
                                                            value={item.quantity}
                                                            onChange={(e) => handleQuantityChange(item._id, +e.target.value)}
                                                        />
                                                    </div>
                                                    <NumberInput>
                                                        <NumberInputButton
                                                            disabled={item.quantity === 100}
                                                            onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                                                        >
                                                            <Plus size={16} color="#455468" />
                                                        </NumberInputButton>
                                                    </NumberInput>
                                                </fieldset>
                                            </TableCell>
                                            <TableCell>
                                                <h3>{item.status}</h3>
                                            </TableCell>
                                            <TableCell>{item.totalPrice}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        )
                }
            </div>
        </div>
    );
};

export default Cart;