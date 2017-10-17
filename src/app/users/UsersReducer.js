const initialState = false

const users = (state = initialState, action) => {

  switch (action.type) {
    case 'ON_ENTER':
      return state

    default:
      return state

  }
}

export default users
