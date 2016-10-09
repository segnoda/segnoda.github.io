import React from 'react';

export default class AboutNav extends React.Component {
    render() {
        return(
            <nav>
                <div className="about-nav">
                    <a href="#nav"/>
                    <a href="#profile"/>
                    <a href="#education"/>
                    <a href="#experience"/>
                    <a href="#contact"/>
                </div>
            </nav>
        );
    }
}
