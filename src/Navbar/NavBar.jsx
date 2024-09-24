import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Server from "../Server/Server";
import NoPage from "../NoPage/NoPage";
import Messge from "../Countact/Messge";
import HomeMore from "../More/HomeMore";
import Nav from "./Nav";

const NavBar = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/server" element={<Server />} />
          <Route path="/countactus" element={<Messge/>} />
          <Route path="/homemore" element={<HomeMore/>} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default NavBar;
