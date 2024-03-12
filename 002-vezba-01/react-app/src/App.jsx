import Navbar from "./components/Navbar/Navbar";
import Title from "./components/Title/Title";
import Footer from "./components/Footer/Footer";

import "./app.css";

function App() {
  return (
    <>
      <Navbar />
      <main className="App">
        <h2 className="appTitle">Hello React</h2>
        <Title />
        <Title />
      </main>
      <Footer />
    </>
  );
}

export default App;
