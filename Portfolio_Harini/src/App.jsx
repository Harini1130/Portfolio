import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Project from "./Project/Project";
import Resume from "./Resume/resume";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
function App() {
  return (
    <div className="bg-[#171d32] h-auto w-full overflow-hidden">
      <Navbar />
      <Home />
      <About />
     <Project />
      <Resume/>
      <Contact/>
      <Footer />
     </div>
  );
}

export default App;