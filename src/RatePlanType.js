import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const ratePlanType = {
  baseRatePlan:"Base Rate Plan",
  derivedRatePlan:"Derived Rate Plan",
  packageRatePlan:"Package Rate Plan",
  intervalRatePlan:"Interval Rate Plan"
};
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3EA8F4', 
    }
  },
  overrides: {
    MuiFormControlLabel: {
        label: {
          'height': '22px',
          'width': '140px',	
          'color': '#333333',	
          'font-family': 'Lato',	
          'font-size': '18px',	
          'line-height': '22px',
        },
    },
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
    value: '',
  };
  componentDidMount(){
    this.setState(
      {value: this.props.rateTypeSelected}
    );
  }
  handleChange = event => {
    let radioValue=event.target.value;
    this.setState({ value: radioValue });
    this.props.onRateTypeSelected(radioValue);
  };

  render() {
    const { classes } = this.props;
   // console.log("this.props.rateTypeSelected "+(this.props.rateTypeSelected === 'intervalRatePlan'));
    return (
      <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend"></FormLabel>
          <RadioGroup
            aria-label="ratePlanType"
            name="ratePlanType"
            className={classes.group}
            value={this.state.value}
            onChange={(e)=>this.handleChange(e)}  
          >
            <FormControlLabel value="baseRatePlan" control={<Radio color="primary"/>} label="Base rate plan" checked={this.state.value === 'baseRatePlan'}  />
            <FormControlLabel value="derivedRatePlan" control={<Radio color="primary"/>} label="Derived rate plan" checked={this.state.value === 'derivedRatePlan'}  />
            <FormControlLabel value="packageRatePlan" control={<Radio color="primary"/>} label="Package rate plan" checked={this.state.value === 'packageRatePlan'} />
            <FormControlLabel value="intervalRatePlan" control={<Radio color="primary"/>} label="Interval rate plan"  checked={this.state.value === 'intervalRatePlan'}  />

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
