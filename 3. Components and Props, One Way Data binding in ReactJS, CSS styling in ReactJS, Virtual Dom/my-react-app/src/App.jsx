import "./App.css";
import Welcome from "./components/Welcome";

function App() {
  const name = "Priyanshu",
    roll = "5";
  const styles = { color: "red", textAlign: "center" };
  return (
    <>
      <h1 className="heading">Hello ReactJS</h1>
      <Welcome name="Anzum" roll="1" />
      {
        // <h1 style={{ color: "red" }}>Hello ReactJS</h1>
        //<h1 style={styles}>Hello ReactJS</h1>
      }

      {/*
         <Welcome name="Anzum" roll="1" />
      <Welcome name="Jyoti" roll="2" />
      <Welcome name="Riya" roll="3" />
      <Welcome name="Eram" roll="4" />
      <Welcome name={name} roll={roll} />
      <Welcome>
        <h1>Hello I am ReactJS!</h1>
        <h2>skhcskj</h2>
      </Welcome>
        */}
    </>
  );
}

export default App;
