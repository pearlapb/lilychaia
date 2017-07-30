import React, {Component} from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router';
import NavBar from './NavBar.js'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { homepage: false };
    }

    render() {
        const children = React.cloneElement(this.props.children, {
            homepage: this.state.homepage
        });
        return (
            <div id="main-app-component">
                {this.props.location.pathname !== '/' ? <NavBar /> : null}
                {children}
            </div>
        )
    }
}

export default App;
