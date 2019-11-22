import React, { Component } from 'react'
import './App.css'
import Form from './Components/Form';
import List from './Components/List';

class App extends Component {
  render() {
    return (
      <div className='todo-app' style={{ marginTop: '2em' }}>
        <div className='container'>
          <Form />
          <List />
        </div>
      </div>
    )
  }
}

export default App
