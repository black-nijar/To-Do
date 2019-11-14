export const addAction = add => dispatch => {
  dispatch ({
    type: 'ADD_TODO',
    add
  })
}

//delete action
export const removeAction = remove => dispatch => {
  dispatch ({
    type: 'REMOVE_TODO',
    remove
  })
}

//Toggle
export const toggleAction = id => dispatch => {
  dispatch ({
    type:'TOGGLE',
    id
  })
}
