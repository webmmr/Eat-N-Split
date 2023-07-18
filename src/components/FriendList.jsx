/* eslint-disable react/prop-types */
import Friend from "./Friend";

const FriendsList = ({ friends, onSelectFriend, selected }) => {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <Friend
            key={friend.id}
            friend={friend}
            onSelectFriend={onSelectFriend}
            selected={selected}
          />
        );
      })}
    </ul>
  );
};

export default FriendsList;
