import React from "react";
import Navbar from "./Navbar";
function About() {
    return (
        <div>
            <Navbar />
            <div className="about-card">
                <div className="card-body">
                    <div className="card-content">
                        <h2 className="title" style={{fontSize: "39px"}}>Sushant Kumar Bishoi</h2>
                        <h3 className="subtitle" style={{fontSize: "28px", margin: "21px 0"}}>Full Stack Developer</h3>
                        <p className="card-text" style={{fontSize: "30px", margin: "35px 0"}}>
                            I am an aspiring web developer who is capable of doing both backend and frontend development.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
