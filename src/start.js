import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router';

import AboutPage from './Components/AboutPage.js';
import ContactPage from './Components/ContactPage.js';
import HomePage from './Components/HomePage.js';
import NavBar from './Components/NavBar.js';
import PopupMenu from './Components/PopupMenu.js';
import PortfolioPage from './Components/PortfolioPage.js';
import ProjectPage from './Components/ProjectPage.js';

const MainRouter = (
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/about" component={AboutPage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route path="/portfolio" component={PortfolioPage}/>
            <Route path="/portfolio/:project" component={ProjectPage}/>
            <IndexRoute component={HomePage}/>
        </Route>
    </Router>
);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { entered: false }
    }

    changeEnteredState() {
        this.setState({ entered: true })
    };

    render() {
        const children = React.cloneElement(this.props.children, {
            changeEnteredState: this.changeEnteredState.bind(this)
        });
        return (
            <div>
                {this.state.entered && <NavBar />}
                {children}
            </div>
        )
    }
}

ReactDOM.render(
    MainRouter,
    document.getElementById('main')
);
