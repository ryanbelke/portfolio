import styled from 'styled-components';

const Root = styled.div` 
      z-index: 1;
      border: 2px solid white;
      width: 100%;
      height: 500px;
            padding: 15px;

     @media screen and (min-width: 300px) and (max-width: 500px) {
      margin: 0;
      
      }
      @media screen and (min-width: 501px) {
        margin: 0px auto;
        position: relative;
        max-width: 1024px;
        width: 100%;
        
      }
  
    `;

export default Root;
