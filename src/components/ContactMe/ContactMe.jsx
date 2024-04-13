import React from "react";
import './ContactMe.css'
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";
import images from "../../images";

const ContactMe = () => {
    return(
        <section className="contact-container">
            <h5>Contactame</h5>

            <div className="contact-content">
                <div style={{flex: 1}}>
                    <ContactInfoCard
                        iconUrl={images[5]}
                        text="luccamedina03@gmail.com"
                    />
                    <ContactInfoCard
                        iconUrl={images[2]}
                        text="https://github.com/luccamedina82"
                    />
                </div>
                <div style={{flex: 1}}>
                    <ContactForm/>
                </div>
            </div>
        </section>
    )
}

export default ContactMe



