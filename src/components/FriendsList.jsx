import Friend from './Friend';
import { useEffect } from 'react';
import { getFriends } from '../app/actions';
import { useSelector, useDispatch } from 'react-redux';
import { friendReducer } from '../app/reducers';

const FriendsList = () => {
  const friends = useSelector(friendReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFriends());
  }, []);
  return (
    <div>
      <button onClick={() => dispatch(getFriends())}>Cargar amigos</button>
      { friends.length > 0 &&
        friends.map(f => (
          <Friend friend={f}/>
        ))
      }
    </div>
  )
}

export default FriendsList;
