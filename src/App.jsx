import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <nav className="navbar">
            <img src="./../images/ironhack-logo.svg" alt="ironhack logo" />
            <img src="./../images/menu-top.svg" alt="ironhack logo" />
          </nav>

          <div className="heroMessage">
            <h1>Say hello to ReactJS</h1>
            <p>You will learn a Frontend framework from scratch and become a Ninja Developer</p>
            <a className="btn-primary" href="#">
              Awesome!
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src="./../images/icon1.png" alt="declarative logo" />
            <h4>Declarative</h4>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div className="col">
            <img src="./../images/icon2.png" alt="components logo" />
            <h4>Components</h4>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div className="col">
            <img src="./../images/icon3.png" alt="single-way logo" />
            <h4>Single-Way</h4>
            <p>A set og immutable values are passed to the components.</p>
          </div>
          <div className="col">
            <img src="./../images/icon4.png" alt="jsx logo" />
            <h4>JSX</h4>
            <p>Statically-typed designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
