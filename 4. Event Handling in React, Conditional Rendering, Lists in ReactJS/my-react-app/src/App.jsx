import "./App.css";
import Conditional from "./components/Conditional";
import Events from "./components/Events";
import Parent from "./components/Parent";

function App() {
  return (
    <>
      {/*
        <Events />
        <Conditional type="Odd" />
        <Conditional type="Even" />
        <Conditional type="both" />
        */}
      <Parent />
    </>
  );
}

export default App;
