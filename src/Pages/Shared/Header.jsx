
// import { MagnifyingGlass, ShoppingCart, User } from "phosphor-react";
// import { Navbar, NavbarCollapse, NavbarCollapseBtn, NavbarItem } from "keep-react";
// import { Input } from 'keep-react'
import { NavLink } from "react-router-dom";
import {
    Avatar,
    Dropdown,
    DropdownAction,
    DropdownContent,
    DropdownItem,
    DropdownList,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarCollapseBtn,
    NavbarContainer,
    NavbarItem,
    NavbarList,
} from 'keep-react'
import { ShoppingCart, User } from "phosphor-react";

// import DarkModeButton from './DarkModeButton';


const Header = () => {
    return (
        // <Navbar fluid={true}>
        //     <Navbar.Container className="flex items-center justify-between my-10">
        //         <Navbar.Container className="flex items-center justify-start gap-10">
        //             <Navbar.Brand>
        //                 <img
        //                     src="https://i.postimg.cc/85NFKNYF/Gray-and-Black-Simple-Studio-Logo-removebg-preview.png"
        //                     alt="GADGET24"
        //                     width="150"
        //                     height="40"
        //                 />
        //             </Navbar.Brand>

        //             {/* Large view */}
        //             <Navbar.Container
        //                 tag="ul"
        //                 className="lg:flex hidden items-center justify-between gap-8 text-md"
        //             >


        //             {/* tab and mobile view */}
        //             <NavbarCollapseBtn />
        //             <NavbarCollapse>
        //                 <NavbarItem>Projects</NavbarItem>
        //                 <NavbarItem>Research</NavbarItem>
        //                 <NavbarItem>Contact</NavbarItem>
        //                 <NavbarItem>Sign In</NavbarItem>
        //                 <NavbarItem active={true}>Sign Up</NavbarItem>
        //             </NavbarCollapse>
        //             {/* <Navbar.Collapse collapseType="sidebar">
        //                 <Navbar.Container tag="ul" className="flex flex-col gap-5">
        //                     <NavLink to='/'>Home</NavLink>
        //                     <NavLink to='/products'>Products</NavLink>
        //                     <NavLink to='/'>About Us</NavLink>
        //                     <NavLink className='md:hidden lg:block' to='/'>Shopping Cart</NavLink>
        //                     <NavLink className='md:hidden lg:block' to='/login'>Login/Register</NavLink>
        //                 </Navbar.Container>
        //             </Navbar.Collapse> */}
        //         </Navbar.Container>

        //         <Navbar.Container className="flex gap-3 md:gap-10">
        //             <fieldset className="relative max-w-md">
        //                 <Input placeholder="Search" className="ps-11" />

        //                 <MagnifyingGlass size={19} color="#AFBACA" />

        //             </fieldset>

        //         </Navbar.Container>
        //     </Navbar.Container>
        // </Navbar >
        <Navbar className='border border-white mx-5 md:mx-10'>
            <NavbarContainer>
                <NavbarBrand>
                    <img
                        src="https://i.postimg.cc/85NFKNYF/Gray-and-Black-Simple-Studio-Logo-removebg-preview.png"
                        alt="GADGET24"
                        width="150"
                        height="40"
                    />
                </NavbarBrand>
                <NavbarList className="gap-7">
                    <NavLink to='/'> Home </NavLink>
                    <NavLink to='/products'>Products</NavLink>
                    <NavLink to='/'>About Us</NavLink>
                </NavbarList>
                <NavbarList>
                    <div className='flex gap-10'>
                        {/* <DarkModeButton ></DarkModeButton> */}
                        {/* <Dropdown placement="bottom-end">
                            <DropdownAction asChild>
                                <Avatar size="lg" shape="circle" img="/images/avatar/avatar-3.png" />
                            </DropdownAction>
                            <DropdownContent>
                                <DropdownList>
                                    <DropdownItem>Statistics</DropdownItem>
                                    <DropdownItem>Duplicate</DropdownItem>
                                    <DropdownItem>Account</DropdownItem>
                                    <DropdownItem>Logout</DropdownItem>
                                </DropdownList>
                            </DropdownContent>
                        </Dropdown> */}
                        <div className="flex gap-5 items-center">
                            <NavLink className='hidden md:block'>
                                <ShoppingCart size={20} color="#444" >
                                </ShoppingCart>
                            </NavLink>

                            <NavLink to='/login' className='hidden md:block'>
                                <User size={20} color="#444" />
                            </NavLink>
                        </div>

                    </div>
                </NavbarList>
                <NavbarCollapseBtn />
                <NavbarCollapse>
                    <NavLink to='/'> Home </NavLink>
                    <NavLink to='/products'>Products</NavLink>
                    <NavLink to='/'>About Us</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/register'>Register</NavLink>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar >
    );
};

export default Header;