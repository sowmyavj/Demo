import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3EA8F4', 
    }
  }
})

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    height: '40px',
    width: '404px'
  },
});

class ComposedTextField extends React.Component {
  state = {
    name: '',
  };

  handleChange = event => {
    this.setState({ name: event.target.value });
    if (this.state.name) {
      //this.props.onRatePlanNameChange(this.state.name);
      this.props.onRatePlanNameChange( event.target.value);
    }
  };
  
  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
      <div className={classes.container}>
        <FormControl className={classes.formControl} >
          {/* <InputLabel htmlFor="name-simple">Name</InputLabel> */}
          <Input id="name-simple" value={this.state.name} onChange={this.handleChange} />
        </FormControl>
      </div>
      </MuiThemeProvider>
    );
  }
}

ComposedTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComposedTextField);
