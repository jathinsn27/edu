import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import logo from './images/educhess_logo.png';
import Toggle from './Toggle.js';
import Particle from './Particle.jsx';
import styled from "styled-components";
// import SearchIcon from '@mui/icons-material/Search';
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index:-1;
  position:absolute; 
  width: 100%; 
  height: 100%;
   background-color:#78686f;
    background-image: url("");
     background-repeat: no-repeat; 
     background-size: cover; background-position: 50% 50%;
`;
function Header() {
    return (
        <div className='header'>
        {} /*   <Link to="/">
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
                <AppContainer>
            <Particle />
    </AppContainer>  
                <Toggle />

            </div>
        
        </div>


    )
}

export default Header
