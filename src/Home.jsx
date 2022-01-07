import React from 'react'
import Header from './Header.jsx';
import Particle from './Particle.jsx';
import Toggle from './Toggle.js';
import { AccountBox } from "./components/accountBox";
import './home.css';
import styled from "styled-components";
import Infocard from './components/Infocard';
import './index.css';

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

function Home() {
    return (
        <div className='home'>
            <Header />
         <AppContainer>
            <Particle />
    </AppContainer>  
        <div >  <Infocard  /> </div>
      {/*}    <Toggle /> */}
            
        </div>
    )
}

export default Home
