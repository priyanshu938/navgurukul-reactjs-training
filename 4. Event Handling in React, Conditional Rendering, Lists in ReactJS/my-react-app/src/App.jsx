import "./App.css";

function App() {
  const clicked = (event, name) => {
    console.log(event.type, name);
    alert("Hello i am clicked");
  };

  const inputBox = (e) => {
    console.log(e.target.value);
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <input type="text" name="" id="" onChange={inputBox} />
      <button onClick={(e) => clicked(e, "Priyanshu")}>I am a button</button>
    </div>
  );
}

export default App;
