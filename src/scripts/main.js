import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Layout from './components/Layout';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={About} />
            <Route path="about" component={About} />
            <Route path="education" component={Education} />
            <Route path="experience" component={Experience} />
            <Route path="contact" component={Contact} />
       </Route>
    </Router>, document.getElementById('react-container'));
