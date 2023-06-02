import React from 'react'
import { ImgContainer } from '../../../components/styled-components/AboutStyles';
import alfreds from '../../../assets/alfreds.png'

const Images = () => {
  return (
    <>
        <ImgContainer>
            <img src={alfreds} alt='me and a friend hiking'></img>
        </ImgContainer>
    </>
  )
};

export default Images;
