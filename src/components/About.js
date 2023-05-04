import React from 'react';
import '../css/styles.css';
import myImage from '../images/20BCE10702_PHOTOS.jpg';


function About() {
    return (
        <section id="about">
            <div className="about__container">
                <div className="about__description">
                    <h2>About Me</h2>
                    <p>I am a Full Stack Developer with experience in JAVA, ReactJS, Node.js, JavaScript, HTML, CSS (Sass & Bootstrap), MySQL, Firebase (Authentication, Firestore
                        Database & Cloud), Data Structures and Algorithms
                        . I am passionate about creating beautiful and user-friendly web applications that provide value to users. In my free time, I enjoy Badminton and Reading.</p>
                </div>
                <div className="about__image-box">
                    <img src={myImage} alt="My Profile" className="about__image" />
                </div>

            </div>
        </section>
    );
}

export default About;
