import { friends } from '../data/friends';

export const getFriends = () => {
  return {
    type: "GET_FRIENDS",
    payload: friends
  };
};

export const deleteFriend = (payload) => {
  return {
    type: "DELETE_FRIEND",
    payload
  };
};
