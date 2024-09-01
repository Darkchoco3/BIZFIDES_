import "./App.css";
import Login from "./Auth/Login";
import Navbar from "./Layouts/Navbar";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
