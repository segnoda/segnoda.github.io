import React from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component {
    render() {
        return(
            <nav >
                <div id="nav">
                    <div className="main-nav">
                        <Link to="/">Segno</Link>
                    </div>
                    <div className="sub-nav">
                        <Link to="about">About</Link>
                        <Link to="project">Project</Link>
                    </div>
                </div>
            </nav>
        );
    }
}
