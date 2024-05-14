import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header";
import Footer from "../Pages/Shared/Footer";


const Main = () => {
    return (
        <div className="max-w-screen-2xl mx-auto font-poppins">
            <div className="mx-1 md:mx-5">
                <Header></Header>

                <Outlet></Outlet>

                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;