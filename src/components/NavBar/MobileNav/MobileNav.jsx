import React from "react";
import './MobileNav.css'
import images from "../../../images";

const MobileNav = ( {isOpen, toggleMenu}) => {
    return(
        <>
            <div
                className={`mobile-menu ${isOpen ? "active": ""}`}
                onClick={toggleMenu}
            >

                <div className="mobile-menu-container">
                    <img className="logo" src={images[10]} alt="" />
                    <ul>
                        <li>
                            <a className="menu-item">Home</a>
                        </li>

                        <li>
                            <a className="menu-item">Capacidad</a>
                        </li>

                        <li>
                            <a className="menu-item">Experiencia</a>
                        </li>

                        <li>
                            <a className="menu-item">Contactáme</a>
                        </li>

                        <button className="contact-btn" onClick={()=>{}}>
                            Contratar
                        </button>
                    </ul>
                </div>    
            </div>
        </>
    )
}

export default MobileNav