import React from 'react'
import styled from 'styled-components';
import { keyframes } from 'styled-components';
import logos from './logos.json'

 const Clients = () => {

  return (
    <Container>
        <Title>Some Trusted Clients</Title>
        <Slider>
        {logos.map((logo, index) => (
            <Logo key={index} src={logo.image} alt={logo.alt} />
        ))}
        </Slider>
  </Container>
  )
}

 export default Clients;

 const slide = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Container = styled.div`
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  background-color: #f0f0f0;
  margin-top: 40px;
  margin-bottom: 8.3em;
`;

const Slider = styled.div`
  display: inline-block;
  animation: ${slide} 20s linear infinite;
  margin-bottom: 100px;
`;

const Logo = styled.img`
    height: 100%;
    object-fit: cover;
    margin: 0 20px;

    ${Slider}:hover & {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
`;

const Title = styled.div`

margin: 40px 0;
text-align: center;
font-size: 1.2em;
text-decoration: underline;
color: #003366;
letter-spacing: 5px;
`
