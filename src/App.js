import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Nav";
import Welcome from "./components/Welcome";
import Books from "./components/Books";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <Welcome />
      <Books />
      <Footer />
    </div>
  );
}

export default App;
