import { Header } from "./components/Header";
import { Portfolio } from "./components/Portfolio";
import { Resume } from "./components/Resume";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toolkit } from "./components/Toolkit";
import { createContext, useEffect, useState } from "react";

export const DeviceWidthContext = createContext("");
function App() {
  return (
    <DeviceWidthContext.Provider value={window.innerWidth}>
      <Header />
      <Portfolio />
      <Resume />
      <AboutMe />
      <Toolkit />
      <Contact />
      <Footer />
    </DeviceWidthContext.Provider>
  );
}

export default App;
