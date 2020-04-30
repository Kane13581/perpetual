import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './App.css';
import './Components/HomeComponents/HomeStyle.css';
import './Components/GenesisComponents/Genesis.css';

import Home from './Components/HomeComponents/Home';
import Genesis from './Components/GenesisComponents/Genesis';




export default function App() {
  return (
    <Router>
      <div className="Padrino">

      <div className="WelcomeParentDiv">
         <div className="TopLeftDiv"></div>
         <div className="TopRightDiv"></div>
         <div className="BottomRightDiv"></div>
         <div className="BottomLeftDiv"></div>
         <div className="CenterDiv">
           <div className="BigWheel">
             <div className="line1">
             </div>
           </div>
           <div className="MidWheel">
           <div className="line2">
             </div>
           </div>
           <div className="SmWheel">
           <div className="line3">
             </div>
           </div>
           <div className="XmWheel">
           <div className="line4">
             </div>
           </div>
         </div>
       </div>

      <div className="container-fluid" >
        <div className="row">

          <div className="col-sm-6 col-lg-6">
            <Link to="/" className="HomeButtonStyle" >
              <div className="HomeDivSymbol">
            <img className="HomeSymbol" src={require('./Assets/MaybeUse/geometricpattern.jpg')} alt="location.jpg" />
            </div>
            </Link>
          </div>

          <div className="col-sm-2 col-lg-2">
            <Link to="/genesis" className="AboutButtonStyle">Genesis</Link>
          </div>

          <div className="col-sm-2 col-lg-2">
            <Link to="/Hobbies" className="HobbiesButtonStyle">Hobbies</Link>
          </div>

          <div className="col-sm-2 col-lg-2">
            <Link to="/contacts" className="ContactsButtonStyle">Contact</Link>
          </div>
        </div>
      </div>


      <div className="BigPicture">
        <div className="PageContents">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/genesis">
              <Genesis />
            </Route>
            {/* <Route path="/hobbies">
              <Hobbies />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route> */}
          </Switch>
        </div>
      </div>
      </div>
    </Router>
  )
}

