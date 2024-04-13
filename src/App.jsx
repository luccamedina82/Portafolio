import React from "react";
import Navbar from "./components/NavBar/Navbar";
import './index.css'
import Lucca from "./components/Lucca/Lucca";
import './App.css'
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";


const App = () => {
    return(
        <>
            <Navbar/>
            <div className="container">
                <Lucca/>
                <Skills/>
                <WorkExperience/>
                <ContactMe/>
                <Footer/>
            </div>
        </>
    )
}

export default App
