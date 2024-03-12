import Title from "./components/Title";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  let name = "Aleksandar";
  let lastName = "Dimitrov";

  let person = {
    name: "Aleksandar",
    lastName: "Peric",
    age: 25,
  };
  return (
    <div className="app">
      <Navbar />
      <Title />
      <h1>Hello ReactJS</h1>
      <h4>My name is {name + " " + lastName}</h4>
      <p>{person.name + " " + person.lastName + " " + person.age}</p>
    </div>
  );
}

export default App;
