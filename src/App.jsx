import styles from "./App.module.css";
import { About } from "./components/About/About";
import {Hero } from "./components/Navbar/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import {Skills} from "./components/Skills/Skills";
import {Projects} from "./components/Projects/Projects"
import { Footer } from "./components/Footer/Footer";
function App() {
  return <div className={styles.App}>
    <Navbar/>
    <Hero />
    <About />
    <Skills />
  <Projects />
  <Footer />
  </div>;
}

export default App;
