import React from 'react';

import Profile from './about/Profile';
import Education from './about/Education';
import Experience from './about/Experience';
import Contact from './about/Contact';

export default class About extends React.Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnMount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll(event) {
        console.log(window.pageYOffset);
        console.log(document.body.scrollTop);
        console.log(document.documentElement.scrollTop);
    }
    getPageScroll() {
        var yScroll;

        if (window.pageYOffset) {
            yScroll = window.pageYOffset;

        } else if (document.documentElement && document.documentElement.scrollTop) {
            yScroll = document.documentElement.scrollTop;

        } else if (document.body) {
            yScroll = document.body.scrollTop;
        }
        return yScroll;
    }
    handleClick(event) {
        var maxOffset = document.body.scrollHeight - window.innerHeight;
        console.log(maxOffset);
        var body = document.body,
            animateTime = 1000;

        var targetOffset = document.getElementById(event.target.hash.substr(1)).offsetTop;
        var currentPosition = this.getPageScroll();
        console.log(targetOffset);

        if (targetOffset > maxOffset) {
            targetOffset = maxOffset;
        }

        body.classList.add('in-transition');
        body.style.WebkitTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
        body.style.MozTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
        body.style.transform = "translate(0, -" + (targetOffset - currentPosition) + "px)";

        window.setTimeout(function () {
            body.classList.remove('in-transition');
            body.style.cssText = "";
            window.scrollTo(0, targetOffset);
        }, animateTime);

        history.pushState(null, null, event.target.href);

        event.preventDefault();
    }
    render() {
        return(
            <div>
                <nav>
                     <div className="about-nav">
                        <a href="#profile" onClick={this.handleClick.bind(this)}>Profile</a>
                        <a href="#education" onClick={this.handleClick.bind(this)}>Education</a>
                        <a href="#experience" onClick={this.handleClick.bind(this)}>Experience</a>
                        <a href="#contact" onClick={this.handleClick.bind(this)}>Contact</a>
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
