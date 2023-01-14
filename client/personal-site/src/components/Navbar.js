import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import {useState} from 'react';

import '../styles/navbar.css'

import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false)}, 
    [location])

  return (
    <div className="navbar" id={expandNavbar ? "open":"close"}>
        <div className="toggleButton">
            <button onClick={() => {
                setExpandNavbar((prev) => !(prev))
                }}
            >
                <ReorderIcon />
            </button>
        </div>

        <nav class="nav flex-column">
            <Link to={"/"} class="nav-link">HOME.</Link>
            <Link to={"/projects"} class="nav-link">PROJECTS.</Link>
            <Link to={"/experience"} class="nav-link">EXPERIENCES.</Link> 
            <Link to={"/contact"} class="nav-link">CONTACT.</Link>
            {/* <Link to={"/blog"} class="nav-link"> Blog </Link> */}
        </nav>

    </div>
  )
}

export default Navbar