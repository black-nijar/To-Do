import React, { Component } from 'react'
import Form from './Components/Form';
import List from './Components/List';

class App extends Component {
  render() {
    return (
      <div className='container' style={{marginTop:'2em'}}>
        <Form/>
        <List/>
      </div>
    )
  }
}

export default App
