import React, {PropTypes} from 'react';
import css from '../css/Common.css';
import FlatButton from 'material-ui/FlatButton';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TransitionBar from '../TransitionBar';


const MainButton = () => {
  const cssTransitionGroupClassNames = {
    enter: css.elementEnter,
    enterActive: css.elementEnterActive,
    leave: css.elementLeave,
    leaveActive: css.elementLeaveActive,
  };
  const styles = {
    button: {
      textTransform: 'uppercase',
      fontSize: '1.7vw',
      color: 'white',
    }
  };

    return (
      <div>

        <div className={css.subBar}>
         <FlatButton label="Main"
                             style={styles.button}
                             onClick={this.onSelect.bind(this, "Main")}

            />
              <ReactCSSTransitionGroup
                transitionName={cssTransitionGroupClassNames}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}

              >
                {this.state.selected==="Main" ?
                  <TransitionBar display="visible"/> :
                  null}
              </ReactCSSTransitionGroup>




        </div>

      </div>

    )

};
export default MainButton;
