import Card from "./components/Card";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Card price={700} naslov={"Rabbit"} />
      <Card price={400} naslov={"Telefon"} />
    </div>
  );
}

export default App;
