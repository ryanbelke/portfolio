
import styled from 'styled-components';

import NormalImg from 'components/Layout/Img';

const FlexImg = styled(NormalImg)`
  position: relative;
  margin: ${(props) => props.margin ? props.margin : '0 auto' };
  height: ${(props) => props.height + 'px' };
  width: ${(props) => props.width + 'px' };
  width: ${(props) => props.widthPercent + '%' };
  marginTop: ${(props) => props.marginTop };
  display: ${(props) => props.display ? props.display : 'flex' };
  animation: ${(props) => props.rotate ? `spin 10s linear infinite` : 'none'};
  width: ${(props) => props.widthPercent + '%'};
  ${(props) => props.rotate ? `
  -webkit-animation:spin 10s linear infinite;
    -moz-animation:spin 10s linear infinite;

` : '' };

    

      
      
  @media  screen and (min-width: 300px) and (max-width: 600px) {
  width: ${(props) => props.small ? '100px' : '250px'};
  height: ${(props) => props.small ? '100px' : '250px'};
  height: ${(props) => (props.height/2) + 'px' };
  width: ${(props) => (props.width/2) + 'px' };
  width: ${(props) => props.widthPercent + '%'};

  align-items: center;
  }
  @media screen and (min-width: 601px) {
  width: ${(props) => props.small ? '150px' : '300px'};
  height: ${(props) => props.small ? '150px' : '300px'};
  height: ${(props) => (props.height) + 'px' };
  width: ${(props) => (props.width) + 'px' };
  width: ${(props) => props.widthPercent + '%'};

  }
   
`;

export default FlexImg;
