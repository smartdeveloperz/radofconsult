import React from 'react'
import styled from 'styled-components';
import Banner from '../Components/Props/Banner';
import Client from '../Components/HomeComponents/Clients';



function Ranges() {
    return (
      <Container >
        <Header>
            <Banner text="Do You Have A Construction Project We Can Help With?"/>
        </Header>
        <Body>
        <Title>Our Range of Houses</Title>
        <p>We have in line with the ever changing customer preferences and socio economic trend, comes out with contemporary designs ranging from one- bedroom to five bedrooms house with all the necessary facilities as well as a unique four-bedroom, two-storey houses some variations to the standards house types can be met to sanctify customer demands. </p>
       
        <Title>The Houses Have Been Designed to Achieve The Following</Title>
        <p>1. Meet the cultural and climatic requirements of Ghanaians household</p>
        <p>2. Provide comfortable living conditions</p>
        <p>3. Effective utilization of space</p>
        <p>4. Aesthetically pleasant buildings</p>
        <p>5. Construction of a minimum cost</p>
        <p> <span>Our core</span>  house make room for expansion, adding on facilities in accordance with customer wishes, however, all extension site plans and leases are provide on request and appropriate fees charged.</p>
      </Body>

      <Client />
    </Container>
    );
  }

  export default Ranges;

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
font-size: 1.5em;
letter-spacing: 0.1em;
font-weight: bold;
border: 2px ;
 `