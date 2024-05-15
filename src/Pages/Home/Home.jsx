import Banner from "./Banner/Banner";
import BestSelling from "./BestSelling/BestSelling";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import IphoneBanner from "./IphoneBanner/IphoneBanner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedCategories></FeaturedCategories>
            <IphoneBanner></IphoneBanner>
            <BestSelling></BestSelling>
        </div>
    );
};

export default Home;