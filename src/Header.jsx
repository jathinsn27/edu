import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import logo from './images/educhess_logo.png';
// import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <div className='header'>
            <Link to="/">
                <img className="header_logo" src={logo} alt="Educhess_logo"/>
            </Link>
            {/* <div className="header_search">
                <input className="header_searchInput" type="text" />
                <SearchIcon className="header_searchIcon"/>
            </div> */}

            <div className="header_nav">
                <Link to='/login'>
                <div className="header_option">
                    <span className="header_optionLineOne">Hello Guest</span>
                    <span className="header_optionLineOne">Sign In</span>
                </div>
                </Link>

                <div className="header_option">
                    <span className="header_optionLineOne">Gallery</span>
                    <span className="header_optionLineOne">Pic</span>
                </div>

                <div className="header_option">
                    <span className="header_optionLineOne">Reviews</span>
                    <span className="header_optionLineOne">Form</span>
                </div>

            </div>
        
        </div>


    )
}

export default Header
