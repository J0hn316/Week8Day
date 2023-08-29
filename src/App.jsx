import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import DashBoard from "./pages/DashBoard";
import Stocks from "./pages/Stocks";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/stocks" element={<DashBoard />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks/:symbol" element={<Stocks />} />
      </Routes>
    </div>
  );
}

export default App;
