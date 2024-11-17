import React from "react";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import ContactMe from "./Components/Contact";


const siteProps = {
  name: "Mayank Kumar",
  title: "Web Designer & UI/UX Designer",
  email: "mayank04official@gmail.com",
  gitHub: "mayank-49",
  instagram: "x_mayank_04/",
  linkedIn: "mayank-kumar-52304b277/",
  medium: "",
  twitter: "",
  youTube: "",
};

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title}/>
      <About/>
      <Portfolio />
      <ContactMe/>
      <Footer {...siteProps}/>
    </div>
  );
};

export default App;
