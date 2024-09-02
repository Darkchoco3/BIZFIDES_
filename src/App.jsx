import "./App.css";
import Portfolio from "./Pages/Portfolio";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Navbar from "./Layouts/Navbar";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Footer from "./Layouts/Footer";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const LayoutWithNavandFooter = () => (
  <div className="">
          <Navbar />
          <Outlet />
          <Footer />  

  </div>
)
function App() {
  return (
    <div className="">
      
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route element={<LayoutWithNavandFooter/>}>
          <Route path="/" element={<Home />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/portfolio" element={<Portfolio />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
