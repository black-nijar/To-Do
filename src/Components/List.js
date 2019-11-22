import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  removeAction,
  toggleAction,
  allAction,
  activeAction,
  completedAction,
  setCurrentStateAction
} from '../actions/toDoAction';

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
          <div style={{ padding: '1em' }} key={todo.id} >
            <div className='card' style={{ padding: '1em', width: '450px', margin: 'auto' }}>
              <h4 className='todo-text'>{todo.text}</h4>
              <div className='button-control'>
                <button className='btn btn-outline-danger'
                  style={{ marginRight: '1em' }}
                  onClick={() => this.props.remove(todo.id)}
                >
                  Delete
                  </button>
                <button className='btn btn-outline-success'
                  onClick={() => this.props.toggle(todo.id)}
                >
                  {todo.isCompleted ? 'Completed' : 'Try to Complete'}
                </button>
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
        <div style={{ paddingTop: '2em' }}>
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

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)