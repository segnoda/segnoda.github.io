import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './components/Layout';
import About from './components/About';
import Blog from './components/Blog';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={About} />
            <Route path="about" component={About} />
            <Route path="blog" component={Blog} />
       </Route>
    </Router>, document.getElementById('react-container'));
