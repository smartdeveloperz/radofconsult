import styled from 'styled-components'
import { Navbar } from 'react-bootstrap'

 export const NavbarStyled = styled(Navbar)`
    font-family: candara;
    font-weight: bold;

    .brand{
    color: #003366;
    }
    
  .link {
    color: #003366;
}

.link:hover{
    background-color: #003366;
    color: #fff;
    border-radius: 10px;
    transition: color 0.04s;
}

.dropdown-content {
  color: #003366;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
}

.dropdown-content .nav-dropdown-item {
  color: #000;; 
  padding: 10px 20px; 
  transition: color 0.3s;
}

.dropdown-content .nav-dropdown-item:hover {
  background-color: #003366; 
  color: #fff;
  transition: color 0.8s;
}

.navbar-toggler {
  font-size: 1.25rem; 
  background-color: #ffffff; 

}

.navbar-toggler-icon {
  font-size: 1.2rem;
}

`