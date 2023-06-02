import React from 'react'
import { FooterContainer, SocialIcons } from '../../styled-components/FooterStyles';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
    <FooterContainer>
      <SocialIcons>
        <a href="https://www.facebook.com/profile.php?id=100007425459388" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={32} color="white" />
        </a>
        <a href="https://www.linkedin.com/in/anna-helene-s%C3%A6thre-6a46b421b/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin size={32} color="white" />
        </a>
        <a href="https://www.instagram.com/annahelenne/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={32} color="white" />
        </a>
        <a href="https://github.com/AnnaHelene01" target="_blank" rel="noopener noreferrer">
          <AiFillGithub size={32} color="white" />
        </a>
      </SocialIcons>
    </FooterContainer>    
    </>
  )
};

export default Footer;

