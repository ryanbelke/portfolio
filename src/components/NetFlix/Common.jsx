import React from 'react';

import css from './css/Common.css';
import Button from 'material-ui/Button';
import _ from 'lodash';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TransitionBar from './TransitionBar';
import AfterMovie from './SectionsToShow/AfterMovie';
import MoreInfo from './SectionsToShow/MoreInfo';


export default class Common extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      selected: 'Main',
    };
  _.bindAll(this, [
    'onSelect',
    ])
}

onSelect(selector) {
  this.setState({selected: selector})
}

  render() {
    const cssTransitionGroupClassNames = {
      enter: css.elementEnter,
      enterActive: css.elementEnterActive,
      leave: css.elementLeave,
      leaveActive: css.elementLeaveActive,
    };
    let selected = this.state.selected;
    let renderNode;

    // let {data} = this.props;
    let festival = "Sample Festival Name";
    let afterMovie;
    if (festival) {
      afterMovie = "Sample After Movie"
    }
    switch(selected) {
       case "Main":
         renderNode = null;
         break;
      case "After Movie":
         renderNode = <AfterMovie movie={afterMovie} />;
        break;
      case "More Info":
        renderNode = <MoreInfo/>;
        break;
      default:
        renderNode = null;
    }
    return (
      <div id="containerDiv" className={css.containerDiv}>
        <div className={css.commonDiv}>
        <ReactCSSTransitionGroup
          transitionName={cssTransitionGroupClassNames}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {renderNode}
        </ReactCSSTransitionGroup>
      </div>
        <div className={css.subBar}>
          <ul className={css.navBar}>
            <li> <Button    label="Main"
                             style={styles.button}
                             onClick={this.onSelect.bind(this, "Main")}
                 >
              Main </Button>
              {this.state.selected==="Main" ?
                <TransitionBar display="visible"/> :
                null}
            </li>
            <li>
              <Button     label="After Movie"
                          style={styles.button}
                          onClick={this.onSelect.bind(this,"After Movie")}

              >After Movie</Button>
              <ReactCSSTransitionGroup
                transitionName={cssTransitionGroupClassNames}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}

              >
              {this.state.selected==="After Movie" ?
                <TransitionBar display="visible"/> :
                null }
              </ReactCSSTransitionGroup>

            </li>
            <li>
              <Button     label="More Info"
                           style={styles.button}
                          onClick={this.onSelect.bind(this,"More Info")}
              >More Info </Button>
              <ReactCSSTransitionGroup
                transitionName={cssTransitionGroupClassNames}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
              >
              {this.state.selected==="More Info" ?
                <TransitionBar display="visible"/> :
                null }
              </ReactCSSTransitionGroup>
            </li>
          </ul>
        </div>
      </div>

    )
  }
}

const styles = {
  button: {
    textTransform: 'uppercase',
    fontSize: 14,
    color: 'white',
  }
};