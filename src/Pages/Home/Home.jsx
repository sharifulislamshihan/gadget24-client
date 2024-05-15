import Banner from "./Banner/Banner";
import BestSelling from "./BestSelling/BestSelling";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import IphoneBanner from "./IphoneBanner/IphoneBanner";
import PhoneAd from "./PhoneAd/PhoneAd";
import SupportCard from "./SupportCard/SupportCard";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedCategories></FeaturedCategories>
            <IphoneBanner></IphoneBanner>
            <BestSelling></BestSelling>
            <PhoneAd></PhoneAd>
            <SupportCard></SupportCard>
        </div>
    );
};

export default Home;