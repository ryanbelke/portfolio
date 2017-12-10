import React from 'react';
import css from './css/FestivalHeader.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class MainScreen extends React.Component {
  render() {
    //Test data provided, useless class
    let festivalName, festivalLocation, festOrganizer, festDescription;
    let festDate, festURL, festImage, festHeadliners;
      festivalName = "ASOT 800";
      festivalLocation = "Utrecht, Netherlands";
      festOrganizer = "Armin van Buuren";
      festDescription = "On February 18th, the biggest Trance event in the world touches down in Utrecht again. Poised to fill out the Jaarbeurs with thumping drums and enchanting melodies, A State Of Trance will supply tens of thousands of fans with a night so unforgettable it knows no equal. Don’t miss it!";
      festDate = "February 18th, 2017";
      festURL = "www.asot.tv";
      festImage = "http://s4.hulkshare.com/song_images/original/f/1/4/f1408211ab308d1142a833aeb0dd4dba.jpg?dd=1480518058";
      festHeadliners = "Armin van Buuren, Super8 & Tab, Orjin Nielson";

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
          <img src={festImage}/>
        </div>
        {/*ENDS MEDIA CONTAINBER */}


      </div>
    );
  }
}