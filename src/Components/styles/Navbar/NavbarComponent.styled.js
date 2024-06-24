import styled from 'styled-components'

export const Topbar = styled.div`
padding: 20px;
text-align: center;
font-family: candara;
font-size: 18px;
font-weight: 600;
color: white;
background-color: #003366;
  .topbar{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }
  .contactbar{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 992px){
    display: none;
  }
`

export const NavbarStyled = styled.div`
 display: flex;
 background-color: blue;

`

export const StyledNavbar = styled.div`

`