import React from 'react';
import { Route, NavLink, HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>


        <div className="content">
        </div>
      </HashRouter>
    </div>
  );
}

export default App;

{/* <ul className="header">
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
 */}