import { useState } from "react";

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [billValue, setBillValue] = useState("");
  const [yourPercentage, setYourPercentage] = useState(0);
  const [friendsPercentage, setFriendsPercentage] = useState(0);

  const percentageAverage = (yourPercentage + friendsPercentage) / 2;
  const tip = (billValue * percentageAverage) / 100;

  function handleReset() {
    setBillValue("");
    setYourPercentage(0);
    setFriendsPercentage(0);
  }

  return (
    <div>
      <BillInput value={billValue} onSetBillValue={setBillValue} />
      <SelectPercentage
        percentage={yourPercentage}
        onSelectPercentage={setYourPercentage}
      >
        How did you like the service
      </SelectPercentage>
      <SelectPercentage
        percentage={friendsPercentage}
        onSelectPercentage={setFriendsPercentage}
      >
        How did your friend like the service
      </SelectPercentage>
      {billValue > 0 && (
        <>
          <Output billValue={billValue} tip={tip} />
          <ResetButton onResetValues={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ value, onSetBillValue }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={value}
        onChange={(e) => onSetBillValue(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ percentage, onSelectPercentage, children }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelectPercentage(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was ok (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Output({ billValue, tip }) {
  return (
    <h3>
      You pay ${billValue + tip} (${billValue} + ${tip} tip)
    </h3>
  );
}

function ResetButton({ onResetValues }) {
  return <button onClick={onResetValues}>Reset</button>;
}
