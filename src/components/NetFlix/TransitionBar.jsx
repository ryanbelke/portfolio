import React from 'react';


export default class TransitionBar extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    }
  }

render() {
  const styles = {
    bar: {
      borderBottom: '4px solid DodgerBlue',
      width: '100%',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    }
  };

  styles.bar['visibility'] = this.props.display;
  return (
    <div>
      <span id="transitionBar" style={styles.bar}/>
    </div>
  )
}
}


