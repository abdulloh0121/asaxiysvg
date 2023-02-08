import Header from "./components/header";
import Home from "./components/home";
import Appstor from "./components/appstor";
import Footer from "./components/footer";
import Card from "./components/cards";
import { Route, Routes } from "react-router-dom";
import { Singlepage } from "./components/singlepage";
import { Main } from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={`/`} element={<Card />} />
        <Route path={`/:id`} element={<Singlepage />} />
      </Routes>
      <Home />
      <Appstor />
      <Footer />
    </div>
  );
}

export default App;
