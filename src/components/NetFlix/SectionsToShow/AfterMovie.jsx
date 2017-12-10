import React from 'react';
import YouTube from 'react-youtube';

export default class AfterMovie extends React.Component {

  render() {
    let afterMovie= "https://www.youtube.com/watch?v=P73Y3f0aKIY";
    return (
      <div id="video" style={styles.div}>
        <YouTube videoId={afterMovie}
                 opts={opts}
                 onPlay={this.onPlay}

        />
      <div style={styles.div2} />
      </div>
    )
  }
}

const styles = {
  div: {
    width: '100%',
    height: '100%',

  },
  div2: {
    width: '100%',
    background: 'rgba(0,0,0,0.60)',
    height: 41,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  }
};

const opts = {
  height: '100%',
  width: '100%',

  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};
