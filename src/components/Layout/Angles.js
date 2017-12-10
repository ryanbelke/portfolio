import React from 'react';
import Angle from './Angle';

class Angles extends React.PureComponent {

  render() {
    return(
      <Angle top={this.props.top} id="angles">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

      </Angle>
    );
  }
}
export default Angles