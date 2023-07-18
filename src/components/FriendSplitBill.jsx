/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";

const FriendSplitBill = ({ selected, onSplitBill }) => {
  const [bill, setBill] = useState(0);
  const [paidByUser, setPaidByUSer] = useState(0);
  const paidByFriend = bill - paidByUser;
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  // console.log(paidByFriend, paidByUser);

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill) return;

    // onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);

    if (
      (whoIsPaying === "user" && paidByUser === 0) ||
      (whoIsPaying === "user" && paidByUser > 0)
    ) {
      onSplitBill(paidByFriend);
    }

    if (whoIsPaying === "friend" && paidByUser > 0) {
      onSplitBill(-paidByUser);
    }

    if (whoIsPaying === "friend" && paidByUser === 0) {
      onSplitBill(paidByFriend);
    }

    setBill(0);
    setPaidByUSer(0);
    setWhoIsPaying("user");
  }

  return (
    <>
      <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>You are splitting bill with {selected.name} </h2>

        <label htmlFor="bill">Bill</label>
        <input
          type="number"
          name="bill"
          id="bill"
          value={bill}
          onChange={(e) => setBill(+e.target.value)}
        />

        <label htmlFor="my_expence">My Expense</label>
        <input
          type="number"
          name="my_expence"
          id="my_expence"
          value={paidByUser}
          onChange={(e) =>
            setPaidByUSer(+e.target.value > bill ? paidByUser : +e.target.value)
          }
        />

        <label htmlFor="f_expense">{selected.name}'s Expense</label>
        <input
          type="number"
          name="f_expense"
          id="f_expense"
          disabled
          value={paidByFriend}
        />

        <label htmlFor="pay">Who is paying the bill?</label>
        <select
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="user">Me</option>
          <option value="friend">{selected.name}</option>
        </select>

        <Button>Split Bill</Button>
      </form>
    </>
  );
};

export default FriendSplitBill;
