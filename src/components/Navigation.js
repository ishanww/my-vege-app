import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li className='item'>
                    <Link to='/'> Home </Link>
                </li>
                <li className='item'>
                    <Link to='/vege'> VegeApp </Link>
                </li>
                <li className='item'>
                    <Link to='/blogs'> Blog </Link>
                </li>
            </ul>
        </nav>
    )
};

export default Navigation;