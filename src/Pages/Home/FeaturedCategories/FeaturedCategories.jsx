import { useEffect, useState } from "react";
import { api } from "../../Shared/SharedFetchApi";
import FeaturedCategoryCard from "./FeaturedCategoryCard";
import { Divider } from "keep-react";

const FeaturedCategories = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch(`${api}categories`)
            .then(res => res.json())
            .then(data => {
                setCategory(data)
            })
    }
        , [])
    //const categories = Object.entries(category)
    // console.log( typeof categories);
    //console.log( Object.entries(category.payload));
    console.log(category);
    return (
        <div className="my-20">
            <h3 className="text-3xl font-semibold text-center md:text-left my-10 text-[#425a8b]">Featured Category</h3>

            <Divider></Divider>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-9 gap-6 mt-10 mx-5">
                {
                    category.map(items => <FeaturedCategoryCard
                        key={items._id}
                        items={items}
                    ></FeaturedCategoryCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedCategories;