import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateText } from '../actions/toDoAction'

class EditTodo extends Component {

  handleEdit = (e) => {
    e.preventDefault();
    const newName = this.name.value;
    const { todo: { id } } = this.props
    console.log('editId :', id)
    this.props.updateText(newName, id)
  }

  render() {
    return (
      <div className='edit-todo'>
        <div className='card' style={{ padding: '10px' }}>
          <form className='form' onSubmit={this.handleEdit} >
            <h5>Hey edit your plan...</h5>
            <div style={{ marginBottom: '10px' }}>
              <input
                type='text'
                ref={(input) => this.name = input}
                defaultValue={this.props.todo.text}
                placeholder='Hey edit your plan...'
                className='form-control'
              />
            </div>
            <div className='btn-group' >
              <div className='btn-update'>
                <button
                  className='btn btn-outline-primary btn-sm'
                >
                  Update
                </button>
              </div>
              <div className='btn-close'>
                <button
                  className='btn btn-outline-dark btn-sm'
                >
                  Close
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(null, { updateText })(EditTodo)
