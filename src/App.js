import './App.css';
import Home from './Pages/Home'
import Header from './Components/layout/Header' 
import NavBar from './Components/layout/NavBar';
import AppWrapper from './Components/styles/container/AppWrapper'
import StyledContainer from './Components/styles/container/StyledContainer'
import { Routes, Route } from "react-router-dom"


import About from './Pages/About'
import Services from './Pages/Services'
import Ranges from './Pages/Ranges'
import Contact from './Pages/Contact'
import CircleFollower from "./Components/CircleFollower"

function App() {
  return (
    <AppWrapper className="App">
      <Header/>
      <NavBar />
      <StyledContainer>
        <Routes>
          <Route exact path="/" element ={ <Home/> }/>
          <Route path="about-us" element ={ <About/> }/>
          <Route path="services" element ={ <Services/> }/>
          <Route path="ranges-of-house" element ={ <Ranges/> }/>
          <Route path="contact" element ={ <Contact/> }/>
        </Routes>
      </StyledContainer>
      <CircleFollower />
    </AppWrapper>
  );
}

export default App;