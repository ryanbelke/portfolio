import styled from 'styled-components';

const H2 = styled.h2` 
      font-size: ${(props) => props.medium ? '1.15em' : '2em'};
      text-transform: ${(props) => props.uppercase ? 'uppercase' : 'none'};
      font-family: ${(props) => props.condensed ? `'Open Sans Condensed', sans-serif` : `'Open Sans', sans-serif`};
      margin: ${(props) => props.margin ? props.margin : '0.25em 0.1em'};
      color: ${(props) => props.color};
      font-weight: ${(props) => props.weight};
      letter-spacing: ${(props) => props.letterSpacing ? props.letterSpacing : '0.09em'};
      display: ${(props) => props.display ? props.display : 'block' };
  
     @media screen and (min-width: 300px) and (max-width: 600px) {
      font-size: 1.55em;
      margin-top: 1.5rem;
      font-weight: bolder;
      color: ${(props) => props.change ? '#6b7c93' : props.primary};

    }
`;

export default H2;
