import React, {Component} from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
  render () {
    return (
        <div>
            <div id="homepage-text-overlay">
                <h1>LilyChaïa</h1>
                <h2>Textiles | Embroidery</h2>
                <Link to="portfolio"> > Enter </Link>
            </div>
            <video id="homepage-vid" loop autoPlay muted>
                <source src="assets/homepage-vid.mp4" type="video/mp4" />
            </video>
        </div>
    )
  }
}

export default HomePage;
