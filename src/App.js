import React, { Component } from 'react';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard.jsx'
import Form from './Component/Form/Form.jsx'
import Header from './Component/Header/Header.jsx'

class App extends Component {
    constructor(){
      super();
      this.state = {
        inventory: [
          {name: 'sunglasses',
           price: 20,
           image: '🕶'},
          {name:'backpack',
           price: 30,
           image: '🎒'},
          {name: 'hat',
           price: 15,
           image: '🧢'}
        ]
      }
    }
  render() {
    return (
      <div className="App">
        <Header className='header' />
        <div className='column'>
            <div className='left'><Dashboard inv={this.state.inventory} className='dashboard' /></div>
            <div className='right'><Form className='form'/></div>
        </div>
          
      </div>
    );
  }
}

export default App;
