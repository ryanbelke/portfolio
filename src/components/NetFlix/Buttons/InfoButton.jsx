import React from 'react';

import css from '../css/FestivalHeader.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class JawBoneBase extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    let {data} = this.props;
    let festivalName, festivalLocation, festOrganizer, festDescription;
    let festDate, festURL, festImageBase, festImageFinger, festHeadliners;

    let festInfo = data.getIn(['festivalInfo', 'festival']);
    //console.log("FESTIVAL =  festivalHeader" + festInfo);

    if (festInfo === undefined) {
      return null
    } else {
      festivalName = festInfo.get('fest_name');
      festivalLocation = festInfo.get('fest_location');
      festOrganizer = festInfo.get('fest_organizer');
      festDescription = festInfo.get('fest_description');
      festDate = festInfo.get('fest_date');
      festURL = festInfo.get('fest_url');
      festImageBase = 'https://s3-us-west-2.amazonaws.com/summerfestivals-dev/festivals/images/data-';
      festImageFinger = festInfo.get('image_fingerprint') + '.';
      festHeadliners = festInfo.get('fest_headliners');
    }


    return (

      <div>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>

        </ReactCSSTransitionGroup>
        <div className={css.infoContainer}>
          <small className={css.graySpan}> {festOrganizer} presents</small>
          <h2 className={css.h2}>
            {festivalName}
            <br />
            <br />
          </h2>
          <small className={css.graySpan}> Site:</small>
          {festURL}

          <h5 className={css.h2}>
            <span className={css.graySpan}> Location: </span>{festivalLocation}
            <br />
            <span className={css.graySpan}> Date: </span> {festDate}
          </h5>
          <br />

          <small className={css.graySpan}> {festDescription}</small>
          <br /> <br />
          <small className={css.graySpan}>Headliners:</small>
          <h5 className={css.h2}>{festHeadliners}</h5>

        </div>
        {/* /INFO Container */ }

        <div className={css.mediaContainer}>
          <img src={festImageBase + festImageFinger}/>
        </div>
        {/*ENDS MEDIA CONTAINBER */}


      </div>
    );
  }
}