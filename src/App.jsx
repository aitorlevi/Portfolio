import { Header } from "./components/Header";
import { Portfolio } from "./components/Portfolio";
import { Resume } from "./components/Resume";
import { AboutMe } from "./components/AboutMe";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toolkit } from "./components/Toolkit";

function App() {
  return (
    <>
      <Header />
      <Portfolio />
      <Resume />
      <AboutMe />
      <Toolkit />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
