import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Appointment from "../pages/Appointment";
import Home from "../pages/Home";
import SinglePost from "../pages/SinglePost";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/:category" element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
