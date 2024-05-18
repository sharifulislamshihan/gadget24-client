/* eslint-disable react/prop-types */


const FeaturedCategoryCard = ({items}) => {
    const { name, image} = items;
    return (
        <div className="bg-slate-100 rounded-xl overflow-hidden shadow-md transition-transform duration-300 transform hover:scale-105 hover:bg-slate-200">
            <img className="w-20 mx-auto mt-10" src={image} alt="" />
            <h3 className="text-center mt-3 mb-5 text-md font-semibold">{name}</h3>
        </div>
    );
};

export default FeaturedCategoryCard;