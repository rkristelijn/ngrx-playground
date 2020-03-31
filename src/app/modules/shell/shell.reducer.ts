export function shellReducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_MENU':
      console.log('state:', state)
      console.log('action', action)
      return {
        ...state,
        showSmallMenu: !action.payload,
      }
    default:
      return state
  }
}
