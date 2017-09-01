import React, { Component } from 'react';
import { Navbar, NavItem, Footer } from 'react-materialize';
import './App.css';
import Content from './Content';
import { Router, Route, browserHistory,Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Navbar brand='REACT APP' right className="blue-grey darken-1">
            <NavItem><Link to={'/getstart'}>To-Do App</Link></NavItem>
            <NavItem><Link to={'/Comp'}>API</Link></NavItem>
          </Navbar>
        </div>
        <Content />
        <div className="App-footer">
          <Footer copyrights="&copy 2015 Copyright Text"className='blue-grey darken-1'>
            <h5 className="white-text">Made by React</h5>
          </Footer>;
        </div>
      </div>
    );
  }
}

export default App;
