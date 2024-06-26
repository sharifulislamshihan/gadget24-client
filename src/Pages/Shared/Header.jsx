
// import { MagnifyingGlass, ShoppingCart, User } from "phosphor-react";
// import { Navbar, NavbarCollapse, NavbarCollapseBtn, NavbarItem } from "keep-react";
// import { Input } from 'keep-react'
import { NavLink } from "react-router-dom";
import {
    Avatar,
    Button,
    Dropdown,
    DropdownAction,
    DropdownContent,
    DropdownItem,
    DropdownList,
    Input,
    InputIcon,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarCollapseBtn,
    NavbarContainer,
    NavbarItem,
    NavbarList,
} from 'keep-react'
import { ShoppingCart, User } from "phosphor-react";
import { BiSearch } from "react-icons/bi";
import { useContext } from "react";
import { SearchContext } from "../../Providers/SearchProvider";


// import DarkModeButton from './DarkModeButton';



const Header = () => {
    const { searchTerm, setSearchTerm } = useContext(SearchContext);

    const handleSearch = e => {
        setSearchTerm(e.target.value);
        console.log("Searching for : ", searchTerm);
    }

    return (
        <Navbar className='border border-white mx-5 md:mx-10'>
            <NavbarContainer>
                <NavbarBrand>
                    <NavLink to='/'>
                        <img
                            src="https://i.postimg.cc/85NFKNYF/Gray-and-Black-Simple-Studio-Logo-removebg-preview.png"
                            alt="GADGET24"
                            width="150"
                            height="40"
                        />
                    </NavLink>
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


                        {/* Input Search */}
                        <fieldset className="relative max-w-md">
                            <Input
                                name="search"
                                onChange={handleSearch}
                                placeholder="Search"
                                className="ps-11" />
                            <InputIcon>
                                <BiSearch className="text-[#afbaca]" />
                            </InputIcon>
                        </fieldset>


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
                {/* Input Search */}
                <fieldset className="relative max-w-md lg:hidden">
                    <Input
                        name="search"
                        onChange={handleSearch}
                        placeholder="Search"
                        className="ps-11" />
                    <InputIcon>
                        <BiSearch className="text-[#afbaca]" />
                    </InputIcon>
                </fieldset>
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