import React,{ useState } from 'react'
import styled from 'styled-components';
import Banner from '../Components/Props/Banner';
import jobData from '../Components/HomeComponents/jobdata.json';
import Client from "../Components/HomeComponents/Clients";

function Services() {

  const [selectedService, setSelectedService] = useState(jobData[0]);

  const handleServiceClick = (service) => {
    console.log('Service clicked:', service);
    setSelectedService(service);
  };
    return (
      <>
      <Header>
        <Banner text="Services"/>
      </Header>
      <ContentWrapper>
        <LeftColumn>
          {jobData.map((service) => (
            <ServiceBtn
              key={service.index}
              onClick={() => handleServiceClick(service)}
              active={selectedService.text === service.text}
            >
              {service.text.toUpperCase()}
            </ServiceBtn>
          ))}
        </LeftColumn>
        <Container>
          <RightColumn>
            <Title>{selectedService.text}</Title>
            <ServiceList>
              {selectedService.services && selectedService.services.length > 0 ? (
                selectedService.services.map((service, index) => (
                  <ServiceItem key={index}>{service}</ServiceItem>
                ))
              ) : (
                <p>No services available</p>
              )}
              </ServiceList>
          </RightColumn>
          <ServiceImage src={selectedService.image} alt={selectedService.text} />
        </Container>
      </ContentWrapper>
      <Client/>
    </>
    );
  }

  export default Services;

  const ContentWrapper = styled.div`
  margin-bottom: 4.3em;
`;

const ServiceBtn = styled.button`
  background-color: ${(props) => (props.active ? '#e00000' : '#00a0e3')};
  color: white;
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.active ? '#b00000' : '#007bb5')};
  }
`;

  const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  padding: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }


`;

const LeftColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  padding: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const RightColumn = styled.div`
  flex: 1;

`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
  padding: 10px 0;
  background-color: #00a0e3;
  color: #fff;
  font-weight: bold;
`;

const ServiceList = styled.ul`
  list-style: none;
  padding: 0;
  color: #003366;
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
background-color: #003366;
height: 150px;
display: flex;
justify-content: center;
align-items: center;
font-size: 2.3em;
color: #fff;
`