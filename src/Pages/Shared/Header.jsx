
// import { MagnifyingGlass, ShoppingCart, User } from "phosphor-react";
// import { Navbar, NavbarCollapse, NavbarCollapseBtn, NavbarItem } from "keep-react";
// import { Input } from 'keep-react'
import { NavLink, useNavigate } from "react-router-dom";
import {
    Avatar,
    Badge,
    Divider,
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
    NavbarList,
} from 'keep-react'
import { Gear, Question, ShoppingBagOpen, ShoppingCart, SignOut, User } from "phosphor-react";
import { BiSearch } from "react-icons/bi";
import { useContext } from "react";
import { SearchContext } from "../../Providers/SearchProvider";
import { AuthContext } from "../../Providers/AuthProvider";


// import DarkModeButton from './DarkModeButton';



const Header = () => {

    const { searchTerm, setSearchTerm } = useContext(SearchContext);
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSearch = e => {
        setSearchTerm(e.target.value);
        console.log("Searching for : ", searchTerm);
    }
    console.log("user", user);

    // handle logout
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate("/");
            })
            .catch(error => console.error(error))
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
                            <NavLink to='/cart' className=' hidden md:block'>
                                <div className="flex">
                                    <ShoppingCart  size={20} color="#444" >
                                    </ShoppingCart>
                                    <Badge 
                                    size="sm"
                                    className='text-black'
                                    color="success">+2</Badge>
                                </div>
                            </NavLink>

                            {
                                user
                                    ? (
                                        <Dropdown placement="bottom-end">
                                            <DropdownAction asChild>
                                                <Avatar size="lg" shape="circle" img="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
                                            </DropdownAction>
                                            <DropdownContent>
                                                <DropdownList>
                                                    <DropdownItem>

                                                        <div className="flex gap-3">
                                                            <Avatar size="md" shape="circle" img="" />
                                                            <h6 className=" font-semibold my-auto">John Doe</h6>
                                                        </div>

                                                    </DropdownItem>
                                                    <Divider className="my-3" color="secondary" />

                                                    <DropdownItem>

                                                        <div className="flex gap-3">
                                                            <ShoppingBagOpen size={24} />
                                                            <h3>My Order</h3>
                                                        </div>

                                                    </DropdownItem>


                                                    <DropdownItem>

                                                        <div className="flex gap-3">
                                                            <Gear size={24} />
                                                            <h3>Settings & Privacy</h3>
                                                        </div>

                                                    </DropdownItem>


                                                    <DropdownItem>

                                                        <div className="flex gap-3">
                                                            <Question size={24} />
                                                            <h3>Help Center</h3>
                                                        </div>

                                                    </DropdownItem>


                                                    <DropdownItem>
                                                        <div className="flex gap-3">
                                                            <SignOut size={24} />
                                                            <h3 onClick={handleLogOut}>Log Out</h3>
                                                        </div>
                                                    </DropdownItem>
                                                </DropdownList>
                                            </DropdownContent>
                                        </Dropdown>
                                    )
                                    : (
                                        <NavLink to='/login' className='hidden md:block'>
                                            <User size={20} color="#444" />
                                        </NavLink>
                                    )
                            }

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