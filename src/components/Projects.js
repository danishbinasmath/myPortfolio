import React from 'react';
import '../css/styles.css';
import project1Img from '../images/imgp1.png';
import project2Img from '../images/imgp2.png';
import project3Img from '../images/imgp3.png';

function Projects() {
    return (
        <section id="projects">
            <h2>My Projects</h2>
            <div className="projects__container">
                <div className="project__card" style={{ backgroundColor: '#ADD8E6' }}>
                    <img src={project1Img} alt="Project 1" className="project__img" />
                    <div className="project__details">
                        <h3>Project 1</h3>
                        <p>Description: A real time chat application in which users can chat live by sending text and images.</p>
                        <p>Technology: ReactJS, Sass, Firebase Authentication, Firestore Database & Cloud</p>
                    </div>
                </div>
                <div className="project__card" style={{ backgroundColor: '#FED8B1' }}>
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
            </div>
        </section>
    );
}

export default Projects;
