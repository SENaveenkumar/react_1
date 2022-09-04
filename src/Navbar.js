import { render } from "@testing-library/react";
import React from "react";
import Box from "./body";
import './navbar.css';

const MyNav = () => {
    return (
        <div>
        <nav class="navbar">
            <a class="brand" href="#">Blogger</a>
            <ul>
                <li>
                    <a href="#">Blog</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Profile</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </nav>
        <Box /> 
        
        </div>
        
    )
}

export default MyNav;