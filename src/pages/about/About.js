import React from 'react'
import Images from './components/Images';
import { AboutContainer } from '../../components/styled-components/AboutStyles';
import InfoContent from './components/InfoContent';

const About = () => {
  return (
    <>
     <h1 className='text-center mt-5 mb-5'>Who is Anna?</h1>
     <AboutContainer>
         <Images /> 
        <InfoContent />
     </AboutContainer>
    </>
  )
};

export default About;
