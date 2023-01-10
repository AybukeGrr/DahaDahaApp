import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CocaCola from './Pages/Detail/CocaCola';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="*" />
          <Route element={<CocaCola />} path="/cocacola" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
