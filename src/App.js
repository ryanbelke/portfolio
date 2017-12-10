import React, { Component } from 'react';
import './App.css';
import AppWrapper from './components/Layout/AppWrapper';
import Purchase from './components/Purchase/purchase';
import Button from 'material-ui/Button';
import InputForm from './components/InputForm/InputForm';
import Grid from 'material-ui/Grid';
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
              <hr />

            </Grid>
            <div className="smallDiv" />
          <Grid item xs={12} sm={6} lg={3}>
            <h3>Contact Form</h3>
            <hr />
            Code: &nbsp;
            <code>
              <a target="_blank" href="https://github.com/ryanbelke/portfolio/blob/master/src/components/InputForm/server.js" >
                Source </a>
            </code>
            <br />
          </Grid>
            <Grid item xs={12} sm={12} lg={4}>
              <InputForm />
            </Grid>

            <Grid item xs={12} sm={6} lg={3}>
              <br />
              <br />
              <h4>Price Checker Simulation</h4>
              <br />
              <Purchase />
            </Grid>

          <div className="dataSection" />

          <Grid item xs={12} sm={0} lg={2} />


        </Grid>
{/*        <Grid container spacing={24}>
          <div className="root">
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
            <Grid item xs={12} sm={6}>
              <img src="analytics.svg" className='icon' alt="analytics icon" />
            </Grid>
          </div>
          <Grid item xs={12} sm={6}>
            <h3>Data Forms & Submission</h3>
            <hr />
            <h4>Price Checker Simulation</h4>
            <br />
          </Grid>
          <Grid item xs={12} sm={6} id='priceChecker'>
            <Purchase />
          </Grid>
        </Grid>*/}
{/*

        <div id="emailForm">
          <Grid item lg={4} md={6} sm={10} xs={6}>
            <InputForm/>
          </Grid>
          <Grid item lg={4} md={6} sm={10} xs={6}>
            <h4>Controleld Email Contact Form</h4>
          </Grid>
        </div>*/}
      </AppWrapper>
    );
  }
}

export default App;
