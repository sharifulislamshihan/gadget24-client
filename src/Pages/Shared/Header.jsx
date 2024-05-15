
import { MagnifyingGlass, ShoppingCart, User } from "phosphor-react";
import { Navbar } from "keep-react";
import { Icon, Input } from 'keep-react'
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <Navbar fluid={true}>
            <Navbar.Container className="flex items-center justify-between">
                <Navbar.Container className="flex items-center justify-start gap-10">
                    <Navbar.Brand>
                        <img
                            src="https://i.ibb.co/gzf9QHw/Gray-and-Black-Simple-Studio-Logo-removebg-preview.png"
                            alt="GADGET24"
                            width="150"
                            height="40"
                        />
                    </Navbar.Brand>
                    <Navbar.Container
                        tag="ul"
                        className="lg:flex hidden items-center justify-between gap-8 text-md"
                    >
                        <NavLink to='/'> Home </NavLink>
                        <NavLink to='/'>Category</NavLink>
                        <NavLink to='/'>About Us</NavLink>
                    </Navbar.Container>
                    <Navbar.Collapse collapseType="sidebar">
                        <Navbar.Container tag="ul" className="flex flex-col gap-5">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/'>Category</NavLink>
                            <NavLink to='/'>About Us</NavLink>
                            <NavLink className='md:hidden lg:block' to='/'>Shopping Cart</NavLink>
                            <NavLink className='md:hidden lg:block' to='/'>Login/Register</NavLink>
                        </Navbar.Container>
                    </Navbar.Collapse>
                </Navbar.Container>

                <Navbar.Container className="flex gap-3 md:gap-10">
                    <fieldset className="relative max-w-md">
                        <Input placeholder="Search" className="ps-11" />
                        <Icon>
                            <MagnifyingGlass size={19} color="#AFBACA" />
                        </Icon>
                    </fieldset>

                    <div className="flex gap-5 items-center">
                        <NavLink className='hidden md:block'>
                            <ShoppingCart size={20} color="#444" />
                        </NavLink>

                        <NavLink className='hidden md:block'>
                            <User size={20} color="#444" />
                        </NavLink>
                    </div>
                    <Navbar.Toggle />
                </Navbar.Container>
            </Navbar.Container>
        </Navbar>
    );
};

export default Header;