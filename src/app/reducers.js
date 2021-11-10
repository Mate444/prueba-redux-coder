const initialState = {
    friends: []
}

const friendsReducer = (state = initialState, action) => {
  switch(action.type) {

    default:
      return state;
    }
}

export default friendsReducer;

export const friendReducer = (state) => {
  return state.friendsReducer.friends;
}
