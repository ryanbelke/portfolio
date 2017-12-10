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
import ortho from './orthoImage.jpg';

class App extends Component {
  render() {
    return (
      <AppWrapper className="container ">
        <Grid container spacing={24}>
          <Grid item xs={12}>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h1>Ryan Belke</h1>
            <h4>Portfolio and development projects</h4>
            <h6>&nbsp; &nbsp; Available for freelance projects</h6>
            <h6>&nbsp; &nbsp; Austin, Tx</h6>
            <hr /><br />
            <Button raised color="primary" target="_blank" href="https://www.upwork.com/freelancers/~01ff33e632680a22b2">
              Upwork profile
            </Button>
          </Grid>
          <Grid item xs={12} sm={6} lg={1} />
          <Grid item xs={12} sm={6} lg={4}>
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
            <Grid item xs={12} sm={12} lg={4}>
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
          <Grid item xs={12} sm={12} lg={4}>
            <h3>Create phone outline in CSS</h3>
            <hr />
            <code style={styles.code}> box-shadow: <br />inset 20px 24px 7px 1px #fff,
              <br />inset 0 -5px 20px rgba(173,186,204,.25),
              <br />0 1px 6px rgba(0,21,64,.14), 10px -10px 20px rgba(0,21,64,.15);</code>
          </Grid>
          <Grid item xs={12} sm={0} lg={1} />

            <Grid item xs={12} sm={12} lg={5}>
              <Paper>

              <div id="phone">
                  <Phone className="phone" mobile="left: 5vw; width: 300px">
                    <AltImg src={ortho} widthPercent="98" height="450"
                            transform="rotate(180deg)" alt="google search for orthodontist" />
                  </Phone>
              </div>
            </Paper>
            </Grid>


            <Grid item xs={12} sm={6} lg={3}>
            </Grid>

          <div className="dataSection" />

          <Grid item xs={12} sm={0} lg={2} />


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
