import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';


const CircleFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isContact, setIsContact] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (buttonRef.current) {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const isIntersecting =
        mousePosition.x > buttonRect.left &&
        mousePosition.x < buttonRect.right &&
        mousePosition.y > buttonRect.top &&
        mousePosition.y < buttonRect.bottom;
      setIsContact(isIntersecting);
    }
  }, [mousePosition]);

  return (
    <>
       <Circle style={{ top: mousePosition.y, left: mousePosition.x }} isContact={isContact} />
    </>
  );
};


export default CircleFollower;


const Circle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${props => (props.isContact ? '50px' : '20px')};
  height: ${props => (props.isContact ? '50px' : '20px')};
  background-color: #003366;
  border-radius: 50%;
  pointer-events: none;
  transition: width 0.3s, height 0.3s;
  transform: translate(-50%, -50%);
`;