const initialState = ''

const enter = (state = initialState, action) => {

  switch (action.type) {
    case 'ON_ENTER':

      state = action.name;
      return state

    default:
      return state

  }
}

export default enter
