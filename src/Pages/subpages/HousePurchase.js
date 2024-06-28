import React from 'react'
import styled from 'styled-components';
import Banner from '../../Components/Props/Banner'
import Client from '../../Components/HomeComponents/Clients';


function HousePurchase(){
    return (
      <Container >
        <Header>
            <Banner text="Do You Have A Construction Project We Can Help With?"/>
        </Header>
        <Body>
        <Title>Procedure for House Purchase/Building</Title>
        <p>To make it simple and pleasant to buy or build with RADOF, the company has instituted different procedures. First, download and fill an application form from here and then follow any of the prescribed procedures. </p>
        <Title>I. OUTRIGHT SALE& BUILDING-SPACING</Title>
        <p>A full payment of any of our house can be made and keys collected after four (4) months.</p>
        <Title>II. INSTALLMENT SCHEME</Title>
        <p>1. The client pays a minimum of 50% of the total cost of the house of their choice before work begins.</p>
        <p>2. When 50% of the work is completed, the client is required to pay 50% of the balance due.</p>
        <p>3. Upon completion of the building, the client pays the remaining amount and the keys are handed over to him or her</p>
        <Title>II. SPECIAL SCHEME</Title>
        <p>Under its special project scheme, RADOF LTD provides clients suited packages to enable identifiable groups, associations and institutions to meet their accommodation requirements.</p>
        <Title>IV. PURCHASE BY INSTITUTIONS</Title>
        <p> Organisations and firms are encourage to buy or build with RADOF and also provide support to workers who are willing to own a house on their own at an affordable price.</p>
        <Title>GHL BANK LIMITED</Title>
        <p> Both residents and non-residential Ghanaians can purchase or build a house with RADOF through the mortgage facilities provide by GHL BANK LTD and other financial institution.

        To apply to GHL BANK, you must take a letter to them and fill out their application form. After vetting, they will issue you with a facility letter confirming their agreement to provide mortgage finance.</p>

      </Body>

      <Client />
    </Container>
    ); 
}

export default HousePurchase;

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
font-size: 1.2em;
letter-spacing: 0.1em;
font-weight: bold;
border: 2px ;
`