import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom";
import { Nav, HeaderLogo, NavMenu, NavButton } from "../../styled-components/HeaderStyles";
import { useState } from "react";

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

    return (
        <>
        <Nav>
          <HeaderLogo>
            <Link to="/">ANNA SÆTHRE</Link>
          </HeaderLogo>
          <NavMenu className={isNavOpen ? 'responsive' : ''}>
            <Link to="/">Home</Link>
            <Link to="/about">About me</Link>
            <Link to="/contact">Contact</Link>
            <NavButton onClick={toggleNav}>
              {isNavOpen ? <FaTimes /> : <FaBars />}
            </NavButton>
          </NavMenu>
          <NavButton onClick={toggleNav}>
            {isNavOpen ? <FaTimes /> : <FaBars />}
          </NavButton>
        </Nav>
      </>
        );
    }

export default Header;