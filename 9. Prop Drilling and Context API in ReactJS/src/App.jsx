import "./App.css";
import A from "./components/A";
import PassValuesContextProvider from "./contexts/PassValuesContext";

function App() {
  return (
    <>
      <PassValuesContextProvider>
        <A />
      </PassValuesContextProvider>
    </>
  );
}

export default App;
