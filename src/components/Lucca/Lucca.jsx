import React from "react";
import './Lucca.css'
import images from "../../images";

const Lucca = () => {
    return(
        <section className="lucca-container">
            <div className="lucca-content">
                <h2>Estudiante de ingeniería en sistemas de información</h2>
                <p>Bachiller en administración y economía, Insituto de la Inmaculada</p>
            </div>

            <div className="lucca-img"> 
                <div>
                    <img src={images[1]} alt="" />
                </div>

                <div>
                    <div className="tech-icon">
                            <img src={images[0]} alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src={images[2]} alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src={images[3]} alt="" />
                    </div>
                    <div className="tech-icon">
                        <img src={images[4]} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Lucca 

