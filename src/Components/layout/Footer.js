import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000 * 60 * 60 * 24); 

    return () => clearInterval(timer);
  }, []);

  return (
    <FooterContainer>
      <FooterText>Copyright © {year} <FooterLink>Radof Consult | All Right Reserverd</FooterLink></FooterText>
      <FooterText>Powered By <FooterLink href="https://www.github.com/smartdevz" target="_blank">SmartDevz</FooterLink></FooterText>
      <FooterText>Designed by <FooterLink href="https://www.github.com/sharpartzgh" target="_blank">Sharpartzgh</FooterLink></FooterText>
    </FooterContainer>
  );
};

export default Footer;



const FooterContainer = styled.footer`
  background-color: #003366;
  color: #fff;
  text-align: center;
  padding: 15px 0;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const FooterText = styled.span`
  margin: 0 10px;
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-weight: bold;
`;