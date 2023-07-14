import "./App.css";
import Conditional from "./components/Conditional";
import Events from "./components/Events";

function App() {
  return (
    <>
      {/*
        <Events />
        <Conditional type="Odd" />
        <Conditional type="Even" />
        */}
      <Conditional type="both" />
    </>
  );
}

export default App;
