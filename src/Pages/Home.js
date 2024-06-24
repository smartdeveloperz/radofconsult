import React from 'react'
import Hero from '../Components/HomeComponents/Hero';
import ServicesCard from '../Components/HomeComponents/ServicesCard';
import Client from "../Components/HomeComponents/Clients";

function Home() {
    return (
      <div className="App">
        <Hero/>
        <ServicesCard/>
        <Client/>
      </div>
    );
  }

  export default Home;