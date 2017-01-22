import React from 'react';
import $ from 'jquery';

import Profile from './about/Profile';
import Education from './about/Education';
import Experience from './about/Experience';
import Contact from './about/Contact';

export default class About extends React.Component {
    render() {
        return(
            <div className="about">
                <Profile />
                <Education />
                <Experience />
                <Contact />
            </div>
        );
    }
}
