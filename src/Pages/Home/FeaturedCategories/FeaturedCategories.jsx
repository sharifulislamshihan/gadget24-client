import { useEffect, useState } from "react";
import { api } from "../../Shared/SharedFetchApi";
import FeaturedCategoryCard from "./FeaturedCategoryCard";

const FeaturedCategories = () => {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch(`${api}categories/`)
            .then(res => res.json())
            .then(data => {
                setCategory(data.payload)
            })
    }
        , [])
    //const categories = Object.entries(category)
    // console.log( typeof categories);
    //console.log( Object.entries(category.payload));
    console.log(category);
    return (
        <div className="my-20">
            <h3 className="text-3xl font-semibold text-center my-10">Featured Category</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
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