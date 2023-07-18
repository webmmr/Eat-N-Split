import { useState } from "react";
import Button from "./components/Button";
import Form from "./components/Form";
import FriendsList from "./components/FriendList";
import FriendSplitBill from "./components/FriendSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showFriendForm, setShowFriendForm] = useState(false);
  const [selected, setSelected] = useState(null);

  function handleShowForm() {
    setShowFriendForm((prev) => !prev);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowFriendForm(false);
  }

  function handleSelectFriend(friend) {
    setSelected((cur) => (cur?.id === friend.id ? null : friend));
    setShowFriendForm(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        selected.id === friend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelected(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelectFriend={handleSelectFriend}
          selected={selected}
        />

        {showFriendForm && <Form onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowForm}>
          {!showFriendForm ? "Add Friend" : "Close"}
        </Button>
      </div>
      {selected && (
        <FriendSplitBill selected={selected} onSplitBill={handleSplitBill} />
      )}
    </div>
  );
}

export default App;
