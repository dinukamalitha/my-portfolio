import {Navbar} from "./components/navabar/navbar.jsx";
import {Home} from "./components/home/home.jsx";
import {About} from "./components/about/about.jsx";
import {Techstack}from "./components/techstack/tehstack.jsx";
import {Projects} from "./components/projects/projects.jsx";
import Contact from "./components/contact/contact.jsx";
import {Footer} from "./components/footer/footer.jsx";

function App() {

  return (
    <>
        <Navbar/>
        <Home/>
        <About/>
        <Techstack/>
        <Projects/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default App;
