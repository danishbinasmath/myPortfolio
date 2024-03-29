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

                <div className=" photoImage">
                    <img src={myImage} alt="My Profile" className="about__image" />
                </div>

                <div class="card">
                    <div class="boxshadow"></div>
                    <div class="main">
                        <div class="top"></div>
                        <div class="left side"></div>
                        <div class="right side"></div>
                        <div class="title">Muhammad Danish</div>
                        <div class="button-container">

                            <a className='button' href="https://github.com/danishbinasmath" target="_blank" rel="noreferrer">
                                <svg class="svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgb(234, 0, 255)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4">
                                    </path>
                                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                                </svg>
                            </a>


                            <a class="button" href="https://linkedin.com/in/muhammaddanish07/" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(234, 0, 255)" class="bi bi-linkedin svg" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                </svg>
                            </a>



                            <a class="button" href="https://leetcode.com/danish_bin_asmath/" target="_blank" rel="noreferrer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="rgb(234, 0, 255)" class="bi bi-file-earmark-code-fill svg" viewBox="0 0 16 16">
                                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM6.646 7.646a.5.5 0 1 1 .708.708L5.707 10l1.647 1.646a.5.5 0 0 1-.708.708l-2-2a.5.5 0 0 1 0-.708l2-2zm2.708 0 2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 10 8.646 8.354a.5.5 0 1 1 .708-.708z" />
                                </svg>
                            </a>

                        </div>
                    </div>
                </div>

            </div>


        </section>
    );
}

export default About;
