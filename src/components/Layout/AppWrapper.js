import styled from 'styled-components';

const AppWrapper = styled.div`
* {
  z-index: 1;
}
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 0;
  flex-direction: column;
  height: 100%;
  width: 100%;
  
  margin-top: ${(props) => props.marginTop ? props.marginTop : '8%' };
  
  @media screen and (min-width: 300px) and (max-width: 600px) {
    div {
    width: 100%;
      }
    }
   
  a {
  text-decoration: none;
  }
`;
export default AppWrapper