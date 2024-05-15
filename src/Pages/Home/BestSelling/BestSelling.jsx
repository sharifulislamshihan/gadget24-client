import { useEffect, useState } from "react";
import mockData from "./mockData";
import { Divider } from "keep-react";
import { Rating } from 'keep-react'

const BestSelling = () => {

    const [data, setData] = useState([]);

    const handleRating = (value) => {
        console.log(value)
    }

    useEffect(() => {
        setData(mockData)
    }, []);
    console.log(data);
    return (
        <div className=" mb-20 text-center md:text-left">
            <h3 className=" text-3xl font-semibold my-3 text-[#425a8b]">Best selling</h3>
            <p className="mb-10 text-[#425a8b]">Special products in this month.</p>
            <Divider />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {
                    data.map(items => <div
                        key={items._id}
                        className="border hover:border-[#425a8b] rounded-lg flex gap-10 px-10 py-10"
                    >
                        <div className="my-auto ml-5">
                            <img src={items.image} alt="" className="w-28 " />
                        </div>
                        <div>
                            <h2 className="text-slate-400 mb-2">{items.brand}</h2>
                            <h3 className="font-semibold">{items.name}</h3>
                            
                            <Rating className="my-5" handleRating={handleRating}>
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <Rating.Star value={rating} key={rating}></Rating.Star>
                            ))}
                        </Rating>

                            <h3 className="font-bold">${items.price}</h3>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    );
};

export default BestSelling;