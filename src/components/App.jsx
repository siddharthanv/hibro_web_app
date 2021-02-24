import React from "react";
import Home from "./Homepage/NavbarMenu/Home";
import About from "./Homepage/NavbarMenu/Aboutus";
import Services from "./Homepage/NavbarMenu/Services";
import Blog from "./Homepage/NavbarMenu/Blog";
import Careers from "./Homepage/NavbarMenu/Careers";
import Contactus from "./Homepage/NavbarMenu/Contactus";
import { Route } from "react-router-dom";
import Navbar from "./Homepage/NavbarMenu/Navbar";
import BrandImage from "../images/hi.png";

function App() {
  return (
    <div>
      <img src={BrandImage} alt="HiBro Brand Logo" />
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/careers" component={Careers} />
      <Route exact path="/contact" component={Contactus} />
    </div>
  );
}

export default App;
