import "./App.css";
import Portfolio from "./Pages/Portfolio";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Navbar from "./Layouts/Navbar";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      
      {/* <Navbar /> */}
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
