import React, { Component } from 'react';
import './App.css';
import AppWrapper from './components/Layout/AppWrapper';
import Purchase from './components/Purchase/purchase';
import Button from 'material-ui/Button';
import InputForm from './components/InputForm/InputForm';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Phone from './components/Layout/Phone';
import AltImg from './components/Layout/AltImg';
import Common from './components/NetFlix/Common';
import ortho from './orthoImage.jpg';


class App extends Component {
  render() {
    let data = {};
    return (
      <AppWrapper className="root ">
        <Grid container spacing={24}>

          <Grid item xs={12} sm={6}>
            <h1>Ryan Belke</h1>
            <h4>Portfolio and development projects</h4>
            <h6>&nbsp; &nbsp; Software Engineer &#x2022; Developer &#x2022; Creator</h6>

            <h6>&nbsp; &nbsp; Available for freelance projects</h6>
            <h6>&nbsp; &nbsp; Austin, Tx</h6>
            <hr /><br />
            <Button raised color="primary" target="_blank" href="https://www.upwork.com/freelancers/~01ff33e632680a22b2">
              Upwork profile
            </Button>
          </Grid>
          <Grid item xs={0} sm={0} lg={1} />
          <Grid item xs={12} sm={4} lg={4}>
            <img src="analytics.svg" className='icon' alt="analytics icon" />
          </Grid>
            <div className="dataSection" />
            <Grid item xs={12} sm={6} lg={3}>
              <h3>Data Forms & Submission</h3>
              <hr /><br />
              <h4>Forms are one of the most versatile and important points of interaction on the web.</h4>
            </Grid>
            <div className="smallDiv" />
          <Grid item xs={12} sm={6} lg={3}>
            <h3>Price Checker Simulation</h3>
            <hr /><br /><br />
            <Purchase />
          </Grid>
            <Grid item xs={12} sm={6} lg={4}>
              <h3>Contact Form</h3>
              <hr /><br /><br />
              <InputForm />
              <br /><br />
              Code for NodeMailer Backend: &nbsp;
              <code>
                <a target="_blank" href="https://github.com/ryanbelke/portfolio/blob/master/src/components/InputForm/server.js" >
                  Source </a>
              </code>
            </Grid>
          <div className="dataSection" />
          <Grid item xs={10} sm={10} lg={4}>
            <h3>Create 3D phone effect against white background using only CSS</h3>
            <hr />
            <code style={styles.code}> box-shadow: <br />inset 20px 24px 7px 1px #fff,
              <br />inset 0 -5px 20px rgba(173,186,204,.25),
              <br />0 1px 6px rgba(0,21,64,.14), 10px -10px 20px rgba(0,21,64,.15);</code>
          </Grid>
          <Grid item xs={0} sm={0} lg={1} />

            <Grid item xs={12} sm={12} lg={5}>
              <Paper>
              <div id="phone">
                  <Phone className="phone" mobile="margin-left: auto; margin-right: auto; width: 300px">
                    <AltImg src={ortho} widthPercent="98" height="450"
                            transform="rotate(180deg)" alt="google search for orthodontist" />
                  </Phone>
              </div>
            </Paper>
            </Grid>
{/*            <Grid item xs={12} sm={6} lg={12}>
              <Base data={data} />
              <div className={css.JawBoneCommon}>
                <Common data={data}/>
            </Grid>*/}
          <div className="dataSection" />
          <Grid item xs={12} sm={12} lg={12} >
            <h2 className="section-heading">Add Reviews To Your Site:</h2>
          </Grid>
          <Grid item xs={6} sm={4} lg={4}>
            <Paper>
              <div className="stars-header">
                <span className="star">&#x2605;</span>
                <span className="star">&#x2605;</span>
                <span className="star">&#x2605;</span>
                <span className="star">&#x2605;</span>
                <span className="star" >&#x2605;</span>

              </div>
              <div className="customer-info">
                <h4>Samantha A.</h4>
                <small>9/27/2017</small>
                <p>As long a long time customer, I'll never take my car in for necessary maintenance or cleanings on my own ever again. </p>
                <small>Verified Customer</small>
                <h5><Button raised color="primary" target="_blank" href="https://www.yelp.com/biz/yourtime-austin">View more on Yelp</Button></h5>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={4} lg={4}>
            <Paper>
              <div className="stars-header">
                <span className="star">&#x2605;</span>
                <span className="star">&#x2605;</span>
                <span className="star">&#x2605;</span>
                <span className="star">&#x2605;</span>
                <span className="star" >&#x2605;</span>

              </div>
              <div className="customer-info">
                <h4>Katy B.</h4>
                <small>9/27/2017</small>
                <p>As long a long time customer, I'll never take my car in for necessary maintenance or cleanings on my own ever again. </p>
                <small>Verified Customer</small>
                <h5><Button raised color="primary" target="_blank" href="https://www.yelp.com/biz/yourtime-austin">View more on Yelp</Button></h5>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={6} sm={4} lg={4}>
            <Paper>
              <div className="stars-header">
                <span className="star">&#x2605;</span>
                <span className="star">&#x2605;</span>
                <span className="star">&#x2605;</span>
                <span className="star">&#x2605;</span>
                <span className="star" >&#x2605;</span>

              </div>
              <div className="customer-info">
                <h4>Chris L.</h4>
                <small>9/27/2017</small>
                <p>As long a long time customer, I'll never take my car in for necessary maintenance or cleanings on my own ever again. </p>
                <small>Verified Customer</small>
                <h5><Button raised color="primary" target="_blank" href="https://www.yelp.com/biz/yourtime-austin">View more on Yelp</Button></h5>
              </div>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={12} lg={12} >
            <h2 className="section-heading">More Coming Soon</h2>
          </Grid>
        </Grid>

      </AppWrapper>
    );
  }
}
const styles = {
  code: {
    fontSize: '1.5em',
  }
}

export default App;
