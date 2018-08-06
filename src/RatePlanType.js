import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3EA8F4', 
    }
  }
})

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});

class RadioButtonsGroup extends React.Component {
  state = {
    value: 'female',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend"></FormLabel>
          <RadioGroup
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}  
          >
            <FormControlLabel value="baseRatePlan" control={<Radio color="primary"/>} label="Base rate plan"   />
            <FormControlLabel value="derivedRatePlan" control={<Radio color="primary"/>} label="Derived rate plan" />
            <FormControlLabel value="packageRatePlan" control={<Radio color="primary"/>} label="Package rate plan" />
            <FormControlLabel value="intervalRatePlan" control={<Radio color="primary"/>} label="Interval rate plan" />

          </RadioGroup>
        </FormControl>
       
      </div>
      </MuiThemeProvider>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);
