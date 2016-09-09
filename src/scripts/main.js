import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './components/Layout';
import About from './components/About';
import Project from './components/Project';
import ErrorPage from './components/ErrorPage';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={About} />
            <Route path="about" component={About} />
            <Route path="project" component={Project} />
       </Route>
        <Route path="*" component={ErrorPage} />
    </Router>, document.getElementById('react-container'));
