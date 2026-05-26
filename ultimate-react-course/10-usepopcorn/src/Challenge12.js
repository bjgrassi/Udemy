import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [base, setBase] = useState("EUR");
  const [quote, setQuote] = useState("USD");
  const [conversion, setConversion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      async function convert() {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.dev/v2/rate/${base}/${quote}`,
        );
        const data = await res.json();
        setConversion(data.rate * amount);
        setIsLoading(false);
      }

      if (base === quote) return setConversion(amount);

      convert();
    },
    [base, quote, amount],
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={base}
        onChange={(e) => setBase(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={quote}
        onChange={(e) => setQuote(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {conversion} {quote}
      </p>
    </div>
  );
}
