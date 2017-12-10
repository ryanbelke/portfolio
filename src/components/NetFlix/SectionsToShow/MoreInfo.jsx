import React from 'react';
import css from '../css/Common.css';

const JawMoreInfo = () => {

  return (
    <div style={styles.div}>

        <div className={css.infoC} style={styles.infoContainer}>
          <h1>Check out all this extra info</h1>
          <h1>Check out all this extra info</h1>
          <h1>Check out all this extra info</h1>
          <h1>Check out all this extra info</h1>
          <h1>Check out all this extra info</h1>
        </div>
        {/* /INFO Container */ }

        <div style={styles.mediaContainer}>

        </div>
        {/*ENDS MEDIA CONTAINBER */}


      </div>
  )
};

const styles = {
  div: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',

  },
  mediaContainer: {
    height: '100%',
    zIndex: -2,
    display: 'inline-block',
    position: 'absolute',
    right: 0,
    width: '50%',
    top: 0,
  },
  infoContainer: {
    padding: '5px 15px 5px 5px',
    height: '100%',
    width: '50%',
    display: 'inline-block',
    zIndex: 2,
    color: 'white',
    left: 0,
    position: 'absolute',


  }

};
export default JawMoreInfo;