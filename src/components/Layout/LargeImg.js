// language=PostCSS

import styled from 'styled-components';

import NormalImg from 'components/Layout/Img';
import media from 'styled-media-query';

const LargeImg = styled(NormalImg)`
    
  position: ${(props) => props.position? props.position : 'absolute' };
  margin: 0 auto;
  width: ${(props) => props.width ? props.width + 'px' : '600px'};
  width: ${(props) => props.widthPercent + '%' };

  height: ${(props) => props.height ? props.height + 'px' : '500px'};
  display: flex;
  top: ${(props) => props.top ? props.top : '-30px' };
  right: ${(props) => props.right ? props.right : '' };
  left: ${(props) => props.left ? props.left : '' };
  z-index: ${(props) => props.zIndex };
  
${media.lessThan('medium')`
  /* screen width is less than 768px (medium) */
  width: ${(props) => (props.width*.53) + 'px' };
  height: ${(props) =>  (props.height*.53) + 'px' };
  width: ${(props) => props.widthPercent + '%' };

  top: ${(props) => props.top ? props.top : '100%'};
  right: ${(props) => props.right };
   display: ${(props) => props.hideSmall ? 'none' : 'flex' };
   ${(props) => props.mobile };
   ` 
 }
  ${media.between('medium', 'large')`
  /* screen width is between 768px (medium) and 1170px (large) */
   width: ${(props) => props.width ? (props.width*.65) + 'px' : '400px'};
   height: ${(props) => props.height ? (props.height*.65) + 'px' : '300px'};
   ${(props) => props.inBetween };
   width: ${(props) => props.widthPercent + '%' };

  ` }


   
`;

export default LargeImg;
