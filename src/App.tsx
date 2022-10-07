import { useEffect, useState } from "react";
import { GarbageFactory } from "./GarbageFactory";
import "./styles.css";

const PALE_YELLOW = "#FCF3CF";
const PALE_GREEN = "#A3E4D7";

enum Status {
  NotStarted,
  InProgress,
  Done,
}

function sumEvenNumbers(value: any): number {
  if (typeof value === "number" && value % 2 === 0) {
    return value;
  }

  if (Array.isArray(value)) {
    return value.reduce((acc, x) => acc + sumEvenNumbers(x), 0);
  }

  if (typeof value === "object" && value !== null) {
    return sumEvenNumbers(Object.values(value));
  }

  return 0;
}

export default function App() {
  const [garbageArray, setGarbageArray] = useState<any[]>([]);

  useEffect(() => {
      // Because of hot reload
    setGarbageArray(() => []);

    const garbageFactory = new GarbageFactory((value) => {
      setGarbageArray((array) => [...array, value]);
    });

    setTimeout(async () => {
      document.body.style.backgroundColor = PALE_YELLOW;
      await garbageFactory.startAsync();
      document.body.style.backgroundColor = PALE_GREEN;
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h2>Sum of even numbers:</h2>
      {sumEvenNumbers(garbageArray)}

      <br />
      <br />

      <h2>List of values:</h2>
      <ul>
        {garbageArray.map((value, index) => (
          <li key={index}>{JSON.stringify(value)}</li>
        ))}
      </ul>
    </div>
  );
}
