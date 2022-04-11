import React from 'react';
import { Link } from 'react-router-dom';
import Logo2 from '../../images/Logo2.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={Logo2} alt="" />
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;