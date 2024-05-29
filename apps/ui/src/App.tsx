import { InferResponseType, hc } from "hono/client";
import { useEffect, useState } from "react";
import type { Api } from "../../api/src";
import "./App.css";

function App() {
  const [count, setCount] =
    useState<InferResponseType<typeof client.users.$get>>();

  const client = hc<Api>("https://airbnb-mono-a2y4.vercel.app");

  useEffect(() => {
    client.users
      .$get()
      .then((res) => res.json())
      .then((json) => setCount(json));
  }, []);

  return (
    <>
      <div>{JSON.stringify(count)}</div>
    </>
  );
}

export default App;
