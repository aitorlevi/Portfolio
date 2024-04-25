import { Header } from "./components/Header";
import { Portfolio } from "./components/Portfolio";
import { Resume } from "./components/Resume";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toolkit } from "./components/Toolkit";
import { createContext, useEffect, useState } from "react";
import $ from "jquery";
import { Notification } from "./components/Notification";

export const CurrentLanguageContext = createContext(null);
export const NotifiactionContext = createContext(null);
function App() {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [notificationText, setNotificationText] = useState("");
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

  const showNotification = () => {
    $(".popup-container").slideToggle("slow");
    // const timer = setTimeout(() => {
    //   $(".popup-container").removeClass("show");
    // }, 3000);
    // return () => clearTimeout(timer);
  };

  return (
    <>
      <CurrentLanguageContext.Provider
        value={{ currentLanguage, toggleLanguage }}
      >
        <NotifiactionContext.Provider
          value={{ setNotificationText, showNotification }}
        >
          <Header />
          <Portfolio />
          <Resume />
          <AboutMe />
          <Toolkit />
          <Contact />
          <Footer />
        </NotifiactionContext.Provider>
      </CurrentLanguageContext.Provider>
      <div id="loadingScreen">
        <div className="loader"></div>
      </div>
      <Notification message={notificationText} />
    </>
  );
}

export default App;
