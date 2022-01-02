import React from 'react'
import Header from './Header.jsx';
import Particle from './Particle.jsx';
import Toggle from './Toggle.js';

import './home.css';

function Home() {
    return (
        <div className='home'>
            <Header />
            <Particle />
            <Toggle />
            
        </div>
    )
}

export default Home
