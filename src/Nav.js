import React, { useEffect, useState } from 'react';
import './Nav.css'

const Nav = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return() => {
            window.removeEventListener("scroll")
        }
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img 
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png
                "
                alt="Netflix Logo"
            />
            <img 
                className="nav_avatar"
                src="data:image/png;base64,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" 
                alt="Netflix Logo"
            />
        </div>
    );
};
export default Nav;