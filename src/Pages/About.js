import React from 'react'
import styled from 'styled-components';
import Banner from '../Components/Props/Banner';
import Client from '../Components/HomeComponents/Clients';

function About() {
    return (
     <Container>

      <Header>
        <Banner text="About Us"/>
      </Header>
      <Body>
        <Title>Our Profile</Title>
        <p>Building houses and flats for the people of Ghana is the main preoccupation of RADOF INVESTMENTS & DESIGN CONSULT LIMITED. We also offer architectural services, lands surveying, property management and real estate and consultancy. The company has been in this field since its inceptions in 2009 when it was called RADOF INVESTMENTS & DESIGNING CONSULT (SOLE PROPRIERORSHIP) </p>
        <p>In May 2018, the firm was converted to a limited liability company and now operating as a full fledge commercial enterprise.</p>
        <p>RADOF IDCL has over the years achieved impressive landmarks in the real estate industry by providing affordable and quality housing estates. RADOF IDCL is committed to the objective of nationwide profitable and housing agency which makes housing easily accessible to institutions and individual Ghanaians at home and abroad.</p>
       
        <Title>Our Vision</Title>
        <p>To understand the demand of each project and to work within a team to provide the appropriate solution that would meet the expectations of the client with regards to time, cost, quality and safety.</p>

        <Title>Our Mission</Title>
        <p>Radof Construction and Civil Works is committed to providing services of outstanding quality for a diverse client base by combining professionalism and dedication with client care.</p>
      </Body>

      <Client />

    </Container>
    );
  }

  export default About;

  const Container = styled.div`
  width: 100%;

  `

const Header = styled.div`
background-color: #003366;
height: 150px;
display: flex;
justify-content: center;
align-items: center;
font-size: 2.3em;
color: #fff;
`


const Body = styled.div`
padding:  0 60px;
width: 100%;
`

const Title = styled.div`
text-align: center;
margin: 20px 0;
font-size: 1.5em;
color: #fff;
line-height: 2em;
letter-spacing: 0.3em;
font-weight: bold;
border: 2px ;
background-color: #003366;
 `