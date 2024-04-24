import { Header } from "./components/Header";
import { Portfolio } from "./components/Portfolio";
import { Resume } from "./components/Resume";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toolkit } from "./components/Toolkit";
import { createContext, useEffect, useState } from "react";
import $ from "jquery";

export const CurrentLanguageContext = createContext(null);
function App() {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const toggleLanguage = () => {
    loadingScreen();
    setCurrentLanguage((currentLanguage) =>
      currentLanguage === "en" ? "es" : "en"
    );
    $(".menu-icon").toggleClass("open");
    $(".menu-container").toggleClass("active");
    setTimeout(() => {
      loadingScreen();
    }, 2000);
  };

  const loadingScreen = () => {
    $("#loadingScreen").toggleClass("active");
  };

  return (
    <CurrentLanguageContext.Provider
      value={{ currentLanguage, toggleLanguage }}
    >
      <Header />
      <Portfolio />
      <Resume />
      <AboutMe />
      <Toolkit />
      <Contact />
      <Footer />
      <div id="loadingScreen">
        <div className="loader"></div>
      </div>
    </CurrentLanguageContext.Provider>
  );
}

export default App;
