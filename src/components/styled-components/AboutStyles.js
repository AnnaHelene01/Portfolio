import styled from 'styled-components'

export const AboutContainer = styled.div`
    display: flex;
`;

export const ImgContainer = styled.div`
    padding-left: 5rem;
    padding-bottom: 5rem;
    img {
        border-radius: 20px;
        object-fit: cover;
        width: 560px;
        height: 670px;
    }
`;

export const AboutCard = styled.div`
    background-color: white;
    margin-left: 5rem;
    margin-right: 5rem;
    padding: 2rem;
    width: 560px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 3rem;
    h4, p { 
        background-color: white;
    }

`;
