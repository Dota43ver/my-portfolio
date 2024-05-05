import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div>
        <NavBar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <SocialLinks />
      </div>
    </LanguageProvider>
  );
}

export default App;
