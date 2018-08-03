import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import { StepIcon ,StepButton } from '@material-ui/core/Stepper';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NewPlan from './NewPlan';
import RatePlanType from './RatePlanType';
import SelectChannel from './SelectChannel';
import './App.css';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8CC63F', 
    }
  }
})
const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
  stepLabel: {color: 'red',	}//	height: '29px',	width: '211px',	'font-family': 'Lato',	'font-size': '24px',	'line-height': '29px',},
});

function getSteps() {
  return ['New rate plan name', 'Select rate plan type', 'On which channnels will this rate plan be distributed?'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <NewPlan/>;
    case 1:
      return <RatePlanType/>;
    case 2:
      return <SelectChannel/>;
    default:
      return 'Unknown step';
  }
}

class VerticalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => {
            return (
              <Step key={label} >
                <StepLabel 
                icon={<i className="material-icons" >radio_button_checked</i>} color="primary">{label}</StepLabel>
                <StepContent>
                  <p>{getStepContent(index)}</p>
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        disabled={activeStep === 0}
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <p>All steps completed - you&quot;re finished</p>
            <Button onClick={this.handleReset} className={classes.button}>
              Reset
            </Button>
          </Paper>
        )}
      </div>
      </MuiThemeProvider>
    );
  }
}

VerticalLinearStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(VerticalLinearStepper);
