const initialState = []

const username = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      alert('username')
      console.log(action,'here');
      return state = action.name

    default:
      return state

  }
}

export default username
