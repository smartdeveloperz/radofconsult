import React from 'react'
import styled from 'styled-components'
import Banner from '../../Components/Props/Banner'
import Client from '../../Components/HomeComponents/Clients';

function WhyBuild(){
    return (
      <Container >
      <Header>
          <Banner text="Do You Have A Construction Project We Can Help With?"/>
      </Header>
      <Body>
      <Title>Why You Must Build With Us?</Title>

      <p>RADOF builds faster and cheaper because your problems about the acquisition of land for development have been and can be solved by the company. </p>
  
      <p>At RADOF, there is no litigation, we do all errands, and indeed your money is in safe hands. Just fill out forms, tell us your location, and leave the rest to us</p>
  
    </Body>

    <Client />
  </Container>
    ); 
}

export default WhyBuild;

const Container = styled.div`
width: 100%;

span {
  font-weight: bold;
  color: #099;
  text-decoration: underline;
}
`

const Header = styled.div`
background-color: #003366;
height: 150px;
display: flex;
justify-content: center;
align-items: center;
text-align:center;
font-size: 1.3em;
color: #fff;
`


const Body = styled.div`
padding:  0 60px;
width: 100%;
`

const Title = styled.div`
text-align: left;
margin: 20px 0;
font-size: 1.2em;
letter-spacing: 0.1em;
font-weight: bold;
border: 2px ;
`