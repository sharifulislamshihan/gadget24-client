import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header";
import Footer from "../Pages/Shared/Footer";


const Main = () => {
    return (
        <div className="mx-5 md:mx-20">
            <Header></Header>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;