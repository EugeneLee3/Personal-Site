import React from 'react'
import { Outlet } from 'react-router-dom';

import '../App.css';

import Navbar from '../components/Navbar';

const UILoader = (location) => {

    return (
        <div>

            <Navbar />

            <Outlet />

            
        </div>
  );
}

export default UILoader;