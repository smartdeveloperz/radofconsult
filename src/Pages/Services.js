import React from 'react'
import styled from 'styled-components';


function Services() {
    return (
      <Container>
        <Header>
            <p></p>
        </Header>
        <LeftColumn>
          <ServiceButton>ARCHITECTURAL SERVICES</ServiceButton>
          <ServiceButton>LAND SURVEYING</ServiceButton>
          <ServiceButton>CONSTRUCTION</ServiceButton>
          <ServiceButton>PROPERTIES</ServiceButton>
          <ServiceButtonActive>OTHER SERVICES</ServiceButtonActive>
        </LeftColumn>
        <RightColumn>
          <Title>Other Services</Title>
          <ServiceList>
            <ServiceItem>Consultancy</ServiceItem>
            <ServiceItem>Project Management</ServiceItem>
            <ServiceItem>Roof Design / Leakage Repairs</ServiceItem>
          </ServiceList>
          <ServiceImage src="./Images/Services/roof.jpg" alt="Service Image" />
        </RightColumn>
    </Container>
    );
  }

  export default Services;

  const Container = styled.div`
  display: flex;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const ServiceButton = styled.button`
  background-color: #00a0e3;
  color: white;
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: #007bb5;
  }
`;

const ServiceButtonActive = styled(ServiceButton)`
  background-color: #e00000;
`;

const RightColumn = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ServiceItem = styled.li`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 20px;
`;

const Header = styled.div`
padding: 30px;

`;