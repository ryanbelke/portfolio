/* eslint-ignore */
import styled from 'styled-components';

const H1 = styled.h1` 
      font-size: ${(props) => props.medium ? '1.25em' : '1.5em'};
      font-size: ${(props) => props.small ? '1.15em' : props.fontEm + 'em' };
      font-size: ${(props) => props.fontSize + 'em' };
      font-family: ${(props) => props.open ? `'Open Sans', sans-serif` : `'Roboto', sans-serif`};
      font-family: ${(props) => props.fontFamily };
      margin: ${(props) => props.smallMargin ? '0.25em 0.5em' : '1em 0.1em'};
      margin: ${(props) => props.margin};
      display: ${(props) => props.display ? props.display : 'flex'}
      color: ${(props) => props.color };
      color: ${(props) => props.primary ? props.primary : '#6b7c93'};
      font-weight: ${(props) => props.weight};
      line-height: ${(props) => props.lineHeight ? props.lineHeight : '2em' };
      letter-spacing: ${(props) => props.letterSpacing };
      marginLeft: ${(props) => props.marginLeft };
      width: ${(props) => props.width };
      text-shadow: ${(props) => props.textShadow };
     @media screen and (min-width: 300px) and (max-width: 600px) {
      font-size: ${(props) => props.fontSize ? (props.fontEm/1.10) + 'em' : '1.10em'};
      font-size: ${(props) => props.noReduce ? props.fontSize + 'em' : (props.fontEm/1.10) + 'em'};
      margin-top: 1.5rem;
      margin: ${(props) => props.smallMargin ? '0.25em 0.5em' : '1em 0.1em'};
      margin: ${(props) => props.margin };

      color: ${(props) => props.change ? '#6b7c93' : props.primary};
      flex-direction: column;
      flex: 1;
       ${(props) => props.mobile } !important;

    }
     
    `;

export default H1;
