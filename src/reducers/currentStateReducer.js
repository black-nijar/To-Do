const initState = {}

export const currentStateReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CURRENT_STATE':
      return action.payload

    default:
      return state
  }
}