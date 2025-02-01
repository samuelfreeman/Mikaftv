import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router';
// import { useNavigate } from "react-router";



const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showRegister, setShowUp] = useState(true)
    const [showLogin, setShowLogin] = useState(true)

    // const navigate = useNavigate()
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {

        const user = localStorage.getItem("user")
        if (user) {
            setShowUp(false);
            setShowLogin(false);

        }
        else {
            setShowUp(true);
            setShowLogin(true);

        }


    }, []);
    // const handleClick = () => {
    //     const token = localStorage.getItem("token");

    //     if (token) {

    //         localStorage.removeItem("token");
    //         navigate("/login");
    //     }
    // };


    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 p-1 justify-center">
                            <NavLink to="/" className="text-xl font-bold ">
                                <img className="w-36 h-32 -mt-10" src="/logo.png" alt="" />
                            </NavLink>
                        </div>
                        <div className="hidden md:ml-6 md:flex md:space-x-8 md:p-5 md:justify-end md:w-[800px]">
                            <NavLink to="/" className="text-gray-900 hover:text-gray-700">Home</NavLink>
                            <NavLink to="/comingsoon" className="text-gray-900 hover:text-gray-700">About</NavLink>
                            <NavLink to="/comingsoon" className="text-gray-900 hover:text-gray-700">Misson</NavLink>
                            <NavLink to="/comingsoon" className="text-gray-900 hover:text-gray-700">Progammes</NavLink>
                        </div>
                    </div>
                    {
                        showRegister && (
                            <div className='flex '>

                                {/* <div className="hidden md:flex items-center">
                                    <Button className=" w-full px-6  mr-2 bg-black text-white"><NavLink to="/login">Login</NavLink></Button>
                                </div> */}
                            </div>
                        )
                    }
                    {
                        (!showRegister && !showLogin) ? (
                            <div className="hidden md:flex items-center">
                                {/* <Button className="mr-4 w-full bg-black text-white" onClick={handleClick}>Logout</Button> */}
                            </div>
                        ) : null
                    }







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
                <div className="md:hidden">
                    <div className="w-full flex flex-col items-center sm:px-3 p-4 space-y-2">
                        <NavLink to="/" className="text-gray-900 hover:text-gray-700">Home</NavLink>
                        <NavLink to="/comingsoon" className="text-gray-900 hover:text-gray-700">About</NavLink>
                        <NavLink to="/comingsoon" className="text-gray-900 hover:text-gray-700">Misson</NavLink>
                        <NavLink to="/comingsoon" className="text-gray-900 hover:text-gray-700">Progammes</NavLink>
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
