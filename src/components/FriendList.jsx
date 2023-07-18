/* eslint-disable react/prop-types */
import Friend from "./Friend";

const FriendsList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend) => {
        return <Friend key={friend.id} friend={friend} />;
      })}
    </ul>
  );
};

export default FriendsList;
