import React from 'react';
import '../css/styles.css';
import myResume from '../images/20BCE10702.pdf';

function Resume() {
    return (
        <section id="resume">
            <h2>My Resume</h2>
            <div className="resume__container">
                <div className="resume__pdf-container">
                    <iframe src={myResume} title="Resume" className="resume__iframe" />
                </div>
                <div className="resume__download-container">
                    <a href={myResume} download className="resume__download-btn">
                        Download PDF
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Resume;
