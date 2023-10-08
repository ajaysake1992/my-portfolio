import "./App.scss";
import Header from "./components/header";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";

function App() {
  return (
    <div className="App">
      <Header name="Ajinath Sake" role="Fullstack developer at Deutsche bank" />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
