import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeAction, toggleAction } from '../actions/toDoAction';

class List extends Component {
  render() {
    console.log('object', this.props.todo)
    const { todo } = this.props;

    const List = todo.length ? (
      todo.map(todo => {
        return (
          <div key={todo.id}>
            {todo.toDo}
            {

            }
            <button className='btn btn-outline-danger'
              onClick={() => this.props.remove(todo.id)}
            >
              Delete
            </button>
            <button className='btn btn-outline-success'
              onClick={() => this.props.complete(todo.id)}
            >
              {todo.isCompleted ? 'Completed' : 'Try to Complete'}
            </button>
          </div>
        )
      })
    ) : (
        <div>
          Add dome To-Do...
      </div>
      )
    return (
      <div>
        {List}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todo: state.toDo
  }
}
const mapDispatchToProps = dispatch => {
  return {
    remove: (id) => { dispatch(removeAction(id)) },
    complete: (id) => { dispatch(toggleAction(id)) },
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)
