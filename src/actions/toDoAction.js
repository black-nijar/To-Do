export const addAction = add => dispatch => {
  dispatch({
    type: 'ADD_TODO',
    add
  })
}

//delete action
export const removeAction = remove => dispatch => {
  dispatch({
    type: 'REMOVE_TODO',
    remove
  })
}

//Toggle
export const toggleAction = id => dispatch => {
  dispatch({
    type: 'TOGGLE',
    id
  })
}

export const allAction = all => dispatch => {
  dispatch({
    type: 'ALL',
    all
  })
}
export const activeAction = () => dispatch => {
  dispatch({
    type: 'ACTIVE',
  })
}
export const completedAction = () => dispatch => {
  dispatch({
    type: 'COMPLETED'
  })
}
export const setCurrentStateAction = payload => dispatch => {
  dispatch({
    type: 'CURRENT_STATE',
    payload
  })
}


