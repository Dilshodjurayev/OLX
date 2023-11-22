import "./App.scss";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/header/Header.jsx";
import Routes from "./routes";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
