import styled from 'styled-components';
import media from 'styled-media-query';

const Phone = styled.div`
   box-shadow: inset 20px 24px 7px 1px #fff, inset 0 -5px 20px rgba(173,186,204,.25), 0 1px 6px rgba(0,21,64,.14), 10px -10px 20px rgba(0,21,64,.15);
   align-items: center; 
   border-radius: 36px;
   justify-content: center;
   display: flex;
   transform: rotate(180deg);
   height: 540px;
   width: 300px;
   position: relative;
   padding: 5px;
   margin-left: auto;
   margin-right: auto;
   
   ${media.lessThan('medium') `
    ${(props) => props.mobile } !important;
    `
   }

`;

export default Phone;