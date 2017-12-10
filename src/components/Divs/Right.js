import styled from 'styled-components';
/* eslint-disable */

const Right = styled.div`
    padding: ${(props) => props.noPadding ? '0px' : '30px'};
    justify-content: center;
    flex: ${(props) => props.half ? '0.5' : '' };
    flex: ${(props) => props.quarter ? '0.25' : '' };
    flex: ${(props) => props.three ? '0.75' : '' };
    flex: ${(props) => props.four ? '0.40' : '' };
    flex: ${(props) => props.third ? '0.33' : '' };
    flex: ${(props) => props.flex };
    box-shadow: ${(props) => props.paper ? '0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)' : null};
    margin: ${(props) => props.margin };
    flex: ${(props) => props.flex };
    height: ${(props) => props.height };
    background: ${(props) => props.paper ? 'white' : null };
    border: ${(props) => props.border };

    order: 2;

    @media screen and (min-width: 300px) and (max-width: 600px) {
      padding: 5px 15px 5px 15px;
      ${(props) => props.mobile } !important;

      margin: 0 auto;
    }
    `;

export default Right;
