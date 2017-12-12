import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TextField from 'material-ui/TextField';

import css from './purchase.css';

class Purchase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 'submitButton',
      click: 0, price: null,
      zip: '',
      display: 'display',
      noDisplay: 'noDisplay'
    }
  }
  onSubmit = (event) => {
    event.preventDefault();
    console.log(event)
    if (this.state.click===0) {
      this.setState({ segment: 'processing', click: this.state.click+1 });
      setTimeout(() => {
        this.setState({ segment: 'done', price: '2.32', display: 'noDisplay', noDisplay: 'display', id: 'checkMark' });
      }, 2000);
    } else {
      console.log("second submit")
    }
  };

  handleChange = (event) => {
    let zip = event.target.value;
    this.setState( { zip: zip } );
  };

  handleSubmit = () => {
    //window.location.replace(`/purchase?price=${this.state.price}`)
  };
  render() {
    let currentState = this.state.segment;
    let inputNode;

    if (this.state.click===0) {
      inputNode =
        <TextField
          id="inputTel"
          type="tel"
          key={this.state.click}
          value={this.state.zip}
          onChange={this.handleChange}
          style={styles.text}
        />
    } else {
      if(this.state.segment==='done') {
        inputNode =
          <div style={styles.textField}> <h6 id="result" key={this.state.click}>{this.state.zip}</h6> <br />
            <h5 className="bigH5" >Price: ${this.state.price}</h5></div>
      }
    }
    //Staes are processing and done
    const cssTransitionGroupClassNames = {
      enter: css.elementEnter,
      enterActive: css.elementEnterActive,
      leave: css.elementLeave,
      leaveActive: css.elementLeaveActive,
    };
    return (
      <section className="PurchaseApp" style={styles.container}>
          <div>
            <div style={styles.div}>
              <h4>Last Purchase Price:</h4>
              <hr />
              <h4>$2.24</h4>
              <p className="h5">for zip code: 78751</p>
              <h5 className="bigH5" style={styles.green}>Find your price:</h5>
              <hr />
              <br />
              <div style={styles.center}>
                <span style={styles.center}>Zip Code</span>
              </div>
              <div style={styles.textField}>
                <ReactCSSTransitionGroup
                  transitionName='example'
                  transitionEnterTimeout={500}
                  transitionLeaveTimeout={300}>
                  {inputNode}
                </ReactCSSTransitionGroup>
              </div>
              <div style={styles.textField}>
                <button style={styles.button} id={this.state.id} className={currentState } onClick={this.onSubmit}>
                  <span>Submit</span>
                  <span>&#10004;</span>
                </button>
                <br />
                <button id='submitButton' className={this.state.noDisplay} onClick={this.handleSubmit}>
                  <span className="bigH5">BUY NOW</span>
                </button>
              </div>
            </div>
          </div>
      </section>
    )
  }
};
export default Purchase;
const styles = {
  container: { padding: 3,},
  center: { textAlign: 'center' },
  green: { color: '#26a69a' },
  div: { padding: 5, textAlign: 'center' },
  textField: { textAlign: 'center' },
  text: {
    fontSize: '16px',
    width: '50%',
    marginBottom: 20,

  },
  button: { fontSize: '1.5em' }
};

