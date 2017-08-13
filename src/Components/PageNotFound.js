import React, {Component} from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router';

class PageNotFound extends Component {
    render() {
        return (
            <div>
                <h4>404 Page Not Found</h4>
                <Link to="/">Want to go home?</Link>
            </div>
        )
    }
}

export default PageNotFound;
