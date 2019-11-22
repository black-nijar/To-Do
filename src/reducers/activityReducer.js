const initState = {}

export const activityReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ALL':
      return action.all;

    case 'ACTIVE':
      let active = state.filter(e => !e.isCompleted)
      return active;

    case 'COMPLETED':
      let completed = state.filter(e => e.isCompleted)
      return completed;

    default:
      return state
  }
}