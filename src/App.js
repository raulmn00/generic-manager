import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Dev from './components/pages/Dev';
import NewProject from './components/pages/NewProject';
import Footer from './components/Footer';
import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/dev">Developer</Link>
        <Link to="/newproject">New Project</Link>
      </ul>
      <Container>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/dev" element={<Dev/>} />
        <Route path="/newproject" element={<NewProject/>} />
      </Routes>
      </Container>
      <Footer/>
    </Router>

  );
}

export default App;
