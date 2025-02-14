import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router';
import { Button } from '@/components/ui/button';
// import { useNavigate } from "react-router";



const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    // const [showRegister, setShowUp] = useState(true)
    // const [showLogin, setShowLogin] = useState(true)

    // const navigate = useNavigate()
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {

        // const user = localStorage.getItem("user")
        // if (user) {
        //     setShowUp(false);
        //     setShowLogin(false);

        // }
        // else {
        //     setShowUp(true);
        //     setShowLogin(true);

        // }


    }, []);
    // const handleClick = () => {
    //     const token = localStorage.getItem("token");

    //     if (token) {

    //         localStorage.removeItem("token");
    //         navigate("/login");
    //     }
    // };


    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white  border-gray-200 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex justify-between  w-full">
                        <div className="flex-shrink-0 p-1 justify-center">
                            <NavLink to="/" className="text-xl font-bold ">
                                <img className="w-44 h-44 -mt-16" src="/logo.png" alt="" />
                            </NavLink>
                        </div>
                        <div className="hidden md:ml-6 md:flex z-0 md:space-x-2 md:p-4 md:justify-end md:w-[800px]">
                            <Button variant="link"><NavLink to="/" className="text-gray-900 hover:text-gray-700">News</NavLink></Button>

                            <Button variant="link"><NavLink to="/comingsoon" className="text-gray-900 hover:text-gray-700">Business</NavLink></Button>
                            <Button variant="link"> <NavLink to="/comingsoon" className="text-gray-900 hover:text-gray-700">Politics</NavLink></Button>
                            <Button variant="link"> <NavLink to="/programmes">Programmes</NavLink></Button>
                            <Button variant="link"><NavLink to="/about" className="text-gray-900 hover:text-gray-700">About</NavLink></Button>
                            <Button variant="link"> <NavLink to="/comingsoon" className="text-gray-900 hover:text-gray-700">Video</NavLink></Button>
                            <Button variant="link" > <div className='flex '>
                                <img src="/play-button.png" className='px-2' width={"40"} height={"20"} alt="" />
                                <NavLink to="/live"> Live</NavLink>
                            </div>
                            </Button>
                        </div>
                    </div>





                    <div className="flex items-center md:hidden">

                        <button onClick={toggleMenu} className="text-gray-900 pt-2 hover:text-gray-700 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden z-100">
                    <div className="w-full flex  flex-col items-center sm:px-3 p-4 space-y-2">
                        <Button variant="link"><NavLink to="/" className="text-gray-900 hover:text-gray-700">News</NavLink></Button>

                        <Button variant="link"><NavLink to="/comingsoon" className="text-gray-900 hover:text-gray-700">Business</NavLink></Button>
                        <Button variant="link"> <NavLink to="/comingsoon" className="text-gray-900 hover:text-gray-700">Politics</NavLink></Button>
                        <Button variant="link"> <NavLink to="/comingsoon" className="text-gray-900 hover:text-gray-700">Innovation</NavLink></Button>
                        <Button variant="link"><NavLink to="/programmes">Programmes</NavLink></Button>
                        <Button variant="link"> <NavLink to="/comingsoon" className="text-gray-900 hover:text-gray-700">Video</NavLink></Button>
                        <Button variant="link" > <div className='flex '>
                            <img src="/play-button.png" className='px-2' width={"40"} height={"20"} alt="" />
                            <NavLink to="/live"> Live</NavLink>
                        </div>
                        </Button>

                        {/* {
                            showRegister && showLogin && (
                                <div className='w-full '>
                                    <Button className="  w-full  bg-black text-white"><NavLink to="/login">Login</NavLink></Button>
                                </div>
                            )}

                        {
                            !showLogin && !showRegister && (
                                // <Button className="mr-4 w-full bg-black text-white" onClick={handleClick}>Logout</Button>
                                )} */}


                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
