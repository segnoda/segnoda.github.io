import React from 'react';

import Profile from './about/Profile';
import Education from './about/Education';
import Experience from './about/Experience';
import Contact from './about/Contact';

export default class About extends React.Component {
    render() {
        return(
            <div>
                <nav>
                     <div className="about-nav">
                        <a href="#profile">Profile</a>
                        <a href="#education">Education</a>
                        <a href="#experience">Experience</a>
                        <a href="#contact">Contact</a>
                    </div>
                </nav> 
                <Profile />
                <Education />
                <Experience />
                <Contact />
            </div>
        );
    }
}
