import Button from "./Button";

const FriendSplitBill = () => {
  return (
    <>
      <form className="form-split-bill">
        <h2>You are splitting bill with X </h2>
        <label htmlFor="bill">Bill</label>
        <input type="number" name="bill" id="bill" />

        <label htmlFor="my_expence">My Expense</label>
        <input type="number" name="my_expence" id="my_expence" />

        <label htmlFor="f_expense">Xs Expense</label>
        <input type="number" name="f_expense" id="f_expense" disabled />

        <label htmlFor="pay">Who is paying the bill?</label>
        <select>
          <option value="me">Me</option>
          <option value="friend">Friend</option>
        </select>

        <Button>Split Bill</Button>
      </form>
    </>
  );
};

export default FriendSplitBill;
