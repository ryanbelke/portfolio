import styled from 'styled-components';

const angle = styled.div`
    color: #fff;
    height: 1500px;
    transform: skewY(-12deg);
    width: 105%;
    overflow: hidden;
    transform-origin: 0;
    background: linear-gradient(150deg,#F5F5F5 15%,#EEEEEE 90%,#F5F5F5 94%);
    z-index: 0 !important;
    top: ${(props) => props.top };
    left: 0;
    position: absolute;

    span {
     position: absolute;
     z-index: 0;
     height: 190px
   }

 :nth-child(1) {
    width: 33.33333%;
    left: -16.66666%;
    background: #F5F5F5;
  }
:nth-child(2) {
    width: 33.33333%;
    top: 0;
    left: 16.66666%;
    right: auto;
    background: #ebebeb;
  }
   :nth-child(3) {
    width: 33.33333%;
    left: 49.99999%;
    bottom: auto;
    background: #EEEEEE;
  }
   :nth-child(4) {
    width: 33.33333%;
    top: 380px;
    right: -16.66666%;
    background: #F5F5F5;
  }
   :nth-child(5) {
    width: 33.33333%;
    bottom: 0;
    background: #F5F5F5;
  }

  `
export default angle;