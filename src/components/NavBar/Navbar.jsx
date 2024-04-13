import React, { useState } from "react";
import './Navbar.css'
import MobileNav from "./MobileNav/MobileNav";
import images from "../../images";

const Navbar = () => {
    
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }

    return(
        <>
            <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
            <nav className="nav-wrapper">
                <div className="nav-content">
                    <img className="logo" src={images[10]} alt="" />

                    <ul>
                        <li>
                            <a className="menu-item">Lucca</a>
                        </li>
                        <li>
                            <a className="menu-item">Capacidad tecnica</a>
                        </li>
                        <li>
                            <a className="menu-item">Experiencia laboral</a>
                        </li>
                        <li>
                            <a className="menu-item">Contactame</a>
                        </li>
                        <button className="contact-btn" onClick={() => {}}>
                            Contratarme
                        </button>
                    </ul>

                    <button className="menu-btn" onClick={toggleMenu}>
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
                        <span
                            className={"material-symbols-outlined"}
                            style={{ fontSize: "1.8rem"}}
                        >
                            {openMenu ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
