import styled from 'styled-components';

const HalfCircle = styled.div `
    width: 7%;
    
    height: 40px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: white;
  
    border-top-left-radius: 90px;
    border-top-right-radius: 90px;
    display: flex;
    margin-left: 46.6%;
    margin-right: 46.5%;
    
    @media screen and (min-width: 300px) and (max-width: 600px) {
    width: 15%;
    height: 30px;
    margin-left: 42.5%;
    margin-right: 42.5%;
        

`;

export default HalfCircle;
