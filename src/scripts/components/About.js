import React from 'react';

import Profile from './about/Profile';
import Education from './about/Education';
import Experience from './about/Experience';
import Contact from './about/Contact';

var $ = require('jquery');

export default class About extends React.Component {
    componentDidMount() {
        this.jquery();
    }
    componentDidUpdate() {
        this.jquery();
    }
    jquery() {
        $(document).ready(function() {
            $(document).on("scroll", onScroll);

            $('a[href^="#"]').on('click', function(e) {
                e.preventDefault();
                $(document).off("scroll");

                $('a').each(function() {
                    $(this).removeClass('active');
                });
                $(this).addClass('active');

                var target = this.hash,
                    menu = target,
                    $target = $(target);
                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top + 2
                }, 800, 'swing', function() {
                    window.location.hash = target;
                    $(document).on("scroll", onScroll);
                });
            });
        });

        function onScroll(event) {
            var scrollPos = $(document).scrollTop();
            $('.about-nav a').each(function() {
                var currLink = $(this),
                    refElement = $(currLink.attr("href"));
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('.about-nav a').removeClass("active");
                    currLink.addClass("active");
                }
                else {
                    currLink.removeClass("active");
                }
            });
        }
    }
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
