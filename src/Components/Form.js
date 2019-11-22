import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addAction } from '../actions/toDoAction'

class Form extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const text = this.toDo.value;
    const id = Math.random()
    const isCompleted = false
    const data = {
      text,
      id,
      isCompleted
    }
    //  console.log('todo', data)
    this.props.addValue(data)
    this.toDo.value = ' '
  }
  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <h2 className='text-center'
          style={{ color: '#17a2b8' }}>
          To-Do
        </h2>
        <div className='form-row' style={{ padding: '1em', margin: 'auto', width: '500px' }}>
          <div className='col'>
            <input
              id='add-todo'
              type='text'
              className='form-control'
              placeholder="What is your next plan ???"
              ref={(input) => this.toDo = input}
              required
            />
          </div>
          <button
            className='btn btn-info'
            id='add-todo'
            type='submit'
          >
            Add
          </button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    toDoUpdate: state.toDo
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addValue: (add) => { dispatch(addAction(add)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)