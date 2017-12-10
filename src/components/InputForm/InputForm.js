import React from 'react';
import TextField from 'material-ui/TextField';
import H1 from '../../components/Hs/H1';
import FlexFull from '../../components/Divs/FlexFull';
import Left from '../../components/Divs/Left';
import Right from '../../components/Divs/Right';
import Snackbar from 'material-ui/Snackbar';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Menu, { MenuItem } from 'material-ui/Menu';
import request from 'axios';
import MaskedInput from 'react-text-mask';
import Input from 'material-ui/Input';

const options = [
  'First',
  'Second',
  'Third',
];

class TextFieldForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 1,
      open: false,
      anchorEl: undefined,
      loading: false,
      snack: false,
      snackMessage: '',
      error: '',
      formData: { name: '', email: '', budget: 1, phoneNumber: '', lastName: '' },
    };
  }

  onSubmit = () => {
    const data = this.state.formData;
    this.setState({snack: true, snackMessage: "Thank you!!"});
    this.setState({
      formData: { name: '', email: '', budget: 1, phoneNumber: '', lastName: '' }
    });

    // request
    //   .post('/submit', data)
    //   .then(() => this.setState({
    //     loading: false,
    //     formData: { name: '', email: '', budget: 2, phoneNumber: '', lastName: '' },
    //     snack: true,
    //     snackMessage: 'Thank you, we will contact you',
    //   }))
    //   .catch((error) => this.setState({ error: error }));
  };

  TextMaskCustom = (props) => {
  return (
    <MaskedInput
      {...props}
      mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
};

  handleMenuItemClick = (event, index) => {
    this.setState({ formData: { budget: index }, open: false });
  };

  handleRequestClose = () => {
    this.setState({ open: false });
  };
  onChange = (propertyName, event) => {
    const formData = this.state.formData;
    formData[propertyName] = event;
    this.setState({ formData: formData });
  };
  handleClickListItem = (event) => {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  render() {

    return (
      <section id="TextFieldForm" style={styles.contact}>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={this.state.snack}
          autoHideDuration={3000}
          onRequestClose={this.handleRequestClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.snackMessage}</span>}
        />
        <Card>
          <CardContent>
            <H1 fontSize="1.0=5" noReduce weight="400" margin="5px 0px 4px 0px"
                fontFamily="'Lato', sans-serif" primary="#414141" lineHeight="3" >
              Hit me with that info
            </H1>
            <FlexFull noPadding noMargin>
              <Left three noPadding className="left">
              <TextField
                id="name"
                label="First Name"
                placeholder="First Name"
                className="TextField"
                value={this.state.formData.name}
                onChange={(event) => this.onChange.bind(this, 'name')(event.target.value)}
                style={styles.TextField}
              />
              </Left>
              <Right noPadding quarter >
                <span>{this.state.formData.name}</span>
              </Right>
            </FlexFull>

            <FlexFull noPadding noMargin>
              <Left three noPadding>
            <TextField
              id="Lname"
              label="Last Name"
              placeholder="name"
              className="TextField"
              value={this.state.formData.lastName}
              onChange={(event) => this.onChange.bind(this, 'lastName')(event.target.value)}
              style={styles.TextField}
            />
              </Left>
              <Right noPadding quarter  >
                <span> {this.state.formData.lastName}</span>
              </Right>
          </FlexFull>
            <br />
            <FlexFull noPadding noMargin>
              <Left half noPadding>
              <div style={styles.list}>
                <List>
                  <ListItem
                    button
                    aria-haspopup="true"
                    aria-controls="lock-menu"
                    aria-label={this.state.formData.budget}
                    onClick={this.handleClickListItem}
                    style={styles.list}
                  >
                    <span style={styles.span}>&#x272a;</span>

                    <ListItemText
                      value={options[this.state.formData.budget]}
                      secondary={options[this.state.formData.budget]}
                    />
                  </ListItem>
                </List>
              </div>
              <Menu
                id="lock-menu"
                anchorEl={this.state.anchorEl}
                open={this.state.open}
                onRequestClose={this.handleRequestClose}
                MenuListProps={styles.selector}
              >
                {options.map((option, index) =>
                  <MenuItem
                    key={option}
                    selected={index === this.state.formData.budget}
                    onClick={(event) => this.handleMenuItemClick(event, index)}
                  >
                    {option}
                  </MenuItem>
                )}
              </Menu>
              </Left>
              <Right quarter noPadding>
                <h5>selection: </h5>
                <span style={styles.font}> {this.state.formData.budget}</span>
              </Right>
            </FlexFull>
            <FlexFull noPadding noMargin>
              <Left flex=".80" noPadding>
              <TextField
                id="email"
                label="Email"
                placeholder="email"
                className="TextField"
                value={this.state.formData.email}
                onChange={(event) => this.onChange.bind(this, 'email')(event.target.value)}
                style={styles.TextField}
              />
              </Left>
              <Right quarter noPadding>
                <span> {this.state.formData.email}</span>
              </Right>
            </FlexFull>
            <FlexFull noPadding noMargin>
              <Left half noPadding>
                <br />
                <label>Phone Number</label>
              <Input
                id="phone"
                placeholder="phone"
                label="Number"
                inputComponent={this.TextMaskCustom}
                className="TextField"
                value={this.state.formData.phoneNumber}
                onChange={(event) => this.onChange.bind(this, 'phoneNumber')(event.target.value)}
                style={styles.TextField}
              />
              </Left>
              <Right quarter noPadding>
                <span> {this.state.formData.phoneNumber}</span>
              </Right>
            </FlexFull>
          </CardContent>
          <CardActions>
            <div style={styles.div}>
              <Button onClick={this.onSubmit} raised color="primary" style={styles.button}>SEND IT</Button>
            </div>
          </CardActions>
        </Card>
      </section>
    );
  }
}
const styles = {
  TextField: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 0,
    fontSize: '1.0em',
    padding: 0,
    color: '#0D47A1',
    width: '80%',
  },
  emailField: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 0,
    fontSize: '1.0em',
    padding: 0,
    color: '#0D47A1',
    width: '100%',
  },
  selector: {
    width: 100,
    height: 50,
  },
  button: {
    fontSize: '1.0em',
    width: 150,
    marginRight: 'auto',
  },
  contact: {
    width: '90%',
  },
  list: {
    padding: 0,
    fontSize: 20,
  },

  div: {
    margin: '0 auto',
    marginBottom: 5,
  },
  span: {
    color: '#0D47A1',
  },
};

// Wrap the component to inject dispatch and state into it
export default TextFieldForm;
