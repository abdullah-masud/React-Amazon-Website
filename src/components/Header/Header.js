import React from 'react';
import Logo2 from '../../images/Logo2.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <img src={Logo2} alt="" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    );
};

export default Header;