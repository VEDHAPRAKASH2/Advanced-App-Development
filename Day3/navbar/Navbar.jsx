import React from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="nav">
            <div className="heading">
                <Link to='/' className='nav-title'>
                Bounty Basket
                </Link>
            </div>
            <div className="nav-right">
                <Link to='/about'><button className="nav-btn">About</button></Link>
                <Link to='/contact'><button className="nav-btn">Contact</button></Link>
                <Link to='/login'><button className="nav-btn">Login</button></Link>
            </div>
        </div>
    );
};

export default Navbar;