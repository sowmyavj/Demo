import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  primary: {
    color: '#3EA8F4',
  }
});

class CheckboxesGroup extends React.Component {
  state = {
    innCenter: true,
    bookingEngine: false,
    bookingDotCom: false,
    expedia: false
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    const { innCenter, bookingEngine, bookingDotCom, expedia } = this.state;
    const error = Object.values(this.state).filter(v => v).length !== 2;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">If you choose to distribute this Rate Plan to Booking.com, Expedia,
              please create the Rate Plan on external channel first and contact innRoad Support(phone #) to complete
              the mapping
          </FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={innCenter} onChange={this.handleChange('innCenter')} value="innCenter"
                color="primary" />
              }
              label="innCenter"
            />
            <FormControlLabel
              control={
                <Checkbox checked={bookingEngine} onChange={this.handleChange('bookingEngine')} value="bookingEngine" 
                color="primary"/>
              }
              label="Booking Engine"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={bookingDotCom}
                  onChange={this.handleChange('bookingDotCom')}
                  value="bookingDotCom"
                  color="primary"
                />
              }
              label="Booking.Com"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={expedia}
                  onChange={this.handleChange('expedia')}
                  value="expedia"
                />
              }
              label="Expedia"
            />
          </FormGroup>
        </FormControl>
      </div>
    );
  }
}

CheckboxesGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxesGroup);
