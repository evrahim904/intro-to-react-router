import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/about">about</ActiveLink>
            <ActiveLink to ="/friends">friends</ActiveLink>
            <ActiveLink to="/contact">contact</ActiveLink>
        </nav>
    );
};

export default Header;