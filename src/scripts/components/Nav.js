import React from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component {
    render() {
        return(
            <nav>
                <div id="main-nav">
                    <Link to="/">Segno</Link>
                </div>
                <div id="sub-nav">
                    <Link to="about">About</Link>
                    <Link to="education">Education</Link>
                    <Link to="experience">Experience</Link>
                    <Link to="contact">Contact</Link>
                </div>
            </nav>
        );
    }
}
