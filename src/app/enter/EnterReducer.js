const initialState = false

const enter = (state = initialState, action) => {

  switch (action.type) {
    case 'ON_ENTER':
      state = action.data;
      return state

    default:
      return state

  }
}

export default enter
