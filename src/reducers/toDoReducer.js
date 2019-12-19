const initState = []

export const toDoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        action.add
      ]

    case 'REMOVE_TODO':
      let remove = state.filter(todo => todo.id !== action.remove)
      return remove

    case 'TOGGLE':
      return state.map(todo => todo.id === action.id ?
        { ...todo, isCompleted: !todo.isCompleted } : todo
      )

    case 'EDIT_TODO':
      console.log('actionId :', action.id)
      return state.map(todo => todo.id === action.id ?
        { ...todo, isEdit: !todo.isEdit } : todo)

    case 'UPDATE_TODO':
      const { newText, id } = action.payload
      return state.map(todo => todo.id === id ?
        { ...todo, text: newText, isEdit: !todo.isEdit } : todo)
    default:
      return state
  }
}