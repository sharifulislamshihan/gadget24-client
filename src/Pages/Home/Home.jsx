import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import BestSelling from "./BestSelling/BestSelling";
import ExploreUs from "./ExploreUs/ExploreUs";
import FeaturedCategories from "./FeaturedCategories/FeaturedCategories";
import IphoneBanner from "./IphoneBanner/IphoneBanner";
import PhoneAd from "./PhoneAd/PhoneAd";
import SupportCard from "./SupportCard/SupportCard";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Gadget24</title>
            </Helmet>

            <Banner></Banner>
            <FeaturedCategories></FeaturedCategories>
            <IphoneBanner></IphoneBanner>
            <BestSelling></BestSelling>
            <PhoneAd></PhoneAd>
            <SupportCard></SupportCard>
            <ExploreUs></ExploreUs>
        </div>
    );
};

export default Home;