import { deleteFriend } from "../app/actions";
import { useDispatch } from "react-redux";

const Friend = ({friend}) => {
  const dispatch = useDispatch();
  return (
    <div>
      ---
      <h2>{friend.name}</h2>
      <h5>{friend.surname}</h5>
      <button onClick={() => dispatch(deleteFriend(friend.name))}>X</button>
    </div>
  )
}

export default Friend;
