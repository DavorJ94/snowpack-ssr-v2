import { h, hydrate as hydratation } from "preact";
import { useState } from "preact/hooks";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter

export const hydrate = (arg) => hydratation(<Counter />, arg);
