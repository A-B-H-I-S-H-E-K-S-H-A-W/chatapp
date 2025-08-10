import { useState } from "react";
import "./styles/globals.css";
import { useCounterStore } from "./store/store";
// import WhatsAppInterface from "./pages/WhatsAppInterface";

function App() {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  return (
    <>
      {/* <WhatsAppInterface /> */}
      <div className="">
        <p className="text-2xl">Counter Value: {count}</p>
        <button onClick={increment} className="p-5 bg-green-400">
          +
        </button>
        <button onClick={decrement} className="p-5 bg-red-400">
          -
        </button>
      </div>
    </>
  );
}

export default App;
