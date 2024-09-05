import "./App.css";
import Portfolio from "./Pages/Portfolio";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Navbar from "./Layouts/Navbar";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import Footer from "./Layouts/Footer";
import Services from "./Pages/Services";
import { BrowserRouter, Routes, Route,Outlet } from "react-router-dom";
import NotFoundPage from "./Components/NotFoundPage";
import ForgetPassword from "./Auth/ForgetPassword";
import ResetPassword from "./Auth/ResetPassword";
import About from "./Pages/About";
import PublicRoute from "./Contexts/PublicRoutes";
import PrivateRoute from "./Contexts/PrivateRoutes";
import Dashboard from "./Components/Dashboard";
import VerifyEmail from "./Components/VerifyEmail";

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
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route element={<PrivateRoute />}>
            <Route path="/profile" element={<Dashboard />} />
          </Route>
          </Route>

          <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgetPassword />} />
            <Route path="/reset" element={<ResetPassword />} />
            <Route path="/verify-email/:token" element={<VerifyEmail />} />
          </Route>


          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
