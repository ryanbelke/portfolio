import React from 'react';
import AngleFull from './AngleFull';

class AnglesFull extends React.PureComponent {

  render() {
    return(
      <AngleFull top={this.props.top} id="anglesFull">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>

      </AngleFull>
    );
  }
}
export default AnglesFull