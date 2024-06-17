import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
// import styled from 'styled-components'
//import radoflogo from '../../assets/images/Navbar/radoflogo.png'
import { Topbar } from '../styles/Navbar/NavbarComponent.styled';
import { NavbarStyled } from '../styles/Navbar/NavbarComponent.styled';
import { StyledNavbar } from '../styles/Navbar/NavbarComponent.styled'


const NavBar = () => {
  return (
    <>
     <StyledNavbar>
      <Topbar>
        <div className="topbar">
          <div className="contactbar">
            <span><FaPhone/></span>
            <span> +233 303 970 456 / +233 577 482 311</span>
          </div>
            <div className="contactbar">
              <span><MdEmail/></span>
              <span>info@radofconsult.com</span>
           </div>
        </div>
      </Topbar>
     </StyledNavbar>
     {['lg'].map((expand) => (
      <NavbarStyled>

      </NavbarStyled>
        
      ))}
    </>
  )
}

export default NavBar