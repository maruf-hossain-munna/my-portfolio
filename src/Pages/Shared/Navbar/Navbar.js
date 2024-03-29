import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {

    const menuItems = <>
        <li className='font-semibold lg:mr-6'><Link to='/'>Home </Link> </li>
        <li className='font-semibold lg:mr-6'>
            <HashLink smooth to="/#skills"> Skills </HashLink>
        </li>
        <li className='font-semibold lg:mr-6'>
            <HashLink smooth to="/#projects"> Projects </HashLink>
        </li>
        <li className='font-semibold lg:mr-6'>
            <HashLink smooth to="/#about"> About Me  </HashLink>
        </li>
        <li className='font-semibold lg:mr-6'>
            <HashLink smooth to="/#contact"> Contact </HashLink>
        </li>
    </>


    return (
        <div>
            <div className="navbar flex justify-between bg-base-100 mx-auto text-white fixed">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl" to='/'> Maruf's Portfolio</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-xl  px-10">
                        {menuItems}
                    </ul>
                </div>
                {/* <div className="navbar-end rounded-full">
                    <div className="w-10 h-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" alt='' />
                    </div>

                    <a href="Front-end-resume-single.pdf" download="Maruf's Resume" >
                        <button className="btn btn-outline btn-primary rounded-full px-8 lg:mr-16 ">Download Resume</button>
                    </a>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;