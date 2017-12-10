import styled from 'styled-components';

const FlexFull = styled.div `
       display: flex;
       padding: ${(props) => props.noPadding ? '0px' : '10px' };
       margin-top: 10%;
       width: 100%;

       position: ${(props) => props.position };
       margin-top: ${(props) => props.noMargin ? '0px' : props.marginTop };
       margin-bottom: ${(props) => props.marginBottom };
       top: ${(props) => props.top };
       position: ${(props) => props.position };
       height: ${(props) => props.height };
       flex-direction: ${(props) => props.flexDirection };
       border: ${(props) => props.border };
       @media screen and (min-width: 300px) and (max-width: 749px) {
      -webkit-flex-direction: column;
      flex-direction: column;
      }
      @media screen and (min-width: 750px) {
      flex-direction: row;
      flex-direction: ${(props) => props.flexDirection };
      ${(props) => props.mobile } !important;
      }

  `;

export default FlexFull;
