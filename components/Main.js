import React from "react"
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'

const Main = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  render() {
    return (
      <h1>
        <Link to="/foo">Hola</Link>
      </h1>
    );
  }
});

export default Main;
