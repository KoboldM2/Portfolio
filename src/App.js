import React from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <HashRouter>

        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <NavLink exact to ="/">Home</NavLink>
            <NavLink to = "/aboutme">About Me</NavLink>
            <NavLink to = "/projects">Projects</NavLink>
          </Nav>
        </Navbar>

        <div className="content">
          <Route exact path="/" component={Home}/>
          <Route path="/aboutme" component={About}/>
          <Route path ="/projects" component={Projects}/>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;

/* <ul className="header">
<li><NavLink exact to="/">Home</NavLink></li>
<li><NavLink to="/stuff">Stuff</NavLink></li>
<li><NavLink to="/contact">Contact</NavLink></li>
</ul>
</div>

<div className="content">
<Route exact path="/" component={Home}/>
<Route path="/stuff" component={Stuff}/>
<Route path="/contact" component={Contact}/>
</div>
 */