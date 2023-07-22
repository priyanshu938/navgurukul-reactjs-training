import React, { useEffect, useState } from "react";

const Home = () => {
  const [state, setState] = useState(true);
  const [input, setInput] = useState("");

  useEffect(() => {
    setState(!state);
    const id = setInterval(() => console.log("1"), 1000);
    return () => {
      clearInterval(id);
      console.log("unmount");
    };
  }, []);

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>{input}</p>
    </>
  );
};

export default Home;
