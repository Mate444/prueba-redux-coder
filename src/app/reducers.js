
const initialState = {
    friends: []
}

const friendsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_FRIENDS': {
      return {
        ...state,
        friends: action.payload
      }
    }
    case 'DELETE_FRIEND': {
      return {
        ...state,
        friends: state.friends.filter((elem) => elem.name !== action.payload)
      }
    }
    default:
      return state;
    }
}

export default friendsReducer;

export const friendReducer = (state) => {
  return state.friendsReducer.friends;
}
