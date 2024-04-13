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

                        <button className="contact-btn" onClick={()=>{}}>
                            Contratarme
                        </button>
                    </ul>
                </div>    
            </div>
        </>
    )
}

export default MobileNav