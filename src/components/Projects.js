import React from 'react';
import '../css/styles.css';
import project1Img from '../images/imgp1.png';
import project2Img from '../images/imgp2.png';
import project3Img from '../images/imgp3.png';
import project4Img from '../images/imgp4.png';
import project5Img from '../images/imgp5.png';

function Projects() {
    return (
        <section id="projects">
            <h2>My Projects</h2>
            <div className="projects__container">
                <div className="project__card" style={{ background: 'linear-gradient(109.6deg, rgb(61, 237, 253) 44.2%, rgb(3, 136, 238) 95.6%)' }}>
                    <img src={project1Img} alt="Project 1" className="project__img" />
                    <div className="project__details">
                        <h3>Project 1</h3>
                        <p>Description: A real time chat application in which users can chat live by sending text and images.</p>
                        <p>Technology: ReactJS, Sass, Firebase Authentication, Firestore Database & Cloud</p>
                    </div>
                </div>
                <div className="project__card" style={{ background: 'radial-gradient(circle at 10% 20%, rgb(255, 131, 61) 0%, rgb(249, 183, 23) 90%)' }}>
                    <img src={project2Img} alt="Project 2" className="project__img" />
                    <div className="project__details">
                        <h3>Project 2</h3>
                        <p>Description: A game in which the player can match the grid of candy’s of columns or rows of three or four to gain points on the scoreboard.</p>
                        <p>Technology: ReactJS, HTML/CSS, JavaScript, Node.js</p>
                    </div>
                </div>
                <div className="project__card" style={{ backgroundColor: '##D3D3D3' }}>
                    <img src={project3Img} alt="Project 3" className="project__img" />
                    <div className="project__details">
                        <h3>Project 3</h3>
                        <p>Description: Website used to generate customized image of QR Code when the use inputs text or URL’s.</p>
                        <p>Technology: HTML, CSS & JavaScript</p>
                    </div>
                </div>
                
                <div className="project__card" style={{background: 'linear-gradient(109.6deg, rgb(217, 250, 158) 11.2%, rgb(128, 251, 174) 91.1%)' }}>
                    <img src={project4Img} alt="Project 4" className="project__img" />
                    <div className="project__details">
                        <h3>Kerala HarmonicHues</h3>
                        <p>Description: A web app build using a combination of 27 API to make the daily life of the people of Kerala 
                        easy by providing KSRTC detail’s, Kerala ASAP validation, Ration Card verification, 
                        Kerala DHSE mark list download and KSEB bills etc.</p>
                        <p>Technology: ReactJS, API Setu, Express.js, MongoDB.</p>
                    </div>
                </div>
                <div className="project__card" style={{ background: 'radial-gradient(circle at 10% 20%, rgb(254, 255, 165) 0%, rgb(255, 232, 182) 90%)' }}>
                    <img src={project5Img} alt="Project 4" className="project__img" />
                    <div className="project__details">
                        <h3>Ameliorate HungerFree</h3>
                        <p>Description: : A single page web application to donate food and provide volunteering to the needy to 
                        achieve Zero Hunger goal of United Nations 17 Sustainable Development Goals. </p>
                        <p>Technology: ReactJS.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;
