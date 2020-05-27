import React, {useState} from 'react';
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText} from 'reactstrap';
import PropTypes from 'prop-types';

const Header = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


        return(
            <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">James Solima</NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink 
                        href="/About">About Me</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink 
                        href="/Projects">Projects</NavLink>
                  </NavItem>
                    <NavItem>
                        <NavLink
                            href="/Resume">
                                Resume
                        </NavLink>
                    </NavItem>
                </Nav>
                <NavbarText>Simple Text</NavbarText>
              </Collapse>
            </Navbar>
          </div>
        );
      }

Navbar.propTypes = {
    light: PropTypes.bool,
    dark: PropTypes.bool,
    fixed: PropTypes.string,
    color: PropTypes.string,
    role: PropTypes.string,
    expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
    }


export default Header