import styled from 'styled-components';
import media from 'styled-media-query';


const BaseHeader = styled.div`
  width: 100%;
  min-height: 100%;
  position: absolute;
  top: ${(props) => props.top } !important;
  transform: ${(props) => props.transform } !important;
  width: ${(props) => props.width } !important;
  left: ${(props) => props.left } !important;
  right: ${(props) => props.right } !important;
  height: ${(props) => props.height } !important;
  z-index: 0;
  ${(props) => props.primary ? `
    left: 0;
    top: 0;
    background: linear-gradient(to bottom, #2d6efd 0%, #2d54bf 100%); ` : 'background: blue;'};

  ${(props) => props.stripe ? `
    color: #fff;
    transform: skewY(-12deg);
    width: 100%;
    left: 0;
    top: 0;
    height: 90%;
    position: absolute;
    overflow: hidden;
    transform-origin: 0;
    background: linear-gradient(150deg,#3F51B5 15%,#05D1FF 90%,#7775FF 94%);
    z-index: 0;` : ''
  
  };
  
    ${(props) => props.angled ? `
    color: #fff;
    width: 50%;
    height: 100%;
    top: 0;
    right: 5%;
    transform: skewX(170deg);
    position: absolute;
    overflow: hidden;
    transform-origin: 0;
    background: linear-gradient(100deg,#2196F3 35%,#039BE5 70%,#03A9F4 94%);
    z-index: 0;` : ''
  };    

    ${(props) => props.section ? `
    color: #fff;
   
    height: 100%;
    top: 100vh;
    min-height: 50%;
    left: 0;
    position: relative;
    overflow: hidden;
    background: linear-gradient(100deg,#2196F3 35%,#039BE5 70%,#03A9F4 94%);
    z-index: 0;` : ''
  };
  ${(props) => props.depth ? `
    color: #fff;
    width: 45%;
    height: 120%;
    
    min-height: 20%;
    left: 30vw;
    position: absolute;
    overflow: hidden;
    background: linear-gradient(180deg, #00695C 35%,#006064 70%,#00695C 95%);
    z-index: 0;` : ''
  };
  
    ${media.lessThan('medium') `
    transform: skewX(0deg);
    left: 0;
    right: 0;
    width: 100%;
    `}
`;

export default BaseHeader;

