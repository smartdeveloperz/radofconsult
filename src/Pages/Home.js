import React from 'react'
import Hero from '../Components/HomeComponents/Hero'
import ServicesCard from '../Components/HomeComponents/ServicesCard';

function Home() {
    return (
      <div className="App">
        <Hero/>
        <ServicesCard/>
      </div>
    );
  }

  export default Home;