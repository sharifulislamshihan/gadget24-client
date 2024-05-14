import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="px-4 divide-y">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <img className="w-1/2 md:w-1/3 lg:w-1/2" src="https://i.ibb.co/gzf9QHw/Gray-and-Black-Simple-Studio-Logo-removebg-preview.png" alt="" />
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase ">Product</h3>
                        <ul className="space-y-2">
                            <li>Features</li>
                            <li>Integrations</li>
                            <li>Pricing</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase ">Company</h3>
                        <ul className="space-y-2">
                            <li>Company</li>
                            <li>Privacy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase ">Developers</h3>
                        <ul className="space-y-1">
                            <li>Public API</li>
                            <li>Documentation</li>
                            <li>Guides</li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase ">Social media</div>
                        <div className="flex justify-start space-x-3">
                            <FaFacebook className="text-3xl"></FaFacebook>
                            <FaTwitter className="text-3xl"></FaTwitter>
                            <FaInstagram className="text-3xl"></FaInstagram>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center ">© Gadget24. All rights reserved.</div>
        </footer>
    );
};

export default Footer;