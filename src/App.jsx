import "./App.css";
import Portfolio from "./Pages/Portfolio";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Navbar from "./Layouts/Navbar";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "./Components/NotFoundPage";

function App() {
  return (
    <div className="">
      
      {/* <Navbar /> */}
      <BrowserRouter>
      {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
