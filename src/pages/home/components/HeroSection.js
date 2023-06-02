import React from 'react'
import { Col, Row } from 'react-bootstrap';
import portrait from '../../../assets/portrait.png'
import resume from '../../../assets/CV-Anna.pdf'
import { IconBtn, Portrait, RoundedBtn } from '../../../components/styled-components/MainStyles';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const HeroSection = () => {
    const openResume = () => {
        window.open(resume, '_blank');
      };
  return (
    <>
     <Row className='mt-5'>
        <Col sm='12' md='6' className='mt-5 justify-content-center d-flex'>
            <Portrait>
                 <img src={portrait} alt='portrait of anna'></img>
            </Portrait>
        </Col>
        <Col sm='12' md='6' className='m-auto'>
            <h4 className='mt-4'>HI THERE! I´M</h4>
            <span className='d-flex'>
                <h2 className='blue-text-colour p-1'>ANNA</h2>
                <h2 className='p-1'>SÆTHRE</h2>
            </span>
            <span className='d-flex mt-3'>
             <p>A <span className='blue-text-colour'>Front-End Web Developer</span> passionate about creating interactive applications and experience on the web</p>
            </span>
            <div className='mt-3 d-flex'>
                <div>
                    <RoundedBtn onClick={openResume}>Resume</RoundedBtn>
                </div>
                <div className='d-flex m-auto'>
                    <a href='https://www.linkedin.com/in/anna-helene-s%C3%A6thre-6a46b421b/' target='_blank' rel='noopener noreferrer'>
                        <IconBtn>
                            <AiFillLinkedin />
                        </IconBtn>
                    </a>
                    <a href='https://github.com/AnnaHelene01' target='_blank' rel='noopener noreferrer'>
                        <IconBtn>
                            <AiFillGithub />
                        </IconBtn>
                    </a>
                </div>
            </div>
        </Col>
    </Row> 
    </>
  )
};

export default HeroSection;
