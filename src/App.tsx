import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Problematic } from "./components/Problematic"
import { Solution } from "./components/Solution"
import { Features } from "./components/Features"
import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import CoursesAndModules from "./components/CoursesAndModules"
import { Us } from "./components/Us"
import { UserVision } from "./components/UserVision"
// import { UserVision } from "./components/UserVision"

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#030812]">
      <Header />
      <main>
        <Home />
        <Problematic />
        <Solution />
        <Features />
        <CoursesAndModules />
        <UserVision /> 
        <Us />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
