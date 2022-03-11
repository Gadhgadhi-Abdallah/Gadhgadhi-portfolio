import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Skills from "./components/skills/Skills";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuIcon, setMenuIcon] = useState(true);
  return (
    <div className="app">
      <Navbar menuIcon={menuIcon} setMenuIcon={setMenuIcon} />
      <Menu menuIcon={menuIcon} setMenuIcon={setMenuIcon} />
      <div className="sections">
        <Intro menuIcon={menuIcon} />
        {/* <Portfolio /> */}
        <Skills />
        <Works />
        <Contact />
      </div>
    </div>
  );
}

export default App;
