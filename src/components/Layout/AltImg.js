
import styled from 'styled-components';

import NormalImg from './Img';

const FlexImg = styled(NormalImg)`
  position: relative;
  
  height: ${(props) => props.height + 'px' };
  width: ${(props) => props.width + 'px' };
  width: ${(props) => props.widthPercent + '%' };
  display: ${(props) => props.display ? props.display : 'flex' };
  animation: ${(props) => props.rotate ? `spin 10s linear infinite` : 'none'};
  width: ${(props) => props.widthPercent + '%'};
  transform: ${(props) => props.transform };
  height: ${(props) => props.heightPercent };  
  top: 0px;
  
  @media  screen and (min-width: 300px) and (max-width: 600px) {


  align-items: center;
  }
  @media screen and (min-width: 601px) {
 

  }
   
`;

export default FlexImg;
