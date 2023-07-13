import "./App.css";
import Section from "./components/Section";
import Welcome from "./components/Welcome";

function App() {
  const name = "Priyanshu";

  return (
    <>
      <Welcome name="Eram" rollNo="1" />
      <Welcome name="Kareena" rollNo="2" />
      <Welcome name="Santoshi" rollNo="3" />
      <Welcome name={name} rollNo="4" />
      <Section />
    </>
  );
}

export default App;
