import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router';

import App from './Components/App.js'
import AboutPage from './Components/AboutPage.js';
import ContactPage from './Components/ContactPage.js';
import HomePage from './Components/HomePage.js';
import NavBar from './Components/NavBar.js';
import PopupMenu from './Components/PopupMenu.js';
import PortfolioPage from './Components/PortfolioPage.js';
import ProjectPage from './Components/ProjectPage.js';
import PageNotFound from './Components/PageNotFound.js';

const MainRouter = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/about" component={AboutPage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route path="/portfolio" component={PortfolioPage}/>
            <Route path="/portfolio/:project" component={ProjectPage}/>
            <Route path='*' component={PageNotFound}/>
            <IndexRoute component={HomePage}/>
        </Route>
    </Router>
);

ReactDOM.render(
    MainRouter,
    document.getElementById('main')
);
