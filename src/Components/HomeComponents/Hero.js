import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import data from "./data.json"



function Hero() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 7000); 
    return () => clearInterval(interval); 
  }, []);

    return (
      <HeroWrapper>
        <Slide>
           <ImageContainer>
            <Image src={data[currentIndex].image} alt={`Slide ${currentIndex + 1}`} />
           </ImageContainer>
           <Text>{data[currentIndex].text}</Text>
        </Slide>
        <Navigation>
          <Button onClick={handlePrev}>‹</Button>
          <Button onClick={handleNext}>›</Button>
        </Navigation>
      </HeroWrapper>
    );
  }

  export default Hero;


export const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50px;
`

const Slide = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 92%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const Text = styled.div`
  position: absolute;
  color: white;
  bottom: 50px;
  font-size: 2em;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;

  @media (min-width: 768px) {
    font-size: 3em;
  }
`;


const Navigation = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);

  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  background: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  font-size: 2em;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;