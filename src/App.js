import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Dev from "./components/pages/Dev";
import NewProject from "./components/pages/NewProject";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Projects from "./components/pages/Projects";

function App() {
    return (
        <Router>
            <Navbar />
            <Container customClass="minHeight">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/dev" element={<Dev />} />
                    <Route path="/newproject" element={<NewProject />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </Container>
            <Footer />
        </Router>
    );
}

export default App;
