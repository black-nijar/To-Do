import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  removeAction,
  toggleAction,
  allAction,
  activeAction,
  completedAction,
  setCurrentStateAction,
  editText
} from '../actions/toDoAction';
import EditTodo from './EditTodo';

class List extends Component {
  componentDidMount() {
    this.props.setCurrentState('ALL')
  }
  handleAll = e => {
    e.preventDefault();
    const { todo } = this.props
    this.props.all(todo)
    this.props.setCurrentState('ALL')
  }
  handleActive = e => {
    e.preventDefault();
    const { todo } = this.props
    this.props.all(todo)
    this.props.active()
    this.props.setCurrentState('ACTIVE')

  }
  handleCompleted = e => {
    e.preventDefault();
    const { todo } = this.props
    this.props.all(todo)
    this.props.completed()
    this.props.setCurrentState('COMPLETED')
  }
  handleEdit = todo => {
    console.log('todo :', todo)

    return (
      <div>
        <div>
          {
            todo.isEdit ? <EditTodo todo={todo} /> : null
          }
        </div>
        <button
          className='btn btn-outline-warning btn-sm'
          onClick={() => this.props.editText(todo.id)}
        >
          Edit
       </button>
      </div>
    )
  }
  render() {
    const { todo } = this.props
    var currentList = []
    if (this.props.currentState === 'ACTIVE') {
      currentList = this.props.activity
    }
    else if (this.props.currentState === 'COMPLETED') {
      currentList = this.props.activity
    }
    else {
      currentList = todo
    }
    const List = currentList.length ? (
      currentList.map(todo => {
        return (
          <div key={todo.id} className='shadow card' style={{ padding: '1em', width: '410px', margin: 'auto' }}>
            <div className=''>
              <h4 className='todo-text'>{todo.text}</h4>
              {this.handleEdit(todo)}
              <hr />
              <div className='btn-group'>
                <div className='btn-remove'>
                  <button className='btn btn-outline-danger btn-sm'
                    style={{ marginRight: '1em' }}
                    onClick={() => this.props.remove(todo.id)}
                  >
                    Delete
                 </button>
                </div>
                <div className='btn-active'>
                  <button className='btn btn-outline-success btn-sm'
                    onClick={() => this.props.toggle(todo.id)}
                  >
                    {todo.isCompleted ? 'Completed' : 'Try to Complete'}
                  </button>
                </div>
              </div>
            </div>
          </div>

        )
      })
    ) : (
        <div >
          Add some To-Do...
      </div>
      )
    return (
      <div>
        <div className='buttons' style={{ marginTop: '1em' }}>
          <button
            className='btn btn-outline-info'
            style={{ marginRight: '3em', padding: 'auto', }}
            onClick={this.handleAll}>
            All
          </button>
          <button
            className='btn btn-outline-success'
            style={{ marginRight: '3em' }}
            onClick={this.handleActive}>
            Active
          </button>
          <button
            className='btn btn-outline-dark'
            onClick={this.handleCompleted}>
            Completed
          </button>
        </div>
        <div className='todo-list' style={{ paddingTop: '2em' }}>
          {List}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todo: state.toDo,
    activity: state.activity,
    currentState: state.currentState
  }
}
const mapDispatchToProps = dispatch => {
  return {
    remove: (id) => { dispatch(removeAction(id)) },
    toggle: (id) => { dispatch(toggleAction(id)) },
    all: (todo) => { dispatch(allAction(todo)) },
    active: () => { dispatch(activeAction()) },
    completed: () => { dispatch(completedAction()) },
    setCurrentState: (currentState) => { dispatch(setCurrentStateAction(currentState)) },
    editText: (id) => { dispatch(editText(id)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)