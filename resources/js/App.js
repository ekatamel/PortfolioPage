import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Timeline from "./components/timeline/Timeline";
import About from "./components/About";
import Footer from "./components/Footer";
import Introduction from "./components/Introduction";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <Introduction />
            <Timeline />
            <Education />
            <Skills />
            <Portfolio />
            <About />
            <Footer />
        </>
    );
}

export default App;
