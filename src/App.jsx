import { Header } from "./components/Header";
import { Portfolio } from "./components/Portfolio";
import { Resume } from "./components/Resume";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toolkit } from "./components/Toolkit";
import { createContext, useEffect, useRef, useState } from "react";
import $ from "jquery";
import { Notification } from "./components/Notification";

export const CurrentLanguageContext = createContext(null);
export const NotifiactionContext = createContext(null);
function App() {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [notificationText, setNotificationText] = useState("");

  useEffect(() => {
    console.log(window.matchMedia("(prefers-color-scheme:dark)"));
    if (navigator.language.split("-")[0] === "es") {
      $("#checkboxLanguage").addClass("spanish");
      setCurrentLanguage("es");
    }
  }, []);

  const toggleLanguage = async () => {
    $("#checkboxLanguage").css("pointer-events", "none");
    $("#checkboxLanguage").toggleClass("spanish");
    await $("#root")
      .animate({ opacity: 0 }, 500)
      .promise()
      .done(() => {
        setCurrentLanguage((currentLanguage) =>
          currentLanguage === "en" ? "es" : "en"
        );
      });
    var timer = setTimeout(() => {
      $("#root").animate({ opacity: 1 }, 500);
    }, 500);
    $("#checkboxLanguage").css("pointer-events", "auto");
    return () => clearTimeout(timer);
  };

  const showNotification = () => {
    $(".snackbar").slideToggle(200);
    var timer = setTimeout(() => {
      $(".snackbar").slideToggle(200);
    }, 2500);
    return () => clearTimeout(timer);
  };

  const toggleColorMode = () => {
    $("#toggleColorMode").toggleClass("light");
  };

  return (
    <>
      <CurrentLanguageContext.Provider value={currentLanguage}>
        <NotifiactionContext.Provider
          value={{ setNotificationText, showNotification }}
        >
          <Header />
          <Resume />
          <Portfolio />
          <AboutMe />
          <Toolkit />
          <Contact />
          <Footer />
        </NotifiactionContext.Provider>
      </CurrentLanguageContext.Provider>
      <div className="language-container">
        <div className="language-selector">
          <input
            type="checkbox"
            id="checkboxLanguage"
            className="checkbox"
            onClick={() => toggleLanguage()}
          />
          <div className="knobs">
            <span>EN</span>
          </div>
          <div className="layer"></div>
        </div>
      </div>
      <Notification message={notificationText} />
    </>
  );
}

export default App;
