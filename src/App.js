import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Ranges from './Pages/Ranges';
import Contact from './Pages/Contact';
import Header from './Components/layout/Header';
import NavBar from './Components/layout/NavBar';
import Footer from './Components/layout/Footer';
import CircleFollower from './Components/CircleFollower';
import AppWrapper from './Components/styles/container/AppWrapper';
import StyledContainer from './Components/styles/container/StyledContainer';

function App() {
  return (
    <AppWrapper className="App">
      <Header />
      <NavBar />
      <StyledContainer>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="services/" element={<Services />} />
          <Route path="ranges-of-house" element={<Ranges />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </StyledContainer>
      <CircleFollower />
      <Footer />
    </AppWrapper>
  );
}

export default App;