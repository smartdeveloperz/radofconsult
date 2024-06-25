import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import jobdata from './jobdata.json';

const ServicesCard = () => {
  const navigate = useNavigate();

  const handleCardClick = (job) => {
    navigate('/services', { state: { selectedService: job } });
  };

  return (
    <Container>
      {jobdata.map(({ index, image, text, services }) => (
        <CardWrapper key={index} onClick={() => handleCardClick({ index, image, text, services })}>
          <ImageContainer>
            <Image src={image} alt={text} loading="lazy" />
          </ImageContainer>
          <CardBody>
            <h3>{text}</h3>
          </CardBody>
        </CardWrapper>
      ))}
    </Container>
  );
};

export default ServicesCard;

const Container = styled.div`
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

const CardWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${CardWrapper}:hover & {
    transform: scale(1.1);
  }
`;

const CardBody = styled.div`
  padding: 15px;
  text-align: center;

  h3 {
    margin: 0;
    font-size: 1.2em;
    color: #333;
  }
`;
